// interface ISetAnswer {
//     answer: string,
//     question: string,
//     language: string,
//     skill: string
// };

var Users = require('../users/index.ts')

async function getUsers(req, res, next) {
    var rows = await Users.getAllUser()
    res.json(rows);
}
async function setUsers (req, res, next) {
    const { newUser } = req.body;
    await Users.setUser(newUser.user_name, newUser.user_pass, newUser.user_skill);
    res.send('')
}

module.exports.getUsers = getUsers;
module.exports.setUsers = setUsers;