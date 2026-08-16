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
  'agentic-engineering', 'ai-first-engineering', 'agent-architecture-audit',
  'agent-eval', 'agent-self-evaluation', 'ai-regression-testing',
  'coding-standards', 'git-workflow', 'error-handling', 'codebase-onboarding',
  'tdd-workflow', 'verification-loop', 'deep-research', 'prompt-optimizer',
  'api-design', 'architecture-decision-records', 'design-system',
  'database-migrations', 'docker-patterns', 'postgres-patterns'
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
