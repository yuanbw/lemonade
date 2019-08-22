(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{222:function(o,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},function(){var o=this,a=o.$createElement,t=o._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("h1",{attrs:{id:"latent-dirichlet-allocation-lda"}},[o._v("Latent Dirichlet Allocation (LDA)")]),o._v(" "),t("p",[o._v("Método de clusterização não supervisionada de documentos em tópicos.")]),o._v(" "),t("h3",{attrs:{id:"conectores"}},[o._v("Conectores")]),o._v(" "),t("table",[t("thead",[t("tr",[t("th",[o._v("Entrada")]),o._v(" "),t("th",[o._v("Saída")])])]),o._v(" "),t("tbody",[t("tr",[t("td",[o._v("Dados utilizados para treinar o modelo")]),o._v(" "),t("td",[o._v("Dados de saída e Modelo do algoritmo de agrupamento")])])])]),o._v(" "),t("h3",{attrs:{id:"tarefa"}},[o._v("Tarefa")]),o._v(" "),t("p",[o._v("Nome da Tarefa")]),o._v(" "),t("h3",{attrs:{id:"aba-execucao"}},[o._v("Aba Execução")]),o._v(" "),t("table",[t("thead",[t("tr",[t("th",[o._v("Parâmetro")]),o._v(" "),t("th",[o._v("Detalhe")])])]),o._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[o._v("Atributo(s) previsor(es)")])]),o._v(" "),t("td",[o._v("Atributo que será usado para treinamento")])]),o._v(" "),t("tr",[t("td",[t("strong",[o._v("Atributos com a Predição (novo)")])]),o._v(" "),t("td")]),o._v(" "),t("tr",[t("td",[t("strong",[t("a",{attrs:{href:"#tipos-de-optimizer"}},[o._v("Otimizador")])])]),o._v(" "),t("td",[o._v("Otimizador a ser utilizado para aprender o modelo.")])]),o._v(" "),t("tr",[t("td",[t("strong",[o._v("Número de Tópicos (K)")])]),o._v(" "),t("td")]),o._v(" "),t("tr",[t("td",[t("strong",[o._v("Número máximo de iterações")])]),o._v(" "),t("td")]),o._v(" "),t("tr",[t("td",[t("strong",[o._v("Concentração de documentos (alfa)")])]),o._v(" "),t("td",[o._v("Parâmetro alpha da distribuição de Dirichlet, o qual controla a priori a distribuição de documentos sobre os tópicos")])]),o._v(" "),t("tr",[t("td",[t("strong",[o._v("Concentração de tópicos (beta)")])]),o._v(" "),t("td",[o._v("Parâmetro beta da distribuição de Dirichlet, o qual controla a priori a distribuição de tópicos sobre os termos")])]),o._v(" "),t("tr",[t("td",[t("strong",[o._v("Métrica para validação cruzada")])]),o._v(" "),t("td")]),o._v(" "),t("tr",[t("td",[t("strong",[o._v("Atributo com o número da partição (fold)")])]),o._v(" "),t("td")])])]),o._v(" "),t("p",[t("router-link",{attrs:{to:"/spark/"}},[o._v("Aba Aparência")])],1),o._v(" "),t("p",[t("router-link",{attrs:{to:"/spark/"}},[o._v("Aba Resultados")])],1),o._v(" "),t("h2",{attrs:{id:"definicoes"}},[o._v("Definições")]),o._v(" "),t("h3",{attrs:{id:"tipos-de-optimizer"}},[o._v("Tipos de Optimizer")]),o._v(" "),t("ol",[t("li",[t("p",[t("strong",[o._v("Otimizador EM (Expectation Maximization)")]),o._v(": utiliza o método Expectation Maximization na função de verossimilhança para estimar os parâmetros.")])]),o._v(" "),t("li",[t("p",[t("strong",[o._v("Otimizador Online")]),o._v(": utiliza inferência variacional online para a estimativa dos parâmetros. A cada iteração um subconjunto do corpus é processado e a distribuição de termos por tópicos são atualizadas.")])])]),o._v(" "),t("h2",{attrs:{id:"exemplo-de-utilizacao"}},[o._v("Exemplo de Utilização")]),o._v(" "),t("p",[t("strong",[o._v("Objetivo:")]),o._v(" utilizar o método de clusterização LDA para encontrar tópicos em comentários de filmes."),t("br"),o._v(" "),t("strong",[o._v("Base de Dados:")]),o._v(" "),t("router-link",{attrs:{to:"/spark/"}},[o._v("Sentiment Labelled Sentences")])],1),o._v(" "),t("p",[t("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image7.png",alt:"Fluxo de trabalho"}})]),o._v(" "),t("ol",[t("li",[t("p",[o._v("Adicione uma base de dados por meio da operação "),t("router-link",{attrs:{to:"/spark/"}},[o._v("Ler dados")]),o._v("."),t("br"),o._v(" "),t("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image3.png",alt:"Operação Ler dados"}})],1)]),o._v(" "),t("li",[t("p",[o._v("Na operação "),t("router-link",{attrs:{to:"/spark/"}},[o._v("Amostrar")]),o._v(", selecione "),t("em",[o._v("“Extrair os primeiros N registros dos dados”")]),o._v(" como "),t("strong",[o._v("Tipo de amostragem ou partição")]),o._v(" e digite o valor "),t("em",[o._v("“200”")]),o._v(" para o campo "),t("strong",[o._v("Total de registros")]),o._v("."),t("br"),o._v(" "),t("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image8.png",alt:"Operação Amostrar"}})],1)]),o._v(" "),t("li",[t("p",[o._v("Utilize a operação "),t("router-link",{attrs:{to:"/spark/"}},[o._v("Dividir texto por delimitador")]),o._v(". Selecione a opção "),t("em",[o._v("“Simples, use espaços como delimitador”")]),o._v(" para o campo "),t("strong",[o._v("Tipo")]),o._v(". Preencha "),t("em",[o._v("“value”")]),o._v(" no campo "),t("strong",[o._v("Atributos")]),o._v(", "),t("em",[o._v("“text_tokens”")]),o._v(" no campo "),t("strong",[o._v("Nome do novo atributo")]),o._v(" e o valor "),t("em",[o._v("“2”")]),o._v(" no campo "),t("strong",[o._v("Tamanho mínimo das partes")]),o._v(". "),t("br"),o._v(" "),t("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image1.png",alt:"Operação Amostrar"}})],1)]),o._v(" "),t("li",[t("p",[o._v("Utilize a operação "),t("router-link",{attrs:{to:"/spark/"}},[o._v("Remover palavras comuns")]),o._v(". Preencha "),t("em",[o._v("“text_tokens”")]),o._v(" no campo "),t("strong",[o._v("Atributos")]),o._v(" e selecione "),t("em",[o._v("“inglês”")]),o._v(" no campo "),t("strong",[o._v("Idioma (opcional)")]),o._v("."),t("br"),o._v(" "),t("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image1.png",alt:"Operação Remover Palavras comuns"}})],1)]),o._v(" "),t("li",[t("p",[o._v("Utilize a operação "),t("router-link",{attrs:{to:"/spark/"}},[o._v("Contar frequência dos termos")]),o._v(". Selecione "),t("em",[o._v("“text_tokens2”")]),o._v(" para o campo "),t("strong",[o._v("Atributo")]),o._v(". Preencha "),t("em",[o._v("“text_vector”")]),o._v(" no campo "),t("strong",[o._v("Nome do novo atributo")]),o._v(". Selecione a opção "),t("em",[o._v("“Contar a frequência do termo”")]),o._v(" no campo "),t("strong",[o._v("Tipo")]),o._v(". Preencha o valor "),t("em",[o._v("“10000”")]),o._v(" no campo "),t("strong",[o._v("Tamanho do vocabulário")]),o._v(". Preencha o valor "),t("em",[o._v("“1”")]),o._v(" para ambos os cambpos "),t("strong",[o._v("Frequência mínima de documento")]),o._v(" e "),t("strong",[o._v("Frequência Mínima do Termo")]),o._v("."),t("br"),o._v(" "),t("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image1.png",alt:"Operação Remover Palavras comuns"}})],1)]),o._v(" "),t("li",[t("p",[o._v("Utilize a operação "),t("router-link",{attrs:{to:"/spark/"}},[o._v("Latent Dirichlet Allocation (LDA)")]),o._v(". Selecione "),t("em",[o._v("“text_vector”")]),o._v(" para o campo "),t("strong",[o._v("Atributo(s) previsor(es)")]),o._v(". Preencha "),t("em",[o._v("“prediction”")]),o._v(" no campo "),t("strong",[o._v("Atributo com a predição (novo)")]),o._v(". Selecione a opção "),t("em",[o._v("“Otimizador EM (Expectation Maximization)”")]),o._v(" para o campo "),t("strong",[o._v("Otimizador")]),o._v(". Preencha o valor "),t("em",[o._v("“10”")]),o._v(" no campo "),t("strong",[o._v("Número de tópicos (K)")]),o._v(". Preencha o valor "),t("em",[o._v("“200”")]),o._v(" para o campo "),t("strong",[o._v("Número máximo de iterações")]),o._v("."),t("br"),o._v(" "),t("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image2.png",alt:"Operação Latent Dirichlet Allocation (LDA)"}})],1)]),o._v(" "),t("li",[t("p",[o._v("Execute o fluxo e visualize os resultados."),t("br"),o._v(" "),t("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image5.png",alt:"Resultado (LDA)"}})])])]),o._v(" "),t("hr"),o._v(" "),t("p",[o._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);a.default=r.exports}}]);