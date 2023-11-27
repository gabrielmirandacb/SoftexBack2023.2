import { Cliente } from "./cliente";

export abstract class Observer{
    static subscribers : Cliente[] = new Array<Cliente>();

    static addCliente(cliente : Cliente){
        this.subscribers.push(cliente);
    }
    static publicarSpam(text : string){
        this.subscribers.forEach(cliente => {
            console.log(cliente.toString());
            console.log("Recebeu a mensagem:" + text);
        });
    }
}