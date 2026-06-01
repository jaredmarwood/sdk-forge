import type { OpenAPIV3 } from 'openapi-types'

/**
 * Generate TypeScript types from an OpenAPI AST.
 * Currently a stub — full implementation in milestone 3.
 */
export function generateTypes(spec: OpenAPIV3.Document): string {
  const interfaces: string[] = []

  if (spec.components?.schemas) {
    for (const [name] of Object.entries(spec.components.schemas)) {
      interfaces.push(`export interface ${name} { /* TODO: implement generation */ }`)
    }
  }

  return interfaces.join('\n\n')
}
