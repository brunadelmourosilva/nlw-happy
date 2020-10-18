//const orphanages = require('./database/fakedata.js');
const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage");

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  async orphanage(req, res) {
    const id = req.query.id;

    try {
      const db = await Database;
      const orphanage = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)

      return res.render('orphanage', { orphanage: orphanage[0] })
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }

  },
  async orphanages(req, res) {
    try {
      const db = await Database;
      const orphanages = await db.all("SELECT * FROM orphanages");
      return res.render("orphanages", { orphanages });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },

  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },
};
