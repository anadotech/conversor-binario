const app = require("./app");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const port = 3000;
const swaggerDocument = YAML.load("./documentacao.yml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});