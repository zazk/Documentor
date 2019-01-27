const assert = require("assert");
const sinon = require("sinon");
const Contact = require("../../../app/models/contact");

describe("Contact Controller testing", () => {
  describe("When we get all Contacts", () => {
    it("Should call find once", done => {
      var TodoMock = sinon.mock(Contact);
      TodoMock.expects("find").yields(null, "CONTACTS");
      Contact.find((_, result) => {
        TodoMock.verify();
        TodoMock.restore();
        assert.equal("CONTACTS", result, "Test fails due to unexpected result");
        done();
      });
    });
  });
});
