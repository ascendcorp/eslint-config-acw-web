// const typescriptSortKeys = require("eslint-plugin-typescript-sort-keys")

module.exports = {
	rules: {
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-misused-promises": "off",
		"@typescript-eslint/prefer-nullish-coalescing": "off",
		"@typescript-eslint/unbound-method": "off",
		"@typescript-eslint/array-type": "error",
		"@typescript-eslint/await-thenable": "error",
		"@typescript-eslint/consistent-indexed-object-style": "error",
		"@typescript-eslint/consistent-type-definitions": "error",
		"@typescript-eslint/consistent-type-imports": "error",
		"@typescript-eslint/dot-notation": "error",
		"@typescript-eslint/no-confusing-void-expression": [
			"error",
			{
				ignoreArrowShorthand: true,
			},
		],
		"@typescript-eslint/no-dynamic-delete": "error",
		"@typescript-eslint/no-floating-promises": "error",

		"@typescript-eslint/no-misused-promises": [
			"error",
			{
				checksVoidReturn: {
					attributes: false,
				},
			},
		],
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
		"max-depth": "error",
		"max-lines": [
			"error",
			{
				skipBlankLines: true,
				skipComments: true,
			},
		],
		"max-params": ["error", 3],
		"member-access": "off",
		"no-else-return": [
			"error",
			{
				allowElseIf: false,
			},
		],
		"no-nested-ternary": "error",
		"no-param-reassign": "error",
		"no-redeclare": "error",
		"no-shadow": "off",
		"no-unneeded-ternary": "error",
		"no-unreachable": "error",
		"no-unused-expressions": "error",
		"no-unused-vars": "off",
		"no-use-before-define": "off",
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
		"react/destructuring-assignment": [
			"error",
			"always",
			{
				destructureInSignature: "always",
			},
		],
		"react/display-name": "off",
		"react/jsx-boolean-value": "error",
		"react/jsx-curly-brace-presence": "error",
		"react/jsx-key": "error",
		"react/jsx-pascal-case": "error",
		"react/jsx-sort-props": [
			"error",
			{
				ignoreCase: true,
				reservedFirst: true,
			},
		],
		"react/no-multi-comp": "error",
		"react/no-unused-prop-types": "error",
		"react/prop-types": "off",
		"react/self-closing-comp": "error",

		// "typescript-sort-keys/interface": "error",
		// "typescript-sort-keys/string-enum": "error",

		// "import/export": "warn",
		// "import/no-anonymous-default-export": "error",
		// "import/no-mutable-exports": "error",
		// "import/no-named-as-default": "off",
		// "import/no-named-as-default-member": "off",

		// "import/no-unused-modules": [
		// 	"error",
		// 	{
		// 		unusedExports: true,
		// 	},
		// ],

		// "import/order": [
		// 	"error",
		// 	{
		// 		"groups": ["builtin", "external", "index", "parent", "sibling"],
		// 		"newlines-between": "always",

		// 		"alphabetize": {
		// 			order: "asc",
		// 			caseInsensitive: true,
		// 			orderImportKind: "asc",
		// 		},
		// 	},
		// ],
	},
}
