const { resolve } = require("node:path")

const project = resolve(process.cwd(), "tsconfig.json")

module.exports = {
	root: true,
	extends: ["plugin:import/typescript", "plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/stylistic-type-checked", "prettier"],
	parser: "@typescript-eslint/parser",
	parserOptions: { project },
	settings: {
		"import/parsers": { "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"] },
		"import/resolver": { typescript: { project }, node: true },
	},
	plugins: ["@typescript-eslint", "import", "react", "react-hooks", "prettier"],
	rules: {
		"@typescript-eslint/array-type": "error",
		"@typescript-eslint/await-thenable": "error",
		"@typescript-eslint/consistent-indexed-object-style": "error",
		"@typescript-eslint/consistent-type-definitions": "error",
		"@typescript-eslint/consistent-type-imports": "error",
		"@typescript-eslint/dot-notation": "error",
		"@typescript-eslint/no-dynamic-delete": "error",
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: { attributes: false } }],
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
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
		"eqeqeq": ["error", "always"],
		"import/export": "warn",
		"import/no-anonymous-default-export": "error",
		"import/no-unused-modules": ["error", { unusedExports: true }],
		"import/order": [
			"error",
			{
				"groups": ["builtin", "external", "index", "parent", "sibling"],
				"newlines-between": "always",
				"alphabetize": { order: "asc", caseInsensitive: true, orderImportKind: "asc" },
			},
		],
		"max-lines": ["error", { skipBlankLines: true, skipComments: true }],
		"max-params": ["error", 3], // voted: https://truemoney.atlassian.net/wiki/spaces/ACWMF/pages/2266660887/Code+Conventional#function-max-params-=-3
		"no-else-return": ["error", { allowElseIf: false }],
		"no-redeclare": "error",
		"no-unreachable": "error",
		"no-unused-vars": "off", // conflict with @typescript-eslint
		"no-use-before-define": "off", // conflict with @typescript-eslint
		"object-shorthand": "error",
		"prefer-const": "error",
		"prefer-template": "error",
		"prettier/prettier": "error",
		"react-hooks/exhaustive-deps": "error",
		"react/jsx-boolean-value": "error",
		"react/jsx-curly-brace-presence": "error",
		"react/jsx-key": "error",
		"react/jsx-pascal-case": "error",
		"react/jsx-sort-props": ["error", { ignoreCase: true, reservedFirst: true }],
		"react/self-closing-comp": "error",
	},
}
