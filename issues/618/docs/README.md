# issue-618

## Interfaces

<table>
<thead>
<tr>
<th>Interface</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[Rule](interfaces/Rule.md)

</td>
<td>

Lexing rule.

Base rule looks for exact match by it's name.

If the name and the lookup string have to be different
then specify `str` property as defined in StringRule.

</td>
</tr>
<tr>
<td>

[StringRule](interfaces/StringRule.md)

</td>
<td>

String rule - looks for exact string match that
can be different from the name of the rule.

</td>
</tr>
</tbody>
</table>

## Type Aliases

<table>
<thead>
<tr>
<th>Type alias</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[Rules](type-aliases/Rules.md)

</td>
<td>

Non-empty array of rules.

Rules are processed in provided order, first match is taken.

Rules can have the same name. For example, you can have
separate rules for various keywords and use the same name "keyword".

</td>
</tr>
</tbody>
</table>

## Functions

<table>
<thead>
<tr>
<th>Function</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[createLexer](functions/createLexer.md)

</td>
<td>

Create a lexer function.

</td>
</tr>
</tbody>
</table>
