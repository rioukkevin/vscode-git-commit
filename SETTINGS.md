# Settings

### UI

An UI is available [HERE](https://gcm-config.netlify.app/configurator), it's not the best UI but it can help you make your first configuration for the extension

**Hosted on Netlify**

### **Erase previous commit on new one** (`vscodeGitCommit.insertMode`)

```json
{
  "vscodeGitCommit.insertMode": "Concatenate"
}
```

'Concatenate' give the ability to use multiple message in the same commit where 'Replace' not

### **Create my own template message** (`vscodeGitCommit.template`)

```json
{
  "vscodeGitCommit.template": [
    "{feat}({scope}): {message}"
    "by {author}"
  ]
}
```

By defining one string, you create a line, with two strings like in the example, you define two line for the template.

You can define dynamic content by using _{_ & _}_ in doc, I called it a variable.

When triggering this extension, a value for each variable is prompt.

### **Use select or text for each variables** (`vscodeGitCommit.variables`)

```json
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
```

For each variables defined in the template above, you can define the content:

- If not set -> Free string input
- If it's an Array -> A select of choices is displayed
- If it's a string three possibilities
  - the value is oneOf 'keke' | 'angular' | 'semantic' | 'alpha8' -> A predefined Array is associated to the variable
  - the value startWith 'files' -> An array of files with defined status is displayed as choices
  - the value looks like '<<something>>...<<something_else>>' -> a merge of array between the variable 'something' and 'something_else' is created as choices

#### If you write your own Array

- The 'detail' property is optionnal
- The 'label' property is used as the content include in template
- (For old users) The 'id' property is now automatically generated and not used anymore by the extension

#### If you want predefined choices

- 'keke' is the prefix I use personnally
- 'angular' is prefix specific to angular repos (HELP: if someone has a full config for angular commits, can you share it with me by creating a PR or Issue ?)
- 'alpha8' is prefix we used in the enterprise where I work
- 'semantic' is an other normalization of prefix but I lost the link associated :/

#### If you want to list files many possibilities are yours

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

#### If you want to add branch name in commit, you can use this

'branch': Show you a select with the choice between short and long name for current branch

### **Define some default values for free input variables** (`vscodeGitCommit.defaultVariablesValues`)

```json
{
  "vscodeGitCommit.defaultVariablesValues": {
    "author": "@RIOU Kevin"
  }
}
```

For each variables defined in the template not used in `variables` setting, you can define a default value pretyped in the input

In the upside example, for the variable `author`, the input is prefill with `@RIOU Kevin`.

### **Define titles display on the input** (`vscodeGitCommit.variablesDisplayTitles`)

```json
{
  "vscodeGitCommit.variablesDisplayTitles": {
    "author": "Fill the pseudo of the person commiting with an @"
  }
}
```

For each variables prompt, you can define a default value pretyped in the input

In the upside example, for the variable `author`, the input will show the title `Fill the pseudo of the person commiting with an @`.
