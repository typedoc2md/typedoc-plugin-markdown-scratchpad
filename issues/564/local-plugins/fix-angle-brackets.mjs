// @ts-check
import { MarkdownPageEvent } from "typedoc-plugin-markdown";
/**
 * @param {import('typedoc-plugin-markdown').MarkdownPageEvent} app
 */
export function load(app) {
  app.renderer.on(MarkdownPageEvent.BEGIN, (page) => {

   // page.contents = page.contents.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}
