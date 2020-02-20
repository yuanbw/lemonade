(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{303:function(a,o,e){"use strict";e.r(o);var t=e(0),r=Object(t.a)({},(function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"mapa"}},[a._v("Mapa")]),a._v(" "),e("p",[a._v("Visualizações de mapa são úteis para a visualização de dados geográficos.")]),a._v(" "),e("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Entrada")]),a._v(" "),e("th",[a._v("Saída")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("Dados de entradas")]),a._v(" "),e("td",[a._v("Uma Visualização")])])])]),a._v(" "),e("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),e("p",[a._v("Nome da Tarefa")]),a._v(" "),e("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Parâmetro")]),a._v(" "),e("th",[a._v("Detalhe")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[a._v("Tipo de Mapa")])]),a._v(" "),e("td",[a._v("Tipo de será renderizado. Atualmente existem 3 opções: *"),e("strong",[a._v("pontos, heatmap (mapa de calor) e geojson")])])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Título")])]),a._v(" "),e("td",[a._v("Título da visualização. É apresentado no gráfico")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributo com Latitude")])]),a._v(" "),e("td",[a._v("Atributo que contém latitude")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributo com Longitude")])]),a._v(" "),e("td",[a._v("Atributo que contém longitude")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributo usado para valor")])]),a._v(" "),e("td",[a._v("Atributo que será usado como um indicador de uma região geográfica. Por exemplo, este atributo pode se referir ao número de habitantes de determinada região")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributo usado para rótulo")])]),a._v(" "),e("td",[a._v("Atributo que será usado como um rótulo, ou ID de uma região geográfica. Pode ser, por exemplo, a sigla de um estado")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Limites do polígono(s) (Geo JSON)")])]),a._v(" "),e("td",[a._v("Base de dados a ser desenhada. Atualmente o Lemonade suporta apenas um "),e("strong",[a._v("Mapa Mundi")]),a._v(" e um mapa dos "),e("strong",[a._v("Estados Brasileiros")]),a._v(".")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Nome da propriedade no Geo JSON usada para relacionar os dados")])]),a._v(" "),e("td",[a._v("Propriedade que servirá como identificador dos dados. No caso do "),e("strong",[a._v("Mapa Mundi")]),a._v(" deve ser "),e("strong",[a._v('"iso_a2"')]),a._v('. No caso do mapa dos estados do Brasil, deve ser "id"')])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Dados extras (Geo JSON)")])]),a._v(" "),e("td",[a._v("Atributos extras a serem inseridos ao geojson. Por exemplo, o nome da região desenhada.")])])])]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),e("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),e("p",[e("strong",[a._v("Objetivo:")]),a._v(" visualizar a localização dos aeroportos do Brasil.")]),a._v(" "),e("p",[e("strong",[a._v("Base de Dados:")]),a._v(" "),e("RouterLink",{attrs:{to:"/pt-br/sklearn/base-de-dados/#aeroportos-do-brasil"}},[a._v("Aeroportos do Brasil")])],1),a._v(" "),e("p",[e("img",{attrs:{src:"/img/sklearn/visualizacao_de_dados/mapa/image1.png",alt:"Ler dados"}})]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Adicione uma base de dados por meio da operação "),e("RouterLink",{attrs:{to:"/pt-br/sklearn/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Na operação "),e("strong",[a._v("Mapa")]),a._v(", selecione o valor "),e("em",[a._v("“pontos”")]),a._v(" para o parâmetro "),e("strong",[a._v("Tipo de Mapa")]),a._v(". Preencha o campo Título e selecione os valores "),e("em",[a._v("“latitude_deg”")]),a._v(" para o campo "),e("strong",[a._v("Atributo com Latitude")]),a._v(" e "),e("em",[a._v("“longitude_deg”")]),a._v(" para o campo "),e("strong",[a._v("Atributo com Longitude")]),a._v(". "),e("br"),a._v(" "),e("img",{attrs:{src:"/img/sklearn/visualizacao_de_dados/mapa/image3.png",alt:"Formulario"}})])]),a._v(" "),e("li",[e("p",[a._v("Execute o fluxo e visualize o resultado. "),e("br"),a._v(" "),e("img",{attrs:{src:"/img/sklearn/visualizacao_de_dados/mapa/image2.png",alt:"Execução"}})])]),a._v(" "),e("li",[e("p",[a._v("Na operação "),e("strong",[a._v("Mapa")]),a._v(", altere o valor do parâmetro "),e("strong",[a._v("Tipo de Mapa")]),a._v(" para "),e("em",[a._v("“heatmap”")]),a._v(" e visualize o resultado. "),e("br"),a._v(" "),e("img",{attrs:{src:"/img/sklearn/visualizacao_de_dados/mapa/image4.png",alt:"Execução"}})])])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);o.default=r.exports}}]);