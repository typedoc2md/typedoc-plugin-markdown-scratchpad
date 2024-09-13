// @ts-check
import { MarkdownRendererEvent } from "typedoc-plugin-markdown";

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.on(MarkdownRendererEvent.BEGIN, (renderer) => {
    renderer.urls = renderer.urls?.map((urlMapping) => {
      const [fileName, extension] = [
        urlMapping.url
          .slice(0, urlMapping.url.lastIndexOf("."))
          .replace(/\./g, "-"),
        urlMapping.url.slice(urlMapping.url.lastIndexOf(".") + 1),
      ];
      const newUrl = `${fileName}.${extension}`;
      urlMapping.model.url = newUrl;
      return {
        ...urlMapping,
        url: newUrl,
      };
    });
  });
}
