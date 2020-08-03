import {Conta} from "./Conta.js";

export class Client{
    _nome;
    _cpf;
    _conta;
    _senha;
    _login;

    constructor(nome, cpf, conta){
        this.nome = nome;
        this._cpf = cpf;
        this.conta = conta;
    }
    set conta(novoValor){
        if(novoValor instanceof Conta){
            this._conta = novoValor;
        }
    }
    get conta(){
        return this._conta;
    }
    get cpf(){
        return this.cpf;
    } 
    get nome(){
        return this._nome;
    }
    set nome(nome){
        this._nome=nome;
    }
    cadastrarSenha(senha){
        this._senha = senha;
    }
    autenticar(valor){
        return (this._senha == valor || this._login == valor);
    }
    cadastrarLogin(login){
        this._login= login;
    }

}


