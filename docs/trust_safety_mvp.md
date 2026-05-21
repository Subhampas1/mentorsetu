# Trust & Safety MVP

## 1) Verification checklist for retired teachers

### Required evidence
To be eligible for account verification as a retired teacher, applicants must provide:

- **Government-issued photo ID** (passport, driver's license, or national ID) that matches the legal name on the account.
- **Past institution proof** showing a teaching role at a recognized educational institution, such as:
  - Employment verification letter from prior school/district.
  - Retirement letter or pension statement naming the institution.
  - Archived staff directory listing plus corroborating document.
  - Tax or payroll record with institution name and role title.

### Verification checklist (operations)
Reviewers should confirm all items below before approval:

1. Identity document is legible, current enough to establish identity, and unaltered.
2. Name on ID matches account profile (or approved legal-name variance is documented).
3. Institution proof clearly shows:
   - Institution name,
   - Applicant name,
   - Teaching/education role,
   - Timeframe indicating prior employment.
4. Institution appears legitimate (public/private school, accredited college, district, or equivalent).
5. No indicators of document tampering, synthetic identity, or reused artifacts.
6. Any mismatch, ambiguity, or fraud signal is escalated to secondary review.

### Manual approval workflow
1. **Submission received** → System marks account as `verification_pending`.
2. **Tier 1 reviewer check** → Validate checklist and record decision notes.
3. **Outcome:**
   - **Approve**: account marked `verified_retired_teacher`.
   - **Reject**: account marked `verification_rejected` with reason code.
   - **Escalate**: forward to Tier 2 reviewer for adjudication.
4. **Tier 2 adjudication** (if escalated) → final decision with rationale.
5. **User notification** sent with status and, if rejected, resubmission guidance.
6. **Audit event logged** for every state transition and reviewer action.

---

## 2) Profile moderation rules

Profiles must represent users truthfully and avoid abuse. Enforce the following:

### Disallowed content/behavior
- **Spam**
  - Repetitive promotional text, links, or keyword stuffing.
  - Contact-harvesting behavior or directing users off-platform for unrelated sales.
- **Impersonation**
  - Pretending to be another real person, educator, institution, or platform staff.
  - Using copied photos/biographies intended to mislead identity.
- **Misleading claims**
  - False credentials (degrees, certifications, awards, affiliations).
  - Inflated experience claims that materially misrepresent background.
  - Claims of platform endorsement not explicitly granted.

### Enforcement actions
- First minor violation: warning + required profile edits.
- Repeated or material violation: profile takedown until corrected.
- Severe deception (e.g., deliberate impersonation): immediate suspension pending investigation.

---

## 3) In-session and post-session reporting flow

### In-session reporting
1. User clicks **Report** within active session UI.
2. User selects category (harassment, scam, impersonation, unsafe conduct, other).
3. Optional note + optional evidence attachment.
4. System creates high-priority ticket and snapshots session metadata.
5. Safety queue triages for immediate intervention when risk is active.

### Post-session reporting
1. User opens past session history and selects **Report session**.
2. User selects reason, provides details, and submits.
3. System attaches transcript references, timestamps, and prior flags.
4. Moderator reviews and determines outcome.
5. User receives confirmation and outcome notification when investigation closes.

### Shared requirements
- Block duplicate spam reports while allowing updated evidence.
- Provide clear expected response window in confirmation message.
- Route imminent harm indicators to expedited queue.

---

## 4) Suspension and ban criteria

### Temporary suspension (time-bound)
Apply temporary suspension when behavior is harmful but potentially remediable:

- Repeated spam after warning.
- Misleading claims not corrected after notice.
- Non-severe policy violations during sessions.
- Refusal to comply with moderation requests.

**Typical durations:** 24 hours, 7 days, or 30 days based on severity/repeat history.

### Permanent ban
Apply permanent ban when trust/safety risk is severe or persistent:

- Confirmed impersonation with intent to deceive.
- Fraudulent verification submissions or forged documents.
- Repeated serious violations after prior suspensions.
- Severe abuse, exploitation, or credible threats.

### Decision controls
- Require documented rationale and evidence references for every suspension/ban.
- Permanent bans should require senior moderator or dual-review sign-off.

---

## 5) Audit trail requirements in admin panel

Admin tooling must retain an immutable moderation and verification history with:

### Required fields per event
- Event type (verification review, profile action, report outcome, suspension, ban).
- Target account ID.
- Acting admin/moderator ID.
- Decision (`approved`, `rejected`, `escalated`, `suspended`, `banned`, etc.).
- Reason code(s) and free-text rationale.
- Timestamp (UTC).
- Linked evidence references (document IDs, report IDs, session IDs).
- Prior and new account state.

### Approval/rejection traceability
For every verification decision, store:

- **Who approved/rejected** (reviewer identity).
- **When approved/rejected** (exact timestamp).
- Any escalation chain and final adjudicator.

### Operational requirements
- Audit entries must be append-only (no destructive edits).
- Any correction must create a new superseding event.
- Audit logs should be exportable for compliance review.
- Access to audit logs should be role-restricted and itself auditable.
