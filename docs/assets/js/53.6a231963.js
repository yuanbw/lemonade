(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{209:function(a,e,o){"use strict";o.r(e);var s=o(0),r=Object(s.a)({},function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"adicionar-nova-s-coluna-s"}},[a._v("Adicionar Nova(s) Coluna(s)")]),a._v(" "),o("p",[o("strong",[a._v("Remover linhas duplicadas")]),a._v(" é uma operação que remove as linhas quando o(s) seu(s) campo(s) chave escolhido(s) conter(em) o mesmo valor.")]),a._v(" "),o("p",[a._v("Detalhes de funcionamento: (i) a linha mantida será a que ocorre a primeira aparição do valor; (ii) quando mais de um campo É ESCOLHIDO a remoção só é realizada se todos os atributos forem iguais; (iii) a ordem da base não é preservada.")]),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Uma fonte de dados")]),a._v(" "),o("td")])])]),a._v(" "),o("h3",{attrs:{id:"parametros-da-tarefa"}},[a._v("Parâmetros da Tarefa")]),a._v(" "),o("p",[a._v("Nome")]),a._v(" "),o("h3",{attrs:{id:"execucao"}},[a._v("Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Campos-chave")])]),a._v(" "),o("td",[a._v("Nome(s) da(s) coluna(s) em que deve-se procurar por valores repetidos")])])])]),a._v(" "),o("p",[o("router-link",{attrs:{to:"/pt-br/"}},[a._v("Propriedades da Aparência")])],1),a._v(" "),o("p",[o("router-link",{attrs:{to:"/pt-br/"}},[a._v("Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Remover linhas duplicadas da base de dados.")]),a._v(" "),o("p",[o("strong",[a._v("Base de Dados:")]),a._v(" "),o("router-link",{attrs:{to:"/pt-br/"}},[a._v("Íris")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/spark/manipulacao_de_dados/linha_remover_duplicadas/image3.png",alt:"Ler dados"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Adicione uma base de dados por meio da operação "),o("router-link",{attrs:{to:"/pt-br/"}},[a._v("Ler dados")]),a._v(". É importante marcar a caixa de seleção "),o("strong",[a._v("Exibir amostra(s) da(s) saída(s) (máx. 50 registros)")]),a._v(" na aba "),o("router-link",{attrs:{to:"/pt-br/"}},[a._v("Resultados")]),a._v(" para efetuar uma comparação posterior com o resultado da operação "),o("strong",[a._v("Remover linhas duplicadas")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Adicione a operação "),o("strong",[a._v("Remover linhas duplicadas")]),a._v(", selecione a coluna "),o("em",[a._v("“petal_width”")]),a._v(" como "),o("strong",[a._v("Campos-chave")]),a._v(", ou seja, a coluna de atributos em que deve-se procurar por valores repetidos. Também é importante marcar a caixa de seleção "),o("strong",[a._v("Exibir amostra(s) da(s) saída(s) (máx. 50 registros)")]),a._v(" na aba "),o("router-link",{attrs:{to:"/pt-br/"}},[a._v("Resultados")]),a._v(" para uma comparação com a entrada. "),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/manipulacao_de_dados/linha_remover_duplicadas/image1.png",alt:"Ler dados"}})],1)]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize o resultado."),o("br"),a._v("\nCompare a base de entrada com aquela retornada por essa operação. A mesma é finalizada com sucesso se, e somente se, o(s) campo(s) chave selecionado(s) (neste caso, "),o("strong",[a._v("petal_width")]),a._v(") não possuir(em) nenhuma repetição de valor(es). As duas imagens abaixo mostram um antes e um depois da execução desta operação com os parâmetros mencionados. Observe que anteriormente à execução de "),o("strong",[a._v("Remover linhas duplicadas")]),a._v(", existiam muitas repetições do valor 0.2. Contudo, após a sua execução, só existe uma ocorrência. Como a ordem não é preservada, esse valor ocorreu somente na linha 12.")]),a._v(" "),o("p",[a._v("Figura mostrando o retorno após a execução de Leitor de dados:"),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/manipulacao_de_dados/linha_remover_duplicadas/image4.png",alt:"Ler dados"}})]),a._v(" "),o("p",[a._v("Figura mostrando o retorno após a execução de "),o("strong",[a._v("Remover linhas duplicadas")]),a._v(":"),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/manipulacao_de_dados/linha_remover_duplicadas/image2.png",alt:"Ler dados"}})]),a._v(" "),o("p",[a._v("Também é possível adicionar mais de um campo chave, i.e., várias colunas de atributos a serem verificadas e suas respectivas linhas (com valores dos campos duplicados) removidas. Contudo, quando se seleciona diversos campos chave, cada coluna pode individualmente conter valores repetidos. Isso ocorre pois, a remoção só é feita quando todos os campos chave selecionados possuírem o mesmo valor em mais de uma linha.")])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);e.default=r.exports}}]);