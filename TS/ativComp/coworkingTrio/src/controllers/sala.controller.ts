import { Request, Response } from "express";
import { Sala } from "../models/sala";
import salaRepository from "../repositories/sala.repository";



export default class SalaController {

    async create(req: Request, res: Response) {
        if (!req.body.nome) {
            res.status(400).send({
                message: "Não pode ser vazio a sala!"
            });
            return;
        }

        try {
            const sala: Sala = req.body;
            const savedSala = await salaRepository.save(sala);

            res.status(201).send(savedSala);
        } catch (err) {
            res.status(500).send({
                message: "Erro ao tentar salvar uma sala."
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const sala = await salaRepository.retrieveAll();

            res.status(200).send(sala);
        } catch (err) {
            res.status(500).send({
                message: "Erro encontrado quando estava se fazendo a busca por todos as salas."
            });
        }
    }
    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const sala = await salaRepository.retrieveById(id);
            if (sala) res.status(200).send(sala);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhuma sala com esse id=${id}.`
                });
        } catch (err) {
            res.status(500).send({
                message: `Error não foi possível retornar a Sala com id=${id}.`
            });
        }
    }

    async update(req: Request, res: Response) {
        let sala: Sala = req.body;
        sala.id = parseInt(req.params.id);

        try {
            const num = await salaRepository.update(sala);

            if (num == 1) {
                res.send({
                    message: "Sala foi atualizado com sucesso."
                });
            } else {
                res.send({
                    message: `Não foi possível atualizar a Sala com o id=${sala.id}. A Sala não foi encontrada, ou ela está vazio!`
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `Error ao atualizar a Sala com id=${sala.id}.`
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const num = await salaRepository.delete(id);

            if (num == 1) {
                res.send({
                    message: "Sala deletada com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar a Sala com id=${id}. Talvez a Sala não tenha sido encontrado.`,
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `A Sala com id==${id}, não pode ser deletado.`
            });
        }
    }

    async deleteAll(req: Request, res: Response) {
        try {
            const num = await salaRepository.deleteAll();

            res.send({ message: `${num} Salas foram deletados com sucesso!` });
        } catch (err) {
            res.status(500).send({
                message: "Algum erro ocorreu enquato deletava todos as salas."
            });
        }
    }

}


