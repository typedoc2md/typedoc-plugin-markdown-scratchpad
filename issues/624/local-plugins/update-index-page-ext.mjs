// @ts-check
import { MarkdownRendererEvent } from "typedoc-plugin-markdown";
/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.on(MarkdownRendererEvent.BEGIN, (renderer) => {
    // Find the index URL mapping
    const indexUrlMapping = renderer.urls?.find(
      (urlMapping) => urlMapping.url === renderer.project.url
    );

    if (indexUrlMapping) {
      // Replace the file extension with ".rst"
      const updatedUrlWithRstExtension = indexUrlMapping.url.replace(
        /\.[^.\s]+$/,
        ".rst"
      );

      // Update the mapping url
      indexUrlMapping.url = updatedUrlWithRstExtension;

      // The model url also needs to be updated
      indexUrlMapping.model.url = updatedUrlWithRstExtension;
    }
  });
}
