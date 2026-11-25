# Melhor Saída para o Brasil

Site editorial e de conversão para quem quer recomeçar fora do Brasil. O primeiro destino tratado é o **Paraguai**, com landing em `/paraguai` para os ebooks vendidos na Hotmart.

**Handoff para outra IA:** leia [`HANDOFF.md`](./HANDOFF.md) antes de `PRODUCT.md` e `DESIGN.md`.

## Desenvolvimento

```bash
npm install
npm run dev
```

Build estático (Hostinger):

```bash
npm run build
```

A pasta `dist/` é o que sobe no hospedeiro.

## Hotmart

Enquanto os links oficiais não existirem, os CTAs apontam para `#hotmart`. Cole as URLs em `src/content.ts` (`hotmart.residencia` e `hotmart.cidades`).

## Conteúdo

Capas dos ebooks vêm do Drive do projeto. O PDF completo não é republicado no site — só o teaser de escopo.
