# Changelog

## [0.3.0] - 2026-08-16

### Added

- 50 个编排/自动化/运维技能(orch-* 六件套、council/dev-team/team-*、e2e-testing、
  browser-qa、repo-scan、autonomous-loops、benchmark 系列、context/token/cost 预算、
  canary-watch、production-audit 等),见 README v0.3.0 清单。
- 零 harness 引用,无需适配;138/138 提供者测试通过。

## [0.2.0] - 2026-08-16

### Added

- 68 个模式类技能(前端/后端框架/语言模式/数据与架构),见 README v0.2.0 清单。
- 批量复制自 ECC 上游,零 harness 引用,无需适配;88/88 提供者测试通过。

## [0.1.0] - 2026-08-16

### Added

- ECC 首批 20 个技能(工程方法论 / Agent 系统 / 工程基础 / 模式与数据 / 研究优化)。
- Cordis bundle 插件(`cordis.patch.yml` + `lib/index.js`,零运行时依赖,原生解析折叠 YAML)。
- 适配:2 处命令引用改为 DSH 裸名(`/bug-check`、`/prompt-optimize`)。
- CI + npm 自动发布工作流;`npm run verify` 冒烟测试。

### License

MIT;技能内容 © Affaan Mustafa([ECC](https://github.com/affaan-m/ECC)),DSH 移植 © dsh-ecc contributors。
