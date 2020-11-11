export class Emolumentos {
    id: number;
    negotiationSwingtrade: number;
    negotiationDaytrade: number;
    recordsSwingtrade: number;
    recordsDaytrade: number;
    saleoffSwingtrade: number;
    saleoffDaytrade: number;
    totalCustos: number;
    walletFk: number;
}

export interface RequestCreateEmolumentos {
    negotiationSwingtrade: number;
    negotiationDaytrade: number;
    recordsSwingtrade: number;
    recordsDaytrade: number;
    saleoffSwingtrade: number;
    saleoffDaytrade: number;
    totalCustos: number;
    walletFk: number;
}

