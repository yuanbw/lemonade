(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{224:function(a,e,o){"use strict";o.r(e);var s=o(0),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"tratar-dados-ausentes"}},[a._v("Tratar Dados Ausentes")]),a._v(" "),o("p",[a._v("A operação "),o("strong",[a._v("Tratar Dados Ausentes")]),a._v(" é utilizada para remover ou substituir valores ausentes dos campos de dados.")]),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Dados a serem tratados")]),a._v(" "),o("td",[a._v("Dados tratados")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Atributos")])]),a._v(" "),o("td",[a._v("Uma ou mais colunas que contenham os valores a serem removidos, ou substituídos.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Tipo de Limpeza")])]),a._v(" "),o("td",[a._v("O tipo de limpeza a ser executado nos dados")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Valor")])]),a._v(" "),o("td",[a._v("Valor a ser utilizado nos casos de substituição")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Razão mínima de valores ausentes")])]),a._v(" "),o("td",[a._v("Razão mínima entre o total de valores ausentes e o total de registros a serem considerados para que a operação seja executada")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Razão máxima de valores ausentes")])]),a._v(" "),o("td",[a._v("Razão máxima entre o total de valores ausentes e o total de registros a serem considerados para que a operação seja executada.")])])])]),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),o("h3",{attrs:{id:"tipos-de-limpeza"}},[a._v("Tipos de Limpeza")]),a._v(" "),o("p",[o("strong",[o("a",{attrs:{href:"#exemplo-1"}},[a._v("Exemplo 1")])]),o("br"),a._v("\nA limpeza pode ser feita das seguintes formas:")]),a._v(" "),o("ol",[o("li",[a._v("Substituir com a média:\n"),o("ul",[o("li",[a._v("Calcula a média dos valores da coluna e utiliza este número para substituir os valores ausentes.")])])]),a._v(" "),o("li",[a._v("Substituir por valor:\n"),o("ul",[o("li",[a._v("Substitui todos os valores ausentes pelo valor determinado pelo usuário.")])])]),a._v(" "),o("li",[a._v("Substituir com a mediana aproximada (10% da precisão relativa):\n"),o("ul",[o("li",[a._v("Calcula a mediana e utiliza este número para substituir todos os valores ausentes.")])])]),a._v(" "),o("li",[a._v("Substituir com a moda:\n"),o("ul",[o("li",[a._v("Substitui todos os valores ausentes pelo valor que se repete com maior frequência.")])])]),a._v(" "),o("li",[a._v("Remover toda a linha:\n"),o("ul",[o("li",[a._v("Remove completamente a linha da base de dados que contenha um ou mais valores ausentes.")])])]),a._v(" "),o("li",[a._v("Remover toda a coluna\n"),o("ul",[o("li",[a._v("Remove completamente a coluna que contenha um ou mais valores ausentes.")])])])]),a._v(" "),o("h4",{attrs:{id:"observacao"}},[a._v("Observação")]),a._v(" "),o("ol",[o("li",[a._v("Esta operação não altera a fonte dos dados, ela sempre gera um novo conjunto de dados no fluxo de execução com todas as mudanças realizadas.")])]),a._v(" "),o("h3",{attrs:{id:"valor"}},[a._v("Valor")]),a._v(" "),o("p",[o("strong",[o("a",{attrs:{href:"#exemplo-2"}},[a._v("Exemplo 2")])])]),a._v(" "),o("h3",{attrs:{id:"razao-minima-e-maxima-de-valores-ausentes"}},[a._v("Razão mínima e máxima de valores ausentes")]),a._v(" "),o("p",[o("strong",[o("a",{attrs:{href:"#exemplo-3"}},[a._v("Exemplo 3")])]),a._v("\nEm alguns casos a melhor medida para limpeza dos dados ausentes é a remoção completa da linha ou coluna da base. Estes casos acontecem quando o número de ausentes em um determinado atributo ultrapassa um critério limite que faça valer a pena o uso de qualquer outra técnica de limpeza. Para muitos analistas este critério é definido como sendo a razão entre número de itens ausentes e o número de itens encontrados para um determinado atributo.")]),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[a._v("O objetivo e a base de dados abaixo serão utilizados nos três exemplos a seguir.")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Encontrar as inconsistências e os valores ausentes desta base e utilizar a operação "),o("strong",[a._v("Tratar Dados Ausentes")]),a._v(" para corrigi-los.")]),a._v(" "),o("p",[o("strong",[a._v("Base de Dados:")]),a._v(" "),o("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#titanic"}},[a._v("Titanic")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image2.png",alt:"Ler dados"}})]),a._v(" "),o("h3",{attrs:{id:"exemplo-1"}},[a._v("Exemplo 1")]),a._v(" "),o("p",[o("strong",[a._v("Substituir pela média:")])]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Adicione uma base de dados por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(". "),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image1.png",alt:"Tabela ler dados"}})],1)]),a._v(" "),o("li",[o("p",[a._v("Adicione a operação "),o("strong",[a._v("Tratar dados Ausentes")]),a._v(" adicione "),o("em",[a._v("“Age”")]),a._v(" no campo atributos e selecione o tipo "),o("strong",[a._v("substituir pela média")]),a._v(" no campo "),o("strong",[a._v("Tipo de Limpeza")]),a._v(". "),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image3.png",alt:"Substituir pela média"}})])]),a._v(" "),o("li",[o("p",[a._v("Execute e observe o resultado."),o("br"),a._v("\nObserve que é possível verificar qual valor foi utilizado para substituir os ausentes. Para o resultado da operação Ler Dados, observe que os passageiros de "),o("em",[a._v("PassengerId")]),a._v(" 6, 18 e 20 não possuem valor no campo idade, ou seja, é null."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image5.png",alt:"Resultado do exemplo 1 - Ler dados"}})]),a._v(" "),o("p",[a._v("Agora observe o resultado da operação Tratar Dados Ausentes. Os passageiros de "),o("em",[a._v("PassengerId")]),a._v(" 6, 18 e 20 receberam a média das idades, ou seja, 18.90."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image4.png",alt:"Resultado do exemplo 1 - Substituir pela média"}})])])]),a._v(" "),o("h3",{attrs:{id:"exemplo-2"}},[a._v("Exemplo 2")]),a._v(" "),o("p",[o("strong",[a._v("Substituir por um valor:")])]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Adicione uma base de dados por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(", assim como o "),o("a",{attrs:{href:"#exemplo-1"}},[a._v("Exemplo 1")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Adicione a operação "),o("strong",[a._v("Tratar dados Ausentes")]),a._v(" adicione "),o("em",[a._v("“Age”")]),a._v(" no campo atributos e selecione o tipo "),o("strong",[a._v("substituir por valor")]),a._v(" no campo "),o("strong",[a._v("Tipo de Limpeza")]),a._v(", preencha "),o("em",[a._v("“99”")]),a._v(" no campo "),o("strong",[a._v("valor")]),a._v("."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image11.png",alt:"Substituir por valor"}})])]),a._v(" "),o("li",[o("p",[a._v("Execute e observe o resultado."),o("br"),a._v("\nVerifique o valor que foi utilizado para substituir os ausentes."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image14.png",alt:"Resultado do exemplo 2 - Substituir por valor"}}),o("br"),a._v("\nA idade dos passageiros de "),o("em",[a._v("PassengerId")]),a._v(" 6, 18 e 20 foi substituída por "),o("em",[a._v("99")]),a._v(".")])])]),a._v(" "),o("h3",{attrs:{id:"exemplo-3"}},[a._v("Exemplo 3")]),a._v(" "),o("p",[o("strong",[a._v("Remover uma linha inteira:")]),o("br"),a._v("\nCalcule a razão e utilize recursos da ferramenta para determinar se as linhas da base ou a coluna devem ser completamente removidas. Para calcular a razão entre os número de itens ausentes e válidos para a coluna Age, será utilizado o seguinte fluxo:\n"),o("img",{attrs:{src:"/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image9.png",alt:"Fluxo - Calcular a razão"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Adicione uma base de dados por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(", assim como o "),o("a",{attrs:{href:"#exemplo-1"}},[a._v("Exemplo 1")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("strong",[a._v("Transformar valores por função")]),a._v(". Ela é responsável por informar se um determinado item é ausente ou válido. "),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image12.png",alt:"Transformar valores por função"}})])]),a._v(" "),o("li",[o("p",[a._v("Execute e observe na visualização da tabela que uma nova coluna "),o("em",[a._v("booleana")]),a._v(" de nome "),o("em",[a._v("is_null")]),a._v(" aparece determinando o valor "),o("em",[a._v("true")]),a._v(" para valores ausentes e "),o("em",[a._v("false")]),a._v(" para todo o contrário.\n"),o("img",{attrs:{src:"/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image10.png",alt:"Resultado - Transformar valores por função"}})])]),a._v(" "),o("li",[o("p",[a._v("Agrupe e conte o número de itens da coluna "),o("em",[a._v("is_null")]),a._v(". Para isto adicione a operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/manipulacao-de-dados/linha-agrupar-por-funcao.html"}},[a._v("Agrupar linhas por função")]),a._v(" com os seguintes parâmetros:\n"),o("img",{attrs:{src:"/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image6.png",alt:"Agrupar por Linha"}})],1)]),a._v(" "),o("li",[o("p",[a._v("Execute e observe o resultado da tabela:\n"),o("img",{attrs:{src:"/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image13.png",alt:"Resultado - Agrupar por Linha"}}),o("br"),a._v("\nDe acordo com a tabela:")]),a._v(" "),o("ul",[o("li",[a._v("Número de itens ausentes = 177")]),a._v(" "),o("li",[a._v("Número Total de itens = 1309")]),a._v(" "),o("li",[a._v("Razão entre o número de itens ausentes e o total de itens da coluna Age: 177/1309 = 0.135 ou 0.1 (10%)"),o("br"),a._v("\nDez por cento (10%) dos dados presentes na coluna Age são ausentes. Com este dado, determine um limiar que seja capaz de definir as condições para todas as linhas ausentes ou toda a coluna seja inteiramente removida.")])])]),a._v(" "),o("li",[o("p",[a._v("Agora crie um novo fluxo, ele será similar aos exemplos 1 e 2.")])]),a._v(" "),o("li",[o("p",[a._v("Adicione uma base de dados por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Adicione a operação "),o("strong",[a._v("Tratar dados Ausentes")]),a._v(". Preencha "),o("em",[a._v("“Age”")]),a._v(" no campo "),o("strong",[a._v("Atributos")]),a._v(" e selecione o tipo "),o("strong",[a._v("Remover toda a linha")]),a._v(". No campo "),o("strong",[a._v("Razão mínima de valores ausentes")]),a._v(", preencha "),o("em",[a._v("“0.0”")]),a._v("  e no campo "),o("strong",[a._v("Razão máxima de valores ausentes")]),a._v(", preencha "),o("em",[a._v("“0.2”")]),a._v(". "),o("br"),a._v("\nAnalise os seguintes parâmetros da ferramenta:")]),a._v(" "),o("ul",[o("li",[a._v("Razão mínima de valores ausentes")]),a._v(" "),o("li",[a._v("Razão máxima de valores ausentes")])]),a._v(" "),o("p",[a._v("Estes parâmetros são os dois fatores que determinam se uma operação de limpeza será executada para os atributos escolhidos. Os valores padrões são 0.00 para razão mínima e 1.00 para razão máxima, isto é, se estes valores não forem definidos pelo usuário eles não interferem na realização do processo de limpeza.")]),a._v(" "),o("p",[a._v("Neste estudo encontra-se que a coluna Age tem 10% de dados ausentes, logo para que a operação seja executada, este valor precisa estar contemplado no intervalo mínimo e máximo. "),o("br"),a._v("\nObserve os seguintes parâmetros:"),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image11.png",alt:"Tratar dados ausentes - Age"}}),o("br"),a._v("\nO intervalo define como razão mínima para execução o valor 0% ou (0.0) e para razão máxima 20% (ou 0.2). Como o valor que foi encontrado está dentro deste intervalo, a operação de remoção completa da linha com valores nulos será executada.")])]),a._v(" "),o("li",[o("p",[a._v("Execute e observe os resultados."),o("br"),a._v("\nObserve que os passageiros com "),o("em",[a._v("PassengerId")]),a._v(" 6, 18 e 20 foram removidas na preview do resultado."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image8.png",alt:"Tratar dados ausentes - Age"}})])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=r.exports}}]);