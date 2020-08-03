import {Conta} from "./Conta.js"
export class ContaCorrente extends Conta{

    static numeroContaCorrente = 0; 
    constructor(){
        ContaCorrente.numeroContaCorrente++;
        super(ContaCorrente.numeroContaCorrente); 
}
//Sobrescrita
 sacar(valor){
     let saque = valor * 1.1;
     return super.sacar(saque); 
 }
}