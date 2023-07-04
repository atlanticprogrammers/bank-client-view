import { Data } from "@angular/router"

export interface CurrencyExchange {
    currencyName: string;
    bankShordKey: string;
    buyingRate: number;
    sellingRate: number;
    bankName: string;
    lastUpdatedDate: Data;
}

export interface currencyExchangeRatesDTOList {
    currencyList: CurrencyExchange[];
    count: number;
}

export class currencyExchangeRatesDTOListIMPL implements currencyExchangeRatesDTOList {
    constructor(public currencyList: CurrencyExchange[], public count: number) {}
}

// export type currencyList = {
//     value: string,
//     display: string
// };

export interface currencyList {
    name: string;
  }

