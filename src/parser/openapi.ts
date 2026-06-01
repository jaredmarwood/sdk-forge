import type { OpenAPIV3 } from 'openapi-types'
import { parse as parseYaml } from 'yaml'

/**
 * Parse an OpenAPI 3.x document from a YAML or JSON string.
 * Returns the parsed Document AST.
 */
export function parseOpenAPI(input: string): OpenAPIV3.Document {
  return parseYaml(input) as OpenAPIV3.Document
}
