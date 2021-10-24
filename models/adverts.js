const connection = require('./connections');

const create = async(ad) => {
  const { marca, modelo, versao, ano, quilometragem, observacao } = ad;

  const newAd = await connection.execute(
    'INSERT INTO teste_webmotors(marca, modelo, versao, ano, quilometragem, observacao) VALUES (?, ?, ?, ?, ?, ?)',
    [marca, modelo, versao, ano, quilometragem, observacao]
  );

  return newAd;
}

const getAll = async() => {
  const [adverts] = await connection.execute('SELECT * FROM teste_webmotors');

  return adverts;
};

const getById = async(id) => {
  const [ad] = await connection.execute('SELECT * FROM teste_webmotors WHERE ID = ?', [id]);

  return ad[0];
}

const remove = async(id) => connection.execute('DELETE FROM teste_webmotors WHERE ID = ?', [id]);

const update = async(id, ad) => {
    const {marca, modelo, versao, ano, quilometragem, observacao} = ad;

    const updateAd = await connection.execute(
        `UPDATE teste_webmotors SET marca = ?, modelo = ?, versao = ?, ano = ?, quilometragem = ?,
        observacao = ? WHERE ID = ?`,
        [marca, modelo, versao, ano, quilometragem, observacao, id]
    ); 

    return updateAd;
}

module.exports = {
  create,
  getAll,
  getById,
  remove,
  update,
}
