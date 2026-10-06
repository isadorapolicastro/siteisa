# Policastro Soluções em Design

Site institucional da **Policastro Soluções em Design** — UX & Product Design.
Pesquisa, estratégia e interfaces que geram resultado real para o seu negócio.

🌐 **Site:** [isadorapolicastrouxdesign.com](https://isadorapolicastrouxdesign.com)

---

## Sobre o projeto

Site estático em HTML, CSS e JavaScript puros, sem dependências e sem etapa de compilação.
Foi criado originalmente no Lovable (React) e convertido para HTML puro para ser publicado
gratuitamente no GitHub Pages.

**Destaques**
- 8 páginas, em português e inglês (botão PT/EN no topo)
- Layout responsivo, com menu próprio para celular
- Otimizado para buscadores: metadados, dados estruturados (Schema.org), `robots.txt`, `sitemap.xml` e `llms.txt`
- Acessível: navegação por teclado, link "pular para o conteúdo" e respeito à preferência por menos movimento

## Estrutura de pastas

```
/
├── index.html                  → Início
├── estudio/index.html          → Sobre nós
├── servicos/index.html         → Serviços
├── processo/index.html         → Processo
├── projetos/index.html         → Projetos
├── trabalhe-conosco/index.html → Trabalhe Conosco
├── sobre/index.html            → Quem sou eu
├── contato/index.html          → Contato
├── 404.html                    → Página de erro
├── assets/
│   ├── site.css                → cores, fontes e layout de todas as páginas
│   ├── site.js                 → textos PT/EN, menu do celular e formulário
│   └── isadora-policastro.jpg
├── favicon.ico
├── robots.txt · sitemap.xml · llms.txt
├── CNAME                       → domínio próprio (não apague)
├── LICENSE
└── README.md
```

## Como editar

**Textos:** cada texto aparece em dois lugares, e os dois precisam ser alterados:
1. no HTML da página (versão em português, a que o Google lê);
2. no objeto `COPY` dentro de `assets/site.js`, nas partes `pt` e `en`.

**Cores e fontes:** ficam nas variáveis do bloco `:root`, no início de `assets/site.css`.
Valem para o site inteiro.

**Imagens:** coloque na pasta `assets/` usando nomes em minúsculas, com hífen e sem espaços
(ex.: `foto-perfil.jpg`). O GitHub Pages diferencia maiúsculas de minúsculas.

## Como publicar

1. No repositório, clique em **Add file → Upload files**.
2. Arraste os arquivos ou pastas alterados (arquivos com o mesmo nome são substituídos).
3. Clique em **Commit changes**.
4. Em cerca de 1 a 2 minutos o site é atualizado automaticamente.

## Domínio

O domínio é registrado e renovado no Wix; a hospedagem é feita pelo GitHub Pages.

| Tipo  | Nome | Valor                        |
|-------|------|------------------------------|
| A     | @    | 185.199.108.153              |
| CNAME | www  | isadorapolicastro.github.io  |

> ⚠️ Não apague o arquivo `CNAME` e mantenha a renovação automática do domínio ativada no Wix.

## Ao criar uma página nova

1. Crie uma pasta com o nome do endereço (ex.: `cases/`) e um `index.html` dentro dela
   (copie uma página existente como base).
2. Adicione o link no menu de **todas** as páginas.
3. Adicione o endereço novo no `sitemap.xml` e no `llms.txt`.

## Contato

**Isadora Policastro** — Porto Alegre, RS
📧 isapolicastro.designer@gmail.com
[LinkedIn](https://www.linkedin.com/in/isadorapolicastro/) ·
[Behance](https://www.behance.net/isapolicastro) ·
[Instagram](https://www.instagram.com/isadora.policastro/)

---

© Policastro Soluções em Design. Todos os direitos reservados.
