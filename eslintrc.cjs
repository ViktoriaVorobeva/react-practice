module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      project: "./tsconfig.json"
    },
    plugins: [
      "react",
      "import",
      "jsx-a11y",
      "react-hooks",
      "boundaries"
    ],
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:react-hooks/recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
      "prettier"
    ],
    rules: {
      "react-refresh/only-export-components": "off",
      "boundaries/element-types": [2, {
        default: "disallow",
        rules: [
          { from: "shared", allow: ["shared"] },
          { from: "entities", allow: ["shared"] },
          { from: "features", allow: ["shared", "entities"] },
          { from: "widgets", allow: ["shared", "features", "entities"] },
          { from: "pages", allow: ["widgets", "features", "entities", "shared"] }
        ]
      }],
    },
    settings: {
      react: {
        version: "detect"
      },
      "boundaries/elements": [
        { type: "shared", pattern: "src/shared/*" },
        { type: "entities", pattern: "src/entities/*" },
        { type: "features", pattern: "src/features/*" },
        { type: "widgets", pattern: "src/widgets/*" },
        { type: "pages", pattern: "src/pages/*" },
        { type: "app", pattern: "src/app/*" }
      ]
    }
}; 