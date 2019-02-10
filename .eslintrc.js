module.exports = {
    "plugins": ["prettier"],
    "rules": {
        "prettier/prettier": "error",
    },
    "env": {
        "browser": true,
        "node": true,
        "jest": true,
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "extends": [
        "prettier",
        "eslint:recommended"
    ]
};