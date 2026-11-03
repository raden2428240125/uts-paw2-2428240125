const express = require('express');
const app = express();

app.use((req, res, next) => { console.log('1. middleware A'); next(); });
app.use((req, res, next) => { console.log('2. middleware B'); next(); });

app.get('/', (req, res) => {
  console.log('3. route handler');
  res.send('Halo');
});

app.use((req, res, next) => { console.log('4. middleware C'); next(); });

app.listen(3000);