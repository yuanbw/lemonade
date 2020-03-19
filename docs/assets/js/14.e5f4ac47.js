(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{341:function(e,a,o){"use strict";o.r(a);var s=o(28),t=Object(s.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"instalacao"}},[e._v("Instalação")]),e._v(" "),o("h2",{attrs:{id:"instalando-a-ultima-versao"}},[e._v("Instalando a última versão")]),e._v(" "),o("h2",{attrs:{id:"usando-docker-container"}},[e._v("Usando Docker container")]),e._v(" "),o("p",[e._v("Na figura a seguir, os microsserviços do Lemonade são implantados como containers gerenciados pelo Docker e pela tecnologia de virtualização subjacente. Os fluxos de trabalho no LEMONADE são convertidos em código do PySpark e executados no Apache Spark ou no COMPSs (em desenvolvimento), consumindo recursos no HDFS ou no Ophidia (em desenvolvimento). Em geral, os microsserviços não requerem elasticidade porque são pequenas aplicações e não executam qualquer código intensivo de memória ou CPU, isso é responsabilidade da plataforma de processamento subjacente (COMPSs ou Spark). Conforme descrito na seção anterior, o COMPSs PMES foi modificado para oferecer suporte ao Mesos e a elasticidade fornecidos pela infraestrutura de QoS. A própria Spark já está integrada com o Mesos.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/img/image1.jpg",alt:"Docker installation",title:"Docker installation"}})]),e._v(" "),o("h3",{attrs:{id:"preparando-para-construir"}},[e._v("Preparando para construir")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone git@github.com:eubr-bigsea/docker-lemonade.git\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" docker-lemonade\n"),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" submodule init\n"),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" submodule update --remote\n\n")])])]),o("h3",{attrs:{id:"construindo-e-executando"}},[e._v("Construindo e executando")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("docker-compose up\n")])])]),o("p",[e._v("Executando em modo independente:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("docker-compose up -d\n")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);