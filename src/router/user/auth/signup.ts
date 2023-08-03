import expess from 'express'

//controller

import {signUpController} from '../../../controller/user controller/signup'

//Middleware
import {newUserValidate} from '../../../middleware/validations'
const routes=expess();

routes.post('/signup',newUserValidate,signUpController)


export default routes