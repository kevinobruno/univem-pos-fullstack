const RegisterLog = require("../../application/useCases/RegisterLog");

const logMiddleware = async (req, res, next) => {
    const createdAt = new Date().toISOString();

    console.log(createdAt, req.method, req.url);

    const useCase = new RegisterLog();
    await useCase.execute({ createdAt, method: req.method, url: req.url });

    next();
};

module.exports = logMiddleware;
