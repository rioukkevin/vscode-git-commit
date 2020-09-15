# VSCode Git Commit (BETA)

VSCode git commit is a VSCode extension to create nice commit message with emoji and prefix.

> This is a beta version, more features are coming

## How to use it ?

1. You have to execute the extension command with `ctrl+alt+enter` (`shift+cmd+enter` on Mac) or `click` on the icon in SouceControl Panel here   
![logo](./assets/screens/logo.png)

2. Choose wich prefix you want
![prefix](./assets/screens/list.png)

3. Complete with your commit message
![message](./assets/screens/message.png)

4. Now you're done   
![scm](./assets/screens/scm.png)

## How to add custom prefix ?

In vscode settings, search for `VScode git commit`, there is one setting called **Vscode Git Commit: Custom Alias**.   

Edit this setting, it open it in the json file.   

With autocompletion, you can add prefix like this:   
![customPrefix](./assets/screens/customPrefix.png)

## You don't love my prefix ? No problem

In vscode settings, search for `VScode git commit`, there is one setting called **Vscode Git Commit: Predefined Prefix**. 

Here you can choose which prefix set you want. Available prefix sets are:
- Angular
- Semantic prefix
- My own prefix
- None

By choosing none, you have to define your prefix with setting **Vscode Git Commit: Custom Alias**

If you want me to add more prefix set, please create an issue with source of this set.

## Changelog

**0.0.3** (*08-25-2020*): 
✨feature: V0.0.3 add prefix sets

**0.0.2** (*08-23-2020*): 
✨feature: Add custom prefix setting
🐞fix: Open SCM view when prefix selector is opened, not at the end of process

**0.0.1** (*08-18-2020*): 
Initial release 

## Todo

- Add abilities to create custom message format
- Add abilities to create custom prefix from prefix selector
- Add a mode setting to choose if message is concatenate to existing or replace existing

## The end

If you find english error, please create an issue, I'm a french guys !

**Have a nice day and be happy !**
