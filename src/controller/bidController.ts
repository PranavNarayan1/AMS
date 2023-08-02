import { Request, Response } from 'express';
import { productSchema } from '../model/product';



export const biddingOnProducts = async (req: Request, res: Response) => {
    try {
        const findProduct: any = await productSchema.findByPk(req.body.productId, { raw: true });
        if (!findProduct) {
            return res.status(404).json({ message: "Product Not Found!" });
        }
        const payload = {
            productId: req.body.productId,
            bidderId: req.body.bidderId,
            bidding_price: req.body.biddingPrice
        }
        if (findProduct.bidding_price && req.body.biddingPrice > (findProduct.bidding_price + 100)) {
            return res.status(500).json({ message: `You can't bid more than ${findProduct.bidding_price + 100}` });
        }
        if (findProduct.base_price && req.body.biddingPrice > (findProduct.base_price + 100)) {
            return res.status(500).json({ message: `You can't bid more than ${findProduct.bidding_price + 100}` });
        }
        const bidProduct = await productSchema.update(payload, { where: { id: req.body.productId } });
        if (!bidProduct) {
            return res.status(500).json({ message: "Something went wrong!" });
        }
        return res.status(200).json({ message: "Bid Successfull!" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error!" });
    }

}