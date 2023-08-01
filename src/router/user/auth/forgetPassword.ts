import expess from 'express'

//controller
import {fpController} from '../../../controller/user controller/forgetPassword'

//Middleware
import { sessionCheck } from '../../../middleware/sessions';
import {otpMailGenerator} from '../../../middleware/otpVerification'

const routes=expess();

routes.patch('/forget_password',sessionCheck,otpMailGenerator,fpController)


export default routes