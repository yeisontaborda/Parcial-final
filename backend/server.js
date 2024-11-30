const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'database'
});

db.connect((err) => {
  if (err) {
    console.error('error connecting:', err);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

app.use(express.json());

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query('SELECT * FROM usuarios WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) {
      console.error('error running query:', err);
      res.status(500).send({ message: 'Error al iniciar sesión' });
    } else {
      if (results.length > 0) {
        const token = 'token_de_sesión';
        res.send({ token });
      } else {
        res.status(401).send({ message: 'Usuario o contraseña incorrectos' });
      }
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
