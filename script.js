

const app = {};
endpoint = 'latest';
access_key = '985c2adb792bfb8fe72dcba3c2a35676';

//get rates from the api 
app.getApiRes = (fromCurrency,toCurrency) =>{
  const exchangeRate = $.ajax({
    url: 'https://data.fixer.io/api/' + endpoint + '?access_key=' + access_key,  
    dataType: 'jsonp',
    success: function(json) {
      let rateofuserFromInput = JSON.stringify(json.rates[fromCurrency]);
      let rateofuserToInput = JSON.stringify(json.rates[toCurrency]);
      app.dispayChangedCurrecy (rateofuserFromInput,rateofuserToInput);
      }
  });  
} 

//event handler to get user input
app.getSelectValue = () =>{
  $('form').on('submit', (event)=> {
    let fromCurrency = $('#fromCurrency').val();
    let toCurrency = $('#toCurrency').val();
    event.preventDefault()
    app.getApiRes(fromCurrency,toCurrency);
   
  });
}
   
// display function 

 app.dispayChangedCurrecy = (rateofuserFromInput,rateofuserToInput) =>{
   let exchangeRate = rateofuserToInput / rateofuserFromInput;
   let amountEntered = $('#Amount').val();
   let FinalResult = amountEntered * exchangeRate;
   $('.display').append(FinalResult);
  };

  //Kicks every thing
  app.init = () =>{
    app.getSelectValue();
     };
  
  // document ready
  $(function(){
    app.init();
    });
      
    
  


    
    



