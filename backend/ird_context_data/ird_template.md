# Internal Requirement Docs (IRD)

---

## Document Control

**Docs ID:** <!-- AI: Use the exact same value as the generated filename for this document. -->
**Team / Department:** <!-- AI: Extract the team or department name from the source documents -->
**Prepared By:** <!-- AI: Leave blank — for the team to fill in -->
**Date Prepared:** <!-- AI: Use today's date in YYYY-MM-DD format -->
**Status:** <!-- AI: Always set to "Draft" -->

---

## 1. Requestor Information

<!--
AI Instructions:
- Extract all requestor details from the source documents.
- If a field cannot be found, leave it blank and flag it in Open Issues & Questions.
- For Source, list every type of document provided e.g. "Meeting Notes, Internal Memo". Do not select just one.
-->

**Team / Department:**
**Point of Contact (POC):** _(name and role)_
**Request Raised By:** _(name and role — can be same as POC)_
**Date of Request:** YYYY-MM-DD
**Source:** _(list all that apply e.g. Meeting Notes, Internal Memo, Slack Thread)_

---

## 2. Request Summary

### 2.1 Underlying Problems

<!--
AI Instructions:
- List each distinct problem the team is experiencing as a separate numbered point.
- Focus on the ROOT problem — what is actually going wrong operationally — not what the team is asking for.
- Each problem point should describe one specific issue, not a combination of issues.
- Write in plain, simple language.

Example:
1. The operations team has no centralised way to track permit application statuses across multiple sites.
2. Manual data entry between systems is causing errors and delays in monthly reporting.
-->

1.
2.
3.

### 2.2 Desired Outcome

<!--
AI Instructions:
- Write a short plain-language summary of what the team wants to achieve overall.
- This is the high-level "end state" the team is working toward.
- 2–4 sentences maximum.
- Do not repeat the individual problem points from §2.1.
- After writing the desired outcome, cross-check every problem point listed in §2.1. Make sure each is reflected. If any problem point is not addressed, add it to the desired outcome.
-->

### 2.3 Trigger Event

<!--
AI Instructions:
- Describe the specific event or change that prompted this request now.
- This could be a process failure, a new business initiative, a regulatory change, a headcount change, or a team restructure.
- If multiple trigger events are mentioned, list each one separately.
- If no trigger event is explicitly stated, infer from context and flag as inferred in Open Issues.
-->

### 2.4 Constraints

<!--
AI Instructions:
- List any limitations or conditions that apply to this request as a whole.
- These could be system limitations, budget caps, timelines, team capacity, or existing process dependencies.
- If no constraints are mentioned, leave blank and flag in Open Issues.

Example:
- Must be compatible with existing Salesforce integration
- No new headcount approved — solution must work with current team
-->

-
-

---

## 3. Internal Requirements

<!--
AI Instructions:
- Create one entry for each distinct internal requirement, based on §2.2 Desired Outcome.
- Each entry is a requirement-level need — not a granular sub-step. Group related actions into one entry.
- Requirement ID: use the format IR-01, IR-02, IR-03 and so on, incrementing for each requirement.
- Requirement Name: write a short plain English name — no acronyms, no jargon.
- Description: write 2-4 sentences describing what the requirement should do from the team's perspective. Cover what needs to happen, how it should work at a high level, and what the expected outcome is. Do not describe technical implementation.
- Criticality: High / Medium / Low based on operational urgency.
- After completing the list, cross-check every problem point in §2.1 to make sure each one is addressed by at least one entry.
-->

**IR-01**
- **Requirement Name:** _(Short plain English name)_
- **Description:** _(What the requirement should do and what outcome it delivers for the team)_
- **Criticality:** High / Medium / Low
- **Constraints:**

**IR-02**
- **Requirement Name:**
- **Description:**
- **Criticality:**
- **Constraints:**

**IR-03**
- **Requirement Name:**
- **Description:**
- **Criticality:**
- **Constraints:**

---

*This document was auto-generated from unstructured source documents. All content should be reviewed and validated by the team before use.*

---

## Appendix A — Internal Notes

<!--
AI Instructions:
- Leave this entire section blank.
- This section is for the team to fill in manually after reviewing the AI-generated content.
-->

_(Any additional context not captured in the source documents)_

---

## Appendix B — Open Issues & Questions

<!--
AI Instructions:
- List every field or section that could not be filled in from the source documents.
- List every inference you made.
- List any contradictions or unclear information found across the source documents.
- Keep the language neutral and factual.
- Number each issue sequentially starting from 1.
-->

1.
   - **Issue / Question:**
   - **Raised By:** AI-generated
   - **Status:** Open

2.
   - **Issue / Question:**
   - **Raised By:** AI-generated
   - **Status:** Open
