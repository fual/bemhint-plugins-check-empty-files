# [Bemhint](https://github.com/bem/bemhint) plugins for finding empty files

## Config example

```json
{
    "levels": [
        "*.blocks"
    ],

    "excludePaths": [
        "node_modules/**"
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
