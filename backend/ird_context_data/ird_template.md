# Internal Requirement Docs (IRD)

---

## Document Control

<!--
AI Instructions:
- Docs ID: Use the exact same value as the generated filename for this document. Do not generate a new ID.
- Domain: Extract or infer the product domain this requirement belongs to e.g. Safety, Energy, Payments, Onboarding. Flag as inferred in Open Issues if not explicitly stated.
- Prepared By: Leave blank — for the team to fill in.
- Date Prepared: Use today's date in YYYY-MM-DD format.
- Linked BRD: Leave blank — for the team to fill in once the BRD is created.
-->

**Docs ID:**
**Domain:**
**Prepared By:**
**Date Prepared:**
**Linked BRD:**

---

## 1. Initiative Information

<!--
AI Instructions:
- Extract all initiative details from the source documents.
- If a field cannot be found, leave it blank and flag it in Open Issues & Questions.
- For Initiative Raised By, include both the name and the team where possible.
- For Source, list every type of document provided e.g. "OKR Document, Competitor Analysis, Product Audit". Do not select just one.
-->

**Initiative Name:**
**Initiative Raised By:** _(name and team)_
**Date of Request:** YYYY-MM-DD
**Source:** _(list all that apply e.g. OKR Document, Competitor Analysis, Product Audit, Roadmap Planning, Regulatory Brief)_

---

## 2. Request Summary

### 2.1 Underlying Problems

<!--
AI Instructions:
- List each distinct problem or gap this initiative is addressing as a separate numbered point.
- These may be internal gaps (e.g. product debt, missing capabilities), market gaps (e.g. unmet client needs, competitor advantages), or strategic gaps (e.g. misalignment with company vision).
- Focus on the ROOT problem — what is actually going wrong or missing — not what the initiative is proposing.
- Each problem point should describe one specific issue, not a combination of issues.
- Write in plain, simple language that anyone can understand.
- These problem points provide the context for the normalised requirements in §3, which are based on the desired outcomes in §2.2.

Example:
1. The platform has no way to support multi-tenancy, limiting the ability to onboard enterprise clients with isolated data environments.
2. There is no automated way to detect anomalies in client usage patterns, requiring manual review by the operations team.
-->

1.
2.
3.

### 2.2 Desired Outcome

<!--
AI Instructions:
- Write a short plain-language summary of what this initiative aims to achieve overall.
- This is the high-level "end state" the company is working toward — not what a client wants, but what the product or business needs.
- 2–4 sentences maximum.
- Do not repeat the individual problem points from §2.1.
- The normalised requirements in §3 will be derived from this section — make sure it captures all the key things this initiative is asking for.
- After writing the desired outcome, cross-check every problem point listed in §2.1. Make sure each problem point is reflected in the desired outcome. If any problem point is not addressed, add it to the desired outcome before finishing this section.
-->

### 2.3 Trigger Event

<!--
AI Instructions:
- Describe the specific event or change that prompted this initiative now.
- This could be a market signal, competitor move, regulatory deadline, product audit finding, OKR cycle, or an internal strategic decision.
- If multiple trigger events are mentioned, list each one separately.
- If no trigger event is explicitly stated, infer from context and flag as inferred in Open Issues.
-->

### 2.4 Request Constraints

<!--
AI Instructions:
- List any limitations or conditions that apply to this initiative as a whole.
- These are initiative-level constraints e.g. must work within existing platform architecture, engineering capacity, regulatory requirements, or technology standards.
- Do not list constraints that are specific to individual requirements — those go in the Business Requirements section in §3.
- If no constraints are mentioned, leave blank and flag in Open Issues.

Example:
- Must be built on the existing microservices architecture
- Must not require changes to the client-facing API contract
- Must comply with MAS TRM guidelines
-->

-
-

---

## 3. Business Requirements

<!--
AI Instructions:
- Create one entry for each distinct business requirement this initiative is proposing, based on §2.2 Desired Outcome.
- Each entry is a requirement-level need — not a granular feature or sub-requirement. Group related actions into one entry.
- BRD ID: use the format BR-01, BR-02, BR-03 and so on, incrementing for each requirement.
- Business Name: write a short plain English name for the requirement — no acronyms, no jargon. e.g. "Multi-tenant data isolation", "Automated anomaly detection", "Role-based access control". Spell out any technical terms in full.
- Description: write 2–4 sentences describing what the requirement should do from an internal product perspective. Cover what the system or team needs to do, how it should work at a high level, and what the expected outcome is. Do not describe technical implementation. Write as if explaining to someone with no product knowledge.
- Constraints: list any constraints specific to this requirement only — not initiative-level constraints. Leave blank if none apply.
- After completing the list, cross-check every problem point in §2.1 to make sure each one is addressed by at least one entry. Add missing entries if needed.
-->

**BR-01**
- **Business Name:** _(Short plain English name)_
- **Description:** _(What the requirement should do and what outcome it delivers for the product or business)_
- **Constraints:**

**BR-02**
- **Business Name:**
- **Description:**
- **Constraints:**

**BR-03**
- **Business Name:**
- **Description:**
- **Constraints:**

---

*This document was auto-generated from unstructured source documents. All content should be reviewed and validated by the team before use.*

---

## Appendix A — Supporting Evidence

<!--
AI Instructions:
- Extract direct quotes that support or explain the problems and requirements identified above.
- Preserve the exact original wording of every quote — do not paraphrase.
- For each quote, identify the source document and include a timestamp, slide number, or page reference where available.
-->

**Direct Quotes**

1.
   - **Source:**
   - **Reference:** _(timestamp / slide / page)_
   - **Quote:**

2.
   - **Source:**
   - **Reference:** _(timestamp / slide / page)_
   - **Quote:**

---

## Appendix B — Internal Notes

<!--
AI Instructions:
- Leave this entire section blank.
- This section is for the team to fill in manually after reviewing the AI-generated content.
-->

**Additional Context**

_(Any additional context not captured in the source documents)_

**Linked BRD**

_(URL — added once the BRD is created)_

---

## Appendix C — Open Issues & Questions

<!--
AI Instructions:
- List every field or section that could not be filled in from the source documents.
- List every inference you made e.g. "Domain inferred as Payments based on OKR language — team to verify".
- List any contradictions or unclear information found across the source documents.
- Keep the language neutral and factual — do not speculate or suggest answers.
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
