(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{418:function(a,t,s){"use strict";s.r(t);var n=s(28),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"executar-codigo-python"}},[a._v("Executar Código Python")]),a._v(" "),s("p",[a._v("Executa um código Python criado pelo usuário, podendo criar ou modificar uma bases de dados. É importante ressaltar que as entradas são do tipo "),s("em",[a._v("pyspark.sql.DataFrame")]),a._v(" e as funções suportadas podem ser encontradas na "),s("a",{attrs:{href:"https://spark.apache.org/docs/latest/api/python/pyspark.sql.html#pyspark.sql.DataFrame",target:"_blank",rel:"noopener noreferrer"}},[a._v("documentação oficial"),s("OutboundLink")],1),a._v(". Com relação à criação é necessário usar a função abaixo:")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("createDataFrame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" schema"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" samplingRatio"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" verifySchema"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("A qual tem seus parâmetros detalhados na "),s("a",{attrs:{href:"https://spark.apache.org/docs/latest/api/python/pyspark.sql.html#pyspark.sql.SparkSession.createDataFrame",target:"_blank",rel:"noopener noreferrer"}},[a._v("documentação do Spark"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Entrada")]),a._v(" "),s("th",[a._v("Saída")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("Dados a serem alterados. Podem ser referenciados como "),s("strong",[a._v("in1")]),a._v(" e "),s("strong",[a._v("in2")])]),a._v(" "),s("td",[a._v("Dados criados ou alterados. Podem ser referenciados como "),s("strong",[a._v("out1")]),a._v(" e "),s("strong",[a._v("out2")])])])])]),a._v(" "),s("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),s("p",[a._v("Nome da Tarefa")]),a._v(" "),s("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Parâmetro")]),a._v(" "),s("th",[a._v("Detalhe")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[a._v("Código")])]),a._v(" "),s("td",[a._v("Código em python a ser aplicado")])])])]),a._v(" "),s("p",[s("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),s("p",[s("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),s("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),s("p",[s("strong",[a._v("Objetivo:")]),a._v(" criar uma base para que o seu número de colunas seja comparado com a entrada 1, e ao final retornar a que tiver a maior quantidade de colunas. Caso as duas tenham a mesma quantidade, a entrada 1 deve ser retornada. Por fim, gerar um gráfico de dispersão para ilustrar qual foi a base retornada."),s("br"),a._v(" "),s("strong",[a._v("Base de Dados:")]),a._v(" "),s("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#iris"}},[a._v("Íris")])],1),a._v(" "),s("p",[s("img",{attrs:{src:"/img/spark/avancado/executar_codigo_python/image7.png",alt:"Ler dados"}})]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Adicione uma base de dados por meio da operação "),s("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(". "),s("br"),a._v(" "),s("img",{attrs:{src:"/img/spark/avancado/executar_codigo_python/image1.png",alt:"Tabela Ler dados"}})],1)]),a._v(" "),s("li",[s("p",[a._v("Adicione a operação "),s("strong",[a._v("Executar código Python")]),a._v(". A base criada no código Python será a mesma da entrada, porém com apenas as 5 primeiras linhas, sendo fácil de identificar qual foi retornada pelo número de pontos no gráfico gerado. Portanto, adicione o código abaixo no campo "),s("strong",[a._v("Código")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("####")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Write your Python code here")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Inputs are available as in1 and in2, outputs are out1 and out2")]),a._v("\n\ndata "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nnames "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Sepal_length"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Sepal_width"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Petal_length"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Petal_width"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Species"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\ndf "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" createDataFrame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("in1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("columns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("df"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("columns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  out1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" in1\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  out1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" df\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("####")]),a._v("\n")])])]),s("p",[s("img",{attrs:{src:"/img/spark/avancado/executar_codigo_python/image3.png",alt:"Ler código python"}})])]),a._v(" "),s("li",[s("p",[a._v("Adicione a operação "),s("RouterLink",{attrs:{to:"/pt-br/spark/visualizacao-de-dados/grafico-de-dispersao.html"}},[a._v("Gráfico de dispersão")]),a._v(". Utilizando "),s("em",[a._v("“class”")]),a._v(" como "),s("strong",[a._v("Atributo para o eixo X")]),a._v(" e "),s("em",[a._v("“Petallength”")]),a._v(" como "),s("strong",[a._v("Atributo para o eixo Y")]),a._v(". Preencha "),s("em",[a._v("“Comprimento da pétala por espécie”")]),a._v(" no campo "),s("strong",[a._v("Título")]),a._v(", "),s("em",[a._v("“Espécie”")]),a._v(" no campo "),s("strong",[a._v("Título para o eixo X")]),a._v(" e "),s("em",[a._v("“Comprimento da pétala”")]),a._v(" no campo "),s("strong",[a._v("Título para o eixo Y")]),a._v("."),s("br"),a._v(" "),s("img",{attrs:{src:"/img/spark/avancado/executar_codigo_python/image4.png",alt:"Selecionando gráfico de dispersão"}})],1)]),a._v(" "),s("li",[s("p",[a._v("Execute o fluxo e visualize o resultado\n"),s("img",{attrs:{src:"/img/spark/avancado/executar_codigo_python/image5.png",alt:"Resultado do fluxo"}}),s("br"),a._v("\nO gráfico mostra que a base retornada foi a de entrada por ter mais de 5 pontos. Esse era o resultado esperado, uma vez que ao ter o mesmo número de colunas a entrada é retornada.")])]),a._v(" "),s("li",[s("p",[a._v("Para validar que a base criada pelo código é retornada se ela tiver mais colunas, é preciso alterar o que foi escrito no "),s("strong",[a._v("passo 2")]),a._v(" e adicionar uma coluna de numeração de linhas como mostrado abaixo:")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("####")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Write your Python code here")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Inputs are available as in1 and in2, outputs are out1 and out2")]),a._v("\n\ndata "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Iris-setosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nnames "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Line"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Sepal_length"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Sepal_width"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Petal_length"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Petal_width"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Species"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\ndf "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" createDataFrame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("in1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("columns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("df"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("columns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  out1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" in1\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  out1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" df\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("####")]),a._v("\n")])])]),s("p",[s("img",{attrs:{src:"/img/spark/avancado/executar_codigo_python/image2.png",alt:"Ler código python"}})])]),a._v(" "),s("li",[s("p",[a._v("Execute o fluxo novamente e visualize o resultado."),s("br"),a._v(" "),s("img",{attrs:{src:"/img/spark/avancado/executar_codigo_python/image6.png",alt:"Ler código python"}}),s("br"),a._v("\nO gráfico mostra que a base retornada foi realmente a gerada pelo código por ter menos de 5 pontos.")])])]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);t.default=e.exports}}]);