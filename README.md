# T1---Implementa-o-de-Padr-o-de-Projeto
Exemplo do padrão Strategy em TypeScript

# Descrição do Projeto

Este projeto demonstra o uso do padrão de projeto Strategy em TypeScript, a ideia é permitir que um sistema execute diferentes formas de pagamento sem precisar alterar o código principal. Cada método de pagamento é uma estratégia separada, e o contexto decide qual deve ser executada.

# O que é o Padrão Strategy

O padrão Strategy permite trocar algoritmos ou comportamentos de forma flexível, sem mudar a estrutura das classes principais. No caso deste projeto, cada tipo de pagamento (Pix, Cartão ou Boleto) é uma estratégia diferente.

# Como o Strategy foi usado neste projeto

Foi criada uma interface PaymentStrategy que define o método pagar().
Depois foram feitas três classes implementando essa interface:
- PixPayment
- CardPayment
- BoletoPayment
A classe PaymentContext é responsável por receber uma estratégia e executá-la. No arquivo principal é possível mudar a estratégia e testar diferentes pagamentos.

# Como executar o projeto

1. Instalar o Node.js
Baixe em: https://nodejs.org
2. Instalar Typescript e ts-node (npm install -g typescript ts-node)
3. Executar o arquivo TypeScript (ts-node main.ts)
