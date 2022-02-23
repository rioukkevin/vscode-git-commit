![demo](./assets/demo.gif)

![version](https://vsmarketplacebadge.apphb.com/version-short/rioukkevin.vscode-git-commit.svg?style=for-the-badge&color=dd4739)
![install](https://vsmarketplacebadge.apphb.com/installs/rioukkevin.vscode-git-commit.svg?style=for-the-badge&color=dd4739)
![rating](https://vsmarketplacebadge.apphb.com/rating-star/rioukkevin.vscode-git-commit.svg?style=for-the-badge&color=dd4739)

# What is it ?

This extension is an extension made to formalize git commit messages. By using a template and variables, you can define how the commit message needs to looks and which data you want in this message.

By example: When you want to specify a **scope** in your commits, you can create a variable named scope in th e template like this `{scope}`

If you want to specify which data you want in this scope variable, you can specify it with the variable settings

```json
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
```

I show you more on the #Settings part

<zz>toto</zz>

## How to use it ?

Use _ctrl_+_alt_+_enter_ (_cmd_+_shift_+_enter_ on Mac) or `click` on the icon in SouceControl
![bl](./assets/icon_black.png)
![li](./assets/icon_light.png)
