const Contact = require("../controllers/contact");

module.exports = api => {
  api.route("/contacts").get(Contact.list);
  api.route("/contacts/:contactId").get(Contact.get);
  api.route("/contacts/:contactId").put(Contact.put);
  api.route("/contacts/").post(Contact.post);
  api.route("/contacts/:contactId").delete(Contact.delete);
};
