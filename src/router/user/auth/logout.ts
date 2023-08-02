import expess from 'express'

//controller

import {logoutController} from '../../../controller/user controller/logout'

//Middleware
import {loginValidation}  from '../../../middleware/validations';
const routes=expess();

routes.patch('/logout',logoutController)


export default routes