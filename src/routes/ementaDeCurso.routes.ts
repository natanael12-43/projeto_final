import Router from 'express-promise-router'
import ementaController from '../controllers/ementaDeCurso.controllers';

const router = Router();

router.post('/ementa', ementaController.createEmenta);
router.put('/ementa/:id', ementaController.updateEmenta);

export default router;
