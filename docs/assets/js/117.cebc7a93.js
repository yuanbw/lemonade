(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{271:function(a,o,s){"use strict";s.r(o);var e=s(0),t=Object(e.a)({},(function(){var a=this,o=a.$createElement,s=a._self._c||o;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"executar-comandos-sql"}},[a._v("Executar Comandos SQL")]),a._v(" "),s("p",[a._v("Executa uma consulta SQL."),s("br"),a._v("\nObs.: Nem todas as possíveis consultas estão disponíveis na plataforma Spark. As operações de consulta SQL da plataforma Spark atuam apenas sobre a linguagem de consulta de dados (DQL).")]),a._v(" "),s("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Entrada")]),a._v(" "),s("th",[a._v("Saída")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("Base de Dado(s) em que o SQL será executado")]),a._v(" "),s("td",[a._v("Dados retornados pela consulta SQL")])])])]),a._v(" "),s("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),s("p",[a._v("Nome da Tarefa")]),a._v(" "),s("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Parâmetro")]),a._v(" "),s("th",[a._v("Detalhe")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[s("a",{attrs:{href:"#consulta"}},[a._v("Consulta (entradas estão disponíveis como tabelas chamadas ds1 e ds2)")])])]),a._v(" "),s("td",[a._v("Consulta SQL")])]),a._v(" "),s("tr",[s("td",[s("strong",[a._v("Tratar esses valores como nulos (separe por vírgula)")])]),a._v(" "),s("td",[a._v("Valores que serão considerados como nulos quando o arquivo estiver sendo lido")])]),a._v(" "),s("tr",[s("td",[s("strong",[a._v("Nome dos novos atributos após a consulta")])]),a._v(" "),s("td")])])]),a._v(" "),s("p",[s("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),s("p",[s("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),s("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),s("h3",{attrs:{id:"consulta"}},[a._v("Consulta")]),a._v(" "),s("ol",[s("li",[a._v("Consulta SQL (entradas disponíveis como tabelas nomeadas ds1 e ds2):"),s("br"),a._v("\nConsulta que seja compatível com a plataforma Apache Spark. Mais informações sobre consultas disponíveis, acessar:\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.databricks.com/spark/latest/spark-sql/language-manual/select.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.databricks.com/spark/latest/spark-sql/language-manual/select.html"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://spark.apache.org/docs/latest/sql-programming-guide.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://spark.apache.org/docs/latest/sql-programming-guide.html"),s("OutboundLink")],1)])])])]),a._v(" "),s("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),s("p",[s("strong",[a._v("Objetivo:")]),a._v(" criar uma base de dados com os atributos dos dois conjunto de dados."),s("br"),a._v(" "),s("strong",[a._v("Base de Dados:")]),a._v(" "),s("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#artificial-1"}},[a._v("Artificial 1")])],1),a._v(" "),s("p",[s("img",{attrs:{src:"/img/spark/avancado/executar_comandos_sql/image3.png",alt:"Ler dados"}}),s("br"),a._v("\nAs duas entradas "),s("strong",[a._v("(Ler Dados)")]),a._v(" serão referenciadas como “ds1” e “ds2”.")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Adicione uma base de dados por meio da operação "),s("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),s("li",[s("p",[a._v("Utilize operação "),s("strong",[a._v("Executar Consulta SQL")]),a._v(" para juntar as duas bases e preencha o campo com a consulta desejada.")]),a._v(" "),s("p",[s("strong",[a._v("Consulta: Selecionar os atributos A, B e key")]),a._v("."),s("br"),a._v("\nOs atributos A e B são selecionados, quando o “key” é o mesmo. É feito uma união dos dois conjuntos de dados, através do único atributo em comum (atributo “key”). Isto é realizado com a operação de banco de dados relacional denominada união ou join."),s("br"),a._v(" "),s("img",{attrs:{src:"/img/spark/avancado/executar_comandos_sql/image1.png",alt:"Consultar"}})]),a._v(" "),s("p",[a._v("Obs.: O segundo parâmetro dessa operação deve ser utilizado de forma cuidadosa, pois, nesse exemplo sabe-se que no resultado existirá 3 atributos, então é possível renomeá-lo. Mas quando utilizar esse parâmetro em uma seleção de todos os atributos, ou seja, uma consulta assim “SELECT * from ds1”. Se não conhecer os atributos presentes no conjunto de dados, não é possível renomear as colunas.")])]),a._v(" "),s("li",[s("p",[a._v("Execute e visualize o resultado obtido.\\\nObserve que os atributos foram renomeados e que existe um novo conjunto de dados com os atributos desejados. "),s("br"),a._v(" "),s("img",{attrs:{src:"/img/spark/avancado/executar_comandos_sql/image2.png",alt:"Resultado"}})])])]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);o.default=t.exports}}]);