(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{258:function(a,o,e){"use strict";e.r(o);var r=e(28),t=Object(r.a)({},(function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"codificacao-distribuida-one-hot-encoder"}},[a._v("Codificação Distribuída (One-hot encoder)")]),a._v(" "),e("p",[a._v("Transforma um ou mais atributos do conjunto de dados em um, ou mais vetores binários esparsos. O One Hot Encoder é usado para transformar atributos categóricos representados como números, porém, cuja ordem não é relevante. Para evitar que os modelos interpretem esses atributos como sendo numéricos, são criadas variáveis binárias, cada uma para um valor possível que o atributo pode assumir. Dessas novas variáveis binárias, a única que terá valor 1 será correspondente à categoria do atributo na instância")]),a._v(" "),e("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Entrada")]),a._v(" "),e("th",[a._v("Saída")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("Entrada de dados número 1")]),a._v(" "),e("td",[a._v("Um ou mais vetores binários esparsos")])])])]),a._v(" "),e("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),e("p",[a._v("Nome da Tarefa")]),a._v(" "),e("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Parâmetro")]),a._v(" "),e("th",[a._v("Detalhe")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[a._v("Atributos")])]),a._v(" "),e("td",[a._v("Atributo(s) que será(ão) transformado(s) pelo Encoder")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Alias")])]),a._v(" "),e("td",[a._v("Nome(s) que o(s) novo(s) atributo(s) transformado(s) receberá(ão)")])])])]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),e("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),e("p",[e("strong",[a._v("Objetivo:")]),a._v(" A partir da base de dados, transformar os campos em vetores binários."),e("br"),a._v(" "),e("strong",[a._v("Base de Dados:")]),a._v(" "),e("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#airplane-crashes-since-1908"}},[a._v("Airplane Crashes Since 1908")])],1),a._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados//representacao-de-atributos-codificacao-distribuida/image5.png",alt:"Fluxo de Trabalho - ler dados"}})]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Adicione uma base de dados por meio da operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados//representacao-de-atributos-codificacao-distribuida/image3.png",alt:"Formulario - ler dados"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Na operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html"}},[a._v("Converter categórico para numérico")]),a._v(" no campo "),e("strong",[a._v("Atributos")]),a._v(" selecione "),e("em",[a._v("“Operator”")]),a._v(", "),e("em",[a._v("“Route”")]),a._v(" e "),e("em",[a._v("“Type”")]),a._v(". No campo "),e("strong",[a._v("Nome para novo(s) atributo(s) indexado(s)")]),a._v(" coloque "),e("em",[a._v("“Operator_num”")]),a._v(", “"),e("em",[a._v("Route_num”")]),a._v(" e "),e("em",[a._v("“Type_num”")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados//representacao-de-atributos-codificacao-distribuida/image2.png",alt:"Formulario - Converter categórico para numérico"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Na operação "),e("strong",[a._v("Codificação distribuída (One-hot encoder)")]),a._v(" coloque no campo "),e("strong",[a._v("Atributos")]),a._v(" os atributos gerados no passo anterior: "),e("em",[a._v("“Operator_num”")]),a._v(", "),e("em",[a._v("“Route_num”")]),a._v(" e "),e("em",[a._v("“Type_num”")]),a._v(". No campo "),e("strong",[a._v("Alias")]),a._v(" coloque os novos nomes dos atributos transformados: "),e("em",[a._v("“Operator_bin”")]),a._v(", "),e("em",[a._v("“Route_bin”")]),a._v(" e "),e("em",[a._v("“Type_bin”")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados//representacao-de-atributos-codificacao-distribuida/image4.png",alt:"Formulario -= Codificação distribuída"}})])]),a._v(" "),e("li",[e("p",[a._v("Execute o fluxo e visualize o resultado."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados//representacao-de-atributos-codificacao-distribuida/image1.png",alt:"Resultado"}}),e("br"),a._v("\nNas imagens acima, a primeira exibe os atributos originais da base, e na segunda é possível ver os atributos criados como resultado das operações. Os atributos criados pelo One Hot Encoder, de sufixo “-bin”, estão representados como vetor esparso. Por exemplo, no campo Operator_bin, onde se lê “(2476, [23], [1.0])”, há um vetor de 2476 posições (ou seja, há 2476 valores distintos de Operator), em que a posição 23 é 1. É também exibido o Schema para output data, que contém metadados da operação realizada.")])])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);o.default=t.exports}}]);