## [0.5.1] - 2026-09-02

### Fixed

- 补齐 skill-stocktake 引用的 scripts/ 附件(scan.sh / quick-diff.sh / save-results.sh)——
  SKILL.md 自 0.5.0 起引用这三个脚本但未随包分发,技能实际不可用;
  同步 ito-compute / nasiko-control-plane 的 agents/openai.yaml(上游 ECC ca185ef5, 2026-08-31)。
## [0.5.0] - 2026-08-26

### Added

- 移植上游新增的 `tasteforge-video` 技能(affaan-m/ECC 2026-08-18 提交 9c45004):
  可复现的 taste 驱动视频工作流——风格访谈 → style pack → 校验 → 应用 → 可编辑
  EDL/FCPXML 导出。累计 273 → **274** 技能;274/274 提供者测试通过。

## [0.4.1] - 2026-08-17

### Fixed

- cordis.patch.yml 的 name 从旧名 dsh-ecc 改为 dsh-ecc-skills(与 package.json 一致)——此前发布的 0.4.0 安装后会因加载器找不到包而崩溃。

# Changelog

## [0.4.0] - 2026-08-16

### Added

- **收官批:135 个垂直领域技能**(医疗/家庭网络/科学/金融/设计内容/网络运维/
  供应链/营销/研究与数据等),见 README v0.4.0 清单。
- 累计 **273/285(95.8%)**;零 harness 引用;273/273 提供者测试通过。
- 注:5 个 `scientific-*` 目录的 frontmatter `name` 不带前缀(pubmed-database 等),
  以 frontmatter 为准。

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

