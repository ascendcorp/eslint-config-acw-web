const { resolve } = require("node:path")

const project = resolve(process.cwd(), "tsconfig.json")

module.exports = {
	root: true,
	extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react/jsx-runtime", "plugin:import/recommended", "plugin:import/typescript", "plugin:@typescript-eslint/strict-type-checked", "plugin:@typescript-eslint/stylistic-type-checked", "plugin:typescript-sort-keys/recommended", "plugin:jsx-a11y/strict", "prettier"],
	parser: "@typescript-eslint/parser",
	parserOptions: { project },
	settings: {
		"import/parsers": { "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"] },
		"import/resolver": { typescript: { project }, node: true },
		"react": { version: "detect" },
	},
	plugins: ["@typescript-eslint", "import", "react", "react-hooks", "prettier", "typescript-sort-keys"],
	rules: {
		"@typescript-eslint/array-type": "error",
		"@typescript-eslint/await-thenable": "error",
		"@typescript-eslint/consistent-indexed-object-style": "error",
		"@typescript-eslint/consistent-type-definitions": "error",
		"@typescript-eslint/consistent-type-imports": "error",
		"@typescript-eslint/dot-notation": "error",
		"@typescript-eslint/no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }], // NOTE: already in strict-type-checked but without ignoreArrowShorthand=true
		"@typescript-eslint/no-dynamic-delete": "error",
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: { attributes: false } }],
		"@typescript-eslint/no-shadow": "error",
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		"@typescript-eslint/no-unsafe-argument": "off",
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unsafe-call": "off",
		"@typescript-eslint/no-unsafe-enum-comparison": "off",
		"@typescript-eslint/no-unsafe-member-access": "off",
		"@typescript-eslint/no-unsafe-return": "off",
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/non-nullable-type-assertion-style": "error",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-includes": "error",
		"@typescript-eslint/prefer-literal-enum-member": "error",
		"@typescript-eslint/prefer-nullish-coalescing": "error",
		"@typescript-eslint/prefer-optional-chain": "error",
		"@typescript-eslint/require-await": "error",
		"@typescript-eslint/unbound-method": "warn",
		"array-callback-return": "error",
		"complexity": "error",
		"eqeqeq": ["error", "always"],
		"import/export": "warn",
		"import/no-anonymous-default-export": "error",
		"import/no-mutable-exports": "error",
		"import/no-named-as-default": "off",
		"import/no-named-as-default-member": "off",
		"import/no-unused-modules": ["error", { unusedExports: true }],
		"import/order": ["error", { "groups": ["builtin", "external", "index", "parent", "sibling"], "newlines-between": "always", "alphabetize": { order: "asc", caseInsensitive: true, orderImportKind: "asc" } }],
		"jsx-a11y/click-events-have-key-events": "off", // This is too much.
		"jsx-a11y/no-autofocus": "off", // We don't usually use autofocus, but when we do, it's because we really need it.
		"max-depth": "error",
		"max-lines": ["error", { skipBlankLines: true, skipComments: true }],
		"max-params": ["error", 3], // voted: https://truemoney.atlassian.net/wiki/spaces/ACWMF/pages/2266660887/Code+Conventional#function-max-params-=-3
		"member-access": "off",
		"no-else-return": ["error", { allowElseIf: false }],
		"no-nested-ternary": "error",
		"no-param-reassign": "error",
		"no-redeclare": "error",
		"no-shadow": "off", // conflict with @typescript-eslint
		"no-unneeded-ternary": "error",
		"no-unreachable": "error",
		"no-unused-expressions": "error",
		"no-unused-vars": "off", // conflict with @typescript-eslint
		"no-use-before-define": "off", // conflict with @typescript-eslint
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-rename": "error",
		"no-var": "error",
		"object-shorthand": "error",
		"prefer-const": "error",
		"prefer-template": "error",
		"prettier/prettier": "error",
		"react-hooks/exhaustive-deps": "error",
		"react-hooks/rules-of-hooks": "error",
		"react/destructuring-assignment": ["error", "always", { destructureInSignature: "always" }],
		"react/display-name": "off",
		"react/jsx-boolean-value": "error",
		"react/jsx-curly-brace-presence": "error",
		"react/jsx-key": "error",
		"react/jsx-pascal-case": "error",
		"react/jsx-sort-props": ["error", { ignoreCase: true, reservedFirst: true }],
		"react/no-multi-comp": "error",
		"react/no-unused-prop-types": "error",
		"react/prop-types": "off",
		"react/self-closing-comp": "error",
		"typescript-sort-keys/interface": "error",
		"typescript-sort-keys/string-enum": "error",
	},
	env: { browser: true, node: true, jest: true },
}
