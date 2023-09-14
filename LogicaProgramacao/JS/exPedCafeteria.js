import {Cliente} from "./exPedCliente.js";
import {Produto} from "./exPedProd.js";
import {Pedido} from "./exPedido.js";

var lista = [];

//Criando o pedido de Danilo
var cliDanilo = new Cliente ("Danilo", "981905671", 301);
var pedidoDanilo = new Pedido (Date.now, cliDanilo);
var tapiocaDanilo= new Produto("tapioca queijo", 7.5, 1);
var cafeDanilo = new Produto("cafe", 5, 2);

pedidoDanilo.addProduto(tapiocaDanilo);
pedidoDanilo.addProduto(cafeDanilo);

lista.push(pedidoDanilo);
console.log(lista);


//Criando o pedido de Gabriel
var cliGabriel = new Cliente ("Gabriel", "988885566", 301);
var pedidoGabriel = new Pedido (Date.now, cliGabriel);
var tapiocaGabriel= new Produto("tapioca frango", 8.5, 1);
var sucoGabriel = new Produto("suco", 9, 1);

pedidoGabriel.addProduto(tapiocaGabriel);
pedidoGabriel.addProduto(sucoGabriel);
lista.push(pedidoGabriel);
console.log(lista);

//Criando o pedido de Luciano
var cliLuciano = new Cliente ("Gabriel", "988885566", 301);
var pedidoLuciano = new Pedido (Date.now, cliLuciano);
var tapiocaLuciano = new Produto("tapioca presunto", 9, 1);
var guaranaLuciano = new Produto("Guarana do Amazonas", 10, 1);

pedidoLuciano.addProduto(tapiocaLuciano);
pedidoLuciano.addProduto(guaranaLuciano);

lista.push(pedidoLuciano);

console.log(lista);