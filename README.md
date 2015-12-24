# [Bemhint](https://github.com/bem/bemhint) plugins for finding empty files

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
        "bemhint-plugins-check-empty-files": {
            "techs": {
                "styl": true
            }
        }
    }
}
```
