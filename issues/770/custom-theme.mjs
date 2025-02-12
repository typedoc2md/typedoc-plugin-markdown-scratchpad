import { MarkdownTheme, MarkdownThemeContext } from "typedoc-plugin-markdown";

export function load(app) {
  app.renderer.defineTheme("customTheme", MyMarkdownTheme);
}

class MyMarkdownTheme extends MarkdownTheme {
  getRenderContext(page) {
    return new MyMarkdownThemeContext(this, page, this.application.options);
  }
}

class MyMarkdownThemeContext extends MarkdownThemeContext {
  partials = {
    ...this.partials,
    signatureTitle: () => ``,
  };
}
