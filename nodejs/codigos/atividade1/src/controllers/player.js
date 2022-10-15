const fs = require('fs');

class PlayerController {
    list = (req, res) => {
        const players = fs.readFileSync('players.json', 'utf-8');
        const data = JSON.parse(players);
        res.status(200).send(data);
    };

    validate = (req, res, next) => {
        const { age, foot } = req.body;

        if (parseInt(age) > 40) {
            res.status(400);
            res.send({ error: 'player.age.older_than_40' });
            return;
        }

        if (parseInt(foot) !== parseInt(process.env.DEFAULT_FOOT)) {
            res.status(400);
            res.send({ error: 'player.foot.invalid' });
            return;
        }

        next();
    };

    create = (req, res) => {
        const { name, age, foot } = req.body;

        const players = fs.readFileSync('players.json', 'utf-8');

        const data = JSON.parse(players);
        data.push({ name, age, foot });
    
        fs.writeFileSync('players.json', JSON.stringify(data));

        res.status(201).send({ name, age, foot });
    };
}

module.exports = PlayerController;
