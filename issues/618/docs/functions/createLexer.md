[issue-618](../README.md) / createLexer

# Function: createLexer()

> **createLexer**(`rules`, `options`?): `void`

Defined in: [index.ts:39](https://github.com/typedoc2md/typedoc-plugin-markdown-scratchpad/blob/48b5b9ad70e31a4945755ce259ea933839e4cb5c/issues/618/src/index.ts#L39)

Create a lexer function.

## Parameters

### rules

\[\]

Non-empty array of lexing rules.

Rules are processed in provided order, first match is taken.

Rules can have the same name - you can have separate rules
for keywords and use the same name "keyword" for example.

### options?

`any`

Lexer options object.

## Returns

`void`
