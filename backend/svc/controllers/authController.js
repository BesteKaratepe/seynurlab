const fs = require("fs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  let users = [];

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  fs.readFile("./svc/fakedb/users.json", "utf8", (err, data) => {
    if (err && err.code !== "ENOENT") {
      return res
        .status(500)
        .json({ message: "An error occurred during registration." });
    }

 
    if (data) {
      users = JSON.parse(data);
    }

    users.push({ username, password: hashedPassword });

    fs.writeFile(
      "./svc/fakedb/users.json",
      JSON.stringify(users, null, 2),
      (err) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "An error occurred during registration." });
        }
        res.status(201).json({ message: "Registration successful." });
      }
    );
  });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  fs.readFile("./svc/fakedb/users.json", "utf8", async (err, data) => {
    if (err) {
      return res
        .status(500)
        .send({ message: "An error occurred during login." });
    }

    const users = JSON.parse(data);
    const user = users.find((user) => user.username === username);

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign({ id: user.username }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXP,
        });

        res.json({ token });
      } else {
        res.status(401).send({ message: "Invalid username or password." });
      }
    } else {
      res.status(401).send({ message: "Invalid username or password." });
    }
  });
};
