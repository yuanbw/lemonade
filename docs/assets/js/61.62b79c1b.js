(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{331:function(a,o,e){"use strict";e.r(o);var t=e(0),s=Object(t.a)({},(function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"juncao"}},[a._v("Junção")]),a._v(" "),e("p",[a._v("É uma operação que combina os dados de duas fontes, duas tabelas. Usa como base a operação SQL join.")]),a._v(" "),e("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Entrada")]),a._v(" "),e("th",[a._v("Saída")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("Duas fontes de dados")]),a._v(" "),e("td",[a._v("Os dados combinados das duas fontes")])])])]),a._v(" "),e("h3",{attrs:{id:"parametros-da-tarefa"}},[a._v("Parâmetros da Tarefa")]),a._v(" "),e("p",[a._v("Nome")]),a._v(" "),e("h3",{attrs:{id:"execucao"}},[a._v("Execução")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Parâmetro")]),a._v(" "),e("th",[a._v("Detalhe")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[a._v("Atributos da 1.ª Fonte")])]),a._v(" "),e("td",[a._v("Lista com o(s) atributo(s) da primeira fonte de dados que serão utilizados como chave(s).")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributos da 2.ª Fonte")])]),a._v(" "),e("td",[a._v("Lista com o(s) atributo(s) da segunda fonte de dados que serão utilizados como chave(s).")])]),a._v(" "),e("tr",[e("td",[e("strong",[e("a",{attrs:{href:"#tipos-de-juncao"}},[a._v("Tipo de Junção")])])]),a._v(" "),e("td",[a._v("Tipo de junção a ser utilizada na operação")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Manter chaves da 2.ª Fonte")])]),a._v(" "),e("td",[a._v("Quando definido mantêm as chaves privadas da segunda base de dados")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Diferenciar maiúsculas e minúsculas")])]),a._v(" "),e("td",[a._v("Quando definido diferencia maiúsculas de minúsculas ao comparar chaves")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Prefixo para os atributos")])]),a._v(" "),e("td",[a._v("No resultado da operação define o prefixo que será utilizado para renomear atributos")])])])]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),e("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),e("h3",{attrs:{id:"tipos-de-juncao"}},[a._v("Tipos de Junção")]),a._v(" "),e("p",[e("strong",[e("a",{attrs:{href:"#inner-join"}},[a._v("Exemplo Inner Join")])]),e("br"),a._v("\nExecuta a junção levando em consideração a interseção das duas fontes de dados.")]),a._v(" "),e("p",[e("strong",[e("a",{attrs:{href:"#right-outer-join"}},[a._v("Exemplo Right Outer Join")])]),e("br"),a._v("\nExecuta a junção preservando os atributos da primeira fonte de dados, mantendo da segunda fonte apenas os atributos com interseção com a primeira.")]),a._v(" "),e("p",[e("strong",[e("a",{attrs:{href:"#left-outer-join"}},[a._v("Exemplo Left outer join")])]),e("br"),a._v("\nExecuta a junção preservando os atributos da segunda fonte de dados, mantendo da primeira fonte apenas os atributos com interseção com a segunda.")]),a._v(" "),e("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),e("p",[e("strong",[a._v("Objetivo:")]),a._v(" Realizar junção das bases."),e("br"),a._v(" "),e("strong",[a._v("Base de Dados:")]),a._v(" "),e("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#artificial-1"}},[a._v("Artificial 1")])],1),a._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/manipulacao_de_dados/juncao/image7.png",alt:"Ler dados"}}),e("br"),a._v("\nUtilize para o critério de junção o atributo "),e("em",[a._v("key")]),a._v(" para ambas as entradas de dados.")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Adicione uma base de dados por meio da operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(". "),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/manipulacao_de_dados/juncao/image3.png",alt:"Tabela ler dados"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Adicione a outra base de dados por meio da operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(". "),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/manipulacao_de_dados/juncao/image6.png",alt:"Tabela ler dados"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Adicione a operação Junção. Selecione "),e("em",[a._v("“key”")]),a._v(" como "),e("strong",[a._v("Atributo(s) da primeira fonte de dados")]),a._v(" e "),e("strong",[a._v("Atributo(s) da segunda fonte de dados")]),a._v(". Preencha "),e("em",[a._v("“ds0_, ds1_”")]),a._v(" no campo "),e("strong",[a._v("Prefixo para os atributos")]),a._v(" e selecione a opção "),e("strong",[a._v("Diferenciar maiúsculas e minúsculas quando comparar chaves")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/manipulacao_de_dados/juncao/image5.png",alt:"Tabela Junção"}}),e("br"),a._v("\nOs prefixos "),e("em",[a._v("ds0_")]),a._v(" e "),e("em",[a._v("ds1_")]),a._v(" são definidos para o nome dos atributos na saída de dados."),e("br"),a._v("\nEssas definições são usadas para todos os exemplos desta seção.")])])]),a._v(" "),e("h3",{attrs:{id:"inner-join"}},[a._v("Inner Join")]),a._v(" "),e("p",[a._v("Ainda na operação "),e("strong",[a._v("Junção")]),a._v(", selecione "),e("em",[a._v("“Inner join”")]),a._v(" no campo "),e("strong",[a._v("Tipo de junção (join)")]),a._v(" e execute o fluxo."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/manipulacao_de_dados/juncao/image2.png",alt:"Resultado Inner Join"}}),e("br"),a._v("\nA junção do tipo "),e("strong",[a._v("Inner Join")]),a._v(", associa os atributos correspondentes nas duas entradas retornando o conjunto intersecção dos mesmos, como pode ser visto abaixo. Os atributos que não tem paridade não são relacionados.")]),a._v(" "),e("h3",{attrs:{id:"left-outer-join"}},[a._v("Left Outer Join")]),a._v(" "),e("p",[a._v("Volte na operação "),e("strong",[a._v("Junção")]),a._v(" e altere o campo "),e("strong",[a._v("Tipo de junção (join)")]),a._v(" para "),e("em",[a._v("“Left Outer join”")]),a._v(".  Execute o fluxo novamente."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/manipulacao_de_dados/juncao/image1.png",alt:"Resultado Left Outer Join"}}),e("br"),a._v("\nA junção do tipo "),e("strong",[a._v("Left Outer Join")]),a._v(" associa todos os atributos da primeira entrada de dados com os atributos da segunda entrada. Mesmo que não exista correspondência. Observe que o resultado está ordenado levando em conta os atributos da primeira entrada de dados. E que para este caso houve correspondência em todas as associações.")]),a._v(" "),e("h3",{attrs:{id:"right-outer-join"}},[a._v("Right Outer Join")]),a._v(" "),e("p",[a._v("Volte na operação "),e("strong",[a._v("Junção")]),a._v(" e altere o campo "),e("strong",[a._v("Tipo de junção (join)")]),a._v(" para "),e("em",[a._v("“Right Outer join”")]),a._v(". Execute o fluxo novamente."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/manipulacao_de_dados/juncao/image4.png",alt:"Resultado Right Outer Join"}}),e("br"),a._v("\nA junção do tipo "),e("strong",[a._v("Right Outer Join")]),a._v(" associa todos os atributos da segunda entrada de dados com os atributos da primeira entrada, mesmo que não exista correspondência. Observe que para os casos em que a associação de atributos não apresenta interseção de chaves em correspondência, o campo ausente recebe o valor nulo.")]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);o.default=s.exports}}]);