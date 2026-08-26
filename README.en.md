# dsh-ecc

[![npm version](https://img.shields.io/npm/v/dsh-ecc-skills)](https://www.npmjs.com/package/dsh-ecc-skills)
[![GitHub release](https://img.shields.io/github/v/release/gongyijie85/dsh-ecc)](https://github.com/gongyijie85/dsh-ecc/releases)
[![CI](https://github.com/gongyijie85/dsh-ecc/actions/workflows/ci.yml/badge.svg)](https://github.com/gongyijie85/dsh-ecc/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

<div align="center">

**English** | [简体中文](README.md)

</div>

[affaan-m/ECC](https://github.com/affaan-m/ECC) (the ~227k⭐ "operator system",
286 skills) skills for the **DeepSeek Harness (DSH)** — a progressive port to
DSH's Cordis plugin architecture.

> **Unofficial port**: skill content adapted from
> [affaan-m/ECC](https://github.com/affaan-m/ECC) (MIT, © Affaan Mustafa).
> ECC's Claude Code-specific infrastructure (agents/hooks/commands/mcp-configs)
> is not part of this package.

## Install

```sh
# npm (the plain `dsh-ecc` npm name is taken by another project; this port
# publishes as dsh-ecc-skills)
dsh plugin --profile web add dsh-ecc-skills

# GitHub
dsh plugin --profile web add github:gongyijie85/dsh-ecc

# Local folder (development)
dsh plugin --profile web add D:\plugins\dsh-ecc
```

Restart the profile (`dsh web`) — the skills then load with the `skill` tool.

## Port status: 274 / 286 skills (95.8%)

- **v0.1.0** ✅ 20 skills — engineering methodology, agent systems, foundations
- **v0.2.0** ✅ 68 skills — framework/language patterns (react, vue, django,
  laravel, springboot, quarkus, kotlin, swift, go, rust, ...), data &
  architecture
- **v0.3.0** ✅ 50 skills — orchestration/automation/ops (orch-* six-pack,
  council, dev-team, e2e-testing, browser-qa, repo-scan, benchmark series,
  budget advisors, canary-watch, production-audit, ...)
- **v0.4.0** ✅ 135 skills — vertical domains (healthcare, homelab, scientific,
  finance, design/content, network ops, supply chain, marketing, research &
  data)
- **v0.5.0 (this release)** ✅ +1 skill — `tasteforge-video` (repeatable
  taste-driven video workflow: taste interview → style pack → validate → apply
  → editable EDL/FCPXML export; ported from upstream 2026-08-18 commit 9c45004)
- **Not ported (12)**: 6 skills depending on `/ecc:*` commands/hooks
  (ecc-guide, ecc-recipes, gateguard, plan-orchestrate, strategic-compact,
  continuous-learning-v2) and 6 with companion files — unless a hooks/commands
  bridge layer is built later.

## Adaptation notes

- `skills/<name>/SKILL.md` copied verbatim (standard format, frontmatter carries
  `metadata.origin: ECC`).
- Zero harness-specific references in all 274 ported skills; only 2 command
  references were renamed to DSH bare names in v0.1 (`/bug-check` →
  `bug-check`, `/prompt-optimize` → `prompt-optimizer`).
- Skill identity comes from the frontmatter `name` (e.g. the five
  `scientific-*` directories expose `pubmed-database`, `uspto-database`,
  `gget`, `literature-review`, `scholar-evaluation`).
- All skills model+user invocable. Provider parses folded YAML frontmatter
  natively; zero runtime dependencies.

## How it works / adding skills

Host-layer `ctx.skills.registerProvider` (same pattern as
[mattpocock-skills-dsh](https://github.com/gongyijie85/mattpocock-skills-dsh)).
Drop a `skills/<kebab-name>/SKILL.md` and it is auto-discovered. Verify with
`npm run verify` (274/274).

## License

MIT. Skill content © Affaan Mustafa
([ECC](https://github.com/affaan-m/ECC)); DSH port © dsh-ecc contributors. See
[LICENSE](LICENSE).
