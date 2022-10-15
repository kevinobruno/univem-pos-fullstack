class LoginController {
    handle = (req, res) => {
        const { name } = req.body;
        res.send(name);
    }
}

module.exports = LoginController;
