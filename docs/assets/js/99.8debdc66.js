(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{294:function(a,o,e){"use strict";e.r(o);var r=e(0),t=Object(r.a)({},(function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"local-outlier-factor-lof"}},[a._v("Local Outlier Factor (LOF)")]),a._v(" "),e("p",[a._v("Detecta anomalias utilizando o algoritmo Local Outlier Factor (LOF) e retorna o grau de anomalia para cada instância da base de dados. Quanto maior o grau, maior é a chance da instância ser uma anomalia.")]),a._v(" "),e("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Entrada")]),a._v(" "),e("th",[a._v("Saída")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("Dados a serem tratados")]),a._v(" "),e("td",[a._v("Dados tratados")])])])]),a._v(" "),e("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),e("p",[a._v("Nome da Tarefa")]),a._v(" "),e("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Parâmetro")]),a._v(" "),e("th",[a._v("Detalhe")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[a._v("Atributos com as características (features)")])]),a._v(" "),e("td",[a._v("Atributos que serão utilizados pelo detector de anomalias")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Nome do novo atributo")])]),a._v(" "),e("td",[a._v("Nome do atributo que receberá os graus de anomalia")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Número mínimo de pontos")])]),a._v(" "),e("td",[a._v("Parâmetro utilizado para determinar a vizinhança a ser considerada pelo algoritmo")])])])]),a._v(" "),e("p",[e("strong",[a._v("O Detector de anomalias deve ser executado em uma base de dados que tenha apenas atributos numéricos.")])]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),e("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),e("p",[e("strong",[a._v("Objetivo:")]),a._v(" detectar anomalias na base de dados Iris"),e("br"),a._v(" "),e("strong",[a._v("Base de Dados:")]),a._v(" "),e("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#iris"}},[a._v("Íris")])],1),a._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/anomalias_local_outlier_factor/image5.png",alt:"Fluxo de trabalho - ler dados"}})]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Adicione uma base de dados por meio da operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/anomalias_local_outlier_factor/image1.png",alt:"Formulário ler dados"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Adicione a operação "),e("strong",[a._v("Local Outlier Factor (LOF)")]),a._v(", selecione "),e("em",[a._v("“Sepallength”")]),a._v(", "),e("em",[a._v("“Sepalwidth”")]),a._v(", "),e("em",[a._v("“Petallength”")]),a._v(" e "),e("em",[a._v("“Petalwidth”")]),a._v(", como "),e("strong",[a._v("Atributo(s) usados como feature(s)")]),a._v(". Preencha "),e("em",[a._v("“outlier”")]),a._v(" no campo "),e("strong",[a._v("Nome para o novo atributo")]),a._v(" e "),e("em",[a._v("5")]),a._v(" para o campo "),e("strong",[a._v("Número mínimo de pontos")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/anomalias_local_outlier_factor/image3.png",alt:"Formulário Local Outlier Factor"}})])]),a._v(" "),e("li",[e("p",[a._v("Adicione a operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/manipulacao-de-dados/coluna-ordenar.html"}},[a._v("Ordenar")]),a._v(". Abra o editor do campo "),e("strong",[a._v("Atributo(s)")]),a._v(", selecione "),e("em",[a._v("“outlier”")]),a._v(" como "),e("strong",[a._v("Atributos")]),a._v(" e “Decreasing” como "),e("strong",[a._v("Função")]),a._v(" para que as instâncias mais anômalas (maior grau de anomalia) sejam apresentadas primeiro."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/anomalias_local_outlier_factor/image2.png",alt:"Operação Ordenar"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Execute o fluxo e visualize o resultado. O resultado possui o atributo “outlier”, que representa o grau de anomalia para cada instância.\n"),e("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/anomalias_local_outlier_factor/image4.png",alt:"Resultado"}}),e("br"),a._v("\nOs resultados indicam que a primeira instância retornada diverge amplamente do comportamento dos seus vizinhos. Ou seja, considerando uma vizinhança de 5 instâncias (parâmetro utilizado), a primeira setosa retornada com valor ~5.46 de outlier possui uma densidade diferente dos seus vizinhos, onde seus vizinhos são calculados através de uma distância Euclidiana. Por isso, esta instância possui o maior grau de anomalia e, o mesmo procedimento pode ser interpretado para as instâncias seguintes do resultado. Como os resultados são apresentados para todas as instâncias, normalmente as primeiras são de maior interesse, pois, serão aquelas com o maior grau de anomalia.")])])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);o.default=t.exports}}]);