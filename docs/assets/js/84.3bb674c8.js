(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{400:function(e,o,a){"use strict";a.r(o);var r=a(28),t=Object(r.a)({},(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"minimo-maximo"}},[e._v("Mínimo-Máximo")]),e._v(" "),a("p",[e._v("Transforma um atributo do conjunto de dados, escalando esse atributo para que ele fique dentro de determinado intervalo ["),a("em",[e._v("min_range")]),e._v(", "),a("em",[e._v("max_range")]),e._v("]. Sejam "),a("em",[e._v("min_value")]),e._v(" o valor mínimo encontrado nos dados de entrada para o atributo, "),a("em",[e._v("max_value")]),e._v(" o valor máximo e "),a("em",[e._v("atr")]),e._v(" o valor corrente a ser transformado. A transformação se dá de acordo com a operação:"),a("br"),e._v(" "),a("em",[e._v("(atr - min_value) / (max_value - min_value) * (max_range - min_range) + min_range")])]),e._v(" "),a("h3",{attrs:{id:"conectores"}},[e._v("Conectores")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Entrada")]),e._v(" "),a("th",[e._v("Saída")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Dados tratados e modelo gerado")]),e._v(" "),a("td",[e._v("Dados a serem tratados")])])])]),e._v(" "),a("h3",{attrs:{id:"tarefa"}},[e._v("Tarefa")]),e._v(" "),a("p",[e._v("Nome da Tarefa")]),e._v(" "),a("h3",{attrs:{id:"aba-execucao"}},[e._v("Aba Execução")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parâmetro")]),e._v(" "),a("th",[e._v("Detalhe")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[e._v("Atributo(s) previsor(es)")])]),e._v(" "),a("td",[e._v("Atributo que será transformado pelo escalador")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Nome do novo atributo")])]),e._v(" "),a("td",[e._v("Nome que o atributo escalado receberá")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Limite inferior para a faixa")])]),e._v(" "),a("td",[e._v("Valor mínimo que o atributo transformado assumirá")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Limite superior para a faixa")])]),e._v(" "),a("td",[e._v("Valor máximo que o atributo transformado assumirá")])])])]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[e._v("Aba Aparência")])],1),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[e._v("Aba Resultados")])],1),e._v(" "),a("h2",{attrs:{id:"exemplos-de-utilizacao"}},[e._v("Exemplos de Utilização")]),e._v(" "),a("h3",{attrs:{id:"exemplo-1"}},[e._v("Exemplo 1")]),e._v(" "),a("p",[a("strong",[e._v("Objetivo:")]),e._v(" utilizar o mínimo-máximo para escalonar um atributo."),a("br"),e._v(" "),a("strong",[e._v("Base de Dados:")]),e._v(" "),a("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#iris"}},[e._v("Íris")])],1),e._v(" "),a("p",[a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-minimo-maximo/image4.png",alt:"Fluxo de trabalho"}})]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Adicione uma base de dados por meio da operação "),a("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[e._v("Ler dados")]),e._v("."),a("br"),e._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-minimo-maximo/image1.png",alt:"Opereação Ler Dados"}})],1)]),e._v(" "),a("li",[a("p",[e._v("Utilize a operação "),a("strong",[e._v("Mínimo-Máximo")]),e._v(" para escalar os atributos. Selecione "),a("em",[e._v("“sepallength”")]),e._v(" e "),a("em",[e._v("“sepalwidth”")]),e._v(" no campo "),a("strong",[e._v("Atributo(s) previsor(es)")]),e._v(". Preencha "),a("em",[e._v("“scaled_length_width”")]),e._v(" no campo "),a("strong",[e._v("Nome do novo atributo")]),e._v(", "),a("em",[e._v("1")]),e._v(" para o "),a("strong",[e._v("Limite inferior para a faixa")]),e._v(" e "),a("em",[e._v("2")]),e._v(" para o "),a("strong",[e._v("superior")]),e._v("."),a("br"),e._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-minimo-maximo/image8.png",alt:"Opereação Mínimo Máximo"}})])]),e._v(" "),a("li",[a("p",[e._v("Execute o fluxo e visualize o resultado."),a("br"),e._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-minimo-maximo/image7.png",alt:"Resultado"}}),a("br"),e._v("\nO resultado possui o atributo "),a("em",[e._v("“scaled_length_width”")]),e._v(", que é um vetor de dois elementos, correspondente aos atributos "),a("em",[e._v("“sepal length”")]),e._v(" e "),a("em",[e._v("“sepal width”")]),e._v(" já escalados. O grande número de casas decimais se deve apenas à representação binária de números ponto flutuante.")])])]),e._v(" "),a("h3",{attrs:{id:"exemplo-2"}},[e._v("Exemplo 2")]),e._v(" "),a("p",[a("strong",[e._v("Objetivo:")]),e._v(" A reutilização do modelo aprendido pelo escalador pode ser útil, por exemplo, ao processar o dado em batches. O segundo batch pode ser escalado de acordo com o primeiro, o que pode acontecer com a divisão de dados entre treino e teste numa tarefa de aprendizado supervisionado. Abaixo, é exibido um exemplo do uso do Escalador min-máx com a reutilização do modelo."),a("br"),e._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-minimo-maximo/image2.png",alt:"Fluxo de trabalho"}}),e._v("\\")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Adicione uma base de dados por meio da operação "),a("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[e._v("Ler dados")]),e._v(", assim como o "),a("strong",[e._v("Exemplo 1")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("Adicione e utilize a operação "),a("strong",[e._v("Mínimo-Máximo")]),e._v(" para escalar os atributos. Selecione "),a("em",[e._v("“petallength”")]),e._v(" e "),a("em",[e._v("“petalwidth”")]),e._v(" no campo "),a("strong",[e._v("Atributo(s) previsor(es)")]),e._v(". Preencha "),a("em",[e._v("“scaled_length_width”")]),e._v(" no campo "),a("strong",[e._v("Nome do novo atributo")]),e._v(", 1 para o "),a("strong",[e._v("Limite inferior para a faixa")]),e._v(" e 2 para o "),a("strong",[e._v("superior")]),e._v("."),a("br"),e._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-minimo-maximo/image3.png",alt:"Operação Mínimo Máximo"}})])]),e._v(" "),a("li",[a("p",[e._v("Utilize a operação "),a("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/aplicar-modelo.html"}},[e._v("Aplicar modelo")]),e._v(". Selecione "),a("em",[e._v("“sepallength”")]),e._v(" e "),a("em",[e._v("“sepalwidth”")]),e._v(" no campo "),a("strong",[e._v("Atributo(s) previsor(es)")]),e._v(". Preencha "),a("em",[e._v("“scaled_length_with”")]),e._v(" no campo "),a("strong",[e._v("Nome do novo atributo")]),e._v("."),a("br"),e._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-minimo-maximo/image5.png",alt:"Operação Aplicar Modelo"}})],1)]),e._v(" "),a("li",[a("p",[e._v("Execute o fluxo e observe o resultado."),a("br"),e._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-minimo-maximo/image6.png",alt:"Resultado"}}),a("br"),e._v("\nO resultado possui o atributo "),a("em",[e._v("“scaled_length_width”")]),e._v(", que é um vetor de dois elementos, correspondente aos atributos "),a("em",[e._v("“sepallength”")]),e._v(" e "),a("em",[e._v("“sepalwidth”")]),e._v(" escalados de acordo com o modelo aprendido com os atributos "),a("em",[e._v("“petallength”")]),e._v(" e "),a("em",[e._v("“petalwidth”")]),e._v(". É possível notar a diferença entre ajustar e aplicar o modelo nos mesmos dados, o que foi feito no caso de uso anterior, e ajustar o modelo e aplicar em dados diferentes. Por exemplo, na amostra de dados, o valor do segundo elemento do vetor "),a("em",[e._v("“scaled_length_width”")]),e._v(" é maior que 2 (o valor máximo configurado para o intervalo) para as instâncias visíveis.")])])]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);o.default=t.exports}}]);