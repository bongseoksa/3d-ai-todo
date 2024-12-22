import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const port = 4000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
