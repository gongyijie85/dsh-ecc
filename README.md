# dsh-ecc

[![npm version](https://img.shields.io/npm/v/dsh-ecc-skills)](https://www.npmjs.com/package/dsh-ecc-skills)
[![GitHub release](https://img.shields.io/github/v/release/gongyijie85/dsh-ecc)](https://github.com/gongyijie85/dsh-ecc/releases)
[![CI](https://github.com/gongyijie85/dsh-ecc/actions/workflows/ci.yml/badge.svg)](https://github.com/gongyijie85/dsh-ecc/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

<div align="center">

[English](README.en.md) | **简体中文**

</div>

把 [affaan-m/ECC](https://github.com/affaan-m/ECC)(~227k⭐ 的"操作员系统",285 个
技能)渐进移植到 **DeepSeek Harness (DSH)** 的 Cordis 插件架构。

> **English:** ECC (227k⭐ operator system) skills for DeepSeek Harness —
> progressive port. v0.1.0 ships 20 curated, self-contained single-file skills;
> the remaining 270+ follow in later batches. Adapted from
> [affaan-m/ECC](https://github.com/affaan-m/ECC) (MIT, © Affaan Mustafa).

插件向 `ctx.skills` 注册表的 **host 层** 注册技能提供者;技能随包分发
(`skills/<name>/SKILL.md`),无需用户配置。

> **非官方移植**:技能内容改编自 [affaan-m/ECC](https://github.com/affaan-m/ECC)(MIT, © Affaan Mustafa)。
> ECC 的 Claude Code 专属基础设施(agents/hooks/commands/mcp-configs)不在本包内。

## 安装

```sh
# npm(包名 dsh-ecc 已被同名项目占用,本包发布为 dsh-ecc-skills)
dsh plugin --profile web add dsh-ecc-skills

# GitHub
dsh plugin --profile web add github:gongyijie85/dsh-ecc

# 本地开发
dsh plugin --profile web add D:\plugins\dsh-ecc
```

装完重启 profile(`dsh web`),技能即可用 `skill` 工具加载。

## v0.1.0 首批 20 个技能

| 分类 | 技能 |
| --- | --- |
| 工程方法论 | `agentic-engineering`(eval-first 执行)、`ai-first-engineering`、`tdd-workflow`、`verification-loop` |
| Agent 系统 | `agent-architecture-audit`、`agent-eval`、`agent-self-evaluation`、`ai-regression-testing` |
| 工程基础 | `coding-standards`、`git-workflow`、`error-handling`、`codebase-onboarding`、`api-design`、`architecture-decision-records` |
| 模式与数据 | `docker-patterns`、`postgres-patterns`、`database-migrations`、`design-system` |
| 研究与优化 | `deep-research`、`prompt-optimizer` |

## v0.2.0 新增 68 个模式类技能

**前端**:`react-patterns`、`react-testing`、`react-performance`、`react-native-patterns`、
`vue-patterns`、`nuxt4-patterns`、`vite-patterns`、`nextjs-turbopack`、`frontend-patterns`、
`frontend-a11y`、`ui-to-vue`、`compose-multiplatform-patterns`

**后端框架**:`nestjs-patterns`、`fastapi-patterns`、`django-patterns`(+tdd/security/verification)、
`laravel-patterns`(+tdd/security/verification/plugin-discovery)、`springboot-patterns`
(+tdd/security/verification)、`quarkus-patterns`(+tdd/security/verification)、`bun-runtime`

**语言模式**:`python-patterns`(+testing)、`golang-patterns`(+testing)、`rust-patterns`(+testing)、
`cpp-coding-standards`(+testing)、`csharp-testing`、`fsharp-testing`、`java-coding-standards`、
`kotlin-patterns`(+testing/coroutines-flows/exposed-patterns/ktor-patterns)、
`dart-flutter-patterns`(+flutter-dart-code-review)、`swiftui-patterns`(+concurrency-6-2/actor-persistence/protocol-di-testing)、
`perl-patterns`(+security/testing)、`dotnet-patterns`

**数据与架构**:`mysql-patterns`、`redis-patterns`、`prisma-patterns`、`jpa-patterns`、
`hexagonal-architecture`、`contract-first`、`deployment-patterns`、`kubernetes-patterns`、
`backend-patterns`、`mcp-server-patterns`

## 移植路线图(渐进)

- **v0.1.0** ✅ 20 个纯单文件、无 harness 依赖的技能
- **v0.2.0** ✅ 68 个模式类批量(前端/后端/语言/数据/架构)
- **v0.3.0** ✅ 50 个编排/自动化/运维类(orch-*、council、team-*、e2e-testing、benchmark 等)
- **v0.4.0(本次,收官)** ✅ **135 个垂直领域与全部剩余可移植技能**:
  医疗(healthcare-*、hipaa)、家庭网络(homelab-*)、科学(scientific-* / pubmed / uspto / gget)、
  金融(customer-billing / finance-billing / defi / prediction-market / evm / x402)、
  设计与内容(brand-*、motion-*、liquid-glass、manim、remotion、article-writing、seo)、
  网络运维(cisco-ios、netmiko、network-*、terminal-*)、供应链/物流、营销/销售、
  研究与数据(pytorch、recsys、mle、clickhouse、video/audio)等
- **累计:273/285 技能已移植**(占 95.8%);未移植仅 12 个:
  - 依赖 ECC 专属基础设施(`ecc-guide`、`ecc-recipes`、`gateguard`、`plan-orchestrate`、
    `strategic-compact`、`continuous-learning-v2`)——除非后续做 hooks/commands 桥接层
  - 带辅助文件的 7 个(`continuous-learning`、`frontend-slides`、`openclaw-persona-forge`、
    `security-review`、`skill-comply`、`visa-doc-translate`)

## 移植说明(对比上游)

- **来源**:`skills/<name>/SKILL.md` 原样复制(标准格式,frontmatter 含
  `metadata.origin: ECC`)。
- **适配**:仅 2 处命令引用改为 DSH 裸名(`/bug-check` → `bug-check`、
  `/prompt-optimize` → `prompt-optimizer`);无 `Skill tool` 引用。
- **剔除**:依赖 `/ecc:*` 命令、hooks.json、ccconfig 的 6 个技能;带辅助
  文件的 7 个技能(留待后续批次)。
- **调用语义**:全部模型/用户可调用。

## 工作原理 / 添加技能

同 [mattpocock-skills-dsh](https://github.com/gongyijie85/mattpocock-skills-dsh)
(host 层 `ctx.skills.registerProvider`;零运行时依赖;原生解析折叠 YAML
frontmatter)。往 `skills/<kebab-name>/SKILL.md` 放文件即自动发现;验证:
`npm run verify`(20/20)。

## 许可证

MIT。技能内容 © Affaan Mustafa([ECC](https://github.com/affaan-m/ECC));
DSH 移植 © dsh-ecc contributors。见 [LICENSE](LICENSE)。
