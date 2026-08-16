// verify-provider.mjs — functional smoke test for the dsh-ecc skill provider.
import { apply } from '../lib/index.js'

let captured
const ctx = {
  skills: {
    registerProvider(providerFactory) {
      captured = providerFactory({})
    }
  }
}

apply(ctx)
if (!captured) {
  console.error('FAIL: provider was not registered')
  process.exit(1)
}

const candidates = await captured.list({ signal: undefined })
console.log(`discovered ${candidates.length} candidate(s):`)
const expected = new Set([
  // v0.1.0 — engineering methodology / agents / patterns / research
  'agentic-engineering', 'ai-first-engineering', 'agent-architecture-audit',
  'agent-eval', 'agent-self-evaluation', 'ai-regression-testing',
  'coding-standards', 'git-workflow', 'error-handling', 'codebase-onboarding',
  'tdd-workflow', 'verification-loop', 'deep-research', 'prompt-optimizer',
  'api-design', 'architecture-decision-records', 'design-system',
  'database-migrations', 'docker-patterns', 'postgres-patterns',
  // v0.2.0 — framework / language patterns, testing, backend & data
  'react-patterns', 'react-testing', 'react-performance', 'react-native-patterns',
  'vue-patterns', 'nuxt4-patterns', 'vite-patterns', 'nextjs-turbopack',
  'nestjs-patterns', 'fastapi-patterns', 'django-patterns', 'django-tdd',
  'django-security', 'django-verification', 'laravel-patterns', 'laravel-tdd',
  'laravel-security', 'laravel-verification', 'laravel-plugin-discovery',
  'springboot-patterns', 'springboot-tdd', 'springboot-security',
  'springboot-verification', 'quarkus-patterns', 'quarkus-tdd',
  'quarkus-security', 'quarkus-verification', 'python-patterns',
  'python-testing', 'golang-patterns', 'golang-testing', 'rust-patterns',
  'rust-testing', 'cpp-coding-standards', 'cpp-testing', 'csharp-testing',
  'fsharp-testing', 'java-coding-standards', 'kotlin-patterns', 'kotlin-testing',
  'kotlin-coroutines-flows', 'kotlin-exposed-patterns', 'kotlin-ktor-patterns',
  'dart-flutter-patterns', 'flutter-dart-code-review', 'swiftui-patterns',
  'swift-concurrency-6-2', 'swift-actor-persistence', 'swift-protocol-di-testing',
  'perl-patterns', 'perl-security', 'perl-testing', 'mysql-patterns',
  'redis-patterns', 'prisma-patterns', 'jpa-patterns', 'hexagonal-architecture',
  'contract-first', 'deployment-patterns', 'kubernetes-patterns',
  'backend-patterns', 'mcp-server-patterns', 'frontend-patterns',
  'frontend-a11y', 'ui-to-vue', 'compose-multiplatform-patterns',
  'dotnet-patterns', 'bun-runtime',
  // v0.3.0 — orchestration, automation & ops
  'agent-harness-construction', 'agent-sort', 'api-connector-builder',
  'autonomous-agent-harness', 'autonomous-loops', 'benchmark',
  'benchmark-methodology', 'benchmark-optimization-loop', 'browser-qa',
  'canary-watch', 'click-path-audit', 'code-tour', 'config-gc', 'context-budget',
  'continuous-agent-loop', 'cost-aware-llm-pipeline', 'council',
  'council-multi-model', 'data-scraper-agent', 'delivery-gate', 'dev-team',
  'dmux-workflows', 'dynamic-workflow-mode', 'e2e-testing',
  'enterprise-agent-ops', 'eval-harness', 'gan-style-harness',
  'intent-driven-development', 'latency-critical-systems', 'loop-design-check',
  'orch-add-feature', 'orch-build-mvp', 'orch-change-feature',
  'orch-fix-defect', 'orch-pipeline', 'orch-refine-code',
  'parallel-execution-optimizer', 'plan-canvas', 'production-audit',
  'project-flow-ops', 'repo-scan', 'rules-distill', 'santa-method',
  'skill-scout', 'skill-stocktake', 'team-agent-orchestration', 'team-builder',
  'token-budget-advisor', 'windows-desktop-e2e', 'workspace-surface-audit',
  // v0.4.0 — vertical domains & final batch
  'accessibility', 'agent-introspection-debugging', 'agent-payment-x402',
  'agentic-os', 'android-clean-architecture', 'angular-developer',
  'article-writing', 'automation-audit-ops', 'blender-motion-state-inspection',
  'blueprint', 'brand-discovery', 'brand-voice', 'carrier-relationship-management',
  'cisco-ios-patterns', 'ck', 'claude-devfleet', 'clickhouse-io', 'codehealth-mcp',
  'competitive-platform-analysis', 'competitive-report-structure', 'configure-ecc',
  'connections-optimizer', 'content-engine', 'content-hash-cache-pattern',
  'cost-tracking', 'crosspost', 'customer-billing-ops', 'customs-trade-compliance',
  'dashboard-builder', 'data-throughput-accelerator', 'defi-amm-security',
  'django-celery', 'documentation-lookup', 'ecc-tools-cost-audit', 'email-ops',
  'energy-procurement', 'evm-token-decimals', 'exa-search', 'fal-ai-media',
  'finance-billing-ops', 'flox-environments', 'foundation-models-on-device',
  'frontend-design-direction', 'generating-python-installer', 'github-ops',
  'google-workspace-ops', 'growth-log', 'healthcare-cdss-patterns',
  'healthcare-emr-patterns', 'healthcare-eval-harness', 'healthcare-phi-compliance',
  'hermes-imports', 'hipaa-compliance', 'homelab-network-readiness',
  'homelab-network-setup', 'homelab-pihole-dns', 'homelab-vlan-segmentation',
  'homelab-wireguard-vpn', 'hookify-rules', 'inherit-legacy-style',
  'inventory-demand-planning', 'investor-materials', 'investor-outreach',
  'ios-icon-gen', 'iterative-retrieval', 'ito-baskets', 'ito-compute',
  'ito-inference', 'ito-training', 'jira-integration', 'knowledge-ops',
  'lead-intelligence', 'liquid-glass-design', 'living-docs-governance',
  'llm-trading-agent-security', 'logistics-exception-management',
  'mailtrap-email-integration', 'make-interfaces-feel-better', 'manim-video',
  'market-research', 'marketing-campaign', 'messages-ops', 'ml-adoption-playbook',
  'mle-workflow', 'motion-advanced', 'motion-foundations', 'motion-patterns',
  'motion-ui', 'nanoclaw-repl', 'nasiko-control-plane', 'netmiko-ssh-automation',
  'network-bgp-diagnostics', 'network-config-validation', 'network-interface-health',
  'nodejs-keccak256', 'nutrient-document-processing', 'opensource-pipeline',
  'plankton-code-quality', 'prediction-market-oracle-research',
  'prediction-market-risk-review', 'product-capability', 'product-lens',
  'production-scheduling', 'pytorch-patterns', 'quality-nonconformance',
  'ralphinho-rfc-pipeline', 'recsys-pipeline-architect', 'recursive-decision-ledger',
  'regex-vs-llm-structured-text', 'remotion-video-creation', 'research-ops',
  'returns-reverse-logistics', 'safety-guard', 'pubmed-database',
  'uspto-database', 'gget', 'literature-review', 'scholar-evaluation',
  'search-first', 'security-bounty-hunter', 'security-scan', 'seo',
  'social-graph-ranker', 'social-publisher', 'taste', 'terminal-opener',
  'terminal-ops', 'tinystruct-patterns', 'ui-demo', 'uncloud', 'unified-memory',
  'unified-notifications-ops', 'video-editing', 'videodb', 'x-api'
])
const found = new Set()
let failures = 0

for (const c of candidates) {
  found.add(c.name)
  const detail = await captured.get(c, { signal: undefined })
  console.log(`  - ${c.name}: "${detail?.description?.slice(0, 60) ?? 'MISSING'}..." content=${detail?.content?.length ?? 0} chars`)
  if (!detail?.content || !detail?.resourceBase) failures++
  if (!detail?.description || detail.description.startsWith('>')) {
    console.error(`FAIL: ${c.name} description broken: "${detail?.description}"`)
    failures++
  }
}

for (const want of expected) {
  if (!found.has(want)) {
    console.error(`FAIL: expected skill "${want}" was not discovered`)
    failures++
  }
}
for (const name of found) {
  if (!expected.has(name)) {
    console.error(`FAIL: unexpected skill "${name}" discovered`)
    failures++
  }
}

if (failures) {
  console.error(`FAIL: ${failures} problem(s)`)
  process.exit(1)
}
console.log(`OK: all ${expected.size} ecc skills discovered and get() passes`)
