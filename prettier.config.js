module.exports = {
    tabWidth: 4,
    printWidth: 120,
    overrides: [
        {
            files: "*.js",
            options: {
                semi: true,
                trailingComma: "es5",
                singleQuote: false,
                arrowParens: "always",
            },
        },
    ],
};
