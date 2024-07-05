/**
 * Lexing rule.
 *
 * Base rule looks for exact match by it's name.
 *
 * If the name and the lookup string have to be different
 * then specify `str` property as defined in StringRule.
 */
export interface Rule {}

/**
 * String rule - looks for exact string match that
 * can be different from the name of the rule.
 */
export interface StringRule extends Rule {}

/**
 * Non-empty array of rules.
 *
 * Rules are processed in provided order, first match is taken.
 *
 * Rules can have the same name. For example, you can have
 * separate rules for various keywords and use the same name "keyword".
 */
export type Rules = [];
