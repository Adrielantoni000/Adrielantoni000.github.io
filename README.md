# adrielantoni000.github.io

[![Maintenance](https://github.com/Adrielantoni000/Adrielantoni000.github.io/actions/workflows/maintenance.yml/badge.svg)](https://github.com/Adrielantoni000/Adrielantoni000.github.io/actions/workflows/maintenance.yml)

Personal developer portfolio — plain HTML, CSS and JavaScript, no frameworks.

**Live:** https://adrielantoni000.github.io

## Structure

| File | Purpose |
|---|---|
| `index.html` | Page content and sections |
| `styles.css` | Design tokens (`:root`), light/dark themes, layout |
| `script.js` | Theme toggle, terminal typing effect, scroll reveal |
| `.github/workflows/maintenance.yml` | Automated checks on every push + weekly link check |
| `.github/scripts/privacy-scan.sh` | Blocks private data and secrets from being committed |

## Maintenance

Every push runs: HTML validation · JS syntax check · privacy & secrets scan · link check.
Every Monday the link check runs again and opens an issue if something broke.

## License

Code under MIT; personal content all rights reserved — see [LICENSE](LICENSE).
