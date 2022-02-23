# Git message template (Wilson Mar)

Added by: [jycouet](https://github.com/jycouet)
Source: [Source](https://wilsonmar.github.io/git-messages/)

Settings:

```json
"vscodeGitCommit.template": ["{icon} {type}: {message}"],
"vscodeGitCommit.variables": {
  "icon": "aliasesIcons",
  "aliasesIcons": [
    {
      "label": ":tada:",
      "detail": "🎉 = Initial (NEW) commit."
    },
    {
      "label": ":construction:",
      "detail": "🚧 = Work in progress."
    },
    {
      "label": ":ambulance:",
      "detail": "🚑 = Critical hotfix."
    },
    {
      "label": ":sparkles:",
      "detail": "✨ = Introducing new features."
    },
    {
      "label": ":beers:",
      "detail": "🍻 = Writing code drunkenly."
    },
    {
      "label": ":hankey:",
      "detail": "💩 = Writing bad code that needs to be improved."
    },
    {
      "label": ":rotating_light:",
      "detail": "🚨 :rotating_light: = Removing linter warnings."
    },
    {
      "label": ":rewind:",
      "detail": "⏪ = Reverting changes."
    },
    {
      "label": ":lock:",
      "detail": "🔒 = Fixing security issues."
    },
    {
      "label": ":zap:",
      "detail": "⚡️ = Improving performance."
    },
    {
      "label": ":children_crossing:",
      "detail": "🚸 = Improving user experience / usability."
    },
    {
      "label": ":bug:",
      "detail": "🐛 = Fixing a bug."
    },
    {
      "label": ":bulb:",
      "detail": "💡 = Documenting source code"
    },
    {
      "label": ":white_check_mark:",
      "detail": "✅ = Updating tests."
    },
    {
      "label": ":ok_hand:",
      "detail": "👌 = Updating code due to code review changes."
    },
    {
      "label": ":clown_face:",
      "detail": "🤡 = Mocking things."
    },
    {
      "label": ":boom:",
      "detail": "💥 = Introducing breaking changes."
    },
    {
      "label": ":arrow_up:",
      "detail": "⬆️ = Upgrading dependencies."
    },
    {
      "label": ":fire:",
      "detail": "🔥 = Removing code or files."
    },
    {
      "label": ":pencil2:",
      "detail": "✏️ = Fixing typos."
    },
    {
      "label": ":loud_sound:",
      "detail": "🔊 = Adding logs."
    },
    {
      "label": ":mute:",
      "detail": "🔇 = Removing logs."
    },
    {
      "label": ":art:",
      "detail": "🎨 = Improving structure / format of the code."
    },
    {
      "label": ":recycle:",
      "detail": "♻️ = Refactoring code logic."
    },
    {
      "label": ":construction_worker:",
      "detail": "👷 = Adding CI build system."
    },
    {
      "label": ":rocket:",
      "detail": "🚀 = Deploying stuff."
    },
    {
      "label": ":label:",
      "detail": "🏷️ = Adding or updating types (Flow, TypeScript)"
    },
    {
      "label": ":card_file_box:",
      "detail": "🗃 = Performing database related changes."
    },
    {
      "label": ":lipstick:",
      "detail": "💄 = Updating the UI and style files."
    },
    {
      "label": ":twisted_rightwards_arrows:",
      "detail": "🔀 = Merging branches."
    },
    {
      "label": ":package:",
      "detail": "📦 = Updating compiled files or packages."
    },
    {
      "label": ":see_no_evil:",
      "detail": "🙈 = Adding or updating a .gitignore file"
    }
  ],
  "type": "aliasesType",
  "aliasesType": [
    {
      "label": "NEW"
    },
    {
      "label": "REMOVE"
    },
    {
      "label": "RENAME"
    },
    {
      "label": "DOC"
    },
    {
      "label": "UPDATE"
    },
    {
      "label": "IMPROVE"
    },
    {
      "label": "FIX"
    },
    {
      "label": "RELEASE"
    }
  ]
}
```
