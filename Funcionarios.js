export class Funcionarios{
    _nome;
    _cpf;
    _salario;
    _bonificacao;
    _login;
    _senha;
    
    constructor(nome, cpf, salario){
        this.nome= nome;
        this._cpf=cpf;
        this._salario=salario;
        this._bonificacao = 1;
    }
    get nome(){
        return this._nome;
    }
    set nome(nome){
        this._nome=nome;
    }
    get cpf(){
        return this._cpf;
    }
    get salario(){
        return this._salario;
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