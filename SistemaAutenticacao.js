/* Ser autenticavel significa ter a propriedade login e senha*/

export class SistemaAutenticacao{
    static login(autenticavel, login, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return (autenticavel.autenticar(senha) && autenticavel.autenticar(login));
        }
        return false;
    }
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function;
    }
    // in verifica se a chave existe dentro de um objeto
    //instanceof retorna se é uma instancia ou propriedade de uma classe
}