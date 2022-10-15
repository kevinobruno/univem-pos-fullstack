const CreateUser = require("../../application/useCases/CreateUser");
const ListUsers = require("../../application/useCases/ListUsers");

class UserController {
    async create(req, res) {
        const useCase = new CreateUser();
        const user = await useCase.execute(req.body);
        return res.status(201).send(user);
    }

    async list(req, res) {
        const useCase = new ListUsers();
        const users = await useCase.execute();
        return res.status(200).send(users);
    }
}

module.exports = UserController;
