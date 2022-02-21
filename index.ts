import express from "express";


const app = express();
app.use(express.json());

const PORT = 3001;

app.get('/a', (req, res) => {
  res.send('b');
});

app.listen(PORT, () => {
  console.log('Server running');
});