class HelloController {
    handle = (req, res) => {
        res.send('Hello World!');
    };
}

module.exports = HelloController;
