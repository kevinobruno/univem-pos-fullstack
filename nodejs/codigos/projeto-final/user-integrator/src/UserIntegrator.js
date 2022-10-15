require('dotenv/config');
const amqp = require('amqplib/callback_api');

const CountryService = require('./services/CountryService');

const uri = process.env.RABBITMQ_URI;
const username = process.env.RABBITMQ_USER;
const passowrd = process.env.RABBITMQ_PASSWORD;

const opt = { credentials: require('amqplib').credentials.plain(username, passowrd) };

amqp.connect(uri, opt, function (err, conn) {
    conn.createChannel(function (err, ch) {
        var q = 'users';

        ch.assertQueue(q, { durable: false });
        ch.prefetch(1);

        console.log(' [*] Waiting for messages...');

        ch.consume(q, function (msg) {
            console.log(' [*] Consuming user message...');
            const user = JSON.parse(msg.content.toString());

            console.log(' [*]', user);

            if (user.country) {
                const countryService = new CountryService();
                countryService.getCountry(user);
            } else {
                console.log(' [*] User without country defined');
            }

            console.log(' [*] Finished consuming message!');
        }, { noAck: true });
    });
});
