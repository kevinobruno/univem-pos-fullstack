const User = require('../../domain/User');
const UserRepository = require('../../infra/repositories/UserRepository');

class CreateUser {
    async execute({ student = 'Kevin', name, email, country }) {
        const user = new User(student, name, email, country);
        const repository = new UserRepository();
        return await repository.create(user);
    }
}

module.exports = CreateUser;
