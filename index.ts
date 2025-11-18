interface PaymentStrategy {
    pagar(valor: number): void;
}
class PixPayment implements PaymentStrategy {
    pagar(valor: number): void {
        console.log('Pagamento via Pix, valor: R$', valor.toFixed(2));
    }
}
class CardPayment implements PaymentStrategy {
    pagar(valor: number): void {
        console.log('Pagamento via Cartao, valor: R$', valor.toFixed(2));
    }
}
class BoletoPayment implements PaymentStrategy {
    pagar(valor: number): void {
        console.log('Pagamento via Boleto, valor: R$', valor.toFixed(2));
    }
}
class PaymentContext {
    private strategy: PaymentStrategy;
    
    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy: PaymentStrategy): void {
        this.strategy = strategy;
        console.log('Metodo de pagamento selecionado:', strategy);
    }
    executarPagamento(valor: number): void {
        if (!this.strategy) {
            console.log('Nenhuma forma de pagamento selecionada');
            return;
        }
        this.strategy.pagar(valor);
    }
}

const contexto = new PaymentContext(new PixPayment());
contexto.executarPagamento(200);

contexto.setStrategy(new CardPayment());
contexto.executarPagamento(150);

contexto.setStrategy(new BoletoPayment());
contexto.executarPagamento(50);
