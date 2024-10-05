import express from "express";

const app = express();

const PORT = 6000;

app.listen(PORT, () => {
  console.log(`Running server on port ${PORT}`);
});
