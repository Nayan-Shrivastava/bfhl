const express = require("express");

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/bfhl", (req, res) => {
  const user_id = "nayan_shrivastava_25112000";
  try {
    const numbers = req.body.numbers;

    if (!numbers) {
      throw new Error();
    }
    const isNumber = numbers.every((num) => !isNaN(num));
    if (!isNumber) {
      throw new Error();
    }

    const even = numbers.filter((num) => parseInt(num) % 2 === 0);
    const odd = numbers.filter((num) => parseInt(num) % 2 !== 0);
    res.status(200).send({ is_success: true, user_id, even, odd });
  } catch (err) {
    res.status(400).send({ is_success: false, user_id });
  }
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
