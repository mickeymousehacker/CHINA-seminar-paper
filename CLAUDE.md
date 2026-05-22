# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Setup

```bash
apm install   # pulls all agents, skills, and MCP servers from apm.yml
```

Prerequisites: `git`, `uv`, `apm`. Verify with `git --version && uv --version && apm --version`.

## Architecture

This is an **APM-managed Claude Code research workspace** — not a software project. There is no build step, no test suite, and no application to run. The repo is a template that wires together agents, skills, and MCP servers for structured research.

### Three research workflows

| Workflow | Trigger | Output directory |
|---|---|---|
| **LLM wiki** — persistent, compounding knowledge base | `wiki-ingest`, `wiki-query`, `wiki-lint` agents | `research/wiki/` |
| **Claim verification** — fact-check a paragraph or file | `verify-claims` agent | `research/verify/` |
| **Reference finding** — strengthen a paragraph with citations | `find-references` agent | `research/references/` |

The three workflows write to separate directories and never overlap. The wiki is the canonical long-term store; verify and find-references produce standalone ad-hoc reports.

### MCP servers (configured in `apm.yml` / `.mcp.json`)

- **parallel-search** (`https://search-mcp.parallel.ai/mcp`) — web search and fetch; prefer over raw `WebFetch` for research tasks
- **deepwiki** (`https://mcp.deepwiki.com/mcp`) — AI-powered Q&A over GitHub repos

### Skills

- **pdf** — full PDF processing (read, merge, split, fill forms, OCR, create). See `.claude/skills/pdf/SKILL.md`.
- **argdown** — argument mapping and reasoning. See `.claude/skills/argdown/SKILL.md`.
- **llm-wiki** — wiki ingest/query/lint operations. See `.claude/skills/llm-wiki/SKILL.md`.

## Wiki schema (critical)

All files under `research/wiki/` must follow the schema in `.claude/rules/wiki.md` exactly. Key rules:

- **Four page types** with required `type` frontmatter: `source` (`research/wiki/sources/YYYY-MM-DD-<slug>.md`), `entity` (`research/wiki/entities/<slug>.md`), `concept` (`research/wiki/concepts/<slug>.md`), `overview` (`research/wiki/overview.md`).
- **Every ingest must update `index.md` and `log.md`** — an ingest that skips these is incomplete.
- **Links use `[[slug]]` style** (Obsidian wiki links). Source slugs are date-prefixed; entity/concept slugs are not.
- **Contradictions are flagged with a callout**, never silently overwritten: `> ⚠️ Conflict: [[source-a]] reports X, but [[source-b]] reports Y. Unresolved.`
- **`research/input/` is immutable** — agents read from it, never edit it.

## Dependency management

`apm.yml` is the source of truth. `apm.lock.yaml` pins exact commits. Run `apm install` after modifying `apm.yml`. Deployed files land in `.claude/` (agents → `.claude/agents/`, skills → `.claude/skills/`, rules → `.claude/rules/`).
