// server/app.js
const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 9000;

// Serve static assets and favicon
app.use(express.static(path.resolve(__dirname, "..", "build_webpack")));
app.use(favicon(path.join(__dirname, "..", "build_webpack", "favicon.ico")));

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build_webpack", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
