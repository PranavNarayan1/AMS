import express from 'express';
import { sessionCheck } from '../../../middleware/sessions';
import { fpController } from '../../../controller/user controller/forgetPassword';


const routes = express();

routes.post('/verify_otp',sessionCheck,fpController);

export default routes