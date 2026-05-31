import { parseOpenAPI } from '../src/parser/openapi'
import { generateTypes } from '../src/generator/types'
import * as fs from 'fs'
import * as path from 'path'

describe('OpenAPI Parser', () => {
  const specPath = path.join(__dirname, 'specs/petstore.yaml')
  const specContent = fs.readFileSync(specPath, 'utf-8')

  it('should parse the petstore spec', () => {
    const doc = parseOpenAPI(specContent)
    expect(doc.openapi).toBe('3.0.3')
    expect(doc.info.title).toBe('Petstore API')
    expect(doc.paths).toBeDefined()
    expect(doc.paths['/pets']).toBeDefined()
  })
})

describe('Type Generator', () => {
  it('should generate type stubs for schemas', () => {
    const doc = parseOpenAPI(fs.readFileSync(specPath, 'utf-8'))
    const types = generateTypes(doc)
    expect(types).toContain('Pet')
    expect(types).toContain('CreatePetRequest')
  })
})
