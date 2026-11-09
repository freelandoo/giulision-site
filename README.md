# Landing page MAYOB

Demonstração one-page baseada na direção comercial aprovada para decoração e iluminação de eventos.

## Executar localmente

```bash
npm install
npm run dev
```

O Vite exibirá o endereço local no terminal. Para validar a versão de produção:

```bash
npm run build
npm run preview
```

## Decisões de implementação

| Elemento | Estratégia | Recurso | Motivo |
|---|---|---|---|
| Estrutura e responsividade | Implementação própria | HTML semântico + CSS | A página é simples e não exige framework |
| Fotografias | Assets locais otimizados | WebP responsivo | Carregamento rápido e consistência visual |
| Tipografia | Reutilização licenciada | Manrope + Newsreader via Fontsource | Proximidade com a referência e carregamento local |
| Ícones | Biblioteca open source | Lucide, licença ISC/MIT | Consistência e acessibilidade |
| Movimento | Implementação própria | CSS + IntersectionObserver | Microinterações leves sem dependência adicional |
| Contato | Link direto | WhatsApp em `src/main.js` | Atendimento no número informado pelo cliente |

## Pendências para publicação

- Confirmar logo e identidade visual finais.
- Confirmar cidade/região, disponibilidade e serviços finais.
- Remover `noindex` apenas quando houver autorização para publicação e indexação.
