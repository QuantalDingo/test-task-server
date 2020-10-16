export type Names = { [id: string]: NameItem };

export type NameItem = {
    "G": string,
    "C"?: number,
    "B": BItem
};

export type BItem = { [id: string]: BValue };

export type BValue = {
    "N": string,
    "T": number
};