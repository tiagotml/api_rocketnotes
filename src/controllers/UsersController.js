class UsersController {
    /*
       index - GET para listar informações de varios usuarios
       show - GET para listar informações de um usuario especifico
       create - POST para criar um registro
       update - PUT para modificar um registro
       delete - DELETE para deletar um registro
    */

    create(request, response) {
        const { name, email, password } = request.body;
        response.json({ name, email, password });
    }
}
module.exports = UsersController;