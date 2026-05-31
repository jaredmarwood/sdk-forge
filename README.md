# SDK Forge

OpenAPI to typed TypeScript client SDK generator.

## Features

- Parse OpenAPI 3.x specs into a structured AST
- Generate TypeScript interfaces and types from schema definitions
- Build typed HTTP client layers (Axios / Fetch)
- Developer-first CLI ergonomics
- Correctness-first code generation

## Getting Started

```bash
# Install
npm install -g @sdkforge/core

# Generate SDK from a spec
sdkforge generate ./petstore.yaml --output ./my-sdk
```

## Project Structure

```
sdk-forge/
├── src/
│   ├── cli/          # CLI entrypoint and argument parsing
│   ├── parser/       # OpenAPI spec parser
│   ├── generator/    # Type generation engine
│   └── client/       # HTTP client layer builder
├── tests/            # Test suites
├── bin/              # Executable scripts
└── spec/             # Sample OpenAPI specs for testing
```

## Development

```bash
npm install
npm run build
npm test
npm run lint
```

## Contributing

Contributions are welcome. Please open an issue or submit a PR.

## License

MIT
