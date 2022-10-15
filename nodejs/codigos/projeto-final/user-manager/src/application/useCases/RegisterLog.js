const Log = require('../../domain/Log');
const LogRepository = require('../../infra/repositories/LogRepository');

class RegisterLog {
    async execute({ createdAt, method, url }) {
        const log = new Log(createdAt, method, url);
        const repository = new LogRepository();
        return await repository.registerLog(log);
    }
}

module.exports = RegisterLog;
