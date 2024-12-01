[issue-618](../README.md) / createLexer

# Function: createLexer()

> **createLexer**(`rules`, `options`?): `void`

Create a lexer function.

## Parameters

### rules

[]

Non-empty array of lexing rules.

Rules are processed in provided order, first match is taken.

Rules can have the same name - you can have separate rules
for keywords and use the same name "keyword" for example.

### options?

`any`

Lexer options object.

## Returns

`void`

## Defined in

[index.ts:39](https://github.com/typedoc2md/typedoc-plugin-markdown-scratchpad/blob/fa9f3ee7e217f1f8ff35877beda19f3316c6e9ca/issues/618/src/index.ts#L39)
