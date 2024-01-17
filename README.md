Rodando o projeto
Clone esse repositório.

git clone https://github.com/CalderanPH/rank-right-frontend
Na sua IDE de preferência, rode o comando npm install.

Navegue até http://localhost:4200/.

Para a melhor experiência na navegação, deve ser usada a resolução de 1920*900.

Alternativamente, visite o deploy da aplicação em Vercel Challenge Deploy

Arquitetura
Geral
Para fazer a modularização do projeto, abstrai os requisitos dos desafios e separei a estrutura de pastas do projetos entre os módulos de: 'evaluation'.

Para o roteamento do projeto, adotei a estratégia de lazy loading, utilizando a abstração mencionada acima para declarar as rotas pais: formulario e lista-formularios

Para o tratamento de erros do projeto, utilizei a estratégia de prover um Global Error Handler, que abrirá um componente de snackbar toda vez que a API externa retornar um erro.

Como biblioteca de UI's, utilizei o Angular Material

API
Esse projeto consome uma API externa que retorna dados a avaliações enviada por usuarios.

Usabilidade
Para envio do formulario, basta preencher os campos e apertar o botão enviar.

Não é possivel cadastrar mais de um formalario com o mesmo email.
