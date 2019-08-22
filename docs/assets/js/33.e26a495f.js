(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{248:function(e,a,o){"use strict";o.r(a);var r=o(0),t=Object(r.a)({},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"regressao-linear"}},[e._v("Regressão Linear")]),e._v(" "),o("p",[e._v("A operação Regressão Linear tem como objetivo criar um modelo, que é basicamente uma função linear. A ideia desta operação é criar uma linha reta irá minimizar a soma dos quadrados dos "),o("a",{attrs:{href:"#residuos"}},[e._v("resíduos")]),e._v(" entre as respostas observadas na base de dados e as respostas preditas pela aproximação linear. O modelo produzido pela operação Regressão Linear assume que os resíduos seguem uma distribuição Gaussiana.")]),e._v(" "),o("h3",{attrs:{id:"conectores"}},[e._v("Conectores")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Entrada")]),e._v(" "),o("th",[e._v("Saída")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Dados utilizados para treinar o modelo")]),e._v(" "),o("td",[e._v("Dados de saída e modelo do algoritmo de regressão")])])])]),e._v(" "),o("h3",{attrs:{id:"tarefa"}},[e._v("Tarefa")]),e._v(" "),o("p",[e._v("Nome da Tarefa")]),e._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[e._v("Aba Execução")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Parâmetro")]),e._v(" "),o("th",[e._v("Detalhe")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[e._v("Atributo(s) previsor(es)")])]),e._v(" "),o("td",[e._v("Atributo que será usado para treinamento")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Atributo com o rótulo")])]),e._v(" "),o("td",[e._v("Atributo a ser predito")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Atributos com a predição")])]),e._v(" "),o("td",[e._v("Atributo contendo a predição do modelo")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Iterações máximas")])]),e._v(" "),o("td",[e._v("Define o número máximo de iterações para a convergência do algoritmo. O seu valor padrão é 100")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Regularização")])]),e._v(" "),o("td",[e._v("Define o valor para regularizar o ajuste da função de perda do algoritmo. O seu o valor padrão é 0")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Mix. para ElasticNet (entre 0 e 1)")])]),e._v(" "),o("td",[e._v("Parâmetro de ajuste usado para a minimização da função objetivo usando uma combinação de L1 e L2. O seu valor por padrão é 0")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Solucionador (Solver)")])]),e._v(" "),o("td",[e._v("Define o algoritmo para gerar a solução da otimização do problema de regressão. O seu valor padrão é ‘auto’, significando que isso será feito automaticamente pelo algoritmo de regressão linear")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Métrica para validação cruzada")])]),e._v(" "),o("td",[e._v("Define a métrica utilizada dentro da validação cruzada (se aplicável) para avaliar o modelo de classificação dentro das k partições")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Atributo com o número da partição (fold)")])]),e._v(" "),o("td",[e._v("Define o atributo a ter o número da partição para realizar uma validação cruzada (se aplicável)")])])])]),e._v(" "),o("p",[o("router-link",{attrs:{to:"/pt-br/"}},[e._v("Aba Aparência")])],1),e._v(" "),o("p",[o("router-link",{attrs:{to:"/pt-br/"}},[e._v("Aba Resultados")])],1),e._v(" "),o("h2",{attrs:{id:"definicoes"}},[e._v("Definições")]),e._v(" "),o("h3",{attrs:{id:"residuos"}},[e._v("Resíduos")]),e._v(" "),o("p",[e._v("É a diferença entre os valores observados na base de dados e as respostas preditas pelo modelo. Por exemplo, se queremos saber/predizer a receita de uma loja em um dia considerando como atributo a temperatura máxima daquele dia, os resíduos seriam:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Temperatura (Celsius)")]),e._v(" "),o("th",[e._v("Receita (Observado)")]),e._v(" "),o("th",[e._v("Receita (Predito)")]),e._v(" "),o("th",[e._v("Resíduo (Observado - Predito)")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("28.2°C")]),e._v(" "),o("td",[e._v("R$44,00")]),e._v(" "),o("td",[e._v("R$41,00")]),e._v(" "),o("td",[e._v("R$3,00")])]),e._v(" "),o("tr",[o("td",[e._v("21,4°C")]),e._v(" "),o("td",[e._v("R$23,00")]),e._v(" "),o("td",[e._v("R$23,00")]),e._v(" "),o("td",[e._v("R$0,00")])]),e._v(" "),o("tr",[o("td",[e._v("32,9°C")]),e._v(" "),o("td",[e._v("R$43,00")]),e._v(" "),o("td",[e._v("R$54,00")]),e._v(" "),o("td",[e._v("-R$11,00")])]),e._v(" "),o("tr",[o("td",[e._v("24,0°C")]),e._v(" "),o("td",[e._v("R$30,00")]),e._v(" "),o("td",[e._v("R$29,00")]),e._v(" "),o("td",[e._v("R$1,00")])])])]),e._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[e._v("Exemplo de Utilização")]),e._v(" "),o("p",[o("strong",[e._v("Objetivo:")]),e._v(" Utilizar o modelo construído pela operação Regressão Linear para predizer a qualidade de um vinho."),o("br"),e._v(" "),o("strong",[e._v("Base de Dados:")]),e._v(" Qualidade da Variante Vermelha do Vinho Verde Português - "),o("router-link",{attrs:{to:"/pt-br/"}},[e._v("Wine Red Quality")])],1),e._v(" "),o("p",[o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/regressor_linear/image3.png",alt:"Fluxo - Ler dados"}})]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Leia a base de dados por meio da operação "),o("router-link",{attrs:{to:"/pt-br/"}},[e._v("Ler dados")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("Utilize a operação "),o("router-link",{attrs:{to:"/pt-br/"}},[e._v("Divisão percentual")]),e._v(" para dividir a base de dados em treino e teste. No parâmetro "),o("strong",[e._v("Percentual")]),e._v(", calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).")],1)]),e._v(" "),o("li",[o("p",[e._v("Na Operação "),o("strong",[e._v("Regressão Linear")]),e._v(", selecione "),o("em",[e._v("“alcohol”")]),e._v(", "),o("em",[e._v("“chlorides”")]),e._v(", "),o("em",[e._v("“citric_acid”")]),e._v(", "),o("em",[e._v("“density”")]),e._v(", "),o("em",[e._v("“fixed_acidity”")]),e._v(", "),o("em",[e._v("“free_sulfur_dioxide”")]),e._v(", "),o("em",[e._v("“pH”")]),e._v(", "),o("em",[e._v("“residual_sugar”")]),e._v(", "),o("em",[e._v("“sulphates”")]),e._v(", "),o("em",[e._v("“total_sulfur_dioxide”")]),e._v(" e "),o("em",[e._v("“volatile_acidity”")]),e._v(" no campo "),o("strong",[e._v("Atributo(s) previsor(es)")]),e._v(". Selecione "),o("em",[e._v("“quality”")]),e._v(" no campo  "),o("strong",[e._v("Atributo com o rótulo")]),e._v(" e preencha "),o("em",[e._v("“resultado”")]),e._v(" no campo "),o("strong",[e._v("Atributo com a predição (novo)")]),e._v(". Preencha 100 no campo "),o("strong",[e._v("Iterações máximas")]),e._v(", 0.35 no campo "),o("strong",[e._v("Regularização")]),e._v(" e 0.8 no campo "),o("strong",[e._v("Mix. para ElasticNet")]),e._v(". Deixe os demais parâmetros inalterados."),o("br"),e._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/regressor_linear/image4.png",alt:"Tabela - Regressão linear 1"}}),e._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/regressor_linear/image2.png",alt:"Tabela - Regressão linear 2"}})])]),e._v(" "),o("li",[o("p",[e._v("Na operação "),o("router-link",{attrs:{to:"/pt-br/"}},[e._v("Aplicar Modelo")]),e._v(", selecione "),o("em",[e._v("“alcohol”")]),e._v(", "),o("em",[e._v("“chlorides”")]),e._v(", "),o("em",[e._v("“citric_acid”")]),e._v(", "),o("em",[e._v("“density”")]),e._v(", "),o("em",[e._v("“fixed_acidity”")]),e._v(", "),o("em",[e._v("“free_sulfur_dioxide”")]),e._v(", "),o("em",[e._v("“pH”")]),e._v(", "),o("em",[e._v("“residual_sugar”")]),e._v(", "),o("em",[e._v("“sulphates”")]),e._v(", "),o("em",[e._v("“total_sulfur_dioxide”")]),e._v(" e "),o("em",[e._v("“volatile_acidity”")]),e._v(" no campo "),o("strong",[e._v("Atributo(s) previsor(es)")]),e._v(" e preencha "),o("em",[e._v("“resultado”")]),e._v(" no campo "),o("strong",[e._v("Nome do novo atributo (herdado do modelo)")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("Na operação "),o("router-link",{attrs:{to:"/pt-br/"}},[e._v("Avaliar Modelo")]),e._v(", selecione "),o("em",[e._v("“resultado”")]),e._v(" no campo "),o("strong",[e._v("Atributo usado para predição")]),e._v(". Selecione "),o("em",[e._v("“quality”")]),e._v(" no campo "),o("strong",[e._v("Atributo usado como label")]),e._v(" e a métrica "),o("em",[e._v("“Raiz do erro quadrático médio”")]),e._v(" como "),o("strong",[e._v("Métrica para avaliação")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("Execute o fluxo e visualize o resultado, que neste caso está de acordo com a raiz do erro quadrático médio "),o("strong",[e._v("(Root Mean Square Error ou RMSE)")]),e._v(":\n"),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/regressor_linear/image1.png",alt:"Resultado"}})])])]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);a.default=t.exports}}]);