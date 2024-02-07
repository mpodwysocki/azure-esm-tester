# Tester for the Azure SDKs for JavaScript ESM and CJS

This is a project which will allow you to test the Azure SDKs for JavaScript using ESM module resolution and CommonJS module resolution.

## Getting Started

1. Clone the repository
2. Run `npm install`

To test a module, change the code in the `src/index.ts` file to import the module you want to test. Then run `npm start:tsx` to run the code using [`tsx`](https://www.npmjs.com/package/tsx).  To be able to test directly for Node instead of TSX, you can run the compiled code with `npm start:build`.  This will test both for ESM and CommonJS module resolution.

## License

MIT
