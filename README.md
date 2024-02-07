# Tester for the Azure SDKs for JavaScript ESM and CJS

This is a project which will allow you to test the Azure SDKs for JavaScript using ESM module resolution and CommonJS module resolution.

## Getting Started

1. Clone the repository
2. Run `npm install`

To test a module, change the code in the `src/index.ts` file to import the module you want to test. Then run `npm start:tsx` to run the code using [`tsx`](https://www.npmjs.com/package/tsx).  To be able to test directly for Node instead of TSX, you can run the compiled code with `npm start:build`.  This will test both for ESM and CommonJS module resolution.

To test using the Azure Core packages, you will need to reference them directly using `npm pack` to create the archive and then use `npm install <path to archive>` to install the package.  This should be done then for every package that you should need such as `@azure/core-client`, `@azure/core-rest-pipeline`, `@azure/core-auth`, `@azure/logger`, etc.

## License

MIT
