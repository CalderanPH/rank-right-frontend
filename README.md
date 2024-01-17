# Rodando o Projeto

1. **Clone esse repositório:**

    ```bash
    git clone https://github.com/CalderanPH/rank-right-frontend
    ```

2. **Instale as dependências na sua IDE de preferência:**

    ```bash
    npm install
    ```

3. **Navegue até http://localhost:4200/.**


# Arquitetura

## Geral

- O projeto foi modularizado, abstraindo os requisitos dos desafios e separando a estrutura de pastas entre os módulos de 'evaluation'.
  
- Foram declaradas a rota '/home'.
  
- Angular Material foi escolhido como a biblioteca de UI.

## API

- O projeto consome uma API externa que retorna dados de avaliações enviadas por usuários.
- Projeto dependente do backend rank-right: https://github.com/CalderanPH/rank-right

# Usabilidade

- Para enviar o formulário, basta preencher os campos e clicar no botão "enviar".
  
- Não é possível cadastrar mais de um formulário com o mesmo e-mail.
