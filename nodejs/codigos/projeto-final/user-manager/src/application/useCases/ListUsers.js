const UserRepository = require('../../infra/repositories/UserRepository');

class ListUsers {
    async execute() {
        const repository = new UserRepository();
        return await repository.list();
    }
}

module.exports = ListUsers;
