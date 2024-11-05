import { Request, Response } from 'express';
import { ementaService } from '../services/ementaDeCurso';

const ementaController = {
    createEmenta: async (req: Request, res: Response): Promise<void> => {
        const { nomeCurso, descricao, duracao } = req.body;
        try {
            const retorno = await ementaService.createEmenta(nomeCurso, descricao, duracao);
            if (!retorno) {
                res.status(500).send('Não foi possível criar a ementa do curso.');
            } else {
                res.status(200).send('Ementa do curso criada com sucesso.');
            }
        } catch (error) {
            console.error('Erro ao criar ementa do curso:', error);
            res.status(500).send('Ocorreu um erro no servidor ao tentar criar a ementa do curso.');
        }
    },

    updateEmenta: async (req: Request, res: Response): Promise<void> => {
        const { nomeCurso, descricao, duracao } = req.body;
        const id = req.params.id;
        try {
            const ret = await ementaService.updateEmenta(id, nomeCurso, descricao, duracao);
            if (!ret) {
                res.status(500).send('Não foi possível atualizar a ementa do curso.');
            } else {
                res.status(200).send('Ementa do curso atualizada com sucesso.');
            }
        } catch (error) {
            console.error('Erro ao atualizar ementa do curso:', error);
            res.status(500).send('Ocorreu um erro no servidor ao tentar atualizar a ementa do curso.');
        }
    }
};

export default ementaController;