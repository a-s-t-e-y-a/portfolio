const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);
const app = require("../app");

// test case for full signup api

describe("no data send", () => {
  it("----result when no data send in json ----", () => {
    chai
      .request(app)
      .post("/query")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.be.equal(200);
        expect(res.body).to.have.all.keys("message");
      });
  });
});

/// test case for when email not sended

describe("when email not send", () => {
  it("----when you dont send the email-----", () => {
    chai
      .request(app)
      .post("/query")
      .send({ name: "test_name", query: "test query here your query goes on" })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.be.equal(200);
        expect(res.body).to.have.all.keys("message");
      });
  });
});

/// test case for  when name not sended

describe("when name not send", () => {
  it("----when you dont send the name-----", () => {
    chai
      .request(app)
      .post("/query")
      .send({
        email_id: "test_name@gmail.com",
        query: "test query here your query goes on",
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.be.equal(200);
        expect(res.body).to.have.all.keys("message");
      });
  });
});

/// test case for when query not sended

describe("when query not send", () => {
  it("----when you dont send the query-----", () => {
    chai
      .request(app)
      .post("/query")
      .send({ name: "test_name", email_id: "test@gmail.com" })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.be.equal(200);
        expect(res.body).to.have.all.keys("message");
      });
  });
});

/// test case for when all data get sended

describe("when all data get send accurately", () => {
  it("----when you send all data accurately-----", () => {
    chai
      .request(app)
      .post("/query")
      .send({
        name: "test_name",
        email_id: "123@gmail.com",
        query: "test query here your query goes on",
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.be.equal(200);
        expect(res.body).to.deep.nested.property("message.name");
      });
  });
});
