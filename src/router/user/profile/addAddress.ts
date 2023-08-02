import expess from 'express'

//controller

import {addressValidation} from '../../../middleware/validations'
//Middleware
import {sessionCheck}  from '../../../middleware/sessions';
import { addAddressController } from '../../../controller/user controller/address.controller';
const routes=expess();

routes.put('/add_address',sessionCheck,addressValidation,addAddressController)


export default routes