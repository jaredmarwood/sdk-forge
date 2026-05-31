import type { Document } from 'openapi-types'

/**
 * Parse an OpenAPI 3.x document from a YAML or JSON string.
 * Returns the parsed Document AST.
 */
export function parseOpenAPI(input: string): Document {
  // Stub: YAML/JSON parsing will be implemented in the next milestone
  const yaml = require('yaml')
  return yaml.parse(input) as Document
}
