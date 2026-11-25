# Handoff — Melhor Saída para o Brasil

Documento para outra IA (ou humano) continuar o site sem reabrir decisões já tomadas. Leia isto **antes** de `PRODUCT.md` e `DESIGN.md`. Fonte da verdade visual: `src/styles/global.css` + `DESIGN.md`. Se os dois divergirem, o CSS vence e o DESIGN deve ser atualizado.

- **Repo:** https://github.com/geraldoabreu/MelhorSaidaParaOBrasil
- **Branch:** `main` (sincronizado com `origin`)
- **Domínio previsto:** `melhorsaidaparaobrasil.com`
- **Deploy previsto:** Hostinger (ainda **não** feito). Artefato: `npm run build` → pasta `dist/`
- **Stack:** Astro 5, output `static`, TypeScript strict, sem React
- **Idioma da UI:** português do Brasil

---

## 1. O que é o produto

Site de divulgação e conversão para brasileiros que querem **recomeçar em outro país**. O nome brinca com “a melhor saída para o Brasil é o aeroporto”, mas o operador deixou explícito:

> O aeroporto foi só uma referência. O objetivo principal é mostrar que é possível recomeçar em outro país e dar esperança.

Não é cartório, advocacia, governo, nem agência de visto. É editorial + funil para **ebooks na Hotmart**.

**Funil (confirmado pelo operador):**

1. **Home `/`** — captura quem quer sair do Brasil (topo de funil, esperança).
2. **`/paraguai`** — converte quem já olha o Paraguai, vendendo os dois guias 2026.

Outros países entram depois, anunciados no painel como “Em breve”, sem inventar destinos.

---

## 2. Decisões do operador (não reabrir sem motivo)

| Tema | Decisão |
|---|---|
| Público | Os dois: home = vontade de sair; `/paraguai` = conversão Paraguai |
| Stack | Astro (recomendação aceita: estático, SEO, rota nativa, Hostinger) |
| Build visual | Comp-first no Impeccable; na prática o operador fundiu duas direções **em texto** e recusou o aeroporto como assunto — o código traduziu isso, não pixel-match de um único mock |
| Hotmart | CTAs placeholder até haver URLs (`#hotmart` em `src/content.ts`) |
| GitHub | Repo público `geraldoabreu/MelhorSaidaParaOBrasil` |
| Skin | Impeccable (processo de direção + DESIGN.md) |

**Não inventar:** preços, depoimentos, número de clientes, “visto garantido”, links Hotmart falsos, logo vetorial (não existe).

**Não republicar** os PDFs inteiros. Só teaser de escopo.

---

## 3. Materiais de origem

Google Drive (pasta-mãe):  
https://drive.google.com/drive/folders/17ZRdlyMspnGIfIr9shS652PWTEpkZnsK

Dois produtos:

1. **Residência Paraguaia para Brasileiros 2026**  
   Pasta `1-fvLiVk-GieKomzsCPLXvFSBTrXNg2mv`  
   PDF + capas A4 + artes Hotmart (600 e 1200).
2. **Guia de Cidades do Paraguai 2026**  
   Pasta `1PQgFW1WI3NZiGcuBupEd8g4qaPeKURYT`  
   idem.

No site, as capas usadas são as artes **Hotmart 600×600**, em:

- `public/images/residencia-cover.jpg`
- `public/images/cidades-cover.jpg`

Os PDFs **não** foram extraídos linha a linha nesta entrega. O copy dos teasers em `src/content.ts` é honesto quanto ao *tipo* de conteúdo (papelada vs. cidades), não é citação do PDF. Se a outra IA tiver acesso ao Drive, pode alinhar o teaser ao índice real **sem** copiar o livro.

Chão fotográfico do hero: `public/images/dawn-ground.jpg` (gerado; céu de amanhecer, sem aviões/pessoas). Proveniência embarcada no JPEG via Impeccable `embed-prompt`.

---

## 4. Como o layout nasceu (motivação)

### 4.1 Processo Impeccable (resumo)

1. `PRODUCT.md` escrito depois de entrevista (público, stack, Hotmart, esperança).
2. Seed de direção `fc49ba8a`, modo **Persuade**. O dado caiu no candidato 5 da lista grounded (**Ñandutí**, renda paraguaia).
3. Desafiantes do catálogo: torre de barro, pedreira de nuvem, **faixa amarela de terminal (Schiphol)**, livery de endurance, display de 7 segmentos, Riso.
4. Pesagem: a **faixa amarela** ganhou identificação e clareza (brasileiro lê aeroporto; a ação vira “próximo portão”). Ñandutí era bela e opaca para o funil.
5. Pick do modelo: **painel de partidas (split-flap)**.
6. Comps gerados em `.impeccable/mocks/decision/` (assigned, model-pick, wayfinding, seven-segment, risograph, canon).
7. O operador **não** clicou a mesa: gostou das opções **B (painel)** e **C (faixa amarela)** e **proibiu** o aeroporto como tema. Pedido: esperança de recomeço.

Tradução obrigatória: pegar a *gramática* de B+C (faixa de decisão + quadro de destinos) e **tirar o saguão** (sem jet, portão, mala, pictograma de corredor). O quadro lista **vidas/países**, não voos.

Mundo nomeado em `DESIGN.md`: **The Life-Route Board**.

### 4.2 Por que faixa amarela no topo

Sinalização de terminal (amarelo saturado + preto) é um sistema que o visitante já sabe ler: *uma decisão por faixa*. Aqui a decisão não é “porta D12”, é **seguir o Paraguai / os guias**.

- Amarelo `#f5c400` é a **camada de decisão** (nav, linha aberta do painel, botão comprar). Não é filete decorativo em página branca de infoproduto.
- Cantos **quadrados** (radius 0): o sistema de sinal é chapas, não app de viagem arredondado.
- Sticky: o “próximo passo” permanece visível enquanto a esperança (céu) e a prova (guias) rolam.

### 4.3 Por que o hero é céu de amanhecer + “Dá para recomeçar.”

O operador recusou o aeroporto como assunto. O primeiro viewport precisa provar **esperança**, não partida.

- Chão = fotografia de aurora (leite-azul → ocre). “Amanhecer” = outro dia possível, no Brasil, na cozinha, no celular.
- Headline monumental em Barlow Condensed creme, leading apertado (0.86): frase curta, memorável, sem kicker/eyebrow (banido no craft floor Impeccable).
- Sem foto de avião, pista ou mala.

Desvio consciente vs. contrato da home: o brief pedia CTA “Ver o Paraguai” **na ponta direita da faixa** no first viewport. O build pôs o CTA invertido da nav (“Os guias”) + headline no céu + board abaixo. A faixa ficou identidade + wayfinding; o portão literal não foi construído. **Quem for refinar pode recolocar o CTA primário no first viewport** se quiser cumprir o brief à letra.

### 4.4 Por que o painel de destinos (não cards)

Categoria padrão de imigração/infoproduto = hero + dois cards iguais. Isso foi recusado.

O painel (metal escuro, colunas Destino / Ano / Situação) faz três trabalhos:

1. **Paraguai = único destino aberto** (linha amarela, status vinho “Aberto”).
2. **Outros destinos = em breve** (tipo metal, sem peso de CTA) — honestidade de roadmap.
3. **Metáfora do nome** sem virar fantasia de GRU: é um quadro de *vidas possíveis*.

Produtos na `/paraguai` são **linhas com capa** (capa + texto + botão), separados por filetes de 2px, **não** um grid de cards gêmeos. Motivo: o craft floor trata “cards iguais ícone+título+texto” como default preguiçoso; o mundo pede horário/itinerário de mercadoria.

### 4.5 Por que Overpass + Barlow Condensed

- **Barlow Condensed:** voz de placa/quadro (destino, marca, H1). Tracking alto no board.
- **Overpass:** corpo legível, parentesco com sinalização viária, **não** está na lista de faces “AI default” do Impeccable (Inter, Space Grotesk, Playfair, etc.).
- Proibido no mundo: serif editorial, face de relógio 7 segmentos, fonte “departures” novidade.

Fontes via `@fontsource-variable/overpass` e `@fontsource/barlow-condensed` (self-host no bundle Vite, não Google Fonts CDN).

### 4.6 Motion

Um único aceno de quadro: o verbo **recomeçar** na home usa um “split-flap” CSS (três linhas, 5.6s). `prefers-reduced-motion` desliga. Não espalhar a mesma entrada em toda seção.

### 4.7 Direções **não** escolhidas (e por quê)

| Direção | Veredito | Por quê não |
|---|---|---|
| Ñandutí (dado) | Lead do roll | Pouca identificação; risco de souvenir |
| Totem 7 segmentos | Competitive | Cotação/LED não explica os ebooks; risco cassino |
| Zine Riso | Competitive | Editorial ok, identificação de “sair do país” fraca; uniforme cultural BR |
| Torre de barro / pedreira de nuvem / livery | Declined | Cerâmica/surreal/corrida escondem a oferta |
| Canon (landing branca de imigração) | Saída padrão | Indistinguível de infoproduto |

Não re-rolar para Ñandutí ou Riso a menos que o operador peça.

---

## 5. Arquitetura do código

```
src/content.ts          ← nome do site, Hotmart URLs, dados dos dois guias
src/layouts/Base.astro  ← chrome: faixa, nav, footer, SEO básico
src/pages/index.astro   ← home
src/pages/paraguai.astro← landing de venda
src/styles/global.css   ← mundo visual inteiro (tokens + componentes)
public/images/          ← capas + dawn-ground.jpg
astro.config.mjs        ← site URL, output static
PRODUCT.md              ← verdade de produto
DESIGN.md               ← sistema visual pós-build
.impeccable/            ← seed, comps de decisão, briefs, design.json
HANDOFF.md              ← este arquivo
```

Rotas Astro geram:

- `dist/index.html`
- `dist/paraguai/index.html` → URL `/paraguai/` (trailing slash). No Hostinger, garantir que `melhorsaidaparaobrasil.com/paraguai` resolva (redirect ou `index.html` na pasta).

**Hotmart — único ponto de edição comercial:**

```ts
// src/content.ts
export const hotmart = {
  residencia: "#hotmart",
  cidades: "#hotmart",
};
```

Trocar por URLs oficiais. Os botões “Quero este guia” usam `guide.href`.

Comandos:

```bash
npm install
npm run dev      # local
npm run build    # dist/ para Hostinger
npm run preview
```

---

## 6. Copy e tom

- Esperança prática, sem cinismo que mate a venda, sem hype de visto.
- Nome pode piscar o aeroporto **uma vez** (home: “O nome brinca com o aeroporto. O trabalho é outro…”).
- Disclaimer no footer: não é assessoria jurídica/contábil/governo; Hotmart ainda sem link oficial.
- Teasers dos guias: o que o leitor **leva**, não o PDF.

Se for enriquecer com o Drive, preferir índice verdadeiro a prosa genérica.

---

## 7. O que está feito vs. o que falta

### Feito

- Site responsivo (quebra ~820px: faixa empilha, board vira uma coluna).
- Home + `/paraguai` navegáveis, CTAs, capas reais.
- Repo GitHub público criado e com `main` empurrado.
- `PRODUCT.md`, `DESIGN.md`, `.impeccable/design.json`, briefs de superfície.
- Detector Impeccable nos arquivos de UI: limpo (`[]`) na última passagem.
- Verificação local: preview `http://127.0.0.1:4321/` e `/paraguai`; CTA de compra foi para `#hotmart`.

### Não feito / incompleto (para a próxima IA)

1. **Links Hotmart reais** e, se o operador quiser, preços (só com dado real).
2. **Hostinger:** publicar `dist/`, DNS, HTTPS, trailing slash `/paraguai`.
3. **Captura de e-mail / leads** além da Hotmart — produto disse que compra é o único caminho *até* existir captura. Ainda não há form.
4. **PDF como fonte de copy** — Drive tem os livros; o site ainda não cita o índice.
5. **Brief vs. build:** first viewport da home não tem o CTA “Ver o Paraguai” cravado na faixa; hero de `/paraguai` ainda é full-viewport, então `#guias` fica abaixo da dobra.
6. **Impeccable finish-reviewer / hero-gate** não rodou o ciclo completo comp-led (o operador fundiu direções no chat). Não tratar os comps em `.impeccable/mocks/decision/` como layout aprovado pixel a pixel.
7. **Google Antigravity** foi pedido; **não estava disponível** nesta sessão.
8. `DESIGN.md` ainda descreve hover do nav-CTA como vinho; o CSS foi ajustado depois para `#2a261f` (metal) para não gastar o vinho fora do status “Aberto”. Atualizar o YAML do DESIGN se for manter o CSS.
9. Sem favicon, og:image, sitemap.xml real (robots aponta sitemap que **não existe**).
10. Sem captura de analytics.

### Dívidas visuais conhecidas

- Skip-link existe (classe própria, não reusa `.buy`).
- Wine no hover do nav foi removido do CSS; board status “Aberto” ainda usa `--open`.
- Capa dos ebooks tem sombra offset; DESIGN não a elevou a regra de sistema.

---

## 8. Como a próxima IA deve trabalhar

1. Ler `HANDOFF.md` → `PRODUCT.md` → `DESIGN.md` → `src/pages/*` + `global.css`.
2. **Não** trocar o mundo (amarelo de decisão + board + dawn + Overpass/Barlow) por landing genérica, Riso, ou aeroporto literal, salvo pedido novo do operador.
3. Refinos úteis e alinhados:
   - Colocar CTA primário visível no first viewport (home e `/paraguai`).
   - Encurtar o hero de `/paraguai` para os produtos nascerem mais cedo.
   - Ligar Hotmart; og:image a partir das capas.
   - Sitemap; favicon a partir da barra preta + amarelo.
   - Hostinger (estático).
4. Claims comerciais: só com material do operador.
5. Skin: se for usar Impeccable de novo, `PRODUCT.md` e `DESIGN.md` já existem — é **extensão** do mundo, não new-work, a menos que o operador peça redesign.

---

## 9. Commits nesta entrega

- `13c5dc2` — site Astro inicial (home, Paraguai, capas, dawn).
- `398add5` — DESIGN.md + copy dos CTAs sem vazar caminho de arquivo para o visitante.

(Este `HANDOFF.md` pode ser um commit seguinte.)
