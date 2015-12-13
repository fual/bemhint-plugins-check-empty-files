# [Bem hint](https://github.com/bem/bemhint) plugin for finding empty files

## Config example

```json
{
    "levels": [
        "*.blocks"
    ],

    "excludePaths": [
        "node_modueles/**"
    ],

    "plugins": {
        "bemhint-plugin-check-empty-files": {
            "techs": {
                "styl": true
            }
        }
    }
}
```
