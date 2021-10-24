const connection = require('./connection');

const create = async(ad) => {
  const { marca, modelo, versao, ano, quilometragem, observacao } = ad;

  const newAd = await connection.execute(
    'INSERT INTO tb_AnuncioWebmotors(marca, modelo, versao, ano, quilometragem, observacao) VALUES (?, ?, ?, ?, ?, ?)',
    [marca, modelo, versao, ano, quilometragem, observacao]
  );

  return newAd;
}

const getAll = async() => {
  const [adverts] = await connection.execute('SELECT * FROM tb_AnuncioWebmotors');

  return adverts;
};

const getById = async(id) => {
  const [ad] = await connection.execute('SELECT * FROM tb_AnuncioWebmotors WHERE ID = ?', [id]);

  return ad[0];
}

const remove = async(id) => connection.execute('DELETE FROM tb_AnuncioWebmotors WHERE ID = ?', [id]);

const update = async(id, ad) => {
    const {marca, modelo, versao, ano, quilometragem, observacao} = ad;

    const updateAd = await connection.execute(
        `UPDATE tb_AnuncioWebmotors SET marca = ?, modelo = ?, versao = ?, ano = ?, quilometragem = ?,
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
