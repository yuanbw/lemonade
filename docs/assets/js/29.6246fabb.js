(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{223:function(o,a,e){"use strict";e.r(a);var r=e(0),t=Object(r.a)({},function(){var o=this,a=o.$createElement,e=o._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("h1",{attrs:{id:"regressao-isotonica"}},[o._v("Regressão Isotônica")]),o._v(" "),e("p",[o._v("A operação Regressão Isotônica tem como objetivo criar um modelo de aprendizado que tenta estimar uma função monótona crescente ou decrescente de forma a minimizar a distância entre esta e os pontos observados.")]),o._v(" "),e("h3",{attrs:{id:"conectores"}},[o._v("Conectores")]),o._v(" "),e("table",[e("thead",[e("tr",[e("th",[o._v("Entrada")]),o._v(" "),e("th",[o._v("Saída")])])]),o._v(" "),e("tbody",[e("tr",[e("td",[o._v("Dados utilizados para treinar o modelo")]),o._v(" "),e("td",[o._v("Dados de saída e modelo do algoritmo de regressão")])])])]),o._v(" "),e("h3",{attrs:{id:"tarefa"}},[o._v("Tarefa")]),o._v(" "),e("p",[o._v("Nome da Tarefa")]),o._v(" "),e("h3",{attrs:{id:"aba-execucao"}},[o._v("Aba Execução")]),o._v(" "),e("table",[e("thead",[e("tr",[e("th",[o._v("Parâmetro")]),o._v(" "),e("th",[o._v("Detalhe")])])]),o._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[o._v("Atributo(s) previsor(es)")])]),o._v(" "),e("td",[o._v("Atributo que será usado para treinamento")])]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Atributo com o rótulo")])]),o._v(" "),e("td",[o._v("Atributo a ser predito")])]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Atributos com a predição")])]),o._v(" "),e("td",[o._v("Atributo contendo a predição do modelo")])]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Iterações máximas")])]),o._v(" "),e("td",[o._v("Define o número máximo de iterações para a convergência do algoritmo. O seu valor padrão é 100")])]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Regularização")])]),o._v(" "),e("td",[o._v("Define o valor para regularizar o ajuste da função de perda do algoritmo. O seu o valor padrão é 0")])]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Mix. para ElasticNet (entre 0 e 1)")])]),o._v(" "),e("td",[o._v("Parâmetro de ajuste usado para a minimização da função objetivo usando uma combinação de L1 e L2. O seu valor por padrão é 0")])]),o._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#isotonic"}},[o._v("Isotonic")])]),o._v(" "),e("td",[o._v("Especifica o crescimento da função monótona gerada pela regressão. O seu valor padrão é Isotônica/crescente")])]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Métrica para validação cruzada")])]),o._v(" "),e("td",[o._v("Define a métrica utilizada dentro da validação cruzada (se aplicável) para avaliar o modelo de classificação dentro das k partições")])]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Atributo com o número da partição (fold)")])]),o._v(" "),e("td",[o._v("Define o atributo a ter o número da partição para realizar uma validação cruzada (se aplicável)")])])])]),o._v(" "),e("p",[e("router-link",{attrs:{to:"/pt-br/"}},[o._v("Aba Aparência")])],1),o._v(" "),e("p",[e("router-link",{attrs:{to:"/pt-br/"}},[o._v("Aba Resultados")])],1),o._v(" "),e("h2",{attrs:{id:"definicoes"}},[o._v("Definições")]),o._v(" "),e("h3",{attrs:{id:"isotonic"}},[o._v("Isotonic")]),o._v(" "),e("ol",[e("li",[o._v("Isotônica/crescente: A regressão isotônica gera uma função monótona crescente.")]),o._v(" "),e("li",[o._v("Antitônica/decrescente: A regressão isotônica gera uma função monótona decrescente")])]),o._v(" "),e("h2",{attrs:{id:"exemplo-de-utilizacao"}},[o._v("Exemplo de Utilização")]),o._v(" "),e("p",[e("strong",[o._v("Objetivo:")]),o._v(" Utilizar o modelo construído pela operação Regressão Isotônica para predizer a qualidade de um vinho"),e("br"),o._v(" "),e("strong",[o._v("Base de Dados:")]),o._v(" [Qualidade da Variante Vermelha do Vinho Verde Português][]")]),o._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/regressao_isotonica/image4.png",alt:"Ler dados"}})]),o._v(" "),e("ol",[e("li",[e("p",[o._v("Leia a base de dados por meio da operação "),e("router-link",{attrs:{to:"/pt-br/"}},[o._v("Ler dados")]),o._v(".")],1)]),o._v(" "),e("li",[e("p",[o._v("Utilize a operação "),e("router-link",{attrs:{to:"/pt-br/"}},[o._v("Divisão percentual")]),o._v(" para dividir a base de dados em treino e teste. No parâmetro "),e("strong",[o._v("Percentual")]),o._v(", calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).")],1)]),o._v(" "),e("li",[e("p",[o._v("Na operação "),e("strong",[o._v("Regressão Isotônica")]),o._v(", selecione “alcohol”, “chlorides”, “citric_acid”, “density”, “fixed_acidity”, “free_sulfur_dioxide”, “pH”, “residual_sugar”, “sulphates”, “total_sulfur_dioxide” e “volatile_acidity” no campo "),e("strong",[o._v("Atributo(s) previsor(es)")]),o._v(". Selecione "),e("em",[o._v("“quality”")]),o._v(" no campo "),e("strong",[o._v("Atributo com o rótulo")]),o._v(" e preencha “resultado” no campo "),e("strong",[o._v("Atributo com a predição (novo)")]),o._v("."),e("br"),o._v("\nPreencha 100 no campo "),e("strong",[o._v("Iterações máximas")]),o._v(" e selecione no campo "),e("strong",[o._v("Isotonic")]),o._v(" a função Isotônica/crescente")]),o._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/regressao_isotonica/image2.png",alt:"Forumlário regressão isotônica - parte 1"}}),o._v(" "),e("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/regressao_isotonica/image3.png",alt:"Forumlário regressão isotônica - parte 2"}})])]),o._v(" "),e("li",[e("p",[o._v("Na operação "),e("router-link",{attrs:{to:"/pt-br/"}},[o._v("Aplicar Modelo")]),o._v(", selecione “alcohol”, “chlorides”, “citric_acid”, “density”, “fixed_acidity”, “free_sulfur_dioxide”, “pH”, “residual_sugar”, “sulphates”, “total_sulfur_dioxide” e “volatile_acidity” no campo "),e("strong",[o._v("Atributo(s) previsor(es)")]),o._v(" e preencha "),e("em",[o._v("“resultado”")]),o._v(" no campo "),e("strong",[o._v("Nome do novo atributo (herdado do modelo)")]),o._v(".")],1)]),o._v(" "),e("li",[e("p",[o._v("Na operação "),e("router-link",{attrs:{to:"/pt-br/"}},[o._v("Avaliar Modelo")]),o._v(", selecione "),e("em",[o._v("“resultado”")]),o._v(" no campo "),e("strong",[o._v("Atributo usado para predição")]),o._v(". Selecione "),e("em",[o._v("“quality”")]),o._v(" no campo "),e("strong",[o._v("Atributo usado como label")]),o._v(" e a métrica "),e("em",[o._v("“Raiz do erro quadrático médio”")]),o._v(" como "),e("strong",[o._v("Métrica para avaliação")]),o._v(".")],1)]),o._v(" "),e("li",[e("p",[o._v("Execute o fluxo e visualize o resultado, que neste caso está de acordo com a raiz do erro quadrático médio ("),e("strong",[o._v("Root Mean Square Error")]),o._v(" ou "),e("strong",[o._v("RMSE")]),o._v("):"),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/regressao_isotonica/image1.png",alt:"Resultado"}})])])]),o._v(" "),e("hr"),o._v(" "),e("p",[o._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);a.default=t.exports}}]);