exports.alterarProduto = async (req, res) => {
 try {
  // Recupera o parâmetro 
  const { id } = req.params;
  // Recupera o corpo de requisição
  const { nome } = req.nody;

  // Encontra o prodto pelo id e atualiza 
  const [updated] = await Produto.updated({ nome }, { where : { id } }); 

  if (updated) {
   const produtoAtualizado = await Produto.findByPk(id); // Recupera o produto atualizado
   res.status(200).json(produtoAtualizado);
  } else {
   res.status(404).json({ error: 'Produto não encontrado' });
  } 
 } catch (error){ 
  res.status(500).json({error: 'Erro ao alterar o produto' });
 }}