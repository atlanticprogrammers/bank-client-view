import { Component } from '@angular/core';
import { CurrencyExchangeService } from './currency-exchange-service';
import { FormControl } from '@angular/forms';
import { currencyList } from './currency-model';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.scss']
})
export class CurrencyExchangeComponent {
  myControl = new FormControl<string | currencyList>('');
  options: currencyList[] = [
    {name: 'American Doller ($)'}, 
    {name: 'Euro (€)'}, 
    {name: 'Swiss Franc (CHf)'},
    {name: 'Australian Dollar (A$)'},
    {name: 'Japanese yen (¥)'},
  ];
  filteredOptions: Observable<currencyList[]>;
  value = '';
  constructor(private currencyExchangeService: CurrencyExchangeService) {}

  ngOnInit() {
    this.currencyExchangeService.fetchCurrencyExchangeList('U S Doller',0,10).subscribe((currencyList: any) => {
        console.log(currencyList);
    })

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
   }

   public displayFn(currency: currencyList): string {
    return currency && currency.name ? currency.name : '';
  }

  private _filter(name: string): currencyList[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  public clear() {
    console.log('+++++++++++++');
    //this.myControl.setValue(null);

   

    let optionsAfterReset = [...this.options];
    this.options= [];
    this.options.push(
      {name: 'American Doller ($)'}, 
      {name: 'Euro (€)'}, 
      {name: 'Swiss Franc (CHf)'},
      {name: 'Australian Dollar (A$)'},
      {name: 'Japanese yen (¥)'},
    );
   // this.options = [...optionsAfterReset];
    // this.options = [...options2];
    // console.log(this.options);

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

}
