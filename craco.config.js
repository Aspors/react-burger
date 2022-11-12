const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@components": resolvePath("./src/components"),
      "@consts": resolvePath("./src/utils/consts"),
      "@types": resolvePath("./src/utils/types"),
      "@sevices": resolvePath("./src/services"),
    },
  },
};
