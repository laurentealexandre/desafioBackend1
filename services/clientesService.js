const connection = require('../configs/dbConfiguration');
const findAll = async () => {
    const clientes = await (await connection)
        .execute('SELECT * FROM clientes');
    return clientes[0];
}

const update = async (cliente) => {
    const query = 'UPDATE clientes SET Nome = ?, Sobrenome = ?, Email = ?, Idade = ? WHERE id = ?';    
    const isOk = await (await connection).execute(query, [cliente.Nome, cliente.Sobrenome, cliente.Email, cliente.Idade, cliente.ID]);
    return isOk[0].affectedRows === 1;
}

const save = async (cliente) => {
    const query = 'INSERT INTO clientes(Nome, Sobrenome, Email, Idade) VALUES (?, ?, ?, ?)';
    const isOk = await (await connection).execute(query, [cliente.Nome, cliente.Sobrenome, cliente.Email, cliente.Idade,]);
    return isOk[0].affectedRows === 1;
}

const remove = async (id) => {
    const query = 'DELETE FROM clientes WHERE ID = ?';
    const isOk = await (await connection).execute(query, [id]);
    return isOk[0].affectedRows === 1;
}

module.exports = {
    findAll,
    save,
    remove,
    update
};
   
   
   
