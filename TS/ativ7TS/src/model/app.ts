import { Cliente } from "./cliente";
import { Loja } from "./loja";
import { Observer } from "./observer";

var gabriel = new Cliente("Gabriel Maciel", "gabrielmaciel@gmail.com");
var rodrigo = new Cliente("Rodrigo Duarte", "rodrigo@gmail.com");
var thiago = new Cliente("Thiago Jomar", "thiagojomar@gmail.com");

var nadjaImports = new Loja("Nadja Imports", "Muamba");

Observer.addCliente(gabriel);
Observer.addCliente(rodrigo);
Observer.addCliente(thiago);

nadjaImports.publicarNovoProduto("Iphone 15 Pro Max 512gb - R$15.000,00");
nadjaImports.publicarNovoProduto("Iphone 15 512gb - R$10.000,00");