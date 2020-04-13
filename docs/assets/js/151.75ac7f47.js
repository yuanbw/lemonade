(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{278:function(o,a,e){"use strict";e.r(a);var t=e(28),r=Object(t.a)({},(function(){var o=this,a=o.$createElement,e=o._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("h1",{attrs:{id:"aplicar-modelo"}},[o._v("Aplicar Modelo")]),o._v(" "),e("p",[o._v("Aplica o modelo de aprendizado de máquina em um (novo) conjunto de dados (e.g., um conjunto de teste) e retorna o resultado.")]),o._v(" "),e("h3",{attrs:{id:"conectores"}},[o._v("Conectores")]),o._v(" "),e("table",[e("thead",[e("tr",[e("th",[o._v("Entrada")]),o._v(" "),e("th",[o._v("Saída")])])]),o._v(" "),e("tbody",[e("tr",[e("td",[o._v("Dados de teste e modelo de aprendizado")]),o._v(" "),e("td",[o._v("Dados de saída resultantes da aplicação do modelo de aprendizado nos dados de entrada")])])])]),o._v(" "),e("h3",{attrs:{id:"tarefa"}},[o._v("Tarefa")]),o._v(" "),e("p",[o._v("Nome da Tarefa")]),o._v(" "),e("h3",{attrs:{id:"aba-execucao"}},[o._v("Aba Execução")]),o._v(" "),e("table",[e("thead",[e("tr",[e("th",[o._v("Parâmetro")]),o._v(" "),e("th",[o._v("Detalhe")])])]),o._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[o._v("Atributo com Features")])]),o._v(" "),e("td",[o._v("Atributos que devem ser usados na aplicação do modelo de aprendizado")])]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Nome do novo atributo (herdado do modelo)")])]),o._v(" "),e("td",[o._v("Atributo contendo as predições do modelo nos dados de teste")])])])]),o._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[o._v("Aba Aparência")])],1),o._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[o._v("Aba Resultados")])],1),o._v(" "),e("h2",{attrs:{id:"exemplo-de-utilizacao"}},[o._v("Exemplo de Utilização")]),o._v(" "),e("p",[e("strong",[o._v("Objetivo:")]),o._v(" Aplicar o modelo criado pelo classificador "),e("RouterLink",{attrs:{to:"/pt-br/spark/aprendizado-de-maquina/classificacao-random-forest.html"}},[o._v("Random Forest")]),o._v("  em um conjunto de dados não visto no treinamento de tal classificador.")],1),o._v(" "),e("p",[e("strong",[o._v("Base de Dados:")]),o._v(" "),e("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#iris"}},[o._v("Íris")])],1),o._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/modelo_e_avaliacao/aplicar_modelo/image4.png",alt:"Ler dados"}})]),o._v(" "),e("ol",[e("li",[e("p",[o._v("Adicione uma base de dados por meio da operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[o._v("Ler dados")]),o._v(".")],1)]),o._v(" "),e("li",[e("p",[o._v("Utilize a operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html"}},[o._v("Converter categórico para numérico")]),o._v(" para converter os valores do atributo classe em valores numéricos. Para isso, utilize "),e("em",[o._v("“class”")]),o._v(" no campo "),e("strong",[o._v("Atributos")]),o._v(", "),e("em",[o._v("String")]),o._v(" como "),e("strong",[o._v("Tipo de indexador")]),o._v(" e "),e("em",[o._v("“class_index”")]),o._v(" como "),e("strong",[o._v("Nome para novo(s) atributos indexados")]),o._v(".")],1)]),o._v(" "),e("li",[e("p",[o._v("Utilize a operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[o._v("Divisão percentual")]),o._v(" para dividir a base de dados em treino e teste. No parâmetro "),e("strong",[o._v("Pesos")]),o._v(", calibre-o utilizando 50% dos dados para treinar e 50% para testar.")],1)]),o._v(" "),e("li",[e("p",[o._v("Na operação "),e("strong",[o._v("Random Forest")]),o._v(", selecione "),e("em",[o._v("“petal_length”")]),o._v(", "),e("em",[o._v("“petal_width”")]),o._v(", "),e("em",[o._v("“sepal_length”")]),o._v(" e "),e("em",[o._v("“sepal_width”")]),o._v(" no campo "),e("strong",[o._v("Atributo(s) previsor(es)")]),o._v(". Selecione "),e("em",[o._v("“class_index”")]),o._v(" no campo "),e("strong",[o._v("Atributo com o rótulo")]),o._v(" e preencha "),e("em",[o._v("“resultado”")]),o._v(" no campo "),e("strong",[o._v("Atributo com a predição (novo)")]),o._v(". Deixe os demais parâmetros inalterados.")])]),o._v(" "),e("li",[e("p",[o._v("Na operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/aplicar-modelo.html"}},[o._v("Aplicar Modelo")]),o._v(", selecione "),e("em",[o._v("“petal_length”")]),o._v(", "),e("em",[o._v("“petal_width”")]),o._v(", "),e("em",[o._v("“sepal_length”")]),o._v(" e "),e("em",[o._v("“sepal_width”")]),o._v(" no campo "),e("strong",[o._v("Atributo(s) previsor(es)")]),o._v(" e preencha "),e("em",[o._v("“resultado”")]),o._v(" no campo "),e("strong",[o._v("Nome do novo atributo (herdado do modelo)")]),o._v(". Neste exemplo, a operação "),e("strong",[o._v("Aplicar Modelo")]),o._v(" aplica o modelo produzido pelo "),e("RouterLink",{attrs:{to:"/pt-br/spark/aprendizado-de-maquina/classificacao-random-forest.html"}},[o._v("Random Forest")]),o._v(" (neste caso, um modelo de classificação) em um conjunto de dados não visto durante o treinamento de tal algoritmo de aprendizado (i.e., em um conjunto de teste). O resultado desta operação é representado por predições feitas em tal conjunto.\n"),e("img",{attrs:{src:"/img/spark/modelo_e_avaliacao/aplicar_modelo/image2.png",alt:"Formulário Aplicar Modelo"}})],1)]),o._v(" "),e("li",[e("p",[o._v("Na operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/avaliar-modelo.html"}},[o._v("Avaliar Modelo")]),o._v(", selecione "),e("em",[o._v("“resultado”")]),o._v(" no campo "),e("strong",[o._v("Atributo usado para predição")]),o._v(". Selecione "),e("em",[o._v("“class_index”")]),o._v(" no campo "),e("strong",[o._v("Atributo usado como label")]),o._v(". E selecione a métrica "),e("em",[o._v("“F1”")]),o._v(" como "),e("strong",[o._v("Métrica para avaliação")]),o._v(".")],1)]),o._v(" "),e("li",[e("p",[o._v("Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão). "),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/modelo_e_avaliacao/aplicar_modelo/image1.png",alt:"Gráfico esultado da avaliação"}}),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/modelo_e_avaliacao/aplicar_modelo/image3.png",alt:"Tabela resultado da avaliação"}})])])]),o._v(" "),e("hr"),o._v(" "),e("p",[o._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);a.default=r.exports}}]);