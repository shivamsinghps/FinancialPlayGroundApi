const app = require("./app");

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => console.log(`Server starting on port ${PORT}!`));
