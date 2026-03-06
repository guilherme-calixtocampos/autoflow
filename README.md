# 🔧 AutoFlow - Sistema Inteligente de Gestão de Oficinas

Sistema web para gerenciamento de oficinas mecânicas, permitindo controlar clientes, veículos e contratos de serviços, facilitando o fluxo de atendimento desde o cadastro até a execução dos serviços.

O objetivo do projeto é automatizar o fluxo de trabalho da oficina, melhorar a organização dos serviços e evoluir futuramente para um **SaaS completo para oficinas mecânicas**.

---

# 🚀 Funcionalidades Principais

## 1. 🔐 Módulo de Autenticação e Usuários

**Objetivo:** Controlar o acesso ao sistema.

**Funcionalidades:**
- Login de usuário
- Persistência de sessão utilizando **localStorage**
- Carregamento automático das informações do usuário logado
- Exibição de **nome e cargo** no cabeçalho do sistema
- Redirecionamento automático para tela de login caso não esteja autenticado

---

## 2. 👤 Módulo de Clientes

**Objetivo:** Gerenciar os dados dos clientes da oficina.

**Funcionalidades:**
- Cadastro de clientes
- Edição de clientes
- Exclusão de clientes
- Listagem de clientes
- Busca de clientes

**Informações armazenadas:**
- Nome
- Telefone
- Email
- Observações

---

## 3. 🚗 Módulo de Veículos

**Objetivo:** Controlar os veículos vinculados aos clientes.

Cada cliente pode possuir **um ou vários veículos**, permitindo o gerenciamento completo da frota atendida pela oficina.

**Funcionalidades:**
- Cadastro de veículo
- Associação do veículo a um cliente
- Edição de veículo
- Exclusão de veículo
- Listagem de veículos
- Consulta de veículos por cliente

**Informações armazenadas:**
- Cliente vinculado
- Placa
- Marca
- Modelo
- Ano
- Cor

---

## 4. 📄 Módulo de Contratos / Ordens de Serviço

**Objetivo:** Registrar os serviços contratados pelos clientes para seus veículos.

Este módulo permite criar um contrato contendo todas as informações necessárias para o atendimento.

**Funcionalidades:**
- Criação de contrato
- Cadastro de serviços vinculados ao contrato
- Adição dinâmica de múltiplos serviços
- Edição de contrato
- Listagem de contratos
- Exibição em formato de **cards**

**Informações registradas:**
- Cliente
- Veículo
- Usuário responsável
- Descrição do problema
- Data de entrada
- Status do contrato
- Lista de serviços contratados

---

## 5. 🛠️ Cadastro Dinâmico de Serviços

Durante a criação de um contrato é possível adicionar **múltiplos serviços dinamicamente** através da interface.

Exemplos de serviços disponíveis:

- Troca de Óleo
- Revisão de Freios
- Suspensão
- Troca de pastilhas de freio
- Troca de retrovisores

Os serviços são adicionados dinamicamente utilizando **JavaScript e manipulação do DOM**.

---

# 🧠 Regras de Negócio Importantes

- Não permitir criar contrato sem **cliente cadastrado**
- Não permitir criar contrato sem **veículo cadastrado**
- Um contrato deve possuir **pelo menos um serviço**
- Um cliente pode possuir **vários veículos**

---

# 🧩 Arquitetura do Sistema

O sistema foi estruturado separando responsabilidades em três camadas principais.

## API

Responsável por manipular os dados da aplicação.

Funções principais:
- Criação de registros
- Edição de dados
- Exclusão
- Persistência

---

## UI

Responsável pela interface do usuário.

Funções principais:
- Manipulação do DOM
- Renderização de listas
- Criação de componentes dinâmicos

---

## Main

Responsável por controlar os eventos da aplicação.

Funções principais:
- Clique de botões
- Validações
- Integração entre **API** e **UI**

---

# 💾 Armazenamento

Atualmente o sistema utiliza **JSON e localStorage** para simular persistência de dados.

Os dados armazenados incluem:

- Usuários
- Clientes
- Veículos
- Contratos
- Serviços

---

# 🎨 Interface

A interface foi desenvolvida utilizando:

- HTML5
- JavaScript
- TailwindCSS

**Características da interface:**

- Layout moderno
- Responsivo
- Modal para criação de contratos
- Cards para exibição de contratos
- Menu adaptado para **mobile e desktop**

---

# 🚧 Evolução do Projeto

O AutoFlow está sendo desenvolvido inicialmente como um **projeto de estudo e protótipo funcional**, com objetivo de evoluir futuramente para:

- Backend completo
- Banco de dados
- API REST
- Controle financeiro
- Controle de estoque
- Dashboard com métricas da oficina
- Plataforma **SaaS para múltiplas oficinas**
