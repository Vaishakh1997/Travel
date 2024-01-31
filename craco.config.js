const { POSTCSS_MODES } = require("@craco/craco");
// const { ESLINT_MODES } = require("@craco/craco");
module.exports = {
  // eslint: {
  //   mode: ESLINT_MODES.file,
  // },
  style: {
    postcss: {
      mode: POSTCSS_MODES.file,
    },
  },
};
