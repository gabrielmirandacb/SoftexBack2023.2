// Implementação da classe ComputerFactory
var ComputerFactory = /** @class */ (function () {
    function ComputerFactory() {
    }
    ComputerFactory.createComputer = function (type, ram, hdd, cpu) {
        if (type.toLowerCase() === "pc") {
            return new PC(ram, hdd, cpu);
        }
        else if (type.toLowerCase() === "server") {
            return new Server(ram, hdd, cpu);
        }
        return null; // Retorna null se o tipo não for reconhecido
    };
    return ComputerFactory;
}());
// Implementação da classe PC
var PC = /** @class */ (function () {
    function PC(ram, hdd, cpu) {
        this.type = "PC";
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
    }
    PC.prototype.getRAM = function () {
        return this.ram;
    };
    PC.prototype.getHDD = function () {
        return this.hdd;
    };
    PC.prototype.getCPU = function () {
        return this.cpu;
    };
    PC.prototype.getType = function () {
        return this.type;
    };
    PC.prototype.toString = function () {
        return "PC: RAM=".concat(this.ram, "GB, HDD=").concat(this.hdd, "GB, CPU=").concat(this.cpu, "GHz");
    };
    return PC;
}());
// Implementação da classe Server
var Server = /** @class */ (function () {
    function Server(ram, hdd, cpu) {
        this.type = "Server";
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
    }
    Server.prototype.getRAM = function () {
        return this.ram;
    };
    Server.prototype.getHDD = function () {
        return this.hdd;
    };
    Server.prototype.getCPU = function () {
        return this.cpu;
    };
    Server.prototype.getType = function () {
        return this.type;
    };
    Server.prototype.toString = function () {
        return "Server: RAM=".concat(this.ram, "GB, HDD=").concat(this.hdd, "GB, CPU=").concat(this.cpu, "GHz");
    };
    return Server;
}());
// Exemplo de uso
var pc = ComputerFactory.createComputer("pc", 8, 512, 3.4);
var server = ComputerFactory.createComputer("server", 32, 1024, 2.2);
if (pc && server) {
    console.log(pc.toString());
    console.log(server.toString());
}
