(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{304:function(a,e,o){"use strict";o.r(e);var r=o(0),t=Object(r.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"salvar-modelo"}},[a._v("Salvar Modelo")]),a._v(" "),o("p",[a._v("Salva um modelo gerado pela ferramenta para uso futuro.")]),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Modelo(s) a ser(em) salvo(s)")]),a._v(" "),o("td",[a._v("Não tem")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Aramzenamento")])]),a._v(" "),o("td")]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Nome do Modelo")])]),a._v(" "),o("td")]),a._v(" "),o("tr",[o("td",[o("strong",[o("a",{attrs:{href:"#qual-modelo-salvar"}},[a._v("Qual modelo salvar?")])])]),a._v(" "),o("td",[a._v("Atualmente disponível somente HDFS. É obrigatório se existem vários modelos")])]),a._v(" "),o("tr",[o("td",[o("strong",[o("a",{attrs:{href:"#acao-caso-o-modelo-ja-exista"}},[a._v("Ação caso o modelo já exista")])])]),a._v(" "),o("td")])])]),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),o("h3",{attrs:{id:"qual-modelo-salvar"}},[a._v("Qual modelo salvar?")]),a._v(" "),o("p",[a._v("O modelo pode ser salvo das seguintes formas:")]),a._v(" "),o("ol",[o("li",[a._v("Salvar melhor modelo.")]),a._v(" "),o("li",[a._v("Salvar todos (os nomes serão sufixados conforme a posição do modelo no rank).")])]),a._v(" "),o("h3",{attrs:{id:"acao-caso-o-modelo-ja-exista"}},[a._v("Ação caso o modelo já exista")]),a._v(" "),o("p",[a._v("As ações são as seguintes:")]),a._v(" "),o("ol",[o("li",[a._v("Sobrescrever.")]),a._v(" "),o("li",[a._v("Apresentar erro.")])]),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Salvar um modelo criado para uso posterior."),o("br"),a._v(" "),o("strong",[a._v("Base de Dados:")]),a._v(" "),o("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#iris"}},[a._v("Íris")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/spark/entrada_e_saida/salvar_modelo/image6.png",alt:"Ler dados"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Adicione uma base de dados por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(". "),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/entrada_e_saida/salvar_modelo/image3.png",alt:"Tabela - Ler dados"}})],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html"}},[a._v("Converter categórico para numérico")]),a._v(", selecione "),o("em",[a._v("“class”")]),a._v(" no campo "),o("strong",[a._v("Atributos")]),a._v(" e "),o("em",[a._v("“String”")]),a._v(" no campo "),o("strong",[a._v("Tipo de indexador")]),a._v(". Preencha "),o("em",[a._v("“class_label”")]),a._v(" no campo "),o("strong",[a._v("Nome para novo(s) atributo(s) indexado(s)")]),a._v("."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/entrada_e_saida/salvar_modelo/image2.png",alt:"Converter categórico para numérico"}})],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[a._v("Divisão Percentual")]),a._v(", selecione 30%-70%."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/entrada_e_saida/salvar_modelo/image4.png",alt:"Divisão percentual"}})],1)]),a._v(" "),o("li",[o("p",[a._v("Adicione a operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/aprendizado-de-maquina/classificacao-naive-bayes.html"}},[a._v("Naive Bayes")]),a._v(", selecione "),o("em",[a._v("“petal_length”")]),a._v(", "),o("em",[a._v("“petal_width”")]),a._v(", "),o("em",[a._v("“sepal_length”")]),a._v(" e "),o("em",[a._v("“sepal_width”")]),a._v(" no campo "),o("strong",[a._v("Atributos previsores")]),a._v(" e "),o("em",[a._v("“class_label”")]),a._v(" no "),o("strong",[a._v("Atributo com rótulo")]),a._v("."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/entrada_e_saida/salvar_modelo/image1.png",alt:"Naive Bayes"}})],1)]),a._v(" "),o("li",[o("p",[a._v("Adicione a operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/aplicar-modelo.html"}},[a._v("Aplicar modelo")]),a._v(", selecione "),o("em",[a._v("“petal_length”")]),a._v(", "),o("em",[a._v("“petal_width”")]),a._v(", "),o("em",[a._v("“sepal_length”")]),a._v(" e "),o("em",[a._v("“sepal_width”")]),a._v(" no campo "),o("strong",[a._v("Atributos previsores")]),a._v(" e preencha "),o("em",[a._v("“prediction”")]),a._v(" no campo "),o("strong",[a._v("Nome do novo atributo")]),a._v(". "),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/entrada_e_saida/salvar_modelo/image7.png",alt:"Aplicar modelo"}})],1)]),a._v(" "),o("li",[o("p",[a._v("Adicione a operação "),o("strong",[a._v("Salvar Modelo")]),a._v(". Selecione "),o("em",[a._v("“Default”")]),a._v(" em "),o("strong",[a._v("Armazenamento")]),a._v(". Preencha "),o("em",[a._v("“teste_salvar”")]),a._v(" em "),o("strong",[a._v("Nome do modelo")]),a._v(". Selecione "),o("em",[a._v("“Salvar todos”")]),a._v(" em Qual modelo salvar? e “"),o("em",[a._v("Sobrescrever”")]),a._v(" em "),o("strong",[a._v("Ação caso modelo já exista")]),a._v("."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/entrada_e_saida/salvar_modelo/image5.png",alt:"Salvar"}})])]),a._v(" "),o("li",[o("p",[a._v("Execute o modelo e ele será salvo.")])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=t.exports}}]);