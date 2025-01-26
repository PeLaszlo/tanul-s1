import app from "./app.js";
//import { PORT } from "./constants/constants.js";
const PORT=8000;

app.listen(PORT, () => {
  console.log(`Server is runnning at http://localhost:${PORT}`);
});