# Git & GitHub Workflow Guide

My working notes on how a change moves from idea to `main`.
**Check this against the company's own conventions from the training videos (06, 07, 09) and update it where they differ.**

---

## 1. The big picture

```
 ┌────────┐   ┌────────┐   ┌─────────┐   ┌──────────────┐   ┌──────┐   ┌────────┐   ┌───────┐
 │ Issue  │ → │ Branch │ → │ Commits │ → │ Pull Request │ → │  CI  │ → │ Review │ → │ Merge │
 └────────┘   └────────┘   └─────────┘   └──────────────┘   └──────┘   └────────┘   └───────┘
   what &        isolated     small,         asks to merge     tests run   teammate     issue
   why           workspace    clear msgs     into main         automatically checks     auto-closes
```

Golden rules:
- **Never commit directly to `main`.** All work happens on a branch and comes in through a PR.
- **One issue → one branch → one PR.** Keep each change small and focused.
- **Always pull before you branch**, so you start from the latest `main`.

---

## 2. Issues: describing the work

Every piece of work starts as an issue. It's the record of *what* and *why*.

| Type | Label | Must contain |
|---|---|---|
| Feature | `enhancement` | What to add, why, acceptance criteria |
| Bug | `bug` | Steps to reproduce, expected vs. actual result, screenshots, environment |
| Docs | `documentation` | What to document or update |

**Testing with issues (bug reports):** a good bug report lets someone else reproduce the problem without asking you anything:
1. A clear title: `Bug: login button does nothing on mobile`
2. Numbered **steps to reproduce**
3. **Expected** result vs. **actual** result
4. Screenshot, screen recording, or console log
5. Environment (OS, browser, app version)

Then **assign** the issue, add **labels**, and optionally link it to a **project/milestone**.

---

## 3. Branches: an isolated workspace

```bash
git checkout main
git pull origin main                       # get latest
git checkout -b feature/12-login-page      # create + switch
```

**Naming:** `type/issue-number-short-description`

| Prefix | Use for |
|---|---|
| `feature/` | New functionality |
| `fix/` | Bug fixes |
| `docs/` | Documentation only |
| `chore/` | Setup, config, dependencies |
| `hotfix/` | Urgent fix to production |

---

## 4. Commits: small and clearly described

```bash
git status                 # what changed?
git diff                   # see the exact changes
git add src/utils.js       # stage specific files (or `git add .`)
git commit -m "feat: add capitalize helper (#1)"
```

**Message format (Conventional Commits):** `type: short description (#issue)`

| Type | Meaning |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation |
| `test:` | Adding or fixing tests |
| `refactor:` | Code change with no behaviour change |
| `chore:` | Tooling, config, setup |

Commit often, and keep each commit to one logical change.

---

## 5. Push & open a Pull Request

```bash
git push -u origin feature/12-login-page
```

On GitHub, click **Compare & pull request**. Then:
- **Title:** what the PR does
- **Description:** fill in the PR template, including **`Closes #12`** (this links the issue and auto-closes it on merge)
- **Reviewers:** request a teammate
- **Assignee / labels:** yourself plus the matching label

Other closing keywords that work: `Fixes #12`, `Resolves #12`.

---

## 6. CI: automatic checks with GitHub Actions

A **workflow** is a YAML file in `.github/workflows/` that GitHub runs automatically.

```yaml
on:                 # WHEN to run
  pull_request:
    branches: [main]
jobs:               # WHAT to run
  test:
    runs-on: ubuntu-latest      # on which machine
    steps:
      - uses: actions/checkout@v4      # get the code
      - uses: actions/setup-node@v4    # install Node
      - run: npm test                  # run the tests
```

- ✅ Green check: safe to merge
- ❌ Red cross: click **Details**, read the log, fix it, push again (CI re-runs automatically)

The **Actions** tab shows the history of every run.

---

## 7. Code review

**As the author:**
- Self-review the **Files changed** tab before requesting review
- Reply to every comment, push fixes as new commits, then **resolve** the conversation

**As a reviewer:**
- Comment on specific lines; be specific and kind
- Finish with **Approve**, **Comment**, or **Request changes**

---

## 8. Merge & clean up

1. Merge the PR once CI is green and it's approved. **Squash and merge** keeps `main` history clean.
2. Delete the branch (GitHub offers a button).
3. Update your local copy:

```bash
git checkout main
git pull origin main
git branch -d feature/12-login-page
```

The linked issue closes automatically.

---

## 9. Merge conflicts

They happen when two branches change the **same lines** of the same file.

```bash
git checkout my-branch
git pull origin main          # conflict shows up here
```

The file will contain:

```
<<<<<<< HEAD
my version
=======
version from main
>>>>>>> main
```

Fix it:
1. Edit the file to keep the correct content
2. Delete **all** the `<<<<<<<`, `=======`, `>>>>>>>` markers
3. Run the tests
4. Then:

```bash
git add <file>
git commit -m "fix: resolve merge conflict"
git push
```

To avoid conflicts: pull `main` often, and keep branches short-lived.

---

## 10. Handy commands

| Command | What it does |
|---|---|
| `git status` | Show changed / staged files |
| `git log --oneline --graph` | Show compact history |
| `git diff` | Show unstaged changes |
| `git stash` / `git stash pop` | Park unfinished work and bring it back |
| `git restore <file>` | Discard local changes to a file |
| `git commit --amend` | Fix the last commit message (before pushing) |
| `git branch -a` | List all branches |
| `git fetch --prune` | Sync and remove deleted remote branches |

---

## 11. Daily checklist

- [ ] `git pull` on `main` before starting
- [ ] Pick or create an issue and assign it to myself
- [ ] Branch with the correct name
- [ ] Small commits with clear messages
- [ ] PR with `Closes #N`, a filled-in template, and a reviewer
- [ ] CI is green
- [ ] Review comments addressed
- [ ] Merge, delete the branch, pull `main`
