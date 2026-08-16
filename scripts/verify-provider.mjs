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
  'dotnet-patterns', 'bun-runtime'
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
