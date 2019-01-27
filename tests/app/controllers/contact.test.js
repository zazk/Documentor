const Contact = require("../../../app/models/contact");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../../index");
const should = chai.should();
chai.use(chaiHttp);

describe("Contact Controller Test", () => {
  beforeEach(done => {
    Contact.remove({}, err => {
      done();
    });
  });
  describe("When request /GET contacts", () => {
    it("it should GET all the books", done => {
      chai
        .request(server)
        .get("/contacts")
        .end((_, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
});
