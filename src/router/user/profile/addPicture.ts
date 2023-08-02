import expess from 'express'

//controller

import {addPicController} from '../../../controller/user controller/addProfile'
import { upload } from '../../../middleware/imageUpload'
//Middleware
import {sessionCheck}  from '../../../middleware/sessions';
const routes=expess();

routes.patch('/add-profile-picture',sessionCheck,upload,addPicController)


export default routes