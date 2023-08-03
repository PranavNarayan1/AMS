import express from 'express';
import { sessionCheck } from '../../../middleware/sessions';
import { resettingPassword } from '../../../controller/resetController';

const routes = express();
routes.put('/reset', sessionCheck, resettingPassword)
export default routes;





