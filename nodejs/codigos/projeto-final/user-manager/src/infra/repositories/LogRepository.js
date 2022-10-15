const { LogModel } = require('../databases/models');

class LogRepository {
    async registerLog(log){
        const newLog = LogModel({
            createdAt: log.createdAt,
            method: log.method,
            url: log.url,
        });

        return await newLog.save();
    }
}

module.exports = LogRepository;
