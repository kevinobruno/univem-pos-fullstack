require('dotenv/config');
var amqp = require('amqplib/callback_api');

const uri = process.env.RABBITMQ_URI;
const username = process.env.RABBITMQ_USER;
const passowrd = process.env.RABBITMQ_PASSWORD;

const opt = { credentials: require('amqplib').credentials.plain(username, passowrd) };

class UserExporter {
    async export(user) {
        amqp.connect(uri, opt, function (err, conn) {
            conn.createChannel(function (err, ch) {
                var q = 'users';
                var msg = JSON.stringify(user);

                ch.assertQueue(q, { durable: false });
                ch.sendToQueue(q, Buffer.from(msg));

                console.log(" [x] Sent %s", msg);
            });

            setTimeout(function () { conn.close(); }, 500);
        });
    }
}

module.exports = UserExporter;
