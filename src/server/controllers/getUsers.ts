var Users = require('../users/index.ts')


    async function getUsers(req, res, next) {
        var rows = await Users.getAllUsers()
        res.json(rows);
    }

    async function setUsers (req, res, next) {
        const { name, password, skill} = req.body;
        await Users.setUser(name, password, skill);
        res.send('controllers>getUsers>setUser>ERROR');
    }



module.exports.setUsers = setUsers;
module.exports.getUsers = getUsers;