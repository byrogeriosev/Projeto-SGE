const Produto = require('../models/produto');

exports.createProduto = async (req, res) => {
 try {
  const { nome } = req.body;
  const produto = await Produto.creat({ nome });
  res.status(201).json(produto);
 } catch (error) {
  res.status(500).json({ error: 'Erro ao criar produto' });
 }
}

exports.getProdutos = async (req, res) => {
 try {
  const produtos = await Produto.findAll();
  res.status(200).json(produtos);
 } catch (error) {
  res.status(500).json({ error: 'Erro ao buscar produto' });
 }
};