# UI Flows: Scheduled Sessions (30 / 60 Minutes)

## Flow A: Book a Scheduled Session

1. **Choose Session Type**
   - Display only:
     - 30-minute scheduled session
     - 60-minute scheduled session
   - Do **not** display “Instant call”.

2. **Select Calendar Slot (Required)**
   - Show teacher availability calendar.
   - Require slot selection before enabling Continue.

3. **Review & Confirm (Required)**
   - Show duration, selected slot, timezone, and pricing summary.
   - Require explicit confirmation action.

4. **Booking Confirmed**
   - Create booking record.
   - Auto-generate Google Meet link.
   - Show confirmation screen with Meet link and next steps.

## Flow B: Teacher Booking Response SLA

1. Teacher receives booking request notification.
2. Teacher accepts or declines within **X hours**.
3. If accepted:
   - Booking remains confirmed and Meet link stays active.
4. If declined:
   - Learner is prompted to choose a different slot.
5. If no response by SLA deadline:
   - System marks booking request as timed out.
   - Learner receives SLA timeout notification and rebooking CTA.

## UX Rules

- Calendar slot selection is mandatory; no bypass path.
- Confirmation step is mandatory; no auto-booking on slot click.
- Meet link is generated only after successful confirmation.
- Instant call entry points are removed from navigation, booking pages, and CTAs.

## Reintroduction Rule for Instant Calls

Do not re-enable instant calls until:

- Target booking volume is achieved, and
- No-show rates are sustainably low against defined threshold.
