(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{375:function(a,r,e){"use strict";e.r(r);var o=e(28),s=Object(o.a)({},(function(){var a=this,r=a.$createElement,e=a._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"filtrar-por-funcao"}},[a._v("Filtrar por Função")]),a._v(" "),e("p",[a._v("Filtrar por função é uma operação que filtra os dados sendo trabalhados a partir dos critérios selecionados.")]),a._v(" "),e("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Entrada")]),a._v(" "),e("th",[a._v("Saída")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("Uma fonte de dados")]),a._v(" "),e("td",[a._v("Uma ou mais  fontes com os dados modificados")])])])]),a._v(" "),e("h3",{attrs:{id:"parametros-da-tarefa"}},[a._v("Parâmetros da Tarefa")]),a._v(" "),e("p",[a._v("Nome")]),a._v(" "),e("h3",{attrs:{id:"execucao"}},[a._v("Execução")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Parâmetro")]),a._v(" "),e("th",[a._v("Detalhe")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[a._v("Expressão para filtro")])]),a._v(" "),e("td",[a._v("Expressões usadas para a filtragem")])])])]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),e("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),e("h3",{attrs:{id:"expressao"}},[a._v("Expressão")]),a._v(" "),e("p",[a._v("Uma expressão deve conter as seguintes informações:")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Atributos: Atributo(s) que será(ão) filtrado(s).")])]),a._v(" "),e("li",[e("p",[a._v("Função: Função que receberá como entrada o(s) atributo(s) para realizar a filtragem. Dentre as opções de função, tem-se:"),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/manipulacao_de_dados/filtrar_por_funcao/image1.png",alt:"Filtros"}})])]),a._v(" "),e("li",[e("p",[a._v("Valor: O valor que definirá a filtragem. Pode ser numérico ou não numérico, mas deve refletir exatamente os valores que estão presentes na base.")])])]),a._v(" "),e("h3",{attrs:{id:"expressoes-para-filtro"}},[a._v("Expressões para Filtro")]),a._v(" "),e("p",[a._v("Recebe uma expressão para filtragem. Podem ser usadas expressões comparativas como as vistas no filtro comum (<, >, ==, !=, etc.), conjunções como ou (||) e e(&&), e funções da operação "),e("strong",[a._v("Transformation")]),a._v(" que retornam valores booleanos (isnull() e isnan())."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/manipulacao_de_dados/filtrar_por_funcao/image3.png",alt:"Expressões de filtros"}})]),a._v(" "),e("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),e("p",[e("strong",[a._v("Objetivo:")]),a._v(" Separar as pessoas que sobreviveram ao desastre das pessoas que não sobreviveram, a fim de analisar as características de cada grupo separadamente."),e("br"),a._v(" "),e("strong",[a._v("Base de Dados:")]),a._v(" "),e("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#titanic"}},[a._v("Titanic")])],1),a._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/manipulacao_de_dados/filtrar_por_funcao/image4.png",alt:"Ler dados"}})]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Adicione uma base de dados por meio da operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Adicione a operação "),e("strong",[a._v("Filtrar por função")]),a._v(" e altere o nome para "),e("em",[a._v("“Filtro Sobreviveram”")]),a._v(". Clique na opção "),e("em",[a._v("“Editar valor”")]),a._v(". Preencha o campo "),e("strong",[a._v("expressão")]),a._v(" com “Survived == 1” para selecionar os passageiros que sobreviveram. "),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/manipulacao_de_dados/filtrar_por_funcao/image5.png",alt:"Filtrar por Função - Sobreviveram"}})])]),a._v(" "),e("li",[e("p",[a._v("Adicione novamente a operação "),e("strong",[a._v("Filtrar por função")]),a._v(" e altere o nome para “Filtro Não Sobreviveram”. Clique na opção “Editar valor”. Preencha o campo "),e("strong",[a._v("expressão")]),a._v(" com “Survived == 0” para selecionar os passageiros que não sobreviveram."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/manipulacao_de_dados/filtrar_por_funcao/image2.png",alt:"Filtrar por Função - Não Sobreviveram"}})])]),a._v(" "),e("li",[e("p",[a._v("Execute o fluxo e visualize o resultado, conforme mostrado abaixo\n"),e("img",{attrs:{src:"/img/spark/manipulacao_de_dados/filtrar_por_funcao/image7.png",alt:"Filtrar por Função - Não Sobreviveram"}})]),a._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/manipulacao_de_dados/filtrar_por_funcao/image6.png",alt:"Filtrar por Função - Não Sobreviveram"}})])])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);r.default=s.exports}}]);