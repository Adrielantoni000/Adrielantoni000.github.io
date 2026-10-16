#!/usr/bin/env bash
# Falla si el repo contiene datos privados o algo con forma de token/credencial.
set -u
fail=0

check() { # $1 = descripción, $2 = regex
  if hits=$(grep -rIEn --exclude-dir=.git --exclude=privacy-scan.sh "$2" .); then
    echo "❌ $1:"; echo "$hits" | sed 's/^/   /' | cut -c1-120
    fail=1
  else
    echo "✅ $1"
  fi
}

check "Sin teléfono"               '939-?454|454-?6674'
check "Sin dirección completa"     'Buena Vista|00956'
check "Sin Gmail personal"         'unagelcenizo'
check "Sin tokens de GitHub"       'gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}'
check "Sin API keys (sk-…)"        'sk-[A-Za-z0-9-]{20,}'
check "Sin claves privadas"        'BEGIN [A-Z ]*PRIVATE KEY'
check "Sin firma de Claude"        'Co-Authored-By|Generated with \[?Claude'

exit $fail
