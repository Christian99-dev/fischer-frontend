if (process.env.GATSBY_USE_LOCAL_BACKEND === "true") {
  const fs = require("fs");
  const path = require("path");
  exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions;
    const jsonDirectory = path.join(__dirname, "static", "mock", "json");
    const jsonFiles = fs.readdirSync(jsonDirectory);

    const dataWrapper = (content) => {
      return JSON.parse(`{
              "edges": [{
                "node": ${JSON.stringify(content)}
              }]
          }`);
    };

    jsonFiles.map((filename) => {
      const filePath = path.join(jsonDirectory, filename);
      const content = fs.readFileSync(filePath, "utf-8");
      obj = JSON.parse(content);
      createNode({
        ...dataWrapper(obj),
        id: createNodeId(`json-data-${filename}`),
        parent: null,
        children: [],
        internal: {
          type: path.basename(filePath, ".json"),
          content: JSON.stringify(dataWrapper(obj)),
          contentDigest: createContentDigest(dataWrapper(obj)),
        },
      });
    });
  };
}
