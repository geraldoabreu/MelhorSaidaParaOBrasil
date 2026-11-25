export const hotmart = {
  residencia: "#hotmart",
  cidades: "#hotmart",
} as const;

export const site = {
  name: "Melhor Saída para o Brasil",
  domain: "melhorsaidaparaobrasil.com",
  tagline: "Dá para recomeçar.",
} as const;

export const guides = [
  {
    id: "residencia",
    title: "Residência Paraguaia para Brasileiros 2026",
    href: hotmart.residencia,
    cover: "/images/residencia-cover.jpg",
    coverAlt:
      "Capa do ebook Residência Paraguaia para Brasileiros 2026",
    status: "Aberto",
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
    title: "Guia de Cidades do Paraguai 2026",
    href: hotmart.cidades,
    cover: "/images/cidades-cover.jpg",
    coverAlt: "Capa do ebook Guia de Cidades do Paraguai 2026",
    status: "Aberto",
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
