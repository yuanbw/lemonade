(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{310:function(e,a,o){"use strict";o.r(a);var r=o(28),t=Object(r.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"support-vector-machines"}},[e._v("Support Vector Machines")]),e._v(" "),o("p",[e._v("O Support Vector Machines (SVM) é um algoritmo de aprendizado de máquina supervisionado baseado em kernels que é utilizado para problemas de classificação. Basicamente, o SVM encontra uma linha de separação, usualmente conhecida como hiperplano entre dados pertencentes de duas classes arbitrárias. Essa linha tenta maximizar\na distância entre os pontos mais próximos em relação a cada uma das classes. Nesta versão, implementa somente uma versão específica do SVM linear. Por esse motivo, somente suporta problemas de classificação multi-classe (i.e., com mais de duas classes) caso seja realizada classificação um-contra-todos.")]),e._v(" "),o("h3",{attrs:{id:"conectores"}},[e._v("Conectores")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Entrada")]),e._v(" "),o("th",[e._v("Saída")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Dados utilizados para treinar o modelo")]),e._v(" "),o("td",[e._v("Dados de saída e Modelo do algoritmo de classificação")])])])]),e._v(" "),o("h3",{attrs:{id:"tarefa"}},[e._v("Tarefa")]),e._v(" "),o("p",[e._v("Nome da Tarefa")]),e._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[e._v("Aba Execução")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Parâmetro")]),e._v(" "),o("th",[e._v("Detalhe")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[e._v("Atributo com Features")])]),e._v(" "),o("td",[e._v("Atributo(s) que será(ão) usado(s) para treinamento")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Atributo com o rótulo")])]),e._v(" "),o("td",[e._v("Atributo a ser classificado")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Atributos com a predição (novo)")])]),e._v(" "),o("td",[e._v("Atributo contendo a predição do modelo")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("C")])]),e._v(" "),o("td",[e._v("Parâmetro de penalidade C do termo de erro.")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Kernel")])]),e._v(" "),o("td",[e._v("Especifica o tipo de kernel a ser usado no algoritmo.")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Grau do Polinômio")])]),e._v(" "),o("td",[e._v("Grau da função do kernel polinomial. Ignorado por todos os outros kernels.")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Tolerância")])]),e._v(" "),o("td",[e._v("Tolerância para critérios de parada.")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Número máximo de iterações")])]),e._v(" "),o("td",[e._v("Número máximo de iterações.")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Coeficiente do kernel")])]),e._v(" "),o("td",[e._v('Coeficiente do kernel para as métricas "rbf", "poly" e "sigmoid.')])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Termo independente da função do kernel.")])]),e._v(" "),o("td",[e._v('Termp independente da função do kernel. É significativo apenas nas métricas "poly" e "sigmoid".')])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Usar a heurística shrinking.")])]),e._v(" "),o("td",[e._v("Necessidade de usar a heurística shrinking")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Habilitar estimativas probailísticas.")])]),e._v(" "),o("td",[e._v("Habilitar estimativas probailísticas.")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Decisão de retorno.")])]),e._v(" "),o("td",[e._v('Decisão de retorno "ovr" (one-vs-rest : um por todos) ou "ovo" (one-vs-one: um por um).')])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Semente")])]),e._v(" "),o("td",[e._v("A semente do gerador de números pseudo-aleatórios a ser usada ao embaralhar os dados.")])])])]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-aparencia.html"}},[e._v("Aba Aparência")])],1),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-resultados.html"}},[e._v("Aba Resultados")])],1),e._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[e._v("Exemplo de Utilização")]),e._v(" "),o("p",[o("strong",[e._v("Objetivo:")]),e._v(" Utilizar o modelo do Support Vector Machines ("),o("em",[e._v("SVM")]),e._v(") para classificar se uma pessoa possui ou não a doença diabetes"),o("br"),e._v(" "),o("strong",[e._v("Base de Dados:")]),e._v(" "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/base-de-dados/#pima-indians-diabetes"}},[e._v("Pima Indians Diabetes")])],1),e._v(" "),o("p",[o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_support_vector_machines/image4.png",alt:"Fluxo de trabalho - Ler dados"}})]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Leia a base de dados por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/entrada-e-saida/ler-dados.html"}},[e._v("Ler dados")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("Utilize a operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[e._v("Divisão percentual")]),e._v(" para dividir a base de dados em treino e teste. No parâmetro "),o("strong",[e._v("Percentual")]),e._v(", calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).")],1)]),e._v(" "),o("li",[o("p",[e._v("Na operação "),o("strong",[e._v("Support Vector Machines (SVM)")]),e._v(", selecione "),o("em",[e._v("“Age”")]),e._v(", "),o("em",[e._v("“BMI”")]),e._v(", "),o("em",[e._v("“BloodPressure”")]),e._v(", "),o("em",[e._v("“DiabetesPedigreeFunction”")]),e._v(", "),o("em",[e._v("“Glucose”")]),e._v(", "),o("em",[e._v("“Insulin”")]),e._v(", "),o("em",[e._v("“Pregnancies”")]),e._v(" e "),o("em",[e._v("“SkinThickness”")]),e._v(" no campo "),o("strong",[e._v("Atributos com features")]),e._v(". Selecione "),o("em",[e._v("“class”")]),e._v(" no campo "),o("strong",[e._v("Atributo com o rótulo")]),e._v(" e preencha "),o("em",[e._v("“resultado”")]),e._v(" no campo Atributo com a predição (novo). Deixe os demais parâmetros inalterados."),o("br"),e._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_support_vector_machines/image3.png",alt:"Formulario Support Vector Machines - parte 1"}}),e._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_support_vector_machines/image1.png",alt:"Formulario Support Vector Machines - parte 2"}})])]),e._v(" "),o("li",[o("p",[e._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html"}},[e._v("Aplicar Modelo")]),e._v(", selecione "),o("em",[e._v("“Age”")]),e._v(", "),o("em",[e._v("“BMI”")]),e._v(", "),o("em",[e._v("“BloodPressure”")]),e._v(", "),o("em",[e._v("“DiabetesPedigreeFunction”")]),e._v(", "),o("em",[e._v("“Glucose”")]),e._v(", "),o("em",[e._v("“Insulin”")]),e._v(", "),o("em",[e._v("“Pregnancies”")]),e._v(" e "),o("em",[e._v("“SkinThickness”")]),e._v(" no campo "),o("strong",[e._v("Atributos com features")]),e._v(" e preencha "),o("em",[e._v("“resultado”")]),e._v(" no campo "),o("strong",[e._v("Nome do novo atributo (herdado do modelo)")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html"}},[e._v("Avaliar Modelo")]),e._v(", selecione "),o("em",[e._v("“resultado”")]),e._v(" no campo "),o("strong",[e._v("Atributo usado para predição")]),e._v(". Selecione "),o("em",[e._v("“class”")]),e._v(" no campo "),o("strong",[e._v("Atributo usado como label")]),e._v(" e a métrica "),o("em",[e._v("“F1”")]),e._v(" como "),o("strong",[e._v("Métrica para avaliação")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão)."),o("br"),e._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_support_vector_machines/image2.png",alt:"Gráfico - resultado"}}),o("br"),e._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_support_vector_machines/image5.png",alt:"Tabela - resultado"}})])])]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);a.default=t.exports}}]);