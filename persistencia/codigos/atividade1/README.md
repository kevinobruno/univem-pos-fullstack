# Atividade

Criação de aplicações simples, da linguagem de preferência:

- Persistência de escrita em um banco relacional.
- Uso manual de controle de transação (begin, commit, rollback).
- Extra: Atualização de dados de leitura usando persistência através de eventos.

## Alunos

Kevin de Oliveira Bruno - RA: 627658

## Implementação

Linguagem usada: Javascript
Framework: NodeJS
ORM: [Sequelize](https://sequelize.org/)

## Execução da atividade

Primeiro devem ser instaladas as dependências do projeto com:

```sh
npm install
```

Após isso o código pode ser executado com:

```sh
node src/index.js
```

Espera-se que seja inserido um novo usuário na tabela `User`, dentro de uma transação, e sejam
listados todos os usuários criados anteriormente.

Caso haja alguma falha, a transação no banco de dados será abortada e o rollback irá acontecer,
protegendo assim o banco de dados e mantendo o mesmo consistente.
