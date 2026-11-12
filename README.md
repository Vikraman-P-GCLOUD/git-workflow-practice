# Git Workflow Practice

Hands-on practice of the Git / GitHub workflow from the trainings
*06. Developing Software using Git Workflow*, *07. Github Issues Testing* and *09. Project development Setup*.

Every change in this repo goes through the full cycle:

```
Issue  →  Branch  →  Commits  →  Pull Request  →  CI check  →  Merge  →  Issue closed
```

The step-by-step guide is in **[docs/WORKFLOW.md](docs/WORKFLOW.md)**.

## What's in here

| Path | What it is |
|---|---|
| `src/utils.js` | Small helper functions changed in each practice task |
| `tests/utils.test.js` | Unit tests (run with `npm test`, needs Node.js 18+) |
| `.github/workflows/ci.yml` | GitHub Actions workflow that runs the tests on every push and PR |
| `docs/WORKFLOW.md` | Guide to the Git / GitHub workflow |

## Practice log

| Issue | Type | Branch | What it practised |
|---|---|---|---|
| #1 | Feature | `feature/1-capitalize` | Basic cycle: issue → branch → commits → PR → merge |
| #2 | Bug | `fix/2-email-validation` | Bug report, failing tests first, then the fix |
| #3 | Docs | `docs/3-workflow-guide` | Documentation change through a PR |
| #4 | Practice | `practice/4-ci-check` | CI catching a broken change, then passing after the fix |

## Running locally

```bash
npm test
```
