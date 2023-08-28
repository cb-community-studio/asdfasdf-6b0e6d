const users = require("./users/users.service.js");
const asdadsf = require("./asdadsf/asdadsf.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(asdadsf);
  // ~cb-add-configure-service-name~
};
