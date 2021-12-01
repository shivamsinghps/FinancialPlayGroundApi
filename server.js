const app = require("./app");

const PORT = process.env.PORT || 9001;

app.listen(PORT,'0.0.0.0', () => console.log(`Server starting on port ${PORT}!`));
