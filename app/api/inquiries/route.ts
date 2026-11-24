import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { BUSINESS_IDENTITY } from '@/lib/seo/businessIdentity';

interface InquiryPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  notes?: string;
  property?: string;
  date?: string;
  tourType?: string;
}

const DEFAULT_RECIPIENT_EMAIL = BUSINESS_IDENTITY.contact.email;
const DEFAULT_FROM_ADDRESS = `${BUSINESS_IDENTITY.companyName} <onboarding@resend.dev>`;

const TOUR_TYPE_LABELS: Record<string, string> = {
  'in-person': 'Private In-Person Tour',
  'virtual-vip': 'Live 4K Virtual Walkthrough',
  advisory: 'Confidential Advisory Call',
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildEmailHtml(params: {
  subject: string;
  safeName: string;
  safeEmail: string;
  safePhone: string;
  safeProperty: string;
  safeDate: string;
  safeTourType: string;
  safeMessage: string;
  sandboxNotice?: string;
}) {
  const {
    subject,
    safeName,
    safeEmail,
    safePhone,
    safeProperty,
    safeDate,
    safeTourType,
    safeMessage,
    sandboxNotice,
  } = params;

  const noticeBlock = sandboxNotice
    ? `
            <tr>
              <td style="padding:12px 28px;background-color:#fef3c7;border-bottom:1px solid #fde68a;font-size:12px;line-height:1.5;color:#92400e;">
                ${escapeHtml(sandboxNotice)}
              </td>
            </tr>`
    : '';

  return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${escapeHtml(subject)}</title>
        </head>
        <body style="margin:0;padding:24px;background-color:#f6f4f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#162521;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;margin:0 auto;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e7e5e4;">
            <tr>
              <td style="background-color:#461313;padding:24px 28px;border-bottom:3px solid #E5C583;">
                <p style="margin:0;font-size:11px;letter-spacing:1.6px;text-transform:uppercase;color:#E5C583;font-weight:700;">
                  ChapelHill Multicompany Limited
                </p>
                <h1 style="margin:6px 0 0;font-size:20px;line-height:1.3;color:#ffffff;font-weight:700;">
                  New Client Inquiry &amp; Viewing Request
                </h1>
              </td>
            </tr>${noticeBlock}
            <tr>
              <td style="padding:28px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;width:150px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;">
                      Full Name
                    </td>
                    <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;font-weight:600;color:#162521;">
                      ${safeName}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;">
                      Email Address
                    </td>
                    <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;color:#162521;">
                      <a href="mailto:${safeEmail}" style="color:#461313;text-decoration:underline;font-weight:600;">${safeEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;">
                      Phone Number
                    </td>
                    <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;font-weight:600;color:#162521;">
                      <a href="tel:${safePhone}" style="color:#162521;text-decoration:none;">${safePhone}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;">
                      Property / Estate
                    </td>
                    <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;font-weight:600;color:#162521;">
                      ${safeProperty}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;">
                      Preferred Date
                    </td>
                    <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;color:#162521;">
                      ${safeDate}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;">
                      Viewing Format
                    </td>
                    <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;color:#162521;">
                      ${safeTourType}
                    </td>
                  </tr>
                </table>

                <div style="margin-top:22px;padding:16px 18px;background-color:#faf8f6;border:1px solid #e7e5e4;border-radius:12px;">
                  <p style="margin:0 0 8px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#461313;">
                    Message Content
                  </p>
                  <p style="margin:0;font-size:14px;line-height:1.6;color:#162521;">
                    ${safeMessage}
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 28px;background-color:#f8fafc;border-top:1px solid #f1f5f9;font-size:12px;color:#64748b;">
                Sent via the ChapelHill Multicompany Limited website inquiry form. Reply directly to respond to ${safeName} (${safeEmail}).
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = (process.env.RESEND_API_KEY ?? '').trim();
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            'Email service is not configured yet. Please add RESEND_API_KEY to your .env.local file.',
        },
        { status: 500 }
      );
    }

    const body = (await req.json()) as InquiryPayload;

    const name = (body.name ?? '').trim();
    const email = (body.email ?? '').trim();
    const phone = (body.phone ?? '').trim();
    const rawMessage = (body.message ?? body.notes ?? '').trim();
    const property = (body.property ?? '').trim();
    const date = (body.date ?? '').trim();
    const tourTypeKey = (body.tourType ?? '').trim();
    const tourTypeLabel = TOUR_TYPE_LABELS[tourTypeKey] || tourTypeKey || 'Not specified';

    if (!name) {
      return NextResponse.json({ error: 'Please enter your full name.' }, { status: 400 });
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }
    if (!phone) {
      return NextResponse.json(
        { error: 'Please enter your phone number.' },
        { status: 400 }
      );
    }

    const messageContent =
      rawMessage || 'No additional message was provided with this inquiry.';

    const subjectProperty = property ? ` — ${property}` : '';
    const subject = `New ChapelHill Multicompany Limited Inquiry from ${name}${subjectProperty}`;

    const fromAddress = (process.env.RESEND_FROM_EMAIL ?? '').trim() || DEFAULT_FROM_ADDRESS;
    const recipientEmail =
      (process.env.RESEND_TO_EMAIL ?? '').trim() || DEFAULT_RECIPIENT_EMAIL;

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeProperty = escapeHtml(property || 'General Portfolio Inquiry');
    const safeDate = escapeHtml(date || 'Flexible');
    const safeTourType = escapeHtml(tourTypeLabel);
    const safeMessage = escapeHtml(messageContent).replace(/\n/g, '<br />');

    const html = buildEmailHtml({
      subject,
      safeName,
      safeEmail,
      safePhone,
      safeProperty,
      safeDate,
      safeTourType,
      safeMessage,
    });

    const text = [
      'NEW CHAPELHILL MULTICOMPANY LIMITED CLIENT INQUIRY',
      '=============================',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Property / Estate: ${property || 'General Portfolio Inquiry'}`,
      `Preferred Date: ${date || 'Flexible'}`,
      `Viewing Format: ${tourTypeLabel}`,
      '',
      'Message:',
      messageContent,
    ].join('\n');

    const resend = new Resend(apiKey);
    const primaryResult = await resend.emails.send({
      from: fromAddress,
      to: [recipientEmail],
      replyTo: email,
      subject,
      html,
      text,
    });

    if (!primaryResult.error) {
      return NextResponse.json({
        success: true,
        id: primaryResult.data?.id ?? null,
      });
    }

    // Handle Resend sandbox restriction gracefully when sending from onboarding@resend.dev
    // before a custom domain is verified at resend.com/domains.
    const errMsg = primaryResult.error.message || '';
    const sandboxEmailMatch = errMsg.match(
      /own email address\s*\(([^()\s]+@[^()\s]+)\)/i
    );
    const sandboxRecipient = sandboxEmailMatch?.[1]?.trim();

    if (
      sandboxRecipient &&
      isValidEmail(sandboxRecipient) &&
      sandboxRecipient.toLowerCase() !== recipientEmail.toLowerCase()
    ) {
      const sandboxNotice = `Resend Sandbox Delivery: Intended for ${recipientEmail}. Verify a custom domain at resend.com/domains and set RESEND_FROM_EMAIL in .env.local to send directly to ${recipientEmail}.`;
      const sandboxHtml = buildEmailHtml({
        subject,
        safeName,
        safeEmail,
        safePhone,
        safeProperty,
        safeDate,
        safeTourType,
        safeMessage,
        sandboxNotice,
      });

      const fallbackResult = await resend.emails.send({
        from: DEFAULT_FROM_ADDRESS,
        to: [sandboxRecipient],
        replyTo: email,
        subject: `[Test Delivery] ${subject}`,
        html: sandboxHtml,
        text: `${sandboxNotice}\n\n${text}`,
      });

      if (!fallbackResult.error) {
        return NextResponse.json({
          success: true,
          id: fallbackResult.data?.id ?? null,
          sandboxDeliveredTo: sandboxRecipient,
        });
      }

      return NextResponse.json(
        {
          error:
            fallbackResult.error.message ||
            'Unable to send inquiry at this time. Please try again.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        error:
          primaryResult.error.message ||
          'Unable to send inquiry at this time. Please try again.',
      },
      { status: 400 }
    );
  } catch {
    return NextResponse.json(
      { error: 'An unexpected error occurred while submitting your inquiry.' },
      { status: 500 }
    );
  }
}
