# VSCode Git Commit Message

VSCode git commit is a VSCode extension to create nice commit message with emoji and prefix.

> That's the first release :P

![version](https://vsmarketplacebadge.apphb.com/version-short/rioukkevin.vscode-git-commit.svg?style=for-the-badge&color=dd4739)
![install](https://vsmarketplacebadge.apphb.com/installs/rioukkevin.vscode-git-commit.svg?style=for-the-badge&color=dd4739)
![rating](https://vsmarketplacebadge.apphb.com/rating-star/rioukkevin.vscode-git-commit.svg?style=for-the-badge&color=dd4739)

## How to use it ?

Use `ctrl+alt+enter` (`cmd+shift+enter` on Mac) or `click` on the icon in SouceControl
<img src="./assets/icon_black.png" width="20">
<img src="./assets/icon_light.png" width="20">

![howto](./assets/screens/howto.gif)

## Settings

### 1. **Erase previous commit on new one** (`vscodeGitCommit.insertMode`)

![scm](./assets/settings/insertMode.png)

Options:

- Concatenate
- Replace

### 2. **Create my own template message** (`vscodeGitCommit.template`)

![scm](./assets/settings/template.png)

> Each entry of the array is a new line in message template

> Variables are automatically prompted

> You can create as many lines as you want and as many variables as you want.

### 3. **Use select or text for each variables** (`vscodeGitCommit.messageTemplate`)

![scm](./assets/settings/variables.png)

> Each entry of the array is a variable used in template

> Variables are automatically prompted, if you give an array of elements, a select is displayed, else if you give a string, it takes one of presets saved in the extension (in the future files list for example)
> Available presets for variables are **alpha8 semantic keke angular**

> You can create as many lines as you want and as many variables as you want.

> If a variable is not defined in this setting but defined in template setting, a text input is displayed

## Changelog

**2.0.0** (_04-09-2021_):

> second release OH YEAHHH !!!!

✨feature: add ability to use text input or select input for any variables

**1.1.5** (_12-18-2020_):  
📄docs (docs): update docs with animated gif

**1.1.4** (_11-06-2020_):  
✨feature: Handle multi repo case

**1.1.3** (_11-06-2020_):  
🐞fix: Update icon (cf: issues [#4](https://github.com/rioukkevin/vscode-git-commit/issues/4))  
🐞fix: Handle cancel action when typing variables (cf: issues [#5](https://github.com/rioukkevin/vscode-git-commit/issues/5))  
⚙️refactor: Refacto on extension command name

**1.1.1** (_10-20-2020_):
🐞fix: Update icon (cf: issues [#4](https://github.com/rioukkevin/vscode-git-commit/issues/4))

**1.1.0** (_10-12-2020_):  
✨feat(workflow): Add abilities to create custom message format using simple brackets in settings, see doc  
⚙️refactor(global): Refacto on major part of the code  
🌈style(typescript/prettier): Pass into prettier + update ts rules

**1.0.1** (_09-30-2020_):  
✨feature: On demand, add based commitizen prefix for alpha8  
🔵other: Change default mode to concatenate settings

**1.0.0** (_09-21-2020_):

> First Release, I've done it !!

✨feature: Replace icon with outlined

**0.0.4** (_09-15-2020_):  
✨feature: add a mode to concatenate message with existing or replace existing  
🐞fix: focus on quickPick not on scm input box when triggering extension

**0.0.3** (_08-25-2020_):  
✨feature: V0.0.3 add prefix sets

**0.0.2** (_08-23-2020_):  
✨feature: Add custom prefix setting  
🐞fix: Open SCM view when prefix selector is opened, not at the end of process

**0.0.1** (_08-18-2020_):  
Initial release

## Todo

- Add abilities to create custom prefix from prefix selector (cf: issues [#3](https://github.com/rioukkevin/vscode-git-commit/issues/3))

## The end

If you find english error, please create an issue, I'm a french guys !

**Have a nice day and be happy !**
