(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{347:function(a,e,r){"use strict";r.r(e);var o=r(28),t=Object(o.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"carregar-modelo"}},[a._v("Carregar Modelo")]),a._v(" "),r("p",[a._v("Carrega um modelo previamente gerado pelo LEMONADE e salvo usando a operação "),r("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/salvar-modelo.html"}},[a._v("Salvar modelo")]),a._v(". O modelo carregado pode ser aplicado em um novo conjunto de dados, sendo reutilizado.")],1),a._v(" "),r("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),r("table",[r("thead",[r("tr",[r("th",[a._v("Entrada")]),a._v(" "),r("th",[a._v("Saída")])])]),a._v(" "),r("tbody",[r("tr",[r("td",[a._v("Não tem")]),a._v(" "),r("td",[a._v("Modelo carregado")])])])]),a._v(" "),r("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),r("p",[a._v("Nome da Tarefa")]),a._v(" "),r("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),r("table",[r("thead",[r("tr",[r("th",[a._v("Parâmetro")]),a._v(" "),r("th",[a._v("Detalhe")])])]),a._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[a._v("Modelo")])]),a._v(" "),r("td",[a._v("Modelo anteriormente salvo a ser carregado")])])])]),a._v(" "),r("p",[r("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),r("p",[r("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),r("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),r("p",[r("strong",[a._v("Objetivo:")]),a._v(" Carregar um modelo salvo. No exemplo apresentado, será utilizada a base de dados íris. O modelo será carregado, aplicado a base íris e avaliado."),r("br"),a._v(" "),r("strong",[a._v("Base de Dados:")]),a._v(" "),r("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#iris"}},[a._v("Íris")])],1),a._v(" "),r("p",[r("img",{attrs:{src:"/img/spark/entrada_e_saida/carregar_modelo/image6.png",alt:"Ler dados"}})]),a._v(" "),r("ol",[r("li",[r("p",[a._v("Adicione uma base de dados por meio da operação "),r("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v("."),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/entrada_e_saida/carregar_modelo/image5.png",alt:"Tabela - Ler dados"}})],1)]),a._v(" "),r("li",[r("p",[a._v("Na operação "),r("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html"}},[a._v("Converter categórico")]),a._v(" para numérico, selecione "),r("em",[a._v("“class”")]),a._v(" no campo "),r("strong",[a._v("Atributos")]),a._v(". Preencha "),r("em",[a._v("“class_label”")]),a._v(" no campo "),r("strong",[a._v("Nome para novos atributos indexados")]),a._v("."),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/entrada_e_saida/carregar_modelo/image4.png",alt:"Converter categórico para numérico"}})],1)]),a._v(" "),r("li",[r("p",[a._v("Adicione a operação "),r("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/aplicar-modelo.html"}},[a._v("Aplicar modelo")]),a._v(", selecione "),r("em",[a._v("“petal_length”")]),a._v(", "),r("em",[a._v("“petal_width”")]),a._v(", "),r("em",[a._v("“sepal_length”")]),a._v(" e "),r("em",[a._v("“sepal_width”")]),a._v(" no campo "),r("strong",[a._v("Atributos previsores")]),a._v(" e preencha "),r("em",[a._v("“prediction”")]),a._v(" no campo "),r("strong",[a._v("Nome do novo atributo")]),a._v("."),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/entrada_e_saida/carregar_modelo/image3.png",alt:"Aplicar modelo"}})],1)]),a._v(" "),r("li",[r("p",[a._v("Adicione a operação "),r("strong",[a._v("Carregar modelo")]),a._v(" e selecione o modelo que será utilizado no fluxo."),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/entrada_e_saida/carregar_modelo/image7.png",alt:"Tabela - Carregar modelo"}})])]),a._v(" "),r("li",[r("p",[a._v("Adicione a operação [Avaliar Modelo] selecione "),r("em",[a._v("“prediction”")]),a._v(" no campo "),r("strong",[a._v("Atributo usado para predição")]),a._v(", "),r("em",[a._v("“class_label”")]),a._v(" no "),r("strong",[a._v("Atributo usado como label")]),a._v(", "),r("em",[a._v("“Acurácia”")]),a._v(" em "),r("strong",[a._v("Métrica usada para avaliação")]),a._v(".\n"),r("img",{attrs:{src:"/img/spark/entrada_e_saida/carregar_modelo/image2.png",alt:"Tabela - Avaliar modelo"}})])]),a._v(" "),r("li",[r("p",[a._v("Execute o fluxo e visualize o resultado."),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/entrada_e_saida/carregar_modelo/image1.png",alt:"Gráfico - Resultado"}}),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/entrada_e_saida/carregar_modelo/image8.png",alt:"Tabela - Resultado"}})])])]),a._v(" "),r("hr"),a._v(" "),r("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=t.exports}}]);