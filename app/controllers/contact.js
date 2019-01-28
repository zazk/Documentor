const Contact = require("../models/contact");

const queryContact = (res, query = {}) => {
  Contact.find(query)
    .select("id name email city, state")
    .then(contacts => {
      res.json(contacts);
    })
    .catch(err => {
      console.error(err);
      res.status(422).send(err.errors);
    });
};

exports.list = (_, res) => {
  queryContact(res);
};

exports.query = (req, res) => {
  const query = req.query || {};
  console.log(req.query);
  queryContact(res, query);
};

exports.post = (req, res) => {
  const data = Object.assign({}, req.body) || {};
  // To avoid duplicate records. You can use Contact.create and validate manually duplicate.
  Contact.findOneAndUpdate(data, data, { new: true, upsert: true })
    .then(contact => {
      res.json(contact);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
};

exports.get = (req, res) => {
  Contact.findById(req.params.contactId)
    .then(contact => {
      res.json(contact);
    })
    .catch(err => {
      console.error(err);
      res.status(422).send(err.errors);
    });
};

exports.put = (req, res) => {
  const data = req.body || {};

  Contact.findByIdAndUpdate({ _id: req.params.contactId }, data, { new: true })
    .then(contact => {
      if (!contact) {
        return res.sendStatus(404);
      }
      res.json(contact);
    })
    .catch(err => {
      console.error(err);
      res.status(422).send(err.errors);
    });
};

exports.post = (req, res) => {
  const data = Object.assign({}, req.body) || {};
  // To avoid duplicate records. You can use Contact.create and validate manually duplicate.
  Contact.findOneAndUpdate(data, data, { new: true, upsert: true })
    .then(contact => {
      res.json(contact);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
};

exports.delete = (req, res) => {
  Contact.findByIdAndUpdate(
    { _id: req.params.contactId },
    { active: false },
    {
      new: true
    }
  )
    .then(contact => {
      if (!contact) {
        return res.sendStatus(404);
      }
      res.sendStatus(204);
    })
    .catch(err => {
      console.error(err);
      res.status(422).send(err.errors);
    });
};
