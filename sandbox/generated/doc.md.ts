
export const doc = `![demo](./assets/demo.gif)

![version](https://vsmarketplacebadge.apphb.com/version-short/rioukkevin.vscode-git-commit.svg?style=for-the-badge&color=dd4739)
![install](https://vsmarketplacebadge.apphb.com/installs/rioukkevin.vscode-git-commit.svg?style=for-the-badge&color=dd4739)
![rating](https://vsmarketplacebadge.apphb.com/rating-star/rioukkevin.vscode-git-commit.svg?style=for-the-badge&color=dd4739)

# What is it ?

This extension is an extension made to formalize git commit messages. By using a template and variables, you can define how the commit message needs to looks and which data you want in this message.

By example: When you want to specify a **scope** in your commits, you can create a variable named scope in th e template like this \`{scope}\`

If you want to specify which data you want in this scope variable, you can specify it with the variable settings

\`\`\`json
{
  "scope": [
    {
      "label": "🟢 App"
    },
    {
      "label": "🟠 Api"
    },
    {
      "label": "🔵 Scripts"
    }
  ]
}
\`\`\`

I show you more on the #Settings part

<zz>toto</zz>

## How to use it ?

Use _ctrl_+_alt_+_enter_ (_cmd_+_shift_+_enter_ on Mac) or \`click\` on the icon in SouceControl
![bl](./assets/icon_black.png)
![li](./assets/icon_light.png)

# Settings

### UI

An UI is available [HERE](https://gcm-config.netlify.app/configurator), it's not the best UI but it can help you make your first configuration for the extension

**Hosted on Netlify**

### **Erase previous commit on new one** (\`vscodeGitCommit.insertMode\`)

\`\`\`json
{
  "vscodeGitCommit.insertMode": "Concatenate"
}
\`\`\`

'Concatenate' give the ability to use multiple message in the same commit where 'Replace' not

### **Create my own template message** (\`vscodeGitCommit.template\`)

\`\`\`json
{
  "vscodeGitCommit.template": [
    "{feat}({scope}): {message}"
    "by {author}"
  ]
}
\`\`\`

By defining one string, you create a line, with two strings like in the example, you define two line for the template.

You can define dynamic content by using _{_ & _}_ in doc, I called it a variable.

When triggering this extension, a value for each variable is prompt.

### **Use select or text for each variables** (\`vscodeGitCommit.messageTemplate\`)

\`\`\`json
{
  "vscodeGitCommit.variables": {
    "author": [
      {
        "label": "Devs",
        "detail": "Use when a change is made by Developers"
      },
      {
        "label": "Ops"
      }
    ],
    "feat": "keke"
  }
}
\`\`\`

For each variables defined in the template above, you can define the content:

- If not set -> Free string input
- If it's an Array -> A select of choices is displayed
- If it's a string three possibilities
  - the value is oneOf 'keke' | 'angular' | 'semantic' | 'alpha8' -> A predefined Array is associated to the variable
  - the value startWith 'files' -> An array of files with defined status is displayed as choices
  - the value looks like '<<something>>...<<something_else>>' -> a merge of array between the variable 'something' and 'something_else' is created as choices

#### If you write your own Array:

- The 'detail' property is optionnal
- (For old users) The 'id' property is now automatically generated and not used anymore by the extension

#### If you want predefined choices:

- 'keke' is the prefix I use personnally
- 'angular' is prefix specific to angular repos (HELP: if someone has a full config for angular commits, can you share it with me by creating a PR or Issue ?)
- 'alpha8' is prefix we used in the enterprise where I work
- 'semantic' is an other normalization of prefix but I lost the link associated :/

#### If you want to list files many possibilities are yours:

- 'files': All staged and changed files
- 'files.deleted': All deleted staged and changed files
- 'files.modified': All modified staged and changed files
- 'files.added': All added staged and changed files
- 'files.staged': All staged files
- 'files.staged.deleted': All deleted staged files
- 'files.staged.modified': All modified staged files
- 'files.staged.added': All added staged files
- 'files.changed': All changed files
- 'files.changed.deleted': All deleted changed files
- 'files.changed.modified': All modified changed files
- 'files.changed.added': All added changed files

# Contributing to the extension

You just have to create a pull-request 😉

# Changelog

> third release with an UI O_o and a lot of new features (btw: we reached the 5k installs THX U ♥️)

#### **3.0.0** (_02-23-2022_):

- ✨feature: use of information or error message as feedback
- ✨feature: update contributes.configuration $schema
- ✨feature: add an UI to generate settings (cf: this [UI](https://gcm-config.netlify.app/configurator))
- ✨feature: add PR template
- ✨feature: add a folder for settings sharing between users
- ✨feature: add ability to search for files using predefined variable names
- 📄docs (docs): update docs globaly and make a web version

#### **2.1.0** (_05-06-2021_):

- ✨feature: auto focus scm commit input on finish (cf: issues [#10](https://github.com/rioukkevin/vscode-git-commit/issues/10))
- ✨feature: add abilities to concatenate multiple variables in settings (cf: issues [#11](https://github.com/rioukkevin/vscode-git-commit/issues/11) & [#12](https://github.com/rioukkevin/vscode-git-commit/issues/12))

> second release OH YEAHHH !!!!

#### **2.0.0** (_04-09-2021_):

- ✨feature: add ability to use text input or select input for any variables

#### **1.1.5** (_12-18-2020_):

- 📄docs (docs): update docs with animated gif

#### **1.1.4** (_11-06-2020_):

- ✨feature: Handle multi repo case

#### **1.1.3** (_11-06-2020_):

- 🐞fix: Update icon (cf: issues [#4](https://github.com/rioukkevin/vscode-git-commit/issues/4))
- 🐞fix: Handle cancel action when typing variables (cf: issues [#5](https://github.com/rioukkevin/vscode-git-commit/issues/5))  
  ⚙️refactor: Refacto on extension command name

#### **1.1.1** (_10-20-2020_):

- 🐞fix: Update icon (cf: issues [#4](https://github.com/rioukkevin/vscode-git-commit/issues/4))

#### **1.1.0** (_10-12-2020_):

- ✨feat(workflow): Add abilities to create custom message format using simple brackets in settings, see doc
- ⚙️refactor(global): Refacto on major part of the code
- 🌈style(typescript/prettier): Pass into prettier + update ts rules

#### **1.0.1** (_09-30-2020_):

- ✨feature: On demand, add based commitizen prefix for alpha8
- 🔵other: Change default mode to concatenate settings

> First Release, I've done it !!

#### **1.0.0** (_09-21-2020_):

- ✨feature: Replace icon with outlined

#### **0.0.4** (_09-15-2020_):

- ✨feature: add a mode to concatenate message with existing or replace existing
- 🐞fix: focus on quickPick not on scm input box when triggering extension

#### **0.0.3** (_08-25-2020_):

- ✨feature: V0.0.3 add prefix sets

#### **0.0.2** (_08-23-2020_):

- ✨feature: Add custom prefix setting
- 🐞fix: Open SCM view when prefix selector is opened, not at the end of process

#### **0.0.1** (_08-18-2020_):

- Initial release
`
