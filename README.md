# [Bemhint](https://github.com/bem/bemhint) plugins for finding empty files

## Config example

```js
module.exports = {
    levels: [
        "*.blocks"
    ],

    excludePaths: [
        "node_modueles/**"
    ],

    plugins: {
        "bemhint-plugins-check-file-entity": {
            techs: {
                "styl": true
            }
        }
    }
};
```
