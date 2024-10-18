const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Backend funcionando correctamente');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
