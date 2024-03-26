var Users = require('../users/index.ts')


    async function getUsers(req, res, next) {
        var rows = await Users.getAllUsers()
        res.json(rows);
    }

    async function setUsers (req, res, next) {
        const { newUser} = req.body;
        await Users.setUser(newUser.user_name, newUser.user_pass, newUser.user_skill);
        res.send('controllers>getUsers>setUser>ERROR');
    }



module.exports.setUsers = setUsers;
module.exports.getUsers = getUsers;