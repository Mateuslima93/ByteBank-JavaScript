//Classe abstrata, uso apenas para herança
export class Conta{
    _agencia;
    _saldo;

    constructor(agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta");
        }
        this._saldo = 0;
        this._agencia = agencia;
    }

    get saldo(){
        return this._saldo;
    }
    get agencia(){
        return this._agencia;
    }

    sacar(valor){
        if(this.saldo < valor) return;
        this._saldo -= valor;
        return valor;
    }

    depositar(valor){
        if(valor < 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        if(this.saldo < valor) return;
        const valorSaque = this.sacar(valor);
        conta.depositar(valorSaque);
    }

    //Feito para ser sobrescrito
    metodoAbstrato(){
        throw new Error("Este é um método abstrato e portanto não pode ser instanciado pelo objeto Conta")
    }

}