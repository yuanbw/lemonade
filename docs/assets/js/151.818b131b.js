(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{244:function(o,a,e){"use strict";e.r(a);var t=e(0),r=Object(t.a)({},(function(){var o=this,a=o.$createElement,e=o._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("h1",{attrs:{id:"latent-dirichlet-allocation-lda"}},[o._v("Latent Dirichlet Allocation (LDA)")]),o._v(" "),e("p",[o._v("Método de clusterização não supervisionada de documentos em tópicos.")]),o._v(" "),e("h3",{attrs:{id:"conectores"}},[o._v("Conectores")]),o._v(" "),e("table",[e("thead",[e("tr",[e("th",[o._v("Entrada")]),o._v(" "),e("th",[o._v("Saída")])])]),o._v(" "),e("tbody",[e("tr",[e("td",[o._v("Dados utilizados para treinar o modelo")]),o._v(" "),e("td",[o._v("Dados de saída e Modelo do algoritmo de agrupamento")])])])]),o._v(" "),e("h3",{attrs:{id:"tarefa"}},[o._v("Tarefa")]),o._v(" "),e("p",[o._v("Nome da Tarefa")]),o._v(" "),e("h3",{attrs:{id:"aba-execucao"}},[o._v("Aba Execução")]),o._v(" "),e("table",[e("thead",[e("tr",[e("th",[o._v("Parâmetro")]),o._v(" "),e("th",[o._v("Detalhe")])])]),o._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[o._v("Atributo(s) previsor(es)")])]),o._v(" "),e("td",[o._v("Atributo que será usado para treinamento")])]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Atributos com a Predição (novo)")])]),o._v(" "),e("td")]),o._v(" "),e("tr",[e("td",[e("strong",[e("a",{attrs:{href:"#tipos-de-optimizer"}},[o._v("Otimizador")])])]),o._v(" "),e("td",[o._v("Otimizador a ser utilizado para aprender o modelo.")])]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Número de Tópicos (K)")])]),o._v(" "),e("td")]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Número máximo de iterações")])]),o._v(" "),e("td")]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Concentração de documentos (alfa)")])]),o._v(" "),e("td",[o._v("Parâmetro alpha da distribuição de Dirichlet, o qual controla a priori a distribuição de documentos sobre os tópicos")])]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Concentração de tópicos (beta)")])]),o._v(" "),e("td",[o._v("Parâmetro beta da distribuição de Dirichlet, o qual controla a priori a distribuição de tópicos sobre os termos")])]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Métrica para validação cruzada")])]),o._v(" "),e("td")]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Atributo com o número da partição (fold)")])]),o._v(" "),e("td")])])]),o._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[o._v("Aba Aparência")])],1),o._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[o._v("Aba Resultados")])],1),o._v(" "),e("h2",{attrs:{id:"definicoes"}},[o._v("Definições")]),o._v(" "),e("h3",{attrs:{id:"tipos-de-optimizer"}},[o._v("Tipos de Optimizer")]),o._v(" "),e("ol",[e("li",[e("p",[e("strong",[o._v("Otimizador EM (Expectation Maximization)")]),o._v(": utiliza o método Expectation Maximization na função de verossimilhança para estimar os parâmetros.")])]),o._v(" "),e("li",[e("p",[e("strong",[o._v("Otimizador Online")]),o._v(": utiliza inferência variacional online para a estimativa dos parâmetros. A cada iteração um subconjunto do corpus é processado e a distribuição de termos por tópicos são atualizadas.")])])]),o._v(" "),e("h2",{attrs:{id:"exemplo-de-utilizacao"}},[o._v("Exemplo de Utilização")]),o._v(" "),e("p",[e("strong",[o._v("Objetivo:")]),o._v(" utilizar o método de clusterização LDA para encontrar tópicos em comentários de filmes."),e("br"),o._v(" "),e("strong",[o._v("Base de Dados:")]),o._v(" "),e("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#sentiment-labelled-sentences"}},[o._v("Sentiment Labelled Sentences")])],1),o._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image7.png",alt:"Fluxo de trabalho"}})]),o._v(" "),e("ol",[e("li",[e("p",[o._v("Adicione uma base de dados por meio da operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[o._v("Ler dados")]),o._v("."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image3.png",alt:"Operação Ler dados"}})],1)]),o._v(" "),e("li",[e("p",[o._v("Na operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/amostragem-amostrar-exemplos.html"}},[o._v("Amostrar")]),o._v(", selecione "),e("em",[o._v("“Extrair os primeiros N registros dos dados”")]),o._v(" como "),e("strong",[o._v("Tipo de amostragem ou partição")]),o._v(" e digite o valor "),e("em",[o._v("“200”")]),o._v(" para o campo "),e("strong",[o._v("Total de registros")]),o._v("."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image8.png",alt:"Operação Amostrar"}})],1)]),o._v(" "),e("li",[e("p",[o._v("Utilize a operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador.html"}},[o._v("Dividir texto por delimitador")]),o._v(". Selecione a opção "),e("em",[o._v("“Simples, use espaços como delimitador”")]),o._v(" para o campo "),e("strong",[o._v("Tipo")]),o._v(". Preencha "),e("em",[o._v("“value”")]),o._v(" no campo "),e("strong",[o._v("Atributos")]),o._v(", "),e("em",[o._v("“text_tokens”")]),o._v(" no campo "),e("strong",[o._v("Nome do novo atributo")]),o._v(" e o valor "),e("em",[o._v("“2”")]),o._v(" no campo "),e("strong",[o._v("Tamanho mínimo das partes")]),o._v(". "),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image1.png",alt:"Operação Amostrar"}})],1)]),o._v(" "),e("li",[e("p",[o._v("Utilize a operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns.html"}},[o._v("Remover palavras comuns")]),o._v(". Preencha "),e("em",[o._v("“text_tokens”")]),o._v(" no campo "),e("strong",[o._v("Atributos")]),o._v(" e selecione "),e("em",[o._v("“inglês”")]),o._v(" no campo "),e("strong",[o._v("Idioma (opcional)")]),o._v("."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image1.png",alt:"Operação Remover Palavras comuns"}})],1)]),o._v(" "),e("li",[e("p",[o._v("Utilize a operação "),e("RouterLink",{attrs:{to:"/pt-br//spark/pre-processamento-de-dados/operacoes-textuais-contar-frequencia-dos-termos.html"}},[o._v("Contar frequência dos termos")]),o._v(". Selecione "),e("em",[o._v("“text_tokens2”")]),o._v(" para o campo "),e("strong",[o._v("Atributo")]),o._v(". Preencha "),e("em",[o._v("“text_vector”")]),o._v(" no campo "),e("strong",[o._v("Nome do novo atributo")]),o._v(". Selecione a opção "),e("em",[o._v("“Contar a frequência do termo”")]),o._v(" no campo "),e("strong",[o._v("Tipo")]),o._v(". Preencha o valor "),e("em",[o._v("“10000”")]),o._v(" no campo "),e("strong",[o._v("Tamanho do vocabulário")]),o._v(". Preencha o valor "),e("em",[o._v("“1”")]),o._v(" para ambos os cambpos "),e("strong",[o._v("Frequência mínima de documento")]),o._v(" e "),e("strong",[o._v("Frequência Mínima do Termo")]),o._v("."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image1.png",alt:"Operação Remover Palavras comuns"}})],1)]),o._v(" "),e("li",[e("p",[o._v("Utilize a operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda.html"}},[o._v("Latent Dirichlet Allocation (LDA)")]),o._v(". Selecione "),e("em",[o._v("“text_vector”")]),o._v(" para o campo "),e("strong",[o._v("Atributo(s) previsor(es)")]),o._v(". Preencha "),e("em",[o._v("“prediction”")]),o._v(" no campo "),e("strong",[o._v("Atributo com a predição (novo)")]),o._v(". Selecione a opção "),e("em",[o._v("“Otimizador EM (Expectation Maximization)”")]),o._v(" para o campo "),e("strong",[o._v("Otimizador")]),o._v(". Preencha o valor "),e("em",[o._v("“10”")]),o._v(" no campo "),e("strong",[o._v("Número de tópicos (K)")]),o._v(". Preencha o valor "),e("em",[o._v("“200”")]),o._v(" para o campo "),e("strong",[o._v("Número máximo de iterações")]),o._v("."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image2.png",alt:"Operação Latent Dirichlet Allocation (LDA)"}})],1)]),o._v(" "),e("li",[e("p",[o._v("Execute o fluxo e visualize os resultados."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image5.png",alt:"Resultado (LDA)"}})])])]),o._v(" "),e("hr"),o._v(" "),e("p",[o._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);a.default=r.exports}}]);