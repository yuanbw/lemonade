(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{249:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"executar-codigo-python"}},[t._v("Executar Código Python")]),t._v(" "),s("p",[t._v("Executa um código Python criado pelo usuário, podendo criar ou modificar uma bases de dados. É importante ressaltar que as entradas são do tipo "),s("em",[t._v("pyspark.sql.DataFrame")]),t._v(" e as funções suportadas podem ser encontradas na "),s("router-link",{attrs:{to:"/pt-br/"}},[t._v("documentação oficial")]),t._v(". Com relação à criação é necessário usar a função abaixo:")],1),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("createDataFrame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" schema"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" samplingRatio"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" verifySchema"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("A qual tem seus parâmetros detalhados na "),s("router-link",{attrs:{to:"/pt-br/"}},[t._v("documentação do Spark")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"conectores"}},[t._v("Conectores")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Entrada")]),t._v(" "),s("th",[t._v("Saída")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Dados a serem alterados. Podem ser referenciados como "),s("strong",[t._v("in1")]),t._v(" e "),s("strong",[t._v("in2")])]),t._v(" "),s("td",[t._v("Dados criados ou alterados. Podem ser referenciados como "),s("strong",[t._v("out1")]),t._v(" e "),s("strong",[t._v("out2")])])])])]),t._v(" "),s("h3",{attrs:{id:"tarefa"}},[t._v("Tarefa")]),t._v(" "),s("p",[t._v("Nome da Tarefa")]),t._v(" "),s("h3",{attrs:{id:"aba-execucao"}},[t._v("Aba Execução")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parâmetro")]),t._v(" "),s("th",[t._v("Detalhe")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("Código")])]),t._v(" "),s("td",[t._v("Código em python a ser aplicado")])])])]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/pt-br/"}},[t._v("Aba Aparência")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/pt-br/"}},[t._v("Aba Resultados")])],1),t._v(" "),s("h2",{attrs:{id:"exemplo-de-utilizacao"}},[t._v("Exemplo de Utilização")]),t._v(" "),s("p",[s("strong",[t._v("Objetivo:")]),t._v(" criar uma base para que o seu número de colunas seja comparado com a entrada 1, e ao final retornar a que tiver a maior quantidade de colunas. Caso as duas tenham a mesma quantidade, a entrada 1 deve ser retornada. Por fim, gerar um gráfico de dispersão para ilustrar qual foi a base retornada."),s("br"),t._v(" "),s("strong",[t._v("Base de Dados:")]),t._v(" "),s("router-link",{attrs:{to:"/pt-br/"}},[t._v("Íris")])],1),t._v(" "),s("p",[s("img",{attrs:{src:"/img/spark/avancado/executar_codigo_python/image7.png",alt:"Ler dados"}})]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Adicione uma base de dados por meio da operação "),s("router-link",{attrs:{to:"/pt-br/"}},[t._v("Ler dados")]),t._v(". "),s("br"),t._v(" "),s("img",{attrs:{src:"/img/spark/avancado/executar_codigo_python/image1.png",alt:"Tabela Ler dados"}})],1)]),t._v(" "),s("li",[s("p",[t._v("Adicione a operação "),s("strong",[t._v("Executar código Python")]),t._v(". A base criada no código Python será a mesma da entrada, porém com apenas as 5 primeiras linhas, sendo fácil de identificar qual foi retornada pelo número de pontos no gráfico gerado. Portanto, adicione o código abaixo no campo "),s("strong",[t._v("Código")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("####")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Write your Python code here")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Inputs are available as in1 and in2, outputs are out1 and out2")]),t._v("\n\ndata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nnames "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sepal_length"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sepal_width"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Petal_length"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Petal_width"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Species"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\ndf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" createDataFrame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("columns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("df"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("columns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  out1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" in1\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  out1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" df\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("####")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"/img/spark/avancado/executar_codigo_python/image3.png",alt:"Ler código python"}})])]),t._v(" "),s("li",[s("p",[t._v("Adicione a operação "),s("router-link",{attrs:{to:"/pt-br/"}},[t._v("Gráfico de dispersão")]),t._v(". Utilizando "),s("em",[t._v("“class”")]),t._v(" como "),s("strong",[t._v("Atributo para o eixo X")]),t._v(" e "),s("em",[t._v("“Petallength”")]),t._v(" como "),s("strong",[t._v("Atributo para o eixo Y")]),t._v(". Preencha "),s("em",[t._v("“Comprimento da pétala por espécie”")]),t._v(" no campo "),s("strong",[t._v("Título")]),t._v(", "),s("em",[t._v("“Espécie”")]),t._v(" no campo "),s("strong",[t._v("Título para o eixo X")]),t._v(" e "),s("em",[t._v("“Comprimento da pétala”")]),t._v(" no campo "),s("strong",[t._v("Título para o eixo Y")]),t._v("."),s("br"),t._v(" "),s("img",{attrs:{src:"/img/spark/avancado/executar_codigo_python/image4.png",alt:"Selecionando gráfico de dispersão"}})],1)]),t._v(" "),s("li",[s("p",[t._v("Execute o fluxo e visualize o resultado\n"),s("img",{attrs:{src:"/img/spark/avancado/executar_codigo_python/image5.png",alt:"Resultado do fluxo"}}),s("br"),t._v("\nO gráfico mostra que a base retornada foi a de entrada por ter mais de 5 pontos. Esse era o resultado esperado, uma vez que ao ter o mesmo número de colunas a entrada é retornada.")])]),t._v(" "),s("li",[s("p",[t._v("Para validar que a base criada pelo código é retornada se ela tiver mais colunas, é preciso alterar o que foi escrito no "),s("strong",[t._v("passo 2")]),t._v(" e adicionar uma coluna de numeração de linhas como mostrado abaixo:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("####")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Write your Python code here")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Inputs are available as in1 and in2, outputs are out1 and out2")]),t._v("\n\ndata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nnames "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Line"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sepal_length"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sepal_width"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Petal_length"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Petal_width"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Species"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\ndf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" createDataFrame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("columns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("df"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("columns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  out1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" in1\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  out1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" df\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("####")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"/img/spark/avancado/executar_codigo_python/image2.png",alt:"Ler código python"}})])]),t._v(" "),s("li",[s("p",[t._v("Execute o fluxo novamente e visualize o resultado."),s("br"),t._v(" "),s("img",{attrs:{src:"/img/spark/avancado/executar_codigo_python/image6.png",alt:"Ler código python"}}),s("br"),t._v("\nO gráfico mostra que a base retornada foi realmente a gerada pelo código por ter menos de 5 pontos.")])])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);a.default=e.exports}}]);