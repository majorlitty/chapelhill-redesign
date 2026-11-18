import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_INSTRUCTION = `You are the Private Client Advisor for ChapelHill Multicompany Limited, a property development, construction, remodeling, and maintenance firm in Lagos, Nigeria.

### Core Objectives:
1. **Contextual Portfolio Guidance**: Instantly answer visitor questions regarding our active developments, pricing tiers, payment installment plans, and construction services with total accuracy.
2. **Open-Ended Prospect Qualification**: Rather than presenting rigid forms, engage visitors naturally and courteously to qualify their needs:
   - **Budget Tier**: (e.g., ₦50M–₦75M Abijo GRA apartments, approved current schedule on request for IVY Heights Ikate, Lekki Phase 1, or bespoke construction).
   - **Property Type & Intent**: (Immediate personal residency, rental/short-let cashflow, off-plan acquisition, or turnkey construction on private land).
   - **Timeline**: (Immediate handover vs. proposed 24-month off-plan construction horizon).
3. **Seamless Handoff**: Once a prospect expresses strong interest, asks to inspect, or is qualified, invite them to connect directly with our team via WhatsApp (+234 803 286 5488) or book a site consultation/inspection.

### Tone & Demeanor:
- **Refined, articulate, warm, and discreet.** Embody the poise of a senior luxury private client advisor.
- Speak in polished, clear English with professional mastery of Nigerian real estate corridors (Ikate / Lekki Phase 1, Abijo GRA, Ogudu GRA, Ibeju-Lekki, Epe).
- Be concise (2 to 4 concise paragraphs maximum per response). Use clean formatting, bold key terms, and bullet points where helpful.
- Never use robotic conversational filler or generic AI disclaimers.

### Verified Portfolio Knowledge:
1. **IVY Heights — Ikate, Lekki Phase 1, Lagos**:
   - *Project Type*: Residential apartment development.
   - *Status*: Pre-construction / off-plan (per management-confirmed status). Do NOT describe it as already completed or structurally finished.
   - *Proposed Construction Period*: Proposed 24 months (subject to formal offer terms, statutory approvals, and management confirmation).
   - *Approved Unit Types*: Two-bedroom apartments and three-bedroom apartments.
   - *Payment Options*: 12-month deposit-based plan, 18-month deposit-based plan, and a management-approved 24-month zero-initial-deposit plan.
   - *CRITICAL PRICING & CONTRACT RULE*: Do NOT quote fixed prices, deposit percentages, or monthly instalment amounts for IVY Heights (do not mention old or historical naira figures), because management has not published a finalized current price schedule for general automated quotation. Instead, explain the approved 2-bedroom and 3-bedroom options and the 12-month, 18-month, and 24-month payment pathways, and invite the visitor to request the current management-approved pricing sheet via our inquiry form or WhatsApp (+234 803 286 5488).
   - *Zero-Deposit Qualification*: Always clarify that the 24-month zero-initial-deposit option does not mean there are no contractual obligations or no payment due at signing; all terms remain subject to signed offer documentation and management approval.
   - *Visuals Qualification*: Clarify that architectural renderings are illustrative concepts and not photographs of completed units.

2. **Ivy Homes Abijo GRA**:
   - *Status*: Completed • Ready for immediate allocation & physical handover.
   - *Location*: Abijo GRA, Lekki Axis (3 mins to Lekki-Epe Expressway, 30 mins to Dangote Refinery, 45 mins to Victoria Island).
   - *Units & Pricing*:
     - 1-Bedroom Flat: ₦50,000,000 ($34,774).
     - 2-Bedroom Flat: ₦65,000,000 ($45,207).
     - 3-Bedroom Flat: ₦75,000,000 ($52,161).
   - *Payment Plan*: Outright purchase or flexible installmental payment plans available.
   - *Specifications*: 24/7 power backed by fully installed solar system, potable water, 12 dedicated parking spaces, interlocked roads, drainage, and security.

3. **Ogudu GRA Project**:
   - *Status*: Completed • Sold Out.
   - *Waitlist*: Register interest for upcoming mainland developments or secondary inquiries.
   - *Details*: 5-bedroom penthouse residence with private terrace and service quarters.

4. **Beachwood Lagos**:
   - *Status*: Ongoing Construction • Direct Client Development.
   - *Location*: Beachwood Estate, Ibeju-Lekki Axis.
   - *Details*: 5-bedroom semi-detached duplex with rooftop terrace, private staff BQ, borehole, solar backup, and parking.

5. **Royal Gardens Estate (Lekki-Ajah)**:
   - *Status*: Completed 5-bedroom detached luxury duplexes with BQ.

6. **Our Four Official Service Divisions**:
   - **A. Property Development and Sales**: Development and sale of residential and other approved real estate projects, including off-plan developments.
   - **B. Construction and Project Management**: Construction services for individuals and corporate clients, project coordination, renovations, remodelling and related construction solutions.
   - **C. Property and Facility Management**: Property maintenance, facility management, building repairs, infrastructure maintenance and other approved management services.
   - **D. Joint Ventures and Investment Partnerships**: Engagement with landowners, investors, developers, financial institutions and other strategic partners on suitable property development opportunities.

### Contact & Operational Desks:
- **Headquarters**: ChapelHill Multicompany Limited, Block B4 357, HFP Shopping Complex, Abraham Adesanya Junction, Lekki, Lagos State, Nigeria.
- **WhatsApp & Phone Desk**: +234 803 286 5488
- **Email**: chapelhillmulticompanyltd@gmail.com
- **Inspections**: Conducted Monday through Saturday by appointment.`;

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error: 'Gemini API key is not configured on the server.',
          text: 'Welcome to ChapelHill Multicompany Limited. Our digital concierge is momentarily connecting to our advisory service. Please reach out to our advisory desk directly on WhatsApp at +234 803 286 5488.',
        },
        { status: 500 }
      );
    }

    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid messages array provided.' },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    // Format message history for @google/genai SDK
    // The Gemini generateContent contents array requires the first turn to be from 'user'.
    const conversationTurns: Array<{ role: 'user' | 'model'; parts: [{ text: string }] }> = [];

    let hasStartedWithUser = false;
    for (const msg of messages) {
      if (typeof msg.content !== 'string' || !msg.content.trim()) continue;

      if (!hasStartedWithUser) {
        if (msg.role === 'user') {
          hasStartedWithUser = true;
          conversationTurns.push({
            role: 'user',
            parts: [{ text: msg.content.trim() }],
          });
        }
        // Skip leading greeting messages from model
      } else {
        const role = msg.role === 'model' || msg.role === 'assistant' ? 'model' : 'user';
        // Avoid identical consecutive roles if any
        const lastTurn = conversationTurns[conversationTurns.length - 1];
        if (lastTurn && lastTurn.role === role) {
          lastTurn.parts[0].text += `\n\n${msg.content.trim()}`;
        } else {
          conversationTurns.push({
            role,
            parts: [{ text: msg.content.trim() }],
          });
        }
      }
    }

    if (conversationTurns.length === 0) {
      return NextResponse.json(
        { error: 'No user messages found in history.' },
        { status: 400 }
      );
    }

    const candidateModels = ['gemini-3.1-flash-lite', 'gemini-3.8-flash'];
    let replyText = '';

    for (const modelName of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: conversationTurns,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
          },
        });
        if (response.text) {
          replyText = response.text;
          break;
        }
      } catch (genErr) {
        console.warn(`Model ${modelName} unavailable, attempting fallback:`, genErr instanceof Error ? genErr.message : genErr);
      }
    }

    if (!replyText) {
      const latestUserMsg = conversationTurns[conversationTurns.length - 1]?.parts[0]?.text.toLowerCase() || '';
      
      if (latestUserMsg.includes('ivy height') || latestUserMsg.includes('lekki') || latestUserMsg.includes('ikate')) {
        replyText = `**IVY Heights, Ikate, Lekki Phase 1, Lagos** is our key pre-construction / off-plan residential apartment development featuring **2-bedroom and 3-bedroom apartment** options.\n\n- **Status & Proposed Timeline**: Pre-construction / off-plan with a proposed **24-month construction period** (subject to formal offer terms and management confirmation).\n- **Payment Options**: **12-month deposit-based plan**, **18-month deposit-based plan**, and a management-approved **24-month zero-initial-deposit plan**.\n- **Important Terms**: Zero initial deposit does not remove contractual obligations or payments due at signing, and all pricing and terms are issued via the latest management-approved offer sheet. Architectural renderings are illustrative concepts and do not portray completed units.\n\nWould you like to request the approved pricing schedule or schedule a site inspection on WhatsApp (+234 803 286 5488)?`;
      } else if (latestUserMsg.includes('abijo') || latestUserMsg.includes('ivy home')) {
        replyText = `**Ivy Homes Abijo GRA** is completed and ready for immediate physical handover.\n\n- **1-Bedroom Flat**: ₦50,000,000 ($34,774)\n- **2-Bedroom Flat**: ₦65,000,000 ($45,207)\n- **3-Bedroom Flat**: ₦75,000,000 ($52,161)\n- **Features**: 24/7 solar-backed power, fitted kitchens, 12 dedicated parking spaces, interlocked roads, drainage, and security.\n\nWould you like to schedule an inspection or receive more details?`;
      } else if (latestUserMsg.includes('payment') || latestUserMsg.includes('installment') || latestUserMsg.includes('plan')) {
        replyText = `ChapelHill Multicompany Limited offers structured payment options across our developments:\n\n- **IVY Heights (Ikate, Lekki Phase 1 — Pre-Construction / Off-Plan)**: 12-month deposit-based plan, 18-month deposit-based plan, and a management-approved 24-month zero-initial-deposit option (subject to signed offer, signing obligations, and management approval; current approved schedule issued on request).\n- **Ivy Homes Abijo GRA (Completed)**: Outright purchase or flexible installmental payment plans.\n- **Direct Client Construction**: Stage-by-stage milestone valuations tailored to your build schedule.\n\nWhich development or payment option would you like our advisory team to prepare an official offer sheet for?`;
      } else if (
        latestUserMsg.includes('joint') ||
        latestUserMsg.includes('venture') ||
        latestUserMsg.includes('partner') ||
        latestUserMsg.includes('invest') ||
        latestUserMsg.includes('institution')
      ) {
        replyText = `Under **Joint Ventures and Investment Partnerships**, ChapelHill Multicompany Limited engages with landowners, investors, developers, financial institutions, and strategic partners on suitable property development opportunities.\n\nWould you like to schedule an introductory partnership discussion or connect directly with our team on WhatsApp (+234 803 286 5488)?`;
      } else if (
        latestUserMsg.includes('construct') ||
        latestUserMsg.includes('bespoke') ||
        latestUserMsg.includes('land') ||
        latestUserMsg.includes('turnkey') ||
        latestUserMsg.includes('renovat') ||
        latestUserMsg.includes('remodel')
      ) {
        replyText = `Through **Construction and Project Management**, ChapelHill Multicompany Limited delivers construction services for individuals and corporate clients, project coordination, renovations, remodelling, and related construction solutions.\n\nWe also offer **Property and Facility Management** for ongoing maintenance, building repairs, and infrastructure upkeep. Would you like to schedule a consultation?`;
      } else {
        replyText = `Welcome to **ChapelHill Multicompany Limited**. We operate across four core divisions:\n\n- **Property Development and Sales**: Residential and approved real estate projects, including off-plan developments (e.g., IVY Heights, Ikate, Lekki Phase 1, Lagos and Ivy Homes Abijo GRA).\n- **Construction and Project Management**: Individual & corporate construction, coordination, renovations, and remodelling.\n- **Property and Facility Management**: Maintenance, building repairs, and infrastructure care.\n- **Joint Ventures and Investment Partnerships**: Collaborations with landowners, investors, developers, and financial institutions.\n\nWhich service or development would you like to explore?`;
      }
    }

    // Check if the reply suggests human handoff or booking
    const lowerReply = replyText.toLowerCase();
    const shouldSuggestBooking =
      lowerReply.includes('book') ||
      lowerReply.includes('inspect') ||
      lowerReply.includes('walkthrough') ||
      lowerReply.includes('consultation') ||
      lowerReply.includes('viewing') ||
      lowerReply.includes('schedule');

    const shouldSuggestWhatsApp =
      lowerReply.includes('whatsapp') ||
      lowerReply.includes('senior advisor') ||
      lowerReply.includes('director') ||
      lowerReply.includes('connect') ||
      lowerReply.includes('contact');

    return NextResponse.json({
      text: replyText,
      suggestedActions: {
        booking: shouldSuggestBooking,
        whatsapp: shouldSuggestWhatsApp,
      },
    });
  } catch (error: unknown) {
    console.error('Concierge API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown internal error';
    return NextResponse.json(
      {
        error: errorMessage,
        text: 'I apologize for the momentary interruption. Our advisory desk is immediately accessible via WhatsApp at +234 803 286 5488 to provide property information and schedule private viewings.',
        suggestedActions: {
          whatsapp: true,
          booking: true,
        },
      },
      { status: 200 } // Return 200 with fallback text so frontend gracefully handles and displays the advisory message
    );
  }
}
