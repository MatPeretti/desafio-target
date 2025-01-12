# Desafio Target Sistemas

Este é o desafio técnico para a vaga de Desenvolvedor Front-End, desenvolvido em Angular 19. O projeto consiste em 5 desafios que seguem a ordem solicitada na página. Para o 3º desafio, foi utilizado o json-server para simular uma API.

## Tecnologias Utilizadas

- Angular 19
- TypeScript
- JSON Server
- CSS
- Concurrently

## Pré-requisitos

Antes de começar, verifique se você tem os seguintes requisitos instalados:

- Node.js
- npm (Node Package Manager)
- Angular CLI

## Instalação

1. Clone o repositório

```bash
git clone https://github.com/MatPeretti/desafio-target.git
```

2. Instale as dependências

```bash
npm install
```

3. Inicie a aplicação

```bash
npm start
```

A aplicação e o JSON Server iniciarão simultaneamente graças ao Concurrently.

- Frontend: http://localhost:4200/
- JSON Server: http://localhost:3000/

## Comandos Úteis

Para fazer o build do projeto:

```bash
ng build
```

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- /src/app/challenges/components: Componentes da aplicação
- /src/app/challenges/services: Serviço utilizado
- /src/app/challenges/models: Interfaces
- /src/assets: Arquivo de dados

## Desafios Implementados

1. Soma: Cálculo do somatório de uma sequência numérica.
2. Verificador Fibonacci: Verifica se um número informado pertence à sequência de Fibonacci.
3. Análise de Faturamento: Calcula estatísticas de faturamento diário (menor valor, maior valor e dias acima da média) utilizando dados de um JSON.
4. Percentual por Estado: Calcula o percentual de representação do faturamento de cada estado em relação ao total.
5. Inversor de String: Inverte os caracteres de uma string sem utilizar funções prontas.
