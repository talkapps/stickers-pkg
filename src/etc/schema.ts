/**
 * Schema for stickers.yml.
 */
export default {
  type: 'object',
  patternProperties: {
    // Pack IDs are 32 alphanumeric characters.
    '^[\\dA-Za-z]{32}$': {
      type: 'object',
      properties: {
        // Pack keys are 64 alphanumeric characters.
        key: {
          type: 'string',
          pattern: '^[\\dA-Za-z]{64}$',
          errorMessage: '"key" should be a 64-character string consisting of alphanumeric characters only.'
        },
        source: {
          type: 'string',
          errorMessage: '"source" should be a string.'
        },
        tags: {
          type: 'array',
          items: {
            type: 'string',
            errorMessage: {
              type: 'Each tag should be a string.'
            }
          },
          errorMessage: {
            type: '"tags" should be an array.'
          }
        },
        nsfw: {
          type: 'boolean',
          errorMessage: '"nsfw" should be a boolean.'
        },
        original: {
          type: 'boolean',
          errorMessage: '"original" should be a boolean.'
        },
        animated: {
          type: 'boolean',
          errorMessage: '"animated" should be a boolean.'
        },
        editorschoice: {
          type: 'boolean',
          errorMessage: '"editorschoice" should be a boolean.'
        }
      },
      // The only required field is 'key' and any additional fields not defined
      // in the spec are forbidden.
      required: ['key'],
      additionalProperties: false
    }
  },
  additionalProperties: false,
  errorMessage: {
    // N.B. If a sticker pack ID does not match the above pattern, it will be
    // counted as an "additional property" in the root object, and will throw an
    // additionalProperties error.
    additionalProperties: 'A sticker pack ID should be a 32-character string consisting of alphanumeric characters only.'
  }
};
