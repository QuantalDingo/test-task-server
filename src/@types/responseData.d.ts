export type Commodity = { [id: string]: CommodityItem[] };

export type CommodityItem = { id: number, name: string, count: number, price: number };