module.exports = {
    "overrides": [
        {
            "files": ["*.ts", "*.tsx"],
            "parserOptions": {
                "project": "./tsconfig.json",
                "tsconfigRootDir": __dirname
            },
            "parser": "@typescript-eslint/parser",
            "extends": [
                "../ts.json"
            ]
        }
    ]
}
