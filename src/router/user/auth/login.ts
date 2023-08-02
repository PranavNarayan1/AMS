import expess from 'express'

//controller

import {loginController} from '../../../controller/user controller/login'

//Middleware
import {loginValidation}  from '../../../middleware/validations';
// import { sessionCheck } from '../../../middleware/sessions';
const routes=expess();

routes.post('/signin',loginValidation,loginController)


export default routes