"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.biddingOnProducts = void 0;
const product_1 = require("../model/product");
const biddingOnProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findProduct = yield product_1.productSchema.findByPk(req.body.productId, { raw: true });
        if (!findProduct) {
            return res.status(404).json({ message: "Product Not Found!" });
        }
        const payload = {
            productId: req.body.productId,
            bidderId: req.body.bidderId,
            bidding_price: req.body.biddingPrice
        };
        if (findProduct.bidding_price && req.body.biddingPrice > (findProduct.bidding_price + 100)) {
            return res.status(500).json({ message: `You can't bid more than ${findProduct.bidding_price + 100}` });
        }
        if (findProduct.base_price && req.body.biddingPrice > (findProduct.base_price + 100)) {
            return res.status(500).json({ message: `You can't bid more than ${findProduct.bidding_price + 100}` });
        }
        const bidProduct = yield product_1.productSchema.update(payload, { where: { id: req.body.productId } });
        if (!bidProduct) {
            return res.status(500).json({ message: "Something went wrong!" });
        }
        return res.status(200).json({ message: "Bid Successfull!" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error!" });
    }
});
exports.biddingOnProducts = biddingOnProducts;
