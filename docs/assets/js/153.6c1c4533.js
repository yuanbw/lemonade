(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{238:function(e,o,a){"use strict";a.r(o);var r=a(0),t=Object(r.a)({},(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"dividir-texto-por-delimitador"}},[e._v("Dividir Texto por Delimitador")]),e._v(" "),a("p",[e._v("Transforma o texto de um ou mais atributos em um vetor de texto, usando espaços ou uma expressão regular como delimitadores. Todas as aparições do delimitador são removidas e onde estavam ocorre a divisão do texto.")]),e._v(" "),a("h3",{attrs:{id:"conectores"}},[e._v("Conectores")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Entrada")]),e._v(" "),a("th",[e._v("Saída")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Dados de entrada com atributo em texto para ser dividido")]),e._v(" "),a("td",[e._v("Dados de saída com o texto dividido em um vetor")])])])]),e._v(" "),a("h3",{attrs:{id:"tarefa"}},[e._v("Tarefa")]),e._v(" "),a("p",[e._v("Nome da Tarefa")]),e._v(" "),a("h3",{attrs:{id:"aba-execucao"}},[e._v("Aba Execução")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parâmetro")]),e._v(" "),a("th",[e._v("Detalhe")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[e._v("Tipo")])]),e._v(" "),a("td",[e._v("Qual será o tipo de delimitador para dividir. (espaços ou expressão regular)")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Atributos")])]),e._v(" "),a("td",[e._v("Quais serão os campos que serão divididos")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Nome do novo atributo (alias)")])]),e._v(" "),a("td",[e._v("Nome do novo atributo. Pode-se adicionar mais de um nome separado por vírgula caso tenha sido selecionado mais de um atributo")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Expressão. (Sintaxe Java)")])]),e._v(" "),a("td",[e._v("Expressão regular para definir quais serão os delimitadores usados na divisão")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Tamanho mínimo das partes (tokens). Partes menores serão descartadas")])]),e._v(" "),a("td",[e._v("Define o tamanho mínimo de cada item do vetor final")])])])]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[e._v("Aba Aparência")])],1),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[e._v("Aba Resultados")])],1),e._v(" "),a("h2",{attrs:{id:"definicoes"}},[e._v("Definições")]),e._v(" "),a("h3",{attrs:{id:"tipos-de-limpeza"}},[e._v("Tipos de Limpeza")]),e._v(" "),a("ul",[a("li",[e._v("Simples: Usa espaços como delimitadores.")]),e._v(" "),a("li",[e._v("Regular: Usa uma expressão regular como delimitador.")])]),e._v(" "),a("h2",{attrs:{id:"exemplos-de-utilizacao"}},[e._v("Exemplos de Utilização")]),e._v(" "),a("p",[a("strong",[e._v("Objetivo:")]),e._v(" Mostrar os dois tipos de delimitadores em uma base de citações de autores famosos e uma lista de "),a("em",[e._v("stop words")]),e._v(" para a língua inglesa descrita neste link: "),a("a",{attrs:{href:"https://github.com/igorbrigadir/stopwords/blob/master/en/ranksnl_oldgoogle.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/igorbrigadir/stopwords/blob/master/en/ranksnl_oldgoogle.txt"),a("OutboundLink")],1),e._v(" "),a("br"),e._v(" "),a("strong",[e._v("Base de Dados:")]),e._v(" "),a("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#quotes"}},[e._v("Quotes")]),e._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image7.png",alt:"Fluxo de trabalho"}})],1),e._v(" "),a("h3",{attrs:{id:"exemplo-1"}},[e._v("Exemplo 1")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Use a operação "),a("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[e._v("Ler dados")]),e._v(" e selecione a base "),a("em",[e._v("“quotes”")]),e._v("."),a("br"),e._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image9.png",alt:"Operação Ler dados"}})],1)]),e._v(" "),a("li",[a("p",[e._v("Use a operação de "),a("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador.html"}},[e._v("Dividir texto por delimitador")]),e._v(". Selecione "),a("em",[e._v("“Simples, use espaços como delimitadores”")]),e._v(" para o campo "),a("strong",[e._v("Tipo")]),e._v(". Selecione o atributo "),a("em",[e._v("“value”")]),e._v(" para o campo "),a("strong",[e._v("Atributos")]),e._v(". Preencha o valor "),a("em",[e._v("“2”")]),e._v(" no campo "),a("strong",[e._v("Tamanho mínimo das partes (tokens)")]),e._v("."),a("br"),e._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image10.png",alt:"Operação Dividir texto por delimitador"}})],1)]),e._v(" "),a("li",[a("p",[e._v("Use a operação "),a("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[e._v("Ler dados")]),e._v(" mais uma vez e selecione a base "),a("em",[e._v("“stopwords”")]),e._v("."),a("br"),e._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image3.png",alt:"Operação Ler dados"}})],1)]),e._v(" "),a("li",[a("p",[e._v("Adicione a operação "),a("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns.html"}},[e._v("Remover palavras comuns (stopwords)")]),e._v(". Selecione o atributo "),a("em",[e._v("“value_tokenized”")]),e._v(" para o campo "),a("strong",[e._v("Atributos")]),e._v(". No campo "),a("strong",[e._v("Segunda Fonte de Dados")]),e._v(" selecione o atributo "),a("em",[e._v("“stop_words”")]),e._v("."),a("br"),e._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image6.png",alt:"Operação Remover palavras comuns"}})],1)]),e._v(" "),a("li",[a("p",[e._v("Execute o fluxo e observe os resultados."),a("br"),e._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image8.png",alt:"Resultado"}})])])]),e._v(" "),a("h3",{attrs:{id:"exemplo-2"}},[e._v("Exemplo 2")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Utilize o mesmo fluxo do "),a("a",{attrs:{href:"#exemplo-1"}},[e._v("Exemplo 1")]),e._v(".\\")])]),e._v(" "),a("li",[a("p",[e._v("Na operação "),a("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador.html"}},[e._v("Dividir texto por delimitador")]),e._v(", altere o valor do campo "),a("strong",[e._v("Tipo")]),e._v(" para "),a("em",[e._v("“Use uma expressão regular para determinar os delimitadores”")]),e._v(". No campo "),a("strong",[e._v("Expressão (apenas se tipo for expressão regular)")]),e._v(" digite “\\.|,” (barra invertida, ponto, barra vertical e vírgula)."),a("br"),e._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image1.png",alt:"Operação Remover palavras comuns"}})],1)]),e._v(" "),a("li",[a("p",[e._v("Execute o fluxo e observe os resultados."),a("br"),e._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image4.png",alt:"Resultado"}}),a("br"),e._v("\nAvaliando os resultados dessa vez é possível ver que as divisões foram realizadas de maneira diferente, sendo que não há mais os caracteres escolhidos nessa saída. Na tabela abaixo foram escolhidos o ponto final e a vírgula.")])])]),e._v(" "),a("h3",{attrs:{id:"exemplo-3"}},[e._v("Exemplo 3")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Utilize o mesmo fluxo do "),a("a",{attrs:{href:"#exemplo-1"}},[e._v("Exemplo 1")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Na operação "),a("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador.html"}},[e._v("Dividir texto por delimitador")]),e._v(", selecione novamente o atributo "),a("em",[e._v("“Simples, use espaços como delimitadores”")]),e._v(" para o campo "),a("strong",[e._v("Tipo")]),e._v(". Altere o valor do campo "),a("strong",[e._v("Tamanho mínimo das partes (tokens)")]),e._v(" para "),a("em",[e._v("“5”")]),e._v("."),a("br"),e._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image5.png",alt:"Operação Dividit texto por delimitador"}})],1)]),e._v(" "),a("li",[a("p",[e._v("Execute o fluxo e observe os resultados."),a("br"),e._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image2.png",alt:"Resultado"}}),a("br"),e._v("\nÉ possível observar que todas as palavras com a quantidade de caracteres menor que o valor definido (5) foram descartadas.")])])]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);o.default=t.exports}}]);