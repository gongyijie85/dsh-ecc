# dsh-ecc

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
dsh plugin --profile web add dsh-ecc
# 或 GitHub
dsh plugin --profile web add github:gongyijie85/dsh-ecc
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

## 移植路线图(渐进)

- **v0.1.0(本次)**:20 个纯单文件、无 harness 依赖的技能 ✅
- **v0.2**:模式类批量(react/vue/nestjs/fastapi/springboot/kotlin 等 60+)
- **v0.3**:Agent 编排类(orch-*、council、team-*、e2e-testing、browser-qa 等)
- **v0.4**:垂直领域(healthcare-*、homelab-*、scientific-*、finance-* 等)
- **不移植**:依赖 ECC 专属基础设施的技能(`ecc-guide`、`ecc-recipes`、
  `gateguard`、`plan-orchestrate` 等 6 个引用 `/ecc:*` 命令/hooks 的)与
  带辅助文件的 7 个技能 —— 除非后续做 hooks/commands 桥接层

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
