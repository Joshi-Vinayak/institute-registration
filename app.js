// 1. Institute Type Selection:
// a. The first step in the registration process is for the user to select the type of
// institute they are registering. The options include:
// i. Playhouse
// ii. School
// iii. College
// iv. Competitive Exam Center
// b. Each of these is categorized as an "institute" for this task.

const express = require("express");
const PORT = 3000;
connectDb();

const app = express();
const institute = require("./routes/institute-route");

app("/api/institute", institute);

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`your server is running on this port ${PORT}`);
});
