(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{306:function(a,e,o){"use strict";o.r(e);var r=o(28),t=Object(r.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"arvore-de-decisao"}},[a._v("Árvore de Decisão")]),a._v(" "),o("p",[a._v("O objetivo da operação Árvore de Decisão é criar um modelo representado por uma árvore, a qual é composta por nós e folhas. Os nós são utilizados para decidir (de acordo com os atributos de entrada da base de dados) qual caminho tomar para separar os exemplos em classes e as folhas agrupam esses exemplos de acordo com as suas respectivas classes.")]),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Dados utilizados para treinar o modelo")]),a._v(" "),o("td",[a._v("Dados de saída e modelo do algoritmo de classificação")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Atributo(s) previsor(es)")])]),a._v(" "),o("td",[a._v("Atributo(s) que será(ão) usado(s) para treinamento")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com o rótulo")])]),a._v(" "),o("td",[a._v("Atributo a ser classificado")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributos com a predição")])]),a._v(" "),o("td",[a._v("Atributo contendo a predição do modelo")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Profundidade máxima")])]),a._v(" "),o("td",[a._v("Profundidade máxima na árvore.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Nó interno mínimo")])]),a._v(" "),o("td",[a._v("Porcentagem do número mínimo de amostras necessárias para dividir um nó interno.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Nó de folha mínima")])]),a._v(" "),o("td",[a._v("Porcentagem do número mínimo de amostras necessárias para estar em um nó folha.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Soma total de pesos")])]),a._v(" "),o("td",[a._v("A fração ponderada mínima da soma total de pesos (de todas as amostras de entrada) necessária para estar em um nó folha. As amostras têm peso igual quando não é fornecido.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Semente")])]),a._v(" "),o("td",[a._v("A semente do gerador de números pseudo-aleatórios a ser usada ao embaralhar os dados.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Critério")])]),a._v(" "),o("td",[a._v("A função para medir a qualidade de uma divisão.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Splitter")])]),a._v(" "),o("td",[a._v("A estratégia usada para escolher a divisão em cada nó.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Recursos máximos")])]),a._v(" "),o("td",[a._v("O número de recursos a serem considerados ao procurar a melhor divisão.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Número máximo de nós folha")])]),a._v(" "),o("td",[a._v("Cresça uma árvore com o número máximo de nós folha da melhor maneira possível. Os melhores nós são definidos como redução relativa na impureza. Se nenhum, número ilimitado de nós de folha.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Diminuição mínima da impureza")])]),a._v(" "),o("td",[a._v("Um nó será dividido se essa divisão induzir uma diminuição da impureza maior ou igual a esse valor.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Peso da classe")])]),a._v(" "),o("td",[a._v("Pesos associados a classes no formato {class_label: weight}.")])])])]),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Utilizar o modelo de Árvore de Decisão para classificar a espécie da planta Íris."),o("br"),a._v(" "),o("strong",[a._v("Base de Dados:")]),a._v(" "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/base-de-dados/#iris"}},[a._v("Íris")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_arvore_de_decisao/image5.png",alt:"Fluxo de trabalho- Ler dados"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Leia a base de dados Irís por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html"}},[a._v("Converter categórico para numérico")]),a._v(" para converter os valores do atributo classe em valores numéricos. Para isso, utilize "),o("em",[a._v("“class”")]),a._v(" no campo "),o("strong",[a._v("Atributos")]),a._v(", "),o("em",[a._v("String")]),a._v(" como "),o("strong",[a._v("Tipo de indexador")]),a._v(" e "),o("em",[a._v("“class_index”")]),a._v(" como "),o("strong",[a._v("Nome para novo(s) atributos indexados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[a._v("Divisão percentual")]),a._v(" para dividir a base de dados em treino e teste. No parâmetro Percentual, calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação Árvore de decisão, selecione "),o("em",[a._v("“petal_length”")]),a._v(", "),o("em",[a._v("“petal_width”")]),a._v(", "),o("em",[a._v("“sepal_length”")]),a._v(" e "),o("em",[a._v("“sepal_width”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(". Selecione "),o("em",[a._v("“class_index”")]),a._v(" no campo "),o("strong",[a._v("Atributo com o rótulo")]),a._v(" e preencha "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Atributo com a predição (novo)")]),a._v(". Deixe os demais parâmetros inalterados."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_arvore_de_decisao/image1.png",alt:"Formulário Arvore de Decisão - parte 1"}}),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_arvore_de_decisao/image2.png",alt:"Formulário Arvore de Decisão - parte 2"}})])]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html"}},[a._v("Aplicar Modelo")]),a._v(", selecione "),o("em",[a._v("“petal_length”")]),a._v(", "),o("em",[a._v("“petal_width”")]),a._v(", "),o("em",[a._v("“sepal_length”")]),a._v(" e "),o("em",[a._v("“sepal_width”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(" e preencha "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Nome do novo atributo (herdado do modelo)")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html"}},[a._v("Avaliar Modelo")]),a._v(", selecione "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado para predição")]),a._v(". Selecione "),o("em",[a._v("“class_index”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado como label")]),a._v(". E selecione a métrica "),o("em",[a._v("“F1”")]),a._v(" como "),o("strong",[a._v("Métrica para avaliação")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão)."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_arvore_de_decisao/image4.png",alt:"Resultado - Gráfico"}}),o("br"),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_arvore_de_decisao/image3.png",alt:"Resultado - Tabela"}})])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=t.exports}}]);