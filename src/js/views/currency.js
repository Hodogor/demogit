class CurrencyUI{
  constructor(){
    this.currency = document.getElementById('currency');
  }
  get currencyValue(){
    return currency.value;
  }
}

const currencyUI = new CurrencyUI();
export default currencyUI;