module.exports = {
    "parser": `babel-eslint`,
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true,
        },
    },
    plugins: [`react`],
    extends: [
        `plugin:react/recommended`,
    ],
    "settings": {
        "react": {
            "createClass": `createReactClass`,
            "pragma": `React`,
            "version": `detect`,
            "flowVersion": `0.53`,
        },
        "propWrapperFunctions": [ `forbidExtraProps` ],
    },
    "rules": {
        "no-console": `off`,
        "no-inner-declarations": `off`,
        "valid-jsdoc": `off`,
        "require-jsdoc": `off`,
        "quotes": [`off`],
        "consistent-return": [`error`],
        "arrow-body-style": [
            `error`,
            `as-needed`,
            { "requireReturnForObjectLiteral": true },
        ],
        "jsx-quotes": [`error`, `prefer-double`],
        "semi": [`off`, `never`],
        "object-curly-spacing": [`error`, `always`],
        "comma-dangle": [
            `error`,
            {
                "arrays": `always-multiline`,
                "objects": `always-multiline`,
                "imports": `always-multiline`,
                "exports": `always-multiline`,
                "functions": `ignore`,
            },
        ],
        "react/prop-types": [
            `error`,
            {
                "ignore": [`children`],
            },
        ],
    },
};
