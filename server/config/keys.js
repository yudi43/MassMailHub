// keys.js - figure out what set of credentials to return

if (process.env.NODE_ENV === "production") {
  // in production -- return the prod keys
  module.exports = require("./prod");
} else {
  // in dev -- return the dev keys
  module.exports = require("./dev");
}
