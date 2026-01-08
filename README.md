# Desafio Técnico – Frontend ABC EVO

Este projeto é a implementação do desafio técnico de Frontend proposto pela ABC EVO, desenvolvido com **Angular** utilizando **Standalone Components** e **Reactive Forms**.

O objetivo é criar uma aplicação simples de cadastro, com validações, persistência em `localStorage` e navegação entre telas.


## 🌐 Demo

A aplicação está publicada via **GitHub Pages** e pode ser acessada no link abaixo:

👉 https://assispaola.github.io/evo-abcfitness/#/



## 🧩 Funcionalidades

- Tela de **Cadastro**
  - Campos: Nome, E-mail e Senha
  - Validação de formulário
  - Exibição de mensagens de erro somente após tentativa de envio
  - Botão "Salvar" habilitado apenas quando o formulário está válido

- Tela de **Detalhes**
  - Exibe os dados salvos no `localStorage`
  - Botão para voltar à tela de cadastro

- Persistência de dados usando **localStorage**
- Navegação entre páginas com **Angular Router**



## 🛠️ Tecnologias Utilizadas

- **Angular** (v22 com Standalone)
- **TypeScript**
- **HTML**
- **SCSS**
- **Reactive Forms**
- **Angular Router**
- **localStorage**



## 🧠 Conceitos Aplicados

### ✔ Standalone Components
- Elimina a necessidade de `NgModule`
- Cada componente importa apenas o que utiliza
- Código mais simples e direto

### ✔ Reactive Forms
- Controle total sobre validações
- Validação declarada no TypeScript
- Melhor escalabilidade e leitura do código

### ✔ Validações de Formulário
- `Validators.required`
- `Validators.email`
- `Validators.minLength`
- `Validators.pattern`
- Mensagens de erro exibidas apenas após o submit

### ✔ Navegação
- Uso do `Router` para trocar entre as telas
- Rotas configuradas no arquivo `app.routes.ts`

### ✔ Persistência de Dados
- Dados do formulário são salvos no `localStorage`
- Tela de detalhes lê os dados diretamente do storage



## 🔐 Regras de Validação

- **Nome**
  - Obrigatório
  - Apenas letras (incluindo acentos)

- **E-mail**
  - Obrigatório
  - Formato válido de e-mail

- **Senha**
  - Obrigatória
  - Mínimo de 8 caracteres



## ▶️ Fluxo da Aplicação

1. Usuário preenche o formulário de cadastro
2. Clica em **Salvar**
3. Validações são executadas
4. Dados válidos são salvos no `localStorage`
5. Usuário é redirecionado para a tela de detalhes
6. Tela exibe Nome e E-mail cadastrados
7. Botão **Voltar** retorna para o cadastro



## 📝 Observações

- Os dados **não são persistidos em backend**, apenas no `localStorage`
- A aplicação foi pensada para um **escopo pequeno**, priorizando simplicidade
- Decisões técnicas foram tomadas considerando **clareza e legibilidade**



## 🚀 Como Executar o Projeto

```bash
npm install
npm start
```

Acesse:
http://localhost:4200

