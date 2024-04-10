var Users = require("../users/index.ts");

async function getUsers(req, res, next) {
  var rows = await Users.getAllUser();
  res.json(rows);
}
async function setUsers(req, res, next) {
  const { user_name, user_pass, user_skill } = req.body;
  await Users.setUser(user_name, user_pass, user_skill);
  res.send("getUser>setUsers>>>OK");
}

module.exports.getUsers = getUsers;
module.exports.setUsers = setUsers;
