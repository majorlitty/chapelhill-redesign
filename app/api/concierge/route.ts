import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_INSTRUCTION = `You are the Chapelhill Private Client Director & Civil Engineering Advisor for Chapelhill Multicompany International, an elite real estate development and civil engineering firm in Lagos, Nigeria.

### Core Objectives:
1. **Contextual Portfolio Guidance**: Instantly answer visitor questions regarding our active developments, pricing tiers, payment installment plans, and construction timelines with total accuracy.
2. **Open-Ended Prospect Qualification**: Rather than presenting rigid forms, engage visitors naturally and courteously to qualify their needs:
   - **Budget Tier**: (e.g., ₦45M–₦85M entry luxury, ₦200M–₦250M prime Lekki corridor, or custom bespoke construction).
   - **Property Type & Intent**: (Immediate personal residency, rental/short-let cashflow, off-plan capital growth, or turnkey construction on private land).
   - **Timeline**: (Immediate handover vs. 6–12 months off-plan installment horizon).
3. **Seamless Handoff**: Once a prospect expresses strong interest, asks to inspect, or is qualified, invite them to connect directly with our Senior Development Directors via WhatsApp or book a private VIP site consultation.

### Tone & Demeanor:
- **Refined, articulate, warm, and discreet.** Embody the poise of a senior luxury private client advisor.
- Speak in polished, clear English with professional mastery of Nigerian real estate corridors (Lekki Phase 1, Abijo GRA, Ogudu GRA, Ibeju-Lekki, Epe).
- Be concise (2 to 4 concise paragraphs maximum per response). Use clean formatting, bold key terms, and bullet points where helpful.
- Never use robotic conversational filler or generic AI disclaimers.

### Verified Portfolio Knowledge:
1. **Ivy Heights (Lekki Phase 1)**:
   - *Status*: Ongoing off-plan construction • Delivery Q4 2026.
   - *Architecture*: 5-storey contemporary luxury mid-rise residential enclave.
   - *Units & Pricing*:
     - 2-Bedroom Luxury Apartments: ₦200,000,000 (off-plan rate).
     - 3-Bedroom Penthouses/Apartments: ₦250,000,000 (off-plan rate).
   - *Payment Plan*: Flexible 8-month milestone plan with a 50% initial commitment.
   - *Specifications*: Residents’ lounge, fully equipped fitness gym, children's play area, landscaped atrium courtyard, 24/7 concierge, dual backup power with dedicated transformer, high-speed elevator, multicar reserved parking.
   - *Title*: Governor’s Consent / Clean unencumbered title.

2. **Ivy Homes Abijo GRA**:
   - *Status*: 100% Completed • Keys ready for immediate allocation & physical handover.
   - *Location*: Abijo GRA, Lekki Axis (the only government-designated GRA along the Lekki corridor, 3 mins to Lekki-Epe Expressway, 30 mins to Dangote Refinery / Free Trade Zone).
   - *Units & Pricing*:
     - 1-Bedroom Luxury Flat: Starting from ₦45,000,000.
     - 2-Bedroom Luxury Flat: Starting from ₦65,000,000.
     - 3-Bedroom Luxury Flat: Starting from ₦85,000,000.
   - *Payment Plan*: Outright purchase or flexible 3-month completion structure.
   - *Specifications*: 24/7 power backed by fully installed solar-inverter system, industrial high-yield potable borehole, 12 dedicated parking bays, paved interlocked roads, central flood-proof drainage, 24/7 gated security.
   - *Rental / Short-let Yield*: Projected 12%–15% annual yield; high demand corridor for executives.

3. **Ogudu GRA Penthouse**:
   - *Status*: Completed • Fully Sold Out.
   - *VIP Waitlist*: Actively registering verified investors for secondary market resales or upcoming mainland developments.
   - *Details*: 4-Bedroom penthouse with private panoramic terrace, valued at ₦350,000,000.

4. **Beachwood Lagos**:
   - *Status*: Ongoing Construction • Direct Client Bespoke Commission.
   - *Location*: Beachwood Estate, Ibeju-Lekki Axis.
   - *Details*: 5-Bedroom semi-detached luxury duplex with rooftop garden terrace, private staff BQ, independent borehole, solar backup, and 4–6 car parking.

5. **Royal Gardens Estate (Ajah/Lekki)**:
   - *Status*: Completed bespoke luxury residential duplexes.

6. **Turnkey Civil Engineering & Construction Services**:
   - For clients with personal land parcels across Lagos or Abuja: Architectural concept design, structural engineering calculations, C25/30 reinforced concrete execution, regulatory town planning approvals, and milestone-based project management.

### Contact & Operational Desks:
- **Headquarters**: Chapelhill Multicompany International, Lagos, Nigeria.
- **WhatsApp Concierge Desk**: +234 903 913 0207
- **Phone / Direct Line**: +234 803 286 5488
- **Email**: info@chapelhillmulticompany.com / sales@chapelhillmulticompany.com
- **Inspections**: Conducted Monday through Saturday by confirmed private appointment.`;

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error: 'Gemini API key is not configured on the server.',
          text: 'Welcome to Chapelhill Multicompany International. Our digital concierge is momentarily connecting to our advisory service. Please reach out to our Senior Advisory Desk directly on WhatsApp at +234 903 913 0207.',
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
      
      if (latestUserMsg.includes('ivy height') || latestUserMsg.includes('lekki')) {
        replyText = `**Ivy Heights (Lekki Phase 1)** is our premier 5-storey luxury mid-rise development situated in a prime residential corridor of Lekki Phase 1.\n\n- **2-Bedroom Luxury Residences**: ₦200,000,000 (off-plan pricing)\n- **3-Bedroom Residences & Penthouses**: ₦250,000,000\n- **Payment Structure**: 50% initial commitment with the balance structured across an 8-month milestone plan\n- **Infrastructure**: High-speed elevator, 24/7 dual backup power with dedicated transformer, residents' lounge, fully equipped gym, and reserved parking.\n\nWould you like to connect directly with our Senior Development Director on WhatsApp or schedule a private site walkthrough?`;
      } else if (latestUserMsg.includes('abijo') || latestUserMsg.includes('ivy home')) {
        replyText = `**Ivy Homes Abijo GRA** is 100% completed and ready for immediate physical key allocation.\n\n- **1-Bedroom Luxury Flat**: Starting from ₦45,000,000\n- **2-Bedroom Luxury Flat**: Starting from ₦65,000,000\n- **3-Bedroom Luxury Flat**: Starting from ₦85,000,000\n- **Infrastructure**: 24/7 solar-inverter power system, industrial high-yield borehole, 12 dedicated parking bays, paved interlocked roads, and flood-proof drainage.\n\nAre you looking at this for immediate personal residency or as a high-yield rental/short-let investment?`;
      } else if (latestUserMsg.includes('payment') || latestUserMsg.includes('installment') || latestUserMsg.includes('plan')) {
        replyText = `Chapelhill offers structured, milestone-based acquisition frameworks tailored to your liquidity preferences:\n\n- **Ivy Heights Lekki Phase 1 (Off-Plan)**: 50% initial commitment, balance spread across an 8-month construction milestone schedule.\n- **Ivy Homes Abijo GRA (Completed)**: Outright purchase or flexible 3-month completion structure with immediate physical possession.\n- **Turnkey Private Builds**: Milestone valuations linked to geotechnical foundations, structural slab casting, and finishes.\n\nWhat investment timeframe and price range best aligns with your objectives?`;
      } else if (latestUserMsg.includes('construct') || latestUserMsg.includes('bespoke') || latestUserMsg.includes('land') || latestUserMsg.includes('turnkey')) {
        replyText = `For private land owners across Lagos and Abuja, Chapelhill delivers comprehensive turnkey civil engineering:\n\n- **Structural Excellence**: C25/30 reinforced concrete, soil mechanics surveys, and bespoke architectural drafts.\n- **Regulatory Clearance**: Governor’s Consent, Lands Bureau documentation, and state building approvals.\n- **Turnkey Delivery**: Complete civil construction management with transparent milestone reporting.\n\nWould you like to schedule an introductory project consultation with our engineering directors?`;
      } else {
        replyText = `Welcome to **Chapelhill Multicompany International**. We are happy to assist you with our active developments across Lagos:\n\n- **Ivy Heights Lekki Phase 1**: Luxury 5-storey mid-rise from ₦200M (off-plan 8-month installment plan).\n- **Ivy Homes Abijo GRA**: 100% completed luxury flats from ₦45M ready for immediate key handover.\n- **Bespoke Turnkey Construction**: Full architectural & civil engineering delivery on personal land.\n\nWhat property type, budget tier, or location corridor best fits your current timeline?`;
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
        text: 'I apologize for the momentary interruption. Our Senior Advisory Desk is immediately accessible via WhatsApp at +234 903 913 0207 to provide live property allocations, pricing schedules, and private viewing arrangements.',
        suggestedActions: {
          whatsapp: true,
          booking: true,
        },
      },
      { status: 200 } // Return 200 with fallback text so frontend gracefully handles and displays the advisory message
    );
  }
}
