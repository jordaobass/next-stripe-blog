# 📝 Blog Pessoal com Next.js e Strapi

Este é um projeto de blog pessoal simples que utiliza **Next.js** como frontend e **Strapi** como backend CMS. O
objetivo deste projeto é demonstrar como o Next.js pode se integrar com um CMS headless utilizando renderização
estática.

### 🔗 Uso de Rotas API

Neste projeto, utilizamos rotas API do Next.js para encapsular a lógica de acesso ao backend (Strapi). As vantagens de
usar rotas API incluem:

- **Encapsulamento**: Mantém a lógica de chamadas à API centralizada, facilitando a manutenção.
- **Segurança**: Permite ocultar detalhes da implementação do backend e implementar validações.
- **Simplicidade**: Proporciona uma interface fácil para interagir com o backend sem expor a URL diretamente no
  frontend.

### 🚀 Como Executar o Projeto com Docker

Para executar o projeto, você precisará ter o **Docker** instalado na sua máquina. Siga os passos abaixo:

1. **Clone o repositório**:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_DIRETORIO>
   ```

2. Crie um arquivo .env.local na raiz do projeto e adicione a variável de ambiente para o URL do Strapi:

``
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
``

3. Inicie o Docker e iniciar o Strapi

execute:

```bash
docker-compose up -d
```

4. Inicie o projeto Next.js:

```bash
npm install
npm run dev

```
O projeto estará acessível em http://localhost:3000. 🌐