(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{268:function(a,e,r){"use strict";r.r(e);var o=r(28),t=Object(o.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"gerar-n-gramas"}},[a._v("Gerar N-Gramas")]),a._v(" "),r("p",[a._v("Gera N-gramas a partir de um vetor de texto. Sendo que N-gramas são todas as combinações possíveis de palavras adjacentes e N representa o número de palavras a serem agrupadas. Veja no exemplo abaixo um 3-grama da frase “Ser ou não ser eis a questão”.")]),a._v(" "),r("p",[a._v("“Ser ou não”, “ou não ser”, “não ser eis”, “ser eis a”, “eis a questão”.")]),a._v(" "),r("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),r("table",[r("thead",[r("tr",[r("th",[a._v("Entrada")]),a._v(" "),r("th",[a._v("Saída")])])]),a._v(" "),r("tbody",[r("tr",[r("td",[a._v("Dados a serem ordenados")]),a._v(" "),r("td",[a._v("Dados ordenados")])])])]),a._v(" "),r("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),r("p",[a._v("Nome da Tarefa")]),a._v(" "),r("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),r("table",[r("thead",[r("tr",[r("th",[a._v("Parâmetro")]),a._v(" "),r("th",[a._v("Detalhe")])])]),a._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[a._v("Número de elementos por n-grama")])]),a._v(" "),r("td")]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Atributos")])]),a._v(" "),r("td",[a._v("Atributos contendo vetores de texto para gerar os n-gramas")])]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Nome(s) do(s) novo(s) atributo(s)")])]),a._v(" "),r("td",[a._v("Nome do novo atributo. Pode-se adicionar mais de um nome separado por vírgula caso tenha sido selecionado mais de um atributo")])])])]),a._v(" "),r("p",[r("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),r("p",[r("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),r("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),r("p",[r("strong",[a._v("Objetivo:")]),a._v(" Gerar N-gramas a partir de um vetor de texto."),r("br"),a._v(" "),r("strong",[a._v("Base de Dados:")]),a._v(" "),r("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#quotes"}},[a._v("Quotes")])],1),a._v(" "),r("p",[r("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-gerar-n-gramas/image3.png",alt:"Fluxo de trabalho"}})]),a._v(" "),r("ol",[r("li",[r("p",[a._v("Use a função "),r("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(" e selecione a base "),r("em",[a._v('"quotes"')]),a._v("."),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-gerar-n-gramas/image5.png",alt:"Operação Ler dados"}})],1)]),a._v(" "),r("li",[r("p",[a._v("Use a operação de "),r("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador.html"}},[a._v("Dividir texto por delimitador")]),a._v(". Selecione "),r("em",[a._v("“Simples, usando espaços como delimitadores”")]),a._v(" para o campo "),r("strong",[a._v("Tipo")]),a._v(". Preencha "),r("em",[a._v("“value”")]),a._v(" no campo "),r("strong",[a._v("Atributos")]),a._v(". No campo "),r("strong",[a._v("Tamanho mínimo das partes (tokens)")]),a._v(" preencha o valor "),r("em",[a._v("“2”")]),a._v("."),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-gerar-n-gramas/image1.png",alt:"Operação Dividir texto por delimitador"}})],1)]),a._v(" "),r("li",[r("p",[a._v("Adicione a operação "),r("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/operacoes-textuais-gerar-n-gramas.html"}},[a._v("Gerar N-Gramas")]),a._v(". Preencha "),r("em",[a._v("2")]),a._v(" no campo "),r("strong",[a._v("Número de Elementos por n-grama")]),a._v(". Selecione o atributo "),r("em",[a._v("“value_tokenized”")]),a._v(" para o campo "),r("strong",[a._v("Atributos")]),a._v("."),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-gerar-n-gramas/image2.png",alt:"Operação Gerar N-Gramas"}})],1)]),a._v(" "),r("li",[r("p",[a._v("Execute o fluxo e observe os resultados."),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-gerar-n-gramas/image4.png",alt:"Resultado"}})])])]),a._v(" "),r("hr"),a._v(" "),r("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=t.exports}}]);