import express from 'express';
import { sessionCheck } from '../../middleware/sessions';
import { biddingOnProducts } from '../../controller/bidController';


const routes = express();
routes.post('/making-bid',sessionCheck,biddingOnProducts);
export default routes;