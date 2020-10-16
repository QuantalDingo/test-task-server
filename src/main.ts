import express, { NextFunction, Request, RequestHandler, Response } from "express";
import bodyParser from 'body-parser';
import cors from 'cors';

import { promises as fs } from "fs";
import { Data, Names, Commodity, CommodityItem } from "./@types";

const app = express();
const PORT = "8000";

app.use(bodyParser.json());
app.use(cors());

app.get("/", async (_req, res: Response<Commodity>, _next) => {
    const dataJson = await fs.readFile(`${__dirname}/../static/data.json`);
    const data: Data = JSON.parse(dataJson.toString());

    const namesJson = await fs.readFile(`${__dirname}/../static/names.json`);
    const names: Names = JSON.parse(namesJson.toString());

    const result: Commodity = {};
    const goods = data.Value.Goods;

    goods.forEach(item => {
        const { G: group_id, P: count, C: price, T: id, ...etc } = item;

        const group = names[group_id].B;
        const groupName = names[group_id].G;
        const name = group[id].N;
        const commodityItem = { id, name, price, count };

        result[groupName] === undefined
            ? result[groupName] = [commodityItem]
            : result[groupName].push(commodityItem);
    });

    res.send(result);
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at localhost:${PORT}`);
});