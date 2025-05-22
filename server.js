const express = require('express');
const path = require('path');

const SqlService = require('./sql/connection.js'); // Asegúrate de que la ruta sea correcta

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname))); // Sirve index.html y PartSql.js desde la raíz

// Insertar jugador
app.post('/example/sqlPlayers', async (req, res) => {
  // Expect Teams_idTeams and Teams_Matches_idMatches to be sent in the request body
  const { name, minutesPlayed, numberOfPasses, shotAccuracy, missedGoals, cards} = req.body;
  const db = new SqlService();
  try {
    await db.connectToDb();
    await db.query(
      "INSERT INTO Players (name, minutesPlayed, numberOfPasses, shotAccuracy,missedGoals, ` cards`,Teams_idTeams,Teams_Matches_idMatches) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [name, minutesPlayed, numberOfPasses, shotAccuracy, missedGoals, cards,1,1]
    );
    res.status(200).send("Player registered.");
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).send("Error registering player.");
  } finally {
    await db.closeConnection();
  }
});

// Insertar equipo
app.post('/example/sqlTeams', async (req, res) => {
  const { nameTeam, squad, positionTable, coach } = req.body;
  const db = new SqlService();
  try {
    await db.connectToDb();
    await db.query(
      "INSERT INTO Teams (nameTeam, squad, positionTable, coach,Matches_idMatches) VALUES (?, ?, ?, ?,?)",
      [nameTeam, squad, positionTable, coach, 1]
    );
    res.status(200).send("Team registered.");
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).send("Error registering team.");
  } finally {
    await db.closeConnection();
  }
});

// Insertar partido
app.post('/example/sqlMatches', async (req, res) => {
  const { NameTeam1, NameTeam2, location, result, numberOfSpectators } = req.body;
  const db = new SqlService();
  try {
    await db.connectToDb();
    await db.query(
      "INSERT INTO Matches (NameTeam1, NameTeam2, location, result, numberOfSpectators) VALUES (?, ?, ?, ?, ?)",
      [NameTeam1, NameTeam2, location, result, numberOfSpectators]
    );
    res.status(200).send("Match registered.");
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).send("Error registering match.");
  } finally {
    await db.closeConnection();
  }
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
