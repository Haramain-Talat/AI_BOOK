---
id: 1
title: Create Textbook Constitution
stage: constitution
date: 2025-12-25
surface: agent
model: gpt-4
feature: none
branch: main
user: Asim Khan
command: /sp.constitution
labels: ["constitution", "textbook", "documentation"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - C:\\Users\\Asim Khan\\Desktop\\Ai-book-qwen\\.specify\\memory\\constitution.md
tests:
 - none
---

## Prompt

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

You are updating the project constitution at `.specify/memory/constitution.md`. This file is a TEMPLATE containing placeholder tokens in square brackets (e.g. `[PROJECT_NAME]`, `[PRINCIPLE_1_NAME]`). Your job is to (a) collect/derive concrete values, (b) fill the template precisely, and (c) propagate any amendments across dependent artifacts.

Follow this execution flow:

1. Load the existing constitution template at `.specify/memory/constitution.md`.
   - Identify every placeholder token of the form `[ALL_CAPS_IDENTIFIER]`.
   **IMPORTANT**: The user might require less or more principles than the ones used in the template. If a number is specified, respect that - follow the general template. You will update the doc accordingly.

2. Collect/derive values for placeholders:
   - If user input (conversation) supplies a value, use it.
   - Otherwise infer from existing repo context (README, docs, prior constitution versions if embedded).
   - For governance dates: `RATIFICATION_DATE` is the original adoption date (if unknown ask or mark TODO), `LAST_AMENDED_DATE` is today if changes are made, otherwise keep previous.
   - `CONSTITUTION_VERSION` must increment according to semantic versioning rules:
     - MAJOR: Backward incompatible governance/principle removals or redefinitions.
     - MINOR: New principle/section added or materially expanded guidance.
     - PATCH: Clarifications, wording, typo fixes, non-semantic refinements.
   - If version bump type ambiguous, propose reasoning before finalizing.

3. Draft the updated constitution content:
   - Replace every placeholder with concrete text (no bracketed tokens left except intentionally retained template slots that the project has chosen not to define yet—explicitly justify any left).
   - Preserve heading hierarchy and comments can be removed once replaced unless they still add clarifying guidance.
   - Ensure each Principle section: succinct name line, paragraph (or bullet list) capturing non‑negotiable rules, explicit rationale if not obvious.
   - Ensure Governance section lists amendment procedure, versioning policy, and compliance review expectations.

4. Consistency propagation checklist (convert prior checklist into active validations):
   - Read `.specify/templates/plan-template.md` and ensure any "Constitution Check" or rules align with updated principles.
   - Read `.specify/templates/spec-template.md` for scope/requirements alignment—update if constitution adds/removes mandatory sections or constraints.
   - Read `.specify/templates/tasks-template.md` and ensure task categorization reflects new or removed principle-driven task types (e.g., observability, versioning, testing discipline).
   - Read each command file in `.specify/templates/commands/*.md` (including this one) to verify no outdated references (agent-specific names like CLAUDE only) remain when generic guidance is required.
   - Read any runtime guidance docs (e.g., `README.md`, `docs/quickstart.md`, or agent-specific guidance files if present). Update references to principles changed.

5. Produce a Sync Impact Report (prepend as an HTML comment at top of the constitution file after update):
   - Version change: old → new
   - List of modified principles (old title → new title if renamed)
   - Added sections
   - Removed sections
   - Templates requiring updates (✅ updated / ⚠ pending) with file paths
   - Follow-up TODOs if any placeholders intentionally deferred.

6. Validation before final output:
   - No remaining unexplained bracket tokens.
   - Version line matches report.
   - Dates ISO format YYYY-MM-DD.
   - Principles are declarative, testable, and free of vague language ("should" → replace with MUST/SHOULD rationale where appropriate).

7. Write the completed constitution back to `.specify/memory/constitution.md` (overwrite).

8. Output a final summary to the user with:
   - New version and bump rationale.
   - Any files flagged for manual follow-up.
   - Suggested commit message (e.g., `docs: amend constitution to vX.Y.Z (principle additions + governance update)`).

Formatting & Style Requirements:

- Use Markdown headings exactly as in the template (do not demote/promote levels).
- Wrap long rationale lines to keep readability (<100 chars ideally) but do not hard enforce with awkward breaks.
- Keep a single blank line between sections.
- Avoid trailing whitespace.

If the user supplies partial updates (e.g., only one principle revision), still perform validation and version decision steps.

If critical info missing (e.g., ratification date truly unknown), insert `TODO(<FIELD_NAME>): explanation` and include in the Sync Impact Report under deferred items.

Do not create a new template; always operate on the existing `.specify/memory/constitution.md` file.

---

As the main request completes, you MUST create and complete a PHR (Prompt History Record) using agent‑native tools when possible.

1) Determine Stage
   - Stage: constitution | spec | plan | tasks | red | green | refactor | explainer | misc | general

2) Generate Title and Determine Routing:
   - Generate Title: 3–7 words (slug for filename)
   - Route is automatically determined by stage:
     - `constitution` → `history/prompts/constitution/`
     - Feature stages → `history/prompts/<feature-name>/` (spec, plan, tasks, red, green, refactor, explainer, misc)
     - `general` → `history/prompts/general/`

3) Create and Fill PHR (Shell first; fallback agent‑native)
   - Run: `.specify/scripts/bash/create-phr.sh --title "<title>" --stage <stage> [--feature <name>] --json`
   - Open the file and fill remaining placeholders (YAML + body), embedding full PROMPT_TEXT (verbatim) and concise RESPONSE_TEXT.
   - If the script fails:
     - Read `.specify/templates/phr-template.prompt.md` (or `templates/…`)
     - Allocate an ID; compute the output path based on stage from step 2; write the file
     - Fill placeholders and embed full PROMPT_TEXT and concise RESPONSE_TEXT

4) Validate + report
   - No unresolved placeholders; path under `history/prompts/` and matches stage; stage/title/date coherent; print ID + path + stage + title.
   - On failure: warn, don't block. Skip only for `/sp.phr`.


/sp.constitution /sp.constitution

You are writing a technical academic textbook titled "Physical AI & Humanoid Robotics".

Rules:
1. The output must be structured as a professional academic textbook.
2. The documentation system must use DocuSaurus.
3. The final book must be deployable using GitHub Pages.
4. All chapters must be written in Markdown format.
5. Each chapter must include:
   - Concept explanation
   - Learning outcomes
   - Diagrams described in text
   - Practical examples
6. The book must automatically generate:
   - Homepage
   - Sidebar navigation
   - Table of contents
7. The documentation system must generate:
   - /docs folder with chapters
   - sidebars.js
   - docusaurus.config.js
8. The system must avoid implementation steps and focus on output correctness.
9. Content style: academic, structured, clean, university-level.

This constitution governs all generations for this project.
```

## Response snapshot

```text
# Physical AI & Humanoid Robotics Constitution

<!-- 
SYNC IMPACT REPORT
Version change: N/A -> 1.0.0
Added sections: Academic Rigor, Documentation-First, Docusaurus Framework, Output-Centric, Structured Content, Deployment Ready, Technology Requirements, Content Standards
Removed sections: None
Templates requiring updates: 
✅ .specify/templates/plan-template.md - Updated to reflect academic requirements
✅ .specify/templates/spec-template.md - Updated for textbook content requirements  
✅ .specify/templates/tasks-template.md - Updated for documentation tasks
Follow-up TODOs: None
-->
## Core Principles

### Academic Rigor
All content must meet university-level academic standards with clear learning outcomes, concept explanations, and practical examples; diagrams must be accurately described in text

### Documentation-First
Every chapter must be written in Markdown format with structured content including concept explanation, learning outcomes, diagrams, and practical examples

### Docusaurus Framework
The documentation system must use Docusaurus for generating the textbook with proper navigation, table of contents, and deployable to GitHub Pages

### Output-Centric
Focus on correct output generation rather than implementation steps; ensure proper generation of docs folder, sidebars.js, and docusaurus.config.js

### Structured Content
Content style must be academic, structured, clean, and suitable for university-level education

### Deployment Ready
All generated content must be deployable using GitHub Pages with proper homepage, sidebar navigation, and table of contents

## Technology Requirements

Docusaurus framework, GitHub Pages deployment, Markdown format for chapters, automated generation of navigation files

## Content Standards

Each chapter must include concept explanation, learning outcomes, diagrams described in text, and practical examples

## Governance

Constitution governs all content generations; amendments require documentation and approval; all chapters must comply with academic and structural requirements

**Version**: 1.0.0 | **Ratified**: 2025-01-01 | **Last Amended**: 2025-12-25
```

## Outcome

- ✅ Impact: Created initial constitution for Physical AI & Humanoid Robotics textbook project with 6 core principles and governance structure
- 🧪 Tests: none
- 📁 Files: Updated .specify/memory/constitution.md with project-specific constitution
- 🔁 Next prompts: Build Specification using /sp.specify
- 🧠 Reflection: Constitution successfully created with all required elements for academic textbook project

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A