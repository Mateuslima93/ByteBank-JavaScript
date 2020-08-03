import {Client} from "./Client.js"
import{ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";
import{Funcionarios} from "./Funcionarios.js";
import{Gerente} from "./Gerente.js";
import{Diretor} from "./Diretor.js";
import{SistemaAutenticacao} from "./SistemaAutenticacao.js"


/*const client1 = new Client("Ricardo", 11122233344, new ContaCorrente());
const client2 = new Client("Amelia", 22244455590, new ContaPoupanca());
client1.conta.depositar(100);
client1.conta.transferir(40,client2.conta);
*/
const diretor = new Diretor("José", 11122233344, 3000.00);
const gerente = new Gerente("Geraldo", 33355577734, 6000.00);
const cliente = new Client("João", 33322255534,null);
diretor.cadastrarLogin("geraldinho")
diretor.cadastrarSenha(12345678);
gerente.cadastrarLogin("zezinho");
gerente.cadastrarSenha("123");
cliente.cadastrarSenha("222");
cliente.cadastrarLogin("jojo");

const diretorLogado = SistemaAutenticacao.login(diretor,"geraldinho","12345678");
const gerenteLogado = SistemaAutenticacao.login(gerente,"geraldinho","12345678");
const clienteLogado = SistemaAutenticacao.login(cliente,"jojo","222");
console.log(diretorLogado, gerenteLogado, clienteLogado);