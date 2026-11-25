# Design Spec: Refinamento 3D, Parallax e Conversão — Melhor Saída para o Brasil

**Data:** 2026-11-25  
**Base:** `HANDOFF.md`, `PRODUCT.md`, `DESIGN.md` (cópia intacta em `reference-v1/`)  
**Abordagem escolhida:** Opção 1 — Evolução fiel de *The Life-Route Board* com 3D físico (CSS 3D + JS leve) e Parallax em camadas.

---

## 1. Intenção e Objetivo

Elevar o impacto visual e a taxa de conversão do site **Melhor Saída para o Brasil** (`/` e `/paraguai`), transformando a base estática atual em uma experiência sofisticada com profundidade, imagens atmosféricas sob medida, elementos 3D táteis e arquitetura de conversão acima da dobra — mantendo 100% da velocidade de um site estático Astro 5 pronto para a Hostinger.

## 2. Metas, Não-Metas e Anti-Metas

### Metas
- **Impacto visual imediato:** profundidade real via parallax em camadas no hero e faixas atmosféricas, painel de destinos mecânico com animação split-flap 3D e mockups 3D interativos dos dois ebooks.
- **Mais conversão na Home e em `/paraguai`:** CTA primário visível acima da dobra nas duas rotas, hero de `/paraguai` mais compacto para trazer `#guias` cedo, guia rápido de decisão ("Qual guia escolher?") e FAQ objetivo em acordeão arquitetural.
- **Acabamento técnico completo:** favicon SVG, `og:image`, `sitemap.xml` real, acessibilidade (`prefers-reduced-motion`, foco visível, contraste), e `DESIGN.md` sincronizado.

### Não-Metas
- Não introduzir WebGL/Three.js pesado nem framework de UI (React/Vue).
- Não alterar a stack (Astro 5 estático + TypeScript strict).
- Não publicar na Hostinger nesta etapa.

### Anti-Metas (o que seria falha)
- Quebrar a identidade *The Life-Route Board* (arredondar botões/faixa, trocar Barlow Condensed/Overpass por fontes genéricas, usar vinho como fundo de seção ou voltar para cards gêmeos de infoproduto).
- Inserir clichês de aeroporto (avião, pista, mala, cartão de embarque).
- Inventar preços, depoimentos, números de clientes ou links Hotmart falsos.

## 3. Abordagens Consideradas

1. **Opção 1 — Evolução fiel com 3D físico + Parallax em camadas (Escolhida):** mantém o sistema do `DESIGN.md`, adiciona imagens atmosféricas geradas sob medida, livros em 3D interativo (lombada, folhas, brilho especular, inclinação), painel split-flap 3D e melhorias fortes de conversão. Melhor equilíbrio entre impacto visual, fidelidade à marca e performance mobile/Hostinger.
2. **Opção 2 — WebGL / Three.js em tempo real:** cena 3D em canvas. Descartada pelo peso de bundle, risco de performance em celulares mais simples e complexidade desproporcional ao objetivo comercial.
3. **Opção 3 — Redesenho cinematográfico afrouxando `DESIGN.md`:** suavizaria a faixa amarela e cantos retos. Descartada para respeitar as decisões consolidadas do operador em `HANDOFF.md`.

## 4. Arquitetura Visual e de Conversão

### 4.1 Novos Assets Visuais
- `public/images/paraguay-horizon.jpg`: paisagem atmosférica widescreen do amanhecer/entardecer no Paraguai (rio, horizonte amplo, luz âmbar/índigo e silhueta sutil de lapachos, harmonizada com as capas *Nueva Raíz*, sem texto nem aviões) para o hero parallax de `/paraguai`.
- `public/images/dawn-horizon-layer.png` (ou composição multicamada com `dawn-ground.jpg` + camadas CSS atmosféricas): profundidade real no hero da Home.
- `public/images/editorial-restart.jpg`: imagem atmosférica horizontal para faixa parallax editorial entre o manifesto e os guias na Home.
- `public/images/og-cover.jpg`: imagem Open Graph (1200×630) no padrão visual da marca.
- `public/favicon.svg`: marca geométrica (barra preta em chapa amarela `#f5c400`).
- `public/sitemap.xml`: sitemap válido para `melhorsaidaparaobrasil.com/` e `/paraguai/`.

### 4.2 Componentes 3D e Motion (Zero Dependências Pesadas)
1. **Ebook 3D Interativo (`src/components/Book3D.astro`):**
   - Estrutura 3D em CSS (`perspective`, `preserve-3d`) com capa frontal (arte Hotmart 600×600), lombada 3D escura (`#141829` harmonizada com *Nueva Raíz*), bloco de páginas creme (`--paper` com micro-linhas) e camada de brilho especular dinâmico.
   - Inclinação suave seguindo o ponteiro no desktop (com retorno amortecido) e rotação de entrada sutil no scroll.
   - Em `prefers-reduced-motion: reduce`, renderiza em ângulo estático elegante sem movimento.
2. **Painel de Destinos Mecânico 3D (`src/components/DestinationBoard.astro`):**
   - Chassi metálico escuro com vinco central de split-flap, detalhe técnico de grade/filete e seta de direção clara na linha aberta.
   - Animação 3D `rotateX` escalonada nos rótulos da linha aberta (`PARAGUAI` / `2026` / `ABERTO`) ao entrar na viewport.
3. **Engine Leve de Parallax & Reveal (`src/scripts/motion.ts`):**
   - Um único listener passivo de scroll com `requestAnimationFrame` atualizando variáveis CSS (`--parallax-y`) em camadas com `translate3d` (60fps, GPU-composited).
   - `IntersectionObserver` para entradas escalonadas limpas nas seções e linhas de produto.
   - Totalmente desativado quando `prefers-reduced-motion: reduce`.

### 4.3 Estrutura das Páginas

#### Home (`/`)
1. **Faixa Amarela Sticky** (`Base.astro`): marca + `Início` | `Paraguai` | `Os guias` (CTA invertido).
2. **Hero Parallax Acima da Dobra:** céu em camadas com parallax suave, headline monumental *"Dá para recomeçar."*, lead direto, **CTA primário amarelo ("Explorar o destino Paraguai →")** e **topo do Painel de Destinos 3D** já visíveis no primeiro viewport.
3. **Painel de Destinos 3D:** `Paraguai · 2026 · Aberto` (amarelo + vinho) e `Outros destinos · — · Em breve`.
4. **Seção Manifesto / Esperança (`.hope`):** split editorial com verbo split-flap (`recomeçar / escolher`), copy honesto + faixa de princípios objetivos (3 pilares sem hype: *Sem visto garantido*, *Sem ruído de fórum*, *Decisão de olhos abertos*).
5. **Interlúdio Atmosférico Parallax:** faixa panorâmica com profundidade no scroll que conecta o manifesto à ação prática.
6. **Vitrine dos 2 Guias (`#guias-home`):** linhas filetadas com **Book3D** interativo, etiqueta de escopo (`01 · DOCUMENTAÇÃO`, `02 · ONDE VIVER`), pitch e CTA direto para a âncora do guia em `/paraguai`.

#### Landing de Conversão (`/paraguai`)
1. **Hero Compacto Parallax (~56dvh):** fundo atmosférico do Paraguai em parallax, título `PARAGUAI`, lead de posicionamento e **CTA imediato ("Ver os dois guias 2026 ↓")** + barra de status compacta, garantindo que os produtos nasçam logo após a dobra.
2. **Bloco "Qual guia faz sentido agora?":** comparativo direto em 2 colunas filetadas (*Preciso resolver a papelada* → Residência 2026 vs. *Ainda vou escolher a cidade* → Cidades 2026).
3. **Seção `#guias` (Oferta Principal):** linhas filetadas de alta conversão com **Book3D** interativo, badge de edição `2026`, pitch, lista escaneável do que o leitor leva, botão amarelo `.buy` de alto impacto (`Quero este guia →`) e nota honesta sobre a compra na Hotmart (`src/content.ts` mantém `#hotmart` até receber URLs oficiais).
4. **Transparência + FAQ Arquitetural:** seção *"O que estes guias não são"* combinada com acordeão `<details>` respondendo dúvidas reais de compra (sem inventar preço/depoimento) e CTA final de retorno aos guias.

## 5. Verificação

- `npm run build` sem erros TypeScript/Astro.
- Inspeção visual em navegador real (desktop + mobile) em `/` e `/paraguai`, comparando com `reference-v1/`.
- Checagem de links, âncoras, contraste, foco de teclado e `prefers-reduced-motion`.
