export interface TradeType {
    id: number,
    username: string,
    source: string,
    cards: {
        in: string,
        out: string,
    },
    shipping: {
        method: string,
        tracking: {
            in: string,
            out: string,
        }
    },
    address: {
        name: string,
        street: string,
        city: string,
        state: string,
        zip: string,
    },
    date: {
        created: string,
        shipped: string | null,
    }

}