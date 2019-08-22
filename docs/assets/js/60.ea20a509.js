(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{206:function(o,a,e){"use strict";e.r(a);var r=e(0),s=Object(r.a)({},function(){var o=this,a=o.$createElement,e=o._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("h1",{attrs:{id:"discretizacao-intervalar"}},[o._v("Discretização intervalar")]),o._v(" "),e("p",[o._v("Operação que mapeia uma coluna de valores contínuos em uma coluna de buckets (blocos, faixas) definidos(as) pelo usuário.")]),o._v(" "),e("h3",{attrs:{id:"conectores"}},[o._v("Conectores")]),o._v(" "),e("table",[e("thead",[e("tr",[e("th",[o._v("Entrada")]),o._v(" "),e("th",[o._v("Saída")])])]),o._v(" "),e("tbody",[e("tr",[e("td",[o._v("Dados a serem tratados")]),o._v(" "),e("td",[o._v("Dados tratados e modelo")])])])]),o._v(" "),e("h3",{attrs:{id:"tarefa"}},[o._v("Tarefa")]),o._v(" "),e("p",[o._v("Nome da Tarefa")]),o._v(" "),e("h3",{attrs:{id:"aba-execucao"}},[o._v("Aba Execução")]),o._v(" "),e("table",[e("thead",[e("tr",[e("th",[o._v("Parâmetro")]),o._v(" "),e("th",[o._v("Detalhe")])])]),o._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[o._v("Atributos")])]),o._v(" "),e("td",[o._v("Uma ou mais colunas que contenham os valores a serem limpos, ou substituídos")])]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Nome do(s) novo(s) atributo(s)")])]),o._v(" "),e("td",[o._v("Nome dos novos atributos criados na operação*")])]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Divisores (lista de valores com no mínimo de 3 elementos, usado para definir as faixas, separados por vírgula, -INF e INF são valores válidos)*")])]),o._v(" "),e("td",[o._v("Lista de valores com no mínimo 3 elementos utilizados para definir as faixas, separados por vírgulas")])]),o._v(" "),e("tr",[e("td",[e("strong",[e("a",{attrs:{href:"#como-tratar-dados-invalidos"}},[o._v("Como tratar dados inválidos?")])])]),o._v(" "),e("td",[o._v("Como devem ser tratados os dados inválidos")])])])]),o._v(" "),e("p",[e("strong",[o._v("OBS:")]),o._v(" *Se o nome dos novos atributos forem omitidos, o nome resultante terá um sufixo seguido pelo nome original.")]),o._v(" "),e("p",[e("router-link",{attrs:{to:"/spark/"}},[o._v("Aba Aparência")])],1),o._v(" "),e("p",[e("router-link",{attrs:{to:"/spark/"}},[o._v("Aba Resultados")])],1),o._v(" "),e("h2",{attrs:{id:"definicoes"}},[o._v("Definições")]),o._v(" "),e("h3",{attrs:{id:"como-tratar-dados-invalidos"}},[o._v("Como tratar dados inválidos?")]),o._v(" "),e("p",[o._v("Existem as seguintes opções:")]),o._v(" "),e("ol",[e("li",[o._v("Ignorar: Os dados inválidos são ignorados no mapeamento em buckets.")]),o._v(" "),e("li",[o._v("Manter: Os dados inválidos serão mapeados em um bucket especial.")]),o._v(" "),e("li",[o._v("Gerar erro: O programa lança uma exceção.")])]),o._v(" "),e("h2",{attrs:{id:"exemplo-de-utilizacao"}},[o._v("Exemplo de Utilização")]),o._v(" "),e("p",[e("strong",[o._v("Objetivo:")]),o._v(" determinar a quantidade de tripulantes sobreviventes do desastre do titanic por faixa etária, com o intervalo de 10 anos entre elas."),e("br"),o._v(" "),e("strong",[o._v("Base de Dados:")]),o._v(" "),e("router-link",{attrs:{to:"/spark/"}},[o._v("Titanic")])],1),o._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image12.md",alt:"Fluxo de trabalho"}})]),o._v(" "),e("ol",[e("li",[e("p",[o._v("Adicione uma base de dados por meio da operação "),e("router-link",{attrs:{to:"/spark/"}},[o._v("Ler de dados")]),o._v(" e selecione "),e("em",[o._v("“Converter dados inválidos para NULO”")]),o._v(" na opção O que fazer em caso de dados inválidos."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image3.md",alt:"Operação Ler dados"}})],1)]),o._v(" "),e("li",[e("p",[o._v("Adicione a operação "),e("router-link",{attrs:{to:"/spark/"}},[o._v("Limpar dados ausentes")]),o._v(", selecione "),e("em",[o._v("“age”")]),o._v(" como "),e("strong",[o._v("Atributo(s)")]),o._v(" e "),e("em",[o._v("“Substituir com a média”")]),o._v(" como "),e("strong",[o._v("Tipo de limpeza")]),o._v("."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image13.md",alt:"Operação Limpar dados ausentes"}})],1)]),o._v(" "),e("li",[e("p",[o._v("Para tratar apenas dos sobreviventes do desastre, adicione a operação "),e("router-link",{attrs:{to:"/spark/"}},[o._v("Filtrar por função")]),o._v(". Utilizando o campo "),e("strong",[o._v("Filtro")]),o._v(", selecione "),e("em",[o._v("“Survived == 1”")]),o._v(" como "),e("strong",[o._v("Expressão")]),o._v(", na opção "),e("strong",[o._v("Editar valor")]),o._v("."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image5.md",alt:"Operação Filtrar por função"}})],1)]),o._v(" "),e("li",[e("p",[o._v("Esta operação é opcional, o objetivo dela é determinar o infinito inferior da coluna "),e("em",[o._v("Age")]),o._v(". Ao ordenar os valores, é possível visualizar um "),e("em",[o._v("preview")]),o._v(" dos dados e identificar o menor valor. Desta forma temos o limite inferior dos nossos intervalos. Portanto, adicione a operação "),e("strong",[o._v("Ordenar")]),o._v(". Abra o editor do campo "),e("strong",[o._v("Atributo(s)")]),o._v(", selecione "),e("em",[o._v("“age”")]),o._v(" como "),e("strong",[o._v("Atributos")]),o._v(" e "),e("em",[o._v("“Ascending”")]),o._v(" como "),e("strong",[o._v("Função")]),o._v("."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image2.md",alt:"Preview de ordenação"}}),e("br"),o._v("\nExecute o fluxo:\n"),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image1.md",alt:"Resultado do preview de ordenação"}}),e("br"),o._v("\nAgora é possível visualizar o menor valor inferior.")])]),o._v(" "),e("li",[e("p",[o._v("Adicione a operação "),e("strong",[o._v("Intervalar")]),o._v(" e selecione "),e("em",[o._v("“Age”")]),o._v(" como "),e("strong",[o._v("Atributos")]),o._v(". Preencha "),e("em",[o._v("“Age_buckets”")]),o._v(" no campo "),e("strong",[o._v("Nome(s) do(s) novo(s) atributo(s)")]),o._v(", "),e("em",[o._v("“0,10,20,30,40,50,60,INF”")]),o._v(" em "),e("strong",[o._v("Divisores")]),o._v(" e “Ignorar” em "),e("strong",[o._v("Como tratar dados inválidos?")]),o._v("."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image11.md",alt:"Operação Intervalar"}}),e("br"),o._v("\nExecute e observe as categorias geradas após a execução da operação:\n"),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image10.md",alt:"Resultado de operação Intervalar"}}),e("br"),o._v("\nComo o limite superior é desconhecido, foi utilizado o valor INF e optado por ignorar quaisquer valores que não estejam mapeados.")])]),o._v(" "),e("li",[e("p",[o._v("Adicione a operação "),e("router-link",{attrs:{to:"/spark/"}},[o._v("Agrupar linhas por função")]),o._v(" para visualizar os buckets gerados. Escolha "),e("em",[o._v("“Age_buckets”")]),o._v(" no campo "),e("strong",[o._v("Selecione o(s) atributos para agregação")]),o._v(". Utilizando o campo "),e("strong",[o._v("Função de agregação")]),o._v(", selecione "),e("em",[o._v("“Age_buckets”")]),o._v(" como "),e("strong",[o._v("Atributo")]),o._v(", "),e("em",[o._v("“Count”")]),o._v(" como "),e("strong",[o._v("Função")]),o._v(" e "),e("em",[o._v("“Mapped_Age”")]),o._v(" como "),e("strong",[o._v("Alias")]),o._v("."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image4.md",alt:"Operação Agrupar linhas por função"}})],1)]),o._v(" "),e("li",[e("p",[o._v("Para gerar o gráfico de barras é necessário ordenar os buckets, portanto, adicione a operação "),e("router-link",{attrs:{to:"/spark/"}},[o._v("Ordenar")]),o._v(" novamente. Utilizando "),e("em",[o._v("“Age_buckets”")]),o._v(" como "),e("strong",[o._v("Atributo")]),o._v(" e “Ascending” como "),e("strong",[o._v("Função")]),o._v(", na opção "),e("strong",[o._v("Abrir o Editor")]),o._v("."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image7.md",alt:"Operação Ordenar - buckets"}}),e("br"),o._v("\nExecutando a operação, é possível visualizar cada um dos buckets gerados na operação anterior."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image6.md",alt:"Resultado de operação Ordenar - buckets"}})],1)]),o._v(" "),e("li",[e("p",[o._v("Adicione a operação "),e("router-link",{attrs:{to:"/spark/"}},[o._v("Gráfico de barras")]),o._v(". Selecione "),e("em",[o._v("“Age_bucktes”")]),o._v(" no campo "),e("strong",[o._v("Atributo")]),o._v(" para o eixo X e “"),e("em",[o._v("Mapped_age”")]),o._v(" no campo "),e("strong",[o._v("Atributos para o eixo Y")]),o._v(". Preencha "),e("em",[o._v("“Sobreviventes do desastre no Titanic”")]),o._v(" no campo "),e("strong",[o._v("Título")]),o._v(", "),e("em",[o._v("“Buckets de Idade (10 em 10 anos)”")]),o._v(" no campo "),e("strong",[o._v("Título para o eixo X")]),o._v(" e "),e("em",[o._v("“Número de sobreviventes”")]),o._v(" no campo "),e("strong",[o._v("Título para o eixo Y")]),o._v("."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image9.md",alt:"Operação Gráfico de barras"}})],1)]),o._v(" "),e("li",[e("p",[o._v("Execute o fluxo e visualize o resultado."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image8.md",alt:"Resultado Gráfico de barras"}}),e("br"),o._v("\nCada barra equivale ao um bucket de idade, composto pelo intervalo de 10 em 10 anos. Observamos que o intervalo de 20 a 30 anos apresenta o maior número de sobreviventes.")])])]),o._v(" "),e("hr"),o._v(" "),e("p",[o._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);a.default=s.exports}}]);