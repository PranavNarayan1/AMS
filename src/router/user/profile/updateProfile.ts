import express from 'express';

// importing controller

import {updateProfileController} from '../../../controller/user controller/updateProfile'

//importing middleware

import { UserValidate } from '../../../middleware/updateProfile.middleware';

import { sessionCheck } from '../../../middleware/sessions';


const routes = express();

routes.put('/update-profile',sessionCheck, UserValidate, updateProfileController);

export default routes;