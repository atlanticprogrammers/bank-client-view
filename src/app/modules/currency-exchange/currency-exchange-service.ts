import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { currencyExchangeRatesDTOList, currencyExchangeRatesDTOListIMPL } from "./currency-model";

@Injectable({providedIn: 'root'})
export class CurrencyExchangeService {
    constructor(private http: HttpClient) {}

    public fetchCurrencyExchangeList(currencyName: string, page: number, size: number): Observable<currencyExchangeRatesDTOList> {
        return this.http.get(
            'http://localhost:8083/api/v1/currency-exchange/get-currency-details?currencyName=' + currencyName + '&page=' + page + "&size=" + size)
            .pipe(map((reponseData: any) => {
                let currency: currencyExchangeRatesDTOList = new currencyExchangeRatesDTOListIMPL([], 0);
                currency.count = reponseData.data.dataCount;
                currency.currencyList = [...reponseData.data.currencyExchangeRatesDTOList];
                return currency;
            }))
    }

}