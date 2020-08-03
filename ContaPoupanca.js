import {Conta} from "./Conta.js"
export class ContaPoupanca extends Conta{
   
    static numeroContaPoupanca =0;
    constructor(){
        ContaPoupanca.numeroContaPoupanca++;
        super(ContaPoupanca.numeroContaPoupanca);
    }
}