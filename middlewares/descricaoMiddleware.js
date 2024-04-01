const validateDescription = (request, response, next) => {
    const { body } = request;
    if (body.descricao == undefined || body.descricao === '') {
        return response.status(400)
            .json({ message: 'O campo "descricao" é obrigatório' });
    }
    if (isNaN(parseInt(body.descricao)) || parseInt(body.descricao) < 0 || parseInt(body.descricao) > 130) {
        return response.status(400)
            .json({ message: 'O campo "descricao" deve ser inteiro positivo e valor possível' });
    }
    next();
};
module.exports = { validateDescription };