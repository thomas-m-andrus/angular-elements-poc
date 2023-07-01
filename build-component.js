const fs = require("fs-extra");
const concat = require("concat");

build = async () => {
  const files = [
    "./dist/elements/runtime.js",
    "./dist/elements/polyfills.js",
    "./dist/elements/main.js",
  ];

  await fs.ensureDir("native-elements");
  await concat(files, "native-elements/awesome-componet.js");
};
build();
