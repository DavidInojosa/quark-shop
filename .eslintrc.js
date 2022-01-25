module.exports = {
    "env": {
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "plugin:@typescript-eslint/recommended"
    ],
    "globals": {
      "__DEV__": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint"
    ],
    "rules": {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "object-curly-newline" : "off",
      "react/jsx-props-no-spreading": "off",
      "react/function-component-definition" :"off",
      "react/no-unstable-nested-components" : "off",
      "import/prefer-default-export" : "off",
      "operator-linebreak" : "off",
      "no-console": ["error", { allow: ["tron"] }],
      "arrow-parens": "off",
      "react/prop-types": "off",
      "react/jsx-filename-extension": [
        1,
        {
        "extensions": [
          ".tsx"
        ]
        }
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never",
          "tsx": "never"
        }
      ],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": [
        "error"
      ],
      "react/react-in-jsx-scope": "off"
    },
    "settings": {
      "import/resolver": {
        "typescript": {}
      }
    }
}
