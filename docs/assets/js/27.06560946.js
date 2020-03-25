(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{306:function(a,e,o){"use strict";o.r(e);var r=o(28),t=Object(r.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"naive-bayes"}},[a._v("Naïve Bayes")]),a._v(" "),o("p",[a._v("A operação Naïve Bayes cria um modelo baseado na aplicação do teorema de Bayes com uma suposição ingênua de independência condicional entre cada par de atributos dado o atributo classe. Nesse caso, o modelo do Naïve Bayes define que todos os atributos sejam condicionados ao atributo classe, mas sendo independentes entre si.")]),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Dados utilizados para treinar o modelo")]),a._v(" "),o("td",[a._v("Dados de saída e modelo do algoritmo de classificação")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Atributo(s) previsor(es)")])]),a._v(" "),o("td",[a._v("Atributo(s) que será(ão) usado(s) para treinamento")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com o rótulo")])]),a._v(" "),o("td",[a._v("Atributo a ser classificado")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributos com a predição")])]),a._v(" "),o("td",[a._v("Atributo contendo a predição do modelo")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Tipo de modelo")])]),a._v(" "),o("td",[a._v("O Gaussiano assume que a probabilidade das características é Gaussiana; O multinomial é adequado para características discretas; Bernoulli é projetado para campos binários/booleanos (campos não binários serão convertidos).")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Suavização")])]),a._v(" "),o("td",[a._v("Parâmetro de suavização Aditivo (Laplace / Lidstone) (0 para não suavização). Apenas para os tipos Multinomial e Bernoulli.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Pesos (separados por vírgula, usados em ensembles)")])]),a._v(" "),o("td",[a._v("Peso probabilistico das classes. Se especificado, os pesos não são ajustados de acordo com os dados.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Anteriores")])]),a._v(" "),o("td",[a._v("Probabilidades anteriores das classes.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Variação")])]),a._v(" "),o("td",[a._v("Parte da maior variação de todos os recursos adicionados às variações de estabilidade de cálculo.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Probabilidades anteriores da classe")])]),a._v(" "),o("td",[a._v("Se deve aprender as probabilidades anteriores da aula ou não.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Binarização")])]),a._v(" "),o("td",[a._v("Limite para binarização (mapeamento para booleanos) de recursos de amostra.")])])])]),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Utilizar o modelo do Naïve Bayes para classificar a espécie da planta Íris."),o("br"),a._v(" "),o("strong",[a._v("Base de Dados:")]),a._v(" "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/base-de-dados/#iris"}},[a._v("Íris")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_naive_bayes/image4.png",alt:"Fluxo de trabalho - Ler dados"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Leia a base de dados Irís por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html"}},[a._v("Converter categórico para numérico")]),a._v(" para converter os valores do atributo classe em valores numéricos. Para isso, utilize "),o("em",[a._v("“class”")]),a._v(" no campo "),o("strong",[a._v("Atributos")]),a._v(", "),o("em",[a._v("String")]),a._v(" como "),o("strong",[a._v("Tipo de indexador")]),a._v(" e "),o("em",[a._v("“class_index”")]),a._v(" como "),o("strong",[a._v("Nome para novo(s) atributos indexados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[a._v("Divisão percentual")]),a._v(" para dividir a base de dados em treino e teste. No parâmetro "),o("strong",[a._v("Percentual")]),a._v(", calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("strong",[a._v("Naïve Bayes")]),a._v(", selecione "),o("em",[a._v("“petal_length”")]),a._v(", "),o("em",[a._v("“petal_width”")]),a._v(", "),o("em",[a._v("“sepal_length”")]),a._v(" e "),o("em",[a._v("“sepal_width”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(". Selecione "),o("em",[a._v("“class_index”")]),a._v(" no campo "),o("strong",[a._v("Atributo com o rótulo")]),a._v(" e preencha "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Atributo com a predição (novo)")]),a._v(". Deixe os demais parâmetros inalterados."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_naive_bayes/image1.png",alt:"Formulário Naïve Bayes - parte 1"}}),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_naive_bayes/image2.png",alt:"Formulário Naïve Bayes - parte 1"}})])]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html"}},[a._v("Aplicar Modelo")]),a._v(", selecione "),o("em",[a._v("“petal_length”")]),a._v(", "),o("em",[a._v("“petal_width”")]),a._v(", "),o("em",[a._v("“sepal_length”")]),a._v(" e "),o("em",[a._v("“sepal_width”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(" e preencha "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Nome do novo atributo (herdado do modelo)")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html"}},[a._v("Avaliar Modelo")]),a._v(", selecione "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado para predição")]),a._v(". Selecione "),o("em",[a._v("“class_index”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado como label")]),a._v(" e a métrica "),o("em",[a._v("“F1”")]),a._v(" como "),o("strong",[a._v("Métrica para avaliação")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão)."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_naive_bayes/image3.png",alt:"Resultado - Gráfico"}}),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_naive_bayes/image5.png",alt:"Resultado - Tabela"}})])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=t.exports}}]);