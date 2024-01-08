# Git message template (default)

Added by: [Diogo-Rossi](https://github.com/Diogo-Rossi)
Source: [Source](./default.json)

Settings:

```json
"vscodeGitCommit.template": [
    "{prefix}: {message}",
],
"vscodeGitCommit.variables": {
    "prefix": "keke",
    "keke": [
        {
            "label": "✨feature",
            "detail": "Select when creating new things",
        },
        {
            "label": "🐞 fix",
            "detail": "Select when fixing a bug",
        },
        {
            "label": "📄 docs",
            "detail": "Select when editing documentation",
        },
        {
            "label": "🖥️ wip",
            "detail": "Select when work is not finished",
        },
        {
            "label": "🚅 perfs",
            "detail": "Select when working on performances",
        },
        {
            "label": "⏪ rollback",
            "detail": "Select when undoing something",
        },
        {
            "label": "🔵 other",
            "detail": "Select when fixing a bug",
        }
    ]
}
```
