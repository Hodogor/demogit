import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


const select = document.querySelectorAll('select');
M.FormSelect.init(select);

const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete,{});
export function getAutocompleteInstance(elem){
  return M.Autocomplete.getInstance(elem);
}


const datepicker = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepicker,{
  showClearBtn: true,
  format: 'yyyy-mm'
});

export function getDatePickerInstance(elem){
  return M.Datepicker.getInstance(elem);
}