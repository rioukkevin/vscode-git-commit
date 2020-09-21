# VSCode Git Commit Message

VSCode git commit is a VSCode extension to create nice commit message with emoji and prefix.

> That's the first release :P 

## How to use it ?

1. You have to execute the extension command with `ctrl+alt+enter` (`cmd+shift+enter` on Mac) or `click` on the icon in SouceControl Panel here   
![logo](./assets/screens/logo.png)

2. Choose wich prefix you want
![prefix](./assets/screens/list.png)

3. Complete with your commit message
![message](./assets/screens/message.png)

4. Now you're done   
![scm](./assets/screens/scm.png)

## Hmm wait, when I choose a second preset it erase the first one

Yeah I know, I add a settings to avoid this. In vscode settings, search for `VScode git commit`, there is one setting called **Vscode Git Commit: Insert Mode**.

Here you can choose to concatenate new messages or erase existing one by the new

## How to add custom prefix ?

In vscode settings, search for `VScode git commit`, there is one setting called **Vscode Git Commit: Custom Alias**.   

Edit this setting, it open it in the json file.   

With autocompletion, you can add prefix like this:   
![customPrefix](./assets/screens/customPrefix.png)

## You don't love my prefix ? No problem

In vscode settings, search for `VScode git commit`, there is one setting called **Vscode Git Commit: Predefined Prefix**. 

Here you can choose which prefix set you want. Available prefix set are:
- Angular
- Semantic prefix
- My own prefix
- None

By choosing none, you have to define your prefix with setting **Vscode Git Commit: Custom Alias**

If you want me to add more prefix set, please create an issue with source of this set.

## Changelog

**1.0.0** (*09-21-2020*): 
> First Release, I've done it !!
✨feature: Replace icon with outlined

**0.0.4** (*09-15-2020*): 
✨feature: add a mode to concatenate message with existing or replace existing
🐞fix: focus on quickPick not on scm input box when triggering extension

**0.0.3** (*08-25-2020*): 
✨feature: V0.0.3 add prefix sets

**0.0.2** (*08-23-2020*): 
✨feature: Add custom prefix setting
🐞fix: Open SCM view when prefix selector is opened, not at the end of process

**0.0.1** (*08-18-2020*): 
Initial release 

## Todo

- Add abilities to create custom message format
- Add abilities to create custom prefix from prefix selector (cf: issues [#3](https://github.com/rioukkevin/vscode-git-commit/issues/3))
- ~~Add a mode setting to choose if message is concatenate to existing or replace existing~~

## The end

If you find english error, please create an issue, I'm a french guys !

**Have a nice day and be happy !**
