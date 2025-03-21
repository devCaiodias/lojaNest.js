import { Injectable } from "@nestjs/common"
import { ProdutoEntity } from "./produto.entity"


@Injectable()
export class ProdutoRepository {
    private produto: ProdutoEntity[] = []

    listaTodos() {
    return this.produto
   }
    
   salvar(dadosProduto: ProdutoEntity) {
    this.produto.push(dadosProduto)
    return dadosProduto
   }


   private buscaPorId(id: string) {
    const possivelProduto = this.produto.find((produto) => produto.id === id);

    if (!possivelProduto) {
      throw new Error('Produto não existe');
    }

    return possivelProduto;
  }

  async atualiza(id: string, dadosProduto: Partial<ProdutoEntity>) {
    const dadosNaoAtualizaveis = ['id', 'usuarioId'];
    const produto = this.buscaPorId(id);
    Object.entries(dadosProduto).forEach(([chave, valor]) => {
      if (dadosNaoAtualizaveis.includes(chave)) {
        return;
      }
      produto[chave] = valor;
    });

    return produto;
  }

  async remove(id: string) {
    const produtoRemovido = this.buscaPorId(id);
    this.produto = this.produto.filter((produto) => produto.id !== id);
    return produtoRemovido;
  }

}