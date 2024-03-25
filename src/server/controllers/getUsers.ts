var Users = require('../users/index.ts')
class ConrollerUser {

    async getUsers(req, res, next) {
        var rows = await Users.getAllUsers()
        res.json(rows);
    }

    async setUser (req, res, next) {
        const { name, password, skill} = req.body;
    await Users.setUser();
    res.send('controllers>getUsers>setUser>ERROR');
    }
}


module.exports.getUsers = ConrollerUser;