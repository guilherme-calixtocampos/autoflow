# 🔧 Oficina Inteligente - Sistema de Gestão de Oficina

Um sistema completo para gerenciamento de oficinas mecânicas, com controle de clientes, veículos, ordens de serviço, produtos, estoque e finanças. Permite automação de processos internos, oferecendo dashboards e relatórios detalhados para otimização da operação.

---

# 🚀 Funcionalidades Principais

## 1. 🔐 Módulo de Autenticação e Usuários

**Objetivo:** Controlar o acesso ao sistema e definir permissões de usuário.

**Funcionalidades:**
- Cadastro de usuários
- Login e logout
- Controle de acesso por perfil: Administrador, Atendente, Mecânico
- Alteração de senha

---

## 2. 👤 Módulo de Clientes

**Objetivo:** Gerenciar os dados dos clientes da oficina.

**Funcionalidades:**
- Cadastro de cliente: Nome, CPF/CNPJ, Telefone, Email, Endereço
- Edição e exclusão de cliente
- Listagem de clientes
- Busca por Nome, CPF/CNPJ
- Histórico de serviços realizados

---

## 3. 🚗 Módulo de Veículos

**Objetivo:** Controlar os veículos vinculados aos clientes.

**Funcionalidades:**
- Cadastro de veículo: Cliente vinculado, Placa, Marca, Modelo, Ano, Cor, Quilometragem
- Edição e exclusão de veículo
- Listagem de veículos
- Consulta por placa
- Histórico de ordens de serviço por veículo

---

## 4. 🛠️ Módulo de Ordens de Serviço (OS)

**Objetivo:** Gerenciar os serviços realizados na oficina.

**Funcionalidades:**
- Abertura de OS: Cliente, Veículo, Descrição do problema, Data de entrada, Status (Aberta, Em andamento, Finalizada, Cancelada)
- Inclusão de serviços realizados e peças utilizadas
- Cálculo automático do valor total
- Alteração de status e fechamento da OS
- Impressão da OS
- Histórico completo de OS
- Filtro por Período, Status e Cliente

---

## 5. 📦 Módulo de Produtos e Estoque

**Objetivo:** Controlar peças e produtos da oficina.

**Funcionalidades:**
- Cadastro de produto: Nome, Código, Categoria, Preço de custo, Preço de venda, Quantidade em estoque
- Edição e exclusão de produto
- Controle automático de estoque:
  - Baixa automática ao usar peça na OS
  - Alerta de estoque mínimo
- Histórico de movimentações: Entrada e saída de produtos

---

## 6. 💰 Módulo Financeiro

**Objetivo:** Controlar entradas e saídas financeiras da oficina.

**Funcionalidades:**

### 💵 Contas a Receber
- Registro automático ao finalizar uma OS
- Controle de Valor, Forma de pagamento, Data de vencimento, Status (Pago / Pendente)
- Filtro por período e relatório de receitas

### 💸 Contas a Pagar
- Cadastro manual de despesas (Fornecedores, Aluguel, Luz, Água, Compra de peças)
- Controle de vencimentos e status de pagamento

### 📊 Relatórios Financeiros
- Faturamento mensal
- Lucro estimado
- Total de despesas
- Fluxo de caixa

---

## 7. 📊 Dashboard

**Objetivo:** Exibir visão geral da oficina.

**Informações exibidas:**
- Total de clientes cadastrados
- Total de veículos
- Ordens de serviço em andamento
- Faturamento do mês
- Produtos com estoque baixo
- Gráfico de receitas vs despesas

---

# 🧠 Regras de Negócio Importantes
- Não permitir abrir OS sem cliente e veículo cadastrados
- Não permitir usar produto sem estoque disponível
- Baixa automática de estoque ao fechar OS
- Geração automática de conta a receber ao finalizar OS
- Apenas administrador pode excluir registros

---

# 🏛️ Estrutura Técnica

**Backend:** Node.js + Express  
- Controllers  
- Services  
- Repositories  
- Rotas separadas por módulo  
- Validações  

**Armazenamento:** JSON  
- Todos os dados serão salvos em arquivos JSON locais, simulando persistência de dados

---

# ⚙️ Tecnologias
- Node.js  
- Express  
- JavaScript  
- JSON para armazenamento de dados  
- Front-end: React (futuramente)
