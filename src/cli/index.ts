#!/usr/bin/env node

/**
 * CLI entrypoint for SDK Forge.
 * Minimal stub — full CLI in milestone 2.
 */

const { parseArgs } = require('node:util')

function main() {
  const args = process.argv.slice(2)

  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    console.log(`
SDK Forge — OpenAPI to typed TypeScript SDK generator

Usage:
  sdkforge generate <spec> [options]

Options:
  --output, -o   Output directory (default: ./sdk-forge-output)
  --help, -h     Show this help message

Examples:
  sdkforge generate ./petstore.yaml
  sdkforge generate ./api.json --output ./my-sdk
`)
    process.exit(0)
  }

  const command = args[0]

  if (command === 'generate') {
    const specPath = args[1]
    if (!specPath) {
      console.error('Error: spec path required')
      console.error('Usage: sdkforge generate <spec-path>')
      process.exit(1)
    }
    console.log(`SDK Forge: generating SDK from ${specPath} ...`)
    console.log('(stub — full generation in milestone 3)')
  } else {
    console.error(`Unknown command: ${command}`)
    process.exit(1)
  }
}

main()
