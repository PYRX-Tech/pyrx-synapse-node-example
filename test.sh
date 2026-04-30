#!/usr/bin/env bash
set -uo pipefail
RED='\033[0;31m'; GREEN='\033[0;32m'; NC='\033[0m'
PASS=0; FAIL=0

[[ -z "${SYNAPSE_API_KEY:-}" ]] && echo "Set SYNAPSE_API_KEY" && exit 1

echo "Installing..."
npm install > /dev/null 2>&1

run_script() {
  local name="$1" cmd="$2"
  if eval "$cmd" > /dev/null 2>&1; then
    echo -e "  ${GREEN}✓${NC} $name"
    ((PASS++)) || true
  else
    echo -e "  ${RED}✗${NC} $name"
    ((FAIL++)) || true
  fi
}

echo "Running all scripts..."

echo "── Core ──"
run_script "track" "npm run track"
run_script "track:batch" "npm run track:batch"
run_script "identify" "npm run identify"
run_script "identify:batch" "npm run identify:batch"
run_script "send" "npm run send"

echo "── Contacts ──"
run_script "contacts:list" "npm run contacts:list"
run_script "contacts:get" "npm run contacts:get"
run_script "contacts:update" "npm run contacts:update"
run_script "contacts:delete" "npm run contacts:delete"

echo "── Templates ──"
run_script "templates:list" "npm run templates:list"
run_script "templates:get" "npm run templates:get"
run_script "templates:create" "npm run templates:create"
run_script "templates:update" "npm run templates:update"
run_script "templates:preview" "npm run templates:preview"
run_script "templates:delete" "npm run templates:delete"

echo ""
echo "Results: $PASS passed, $FAIL failed"
[[ $FAIL -eq 0 ]] && echo -e "${GREEN}All passed!${NC}" || echo -e "${RED}$FAIL failed${NC}"
exit $FAIL
