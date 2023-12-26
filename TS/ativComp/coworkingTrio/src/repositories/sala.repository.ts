import { Sala } from "../models/sala";

class SalaRepository {
    salaDB = new Array<Sala>();

    async save(sala: Sala): Promise<Sala> {
        try {
            this.salaDB.push(sala);
            return sala;
        } catch (err) {
            throw new Error("Falha ao criar a sala!");
        }
    }

    async retrieveAll(): Promise<Array<Sala>>{
        try {
            return this.salaDB;
        } catch (error) {
            throw new Error("Falha ao retornar a sala!");
        }
    }
    async retrieveById(salaId: number): Promise<Sala | null> {
        try {
            var encontrado = false;
            var salaEncontrado = null;
            this.salaDB.forEach(element => {
                if (element.id == salaId) {
                    salaEncontrado = element;
                    encontrado = true;
                }
            });
            if (encontrado) {
                return salaEncontrado;
            }
            return null;
        } catch (error) {
            throw new Error("Falha ao buscar a sala!");
        }
    }

    async update(sala: Sala): Promise<number> {
        const { id, nome } = sala;
        try {
            var encontrado = false;
            this.salaDB.forEach(element => {
                if (element.id == sala.id) {
                    element.nome = sala.nome;
                    encontrado = true;
                }
            });
            if (encontrado) {
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao atualizar a sala!");
        }
    }

    async delete(salaId: number): Promise<number> {
        try {
            var encontrado = false;
            this.salaDB.forEach(element => {
                if (element.id == salaId) {
                    this.salaDB.splice(this.salaDB.indexOf(element), 1);
                    encontrado = true;
                }
            });
            if (encontrado) {
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao deletar a sala!");
        }
    }

    async deleteAll(): Promise<number> {
        try {
            let num = this.salaDB.length;
            this.salaDB.splice(0, this.salaDB.length);
            return num;
        } catch (error) {
            throw new Error("Falha ao deletar todos as salas!");
        }
    }

}

export default new SalaRepository();