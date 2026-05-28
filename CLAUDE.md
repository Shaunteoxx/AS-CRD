# CRD Generator Microapp

A microapp that generates Customer Request Documents (CRDs) using AI. It reads corporate context from local files, analyzes client notes, asks clarifying questions, and produces a formatted CRD document.

## Architecture

**Backend:** FastAPI (Python) — `backend/`
**Frontend:** React — `frontend/`

## Project Structure

```
my-crd-microapp/
├── CLAUDE.md
├── frontend/          # React app
└── backend/
    ├── main.py        # FastAPI app entry point
    ├── crd_context_data/  # Corporate context files injected into system prompt
    └── ...
```

## Backend

### Context Injection
- On startup (or per request), the backend reads all files from `backend/crd_context_data/`
- File contents are concatenated and injected into the Anthropic API system prompt
- This gives the model corporate-specific knowledge (terminology, templates, policies, etc.)
- Add `.txt`, `.md`, or similar plain-text files to `crd_context_data/` to expand context

### API
- Built with FastAPI
- Calls the Anthropic API (use `claude-sonnet-4-6` or later as default model)
- Use prompt caching on the system prompt (context files are static per session)

### Running the backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## Frontend

- Built with React
- Communicates with the FastAPI backend via REST

### Running the frontend
```bash
cd frontend
npm install
npm start
```

## Three-Phase Workflow

The CRD generation follows a strict three-phase conversation flow:

### Phase 1 — Analyze Client Notes
- User pastes or uploads raw client notes
- Backend analyzes the notes and extracts key requirements, stakeholders, and scope

### Phase 2 — Clarifying Questions
- Backend generates targeted clarifying questions based on gaps in the client notes
- User answers each question before proceeding
- Questions should be minimal and purposeful — only ask what's needed for the CRD

### Phase 3 — Generate CRD
- Backend combines original notes + answers + corporate context to produce the final CRD
- Output is a formatted document following corporate CRD standards (defined in `crd_context_data/`)
- Frontend renders the CRD and allows copy/export

## Environment Variables

```
ANTHROPIC_API_KEY=your_key_here
```

## Key Conventions
- Never hardcode API keys; always use environment variables
- Keep `crd_context_data/` files focused and up to date — they directly shape output quality
- Maintain phase state on the frontend; the backend is stateless between requests
