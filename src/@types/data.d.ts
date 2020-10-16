export type Data = { Error: string, Id: string, Success: boolean, Value: ValueType };

export type ValueType = { Goods: GoodsType[] };

export type GoodsType = {
    B: boolean,
    C: number,
    CV: null,
    G: number,
    P: number,
    Pl: null,
    T: number
};