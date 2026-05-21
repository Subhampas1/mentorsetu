# Product Scope: Scheduled Sessions Only

## Overview

The booking experience supports **scheduled sessions only** with two fixed durations:

1. **30-minute scheduled session**
2. **60-minute scheduled session**

## In-Scope Booking Options

- 30-minute scheduled session
- 60-minute scheduled session

## Out-of-Scope Booking Options

- **Instant call** (removed from current scope)

## Booking Requirements

All bookings must follow a scheduled flow:

1. Learner selects session duration (30 or 60 minutes).
2. Learner selects an available calendar slot.
3. Learner confirms booking details.
4. System finalizes booking and generates meeting details.

### Calendar Selection (Required)

- Booking cannot continue without selecting a calendar slot.
- Slot selection and booking confirmation are both mandatory steps.

### Meeting Link Generation

- On successful booking confirmation, system auto-generates a **Google Meet link**.
- Generated Meet link is attached to the booking record and sent in confirmations/reminders.

### Teacher Response SLA

- Teachers must accept or decline booking requests within **X hours** of request creation.
- If no teacher action is taken within X hours, the request is marked as timed out and learner is notified.
- Product/ops should configure the exact SLA value for X based on operational capacity.

## Future Scope Gate for Instant Calls

Instant calls may be reintroduced only when both conditions are consistently met:

1. Target booking volume is achieved.
2. No-show rate remains below agreed threshold.

Until these gates are met, instant calls remain disabled in product scope.
