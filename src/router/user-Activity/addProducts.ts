import expess from 'express'



import {addProductController,categories,subCategories} from '../../controller/addProducts'
import {sessionCheck}  from '../../middleware/sessions';
import { productValidator } from '../../middleware/validations';
import { addressController } from '../../controller/address.controller';

const routes=expess();

routes.post('/add',sessionCheck,categories)



export default routes