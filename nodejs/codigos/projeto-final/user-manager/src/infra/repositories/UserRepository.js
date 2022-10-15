const { UserModel } = require('../databases/models');
const UserExporter = require('../services/UserExporter');

class UserRepository {
    async create(user){
        const newUser = UserModel({
            name: user.name,
            email: user.email,
            student: user.student,
            country: user.country,
        });

        await newUser.save();

        const userExporter = new UserExporter();
        await userExporter.export(newUser);
   
        return newUser;
    }

    async list() {
        return await UserModel.find();
    }
}

module.exports = UserRepository;
