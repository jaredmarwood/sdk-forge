import type { Document } from 'openapi-types'

/**
 * Generate TypeScript types from an OpenAPI AST.
 * Currently a stub — full implementation in milestone 3.
 */
export function generateTypes(spec: Document): string {
  const interfaces: string[] = []

  if (spec.components?.schemas) {
    for (const [name, schema] of Object.entries(spec.components.schemas)) {
      interfaces.push(`export interface ${name} { /* TODO: implement generation */ }`)
    }
  }

  return interfaces.join('\n\n')
}
