export const hotmart = {
  residencia: "#hotmart",
  cidades: "#hotmart",
} as const;

export const site = {
  name: "Melhor Saída para o Brasil",
  domain: "melhorsaidaparaobrasil.com",
  tagline: "Dá para recomeçar.",
} as const;

export const pillars = [
  {
    code: "01",
    title: "Sem visto garantido",
    text: "Sem promessa mágica, sem papel de cartório ou escritório. Clareza prática para você saber o que esperar.",
  },
  {
    code: "02",
    title: "Sem ruído de fórum",
    text: "Em vez de juntar conselho contraditório de grupo, um roteiro organizado em ordem de execução para 2026.",
  },
  {
    code: "03",
    title: "Olhos abertos",
    text: "O que funciona, o que trava e para quem o destino faz sentido — antes de assinar aluguel ou gastar passagem.",
  },
] as const;

export const guides = [
  {
    id: "residencia",
    code: "01 · DOCUMENTAÇÃO",
    edition: "Edição 2026",
    spineTitle: "RESIDÊNCIA PARAGUAIA · 2026",
    title: "Residência Paraguaia para Brasileiros 2026",
    shortTitle: "Residência Paraguaia 2026",
    href: hotmart.residencia,
    cover: "/images/residencia-cover.jpg",
    coverAlt:
      "Capa do ebook Residência Paraguaia para Brasileiros 2026",
    status: "Aberto",
    idealFor:
      "Para quem já decidiu olhar o Paraguai a sério e precisa entender a ordem exata da documentação sem travar no protocolo.",
    pitch:
      "O caminho concreto para pedir residência: o que o brasileiro precisa reunir, em que ordem, e onde a papelada costuma travar.",
    covers: [
      "Quem pode solicitar e em qual modalidade o brasileiro costuma entrar",
      "Documentos, traduções e o que não precisa levar “por via das dúvidas”",
      "A ordem dos passos em 2026, do primeiro protocolo ao documento na mão",
      "Erros caros que aparecem quando se copia conselho de grupo de WhatsApp",
    ],
  },
  {
    id: "cidades",
    code: "02 · ONDE VIVER",
    edition: "Edição 2026",
    spineTitle: "CIDADES DO PARAGUAI · 2026",
    title: "Guia de Cidades do Paraguai 2026",
    shortTitle: "Guia de Cidades 2026",
    href: hotmart.cidades,
    cover: "/images/cidades-cover.jpg",
    coverAlt: "Capa do ebook Guia de Cidades do Paraguai 2026",
    status: "Aberto",
    idealFor:
      "Para quem ainda está escolhendo onde morar ou visitar primeiro e quer comparar capital, fronteira e interior sem filtro.",
    pitch:
      "Onde viver de verdade: o que muda entre Assunção, o leste, o sul — e o que brasileiro costuma descobrir tarde demais.",
    covers: [
      "Retrato honesto das cidades onde brasileiros já se instalam",
      "Custo, ritmo, saúde, escola e o dia a dia sem filtro de Instagram",
      "Para quem cada cidade faz sentido — e para quem não faz",
      "Como visitar com método antes de assinar aluguel ou matrícula",
    ],
  },
] as const;

export const paraguayFaq = [
  {
    q: "Qual dos dois guias devo ler primeiro?",
    a: "Se você ainda está decidindo se o Paraguai combina com a sua rotina e qual cidade visitar, comece pelo Guia de Cidades 2026. Se já decidiu ir e quer organizar certidões, traduções e passos do protocolo, comece pelo Residência Paraguaia 2026. Os dois se complementam sem repetir assunto.",
  },
  {
    q: "Os guias substituem advogado, contador ou órgão oficial?",
    a: "Não. Eles são material informativo e prático para você chegar preparado, evitar erros comuns e fazer as perguntas certas. Regras migratórias e fiscais devem sempre ser confirmadas nos canais oficiais do Paraguai no momento do seu protocolo.",
  },
  {
    q: "Como funciona a compra e a entrega dos ebooks?",
    a: "A venda e a entrega digital acontecem pela plataforma Hotmart. Assim que os links oficiais da oferta estiverem publicados, os botões desta página levam direto para o checkout seguro da Hotmart.",
  },
  {
    q: "Outros países vão entrar no site?",
    a: "Sim. O Paraguai é o primeiro destino aberto porque é próximo, viável e já conta com os dois guias 2026 prontos. Novos destinos só entram no painel quando tiverem material concreto no mesmo padrão.",
  },
] as const;
