const Users = require("../users/index.ts");

async function getUsers(req, res, next) {
  const rows = await Users.getAllUser();
  res.json(rows);
}
async function setUsers(req, res, next) {
  const { user_name, user_pass, user_skill } = req.body;
  await Users.setUser(user_name, user_pass, user_skill);
  try {
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
}

module.exports.getUsers = getUsers;
module.exports.setUsers = setUsers;
