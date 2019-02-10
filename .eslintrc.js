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
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "extends": [
        "prettier",
        "eslint:recommended"
    ]
};