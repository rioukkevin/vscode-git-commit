# Git message template (Diogo-Rossi)

Added by: [Diogo-Rossi](https://github.com/Diogo-Rossi)
Source: [Gist](https://gist.github.com/Diogo-Rossi/79f39b5982c7c6eb8a32c5871c926b75)

Settings:

```json
"vscodeGitCommit.template": [ "{type}: {message}" ],
"vscodeGitCommit.variables": {
    "type": [
        {
            "label": "🚧 wip",
            "detail": "Work in progress."
        },
        {
            "label": "__🔒 private",
            "detail": "Add/edit private stuff."
        },
        {
            "label": "🎨 chore",
            "detail": "Improving structure / format of the code."
        },
        {
            "label": "🎉 new",
            "detail": "Initial (NEW) commit or new scripts."
        },
        {
            "label": "✨ feat",
            "detail": "Introducing new features."
        },
        {
            "label": "🐞 fix",
            "detail": "Fixing a bug."
        },
        {
            "label": "📄 docs",
            "detail": "To edit documentation"
        },
        {
            "label": "👷 build",
            "detail": "Changes that affect the build system."
        },
        {
            "label": "♻️ refactor",
            "detail": "A code change that neither fixes a bug nor adds a feature"
        },
        {
            "label": "⏪ revert",
            "detail": "Reverting changes."
        },
        {
            "label": "💄 style",
            "detail": "Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)."
        },
        {
            "label": "⚡️ perf",
            "detail": "Improving performance"
        },
        {
            "label": "✏️ typo",
            "detail": "Fixing typos."
        },
        {
            "label": "✅ test",
            "detail": "Adding missing tests or correcting existing tests."
        },
        {
            "label": "🏷️ typing",
            "detail": "Adding or updating types (Flow, TypeScript)."
        },
        {
            "label": "💥 change!",
            "detail": "Introducing BREAKING CHANGES."
        },
        {
            "label": "🚀 release",
            "detail": "Deploying stuff to release."
        },
        {
            "label": "📦 compiled",
            "detail": "Updating compiled files or packages."
        },
        {
            "label": "⬆️ dependencies",
            "detail": "Upgrading dependencies."
        }
    ]
}
```
