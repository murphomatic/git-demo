# Sample Git Repository

A demo repo showcasing a Git workflow with Conventional Commits, Husky, and Semantic Release.

## Setup
1. Clone the repo: `git clone <repo-url>`
2. Install dependencies: `npm install`

## Usage
- Release (CI/CD): `npm run release`
- Dry run release: `npm run release:dry`

## Workflow
- Feature branches: `features/<description>`, `bugs/<description>`, `tasks/<description>`
- Commits follow Conventional Commits (e.g., `feat: add new feature`)
- Merges to `main` via rebase + fast-forward
- Semantic Release auto-versions and updates `CHANGELOG.md`