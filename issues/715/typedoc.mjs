const config = {
  entryPoints: ["src/index.ts"],
  plugin: ["typedoc-plugin-markdown"],
  readme: "none",
  hidePageHeader: true,
  cleanOutputDir: true,
  pageTitleTemplates: {
    member: (args) => `${args.group.slice(0, -1)}: ${args.name}`,
  },
  outputs: [
    {
      name: "html",
      path: "./docs/html",
    },
    {
      name: "markdown",
      path: "./docs/md",
    },
  ],
  gitRevision: "main",
};
export default config;
