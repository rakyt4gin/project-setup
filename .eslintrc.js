module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },

    env: {
        browser: true,
        node: true,
        es6: true,
    },

    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                extensions: [".ts", ".tsx"],
            },
        },
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "error",
    },
};
