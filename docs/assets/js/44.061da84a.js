(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{225:function(a,o,s){"use strict";s.r(o);var e=s(0),r=Object(e.a)({},function(){var a=this,o=a.$createElement,s=a._self._c||o;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"adicionar-nova-s-coluna-s"}},[a._v("Adicionar Nova(s) Coluna(s)")]),a._v(" "),s("p",[a._v("A operação "),s("strong",[a._v("Adicionar Nova(s) Coluna(s)")]),a._v(" adiciona uma ou mais colunas a uma única saída de dados. Geralmente é utilizado quando é necessário agrupar em uma mesma saída de dados, diversos atributos de diferentes bases de dados. Um caso de uso comum para essa operação poderia ser o pareamento de um conjunto de atributos em duas bases de dados distintas. Supondo que fosse preciso parear o nome de pessoas em diferentes bases de dados, é possível reunir esses atributos em uma única base para facilitar o trabalho."),s("br"),a._v(" "),s("strong",[a._v("É importante que as duas bases de dados apresentem atributos de uma mesma natureza, isto é, que possam ser comparados.")])]),a._v(" "),s("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Entrada")]),a._v(" "),s("th",[a._v("Saída")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("Até duas fontes de dados.")]),a._v(" "),s("td",[a._v("Uma ou mais fontes com os dados modificados.")])])])]),a._v(" "),s("h3",{attrs:{id:"execucao"}},[a._v("Execução")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Parâmetro")]),a._v(" "),s("th",[a._v("Detalhe")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[a._v("Prefixo para os atributos")])]),a._v(" "),s("td",[a._v("Os prefixos dos nomes das novas colunas na saída de dados da operação. (2 valores separados por vírgula)")])])])]),a._v(" "),s("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),s("p",[a._v("Nome da Tarefa")]),a._v(" "),s("p",[s("router-link",{attrs:{to:"/pt-br/"}},[a._v("Aba Aparência")])],1),a._v(" "),s("p",[s("router-link",{attrs:{to:"/pt-br/"}},[a._v("Aba Resultados")])],1),a._v(" "),s("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),s("p",[s("strong",[a._v("Objetivo:")]),a._v(" Combinar (parear) duas bases de dados usando o nome das pessoas presentes nas duas bases. Como saída, os atributos das duas bases serão combinados em uma mesma base.")]),a._v(" "),s("p",[s("strong",[a._v("Base de Dados:")]),a._v(" "),s("router-link",{attrs:{to:"/pt-br/"}},[a._v("Titanic e US Baby Names")])],1),a._v(" "),s("p",[s("img",{attrs:{src:"/img/spark/manipulacao_de_dados/coluna_adicionar_nova/image2.png",alt:"Ler dados"}})]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Adicione ao fluxo sendo criado a base de dados Titanic por meio da operação "),s("router-link",{attrs:{to:"/pt-br/"}},[a._v("Ler dados")]),a._v("."),s("br"),a._v(" "),s("img",{attrs:{src:"/img/spark/manipulacao_de_dados/coluna_adicionar_nova/image3.png",alt:"Ler dados - Titanic"}})],1)]),a._v(" "),s("li",[s("p",[a._v("Adicione a base de dados US Baby Names por meio da operação "),s("router-link",{attrs:{to:"/pt-br/"}},[a._v("Ler dados")]),a._v(". "),s("br"),a._v(" "),s("img",{attrs:{src:"/img/spark/manipulacao_de_dados/coluna_adicionar_nova/image1.png",alt:"Ler dados - US Baby Names"}}),s("br"),a._v("\nAntes de ser adicionada, a base foi reduzida para conter a mesma quantidade de instâncias (linhas) da base de dados Titanic.")],1)]),a._v(" "),s("li",[s("p",[a._v("Como as duas bases possuem muitos atributos além dos escolhidos, adicione a operação "),s("router-link",{attrs:{to:"/pt-br/"}},[a._v("Selecionar Atributos")]),a._v(" para separar uma única saída de dados com os atributos que serão utilizados."),s("br"),a._v(" "),s("img",{attrs:{src:"/img/spark/manipulacao_de_dados/coluna_adicionar_nova/image6.png",alt:"Selecionar Atributos"}})],1)]),a._v(" "),s("li",[s("p",[a._v("Para unir os atributos selecionados em cada uma das entradas de dados em uma única saída, adicione a operação "),s("strong",[a._v("Adicionar Nova(s) Coluna(s)")]),a._v(". No campo "),s("strong",[a._v("Prefixo para os atributos")]),a._v(" preencha base01 e base02, isto auxilia a diferenciar a qual fonte aquele atributo pertence."),s("br"),a._v(" "),s("img",{attrs:{src:"/img/spark/manipulacao_de_dados/coluna_adicionar_nova/image4.png",alt:"Operação Adicionar Coluna"}})])]),a._v(" "),s("li",[s("p",[a._v("Execute o fluxo e visualize o resultado."),s("br"),a._v(" "),s("img",{attrs:{src:"/img/spark/manipulacao_de_dados/coluna_adicionar_nova/image5.png",alt:"Resultado"}})])])]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);o.default=r.exports}}]);