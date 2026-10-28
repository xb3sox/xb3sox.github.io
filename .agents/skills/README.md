# Project agent skills

These skills were installed as project copies for GitHub Copilot with the `skills` CLI. `skills-lock.json` records their install hashes. Each folder includes the upstream MIT license.

- **UI/UX:** [`ui-ux-pro-max`](https://www.skills.sh/nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max), from [`nextlevelbuilder/ui-ux-pro-max-skill`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) at `1f8857914da3c723d58dab1d609dd0d55a86bf51`.
- **Copy editing:** [`copy-editing`](https://www.skills.sh/coreyhaines31/marketingskills/copy-editing), from [`coreyhaines31/marketingskills`](https://github.com/coreyhaines31/marketingskills) at `e85f3cbc2e4a79bf33b2a12e9bdd9087d414735b`.
- **Copywriting:** [`copywriting`](https://www.skills.sh/coreyhaines31/marketingskills/copywriting), from the same MIT-licensed repository and commit.

The UI/UX skill's upstream examples use a Claude plugin path. In this repository, run its local search from the root with `python3 .agents/skills/ui-ux-pro-max/scripts/search.py`. Its `design_system.py` has only a formatting cleanup: upstream trailing whitespace was removed; behavior is unchanged.
