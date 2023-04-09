import readline from 'readline-sync';

const shopping = function(amount) { // amount = 100

    // Arrow function
    const calculateTax = () => {
      return amount + 30; // 100+30 = 130; (TAX_AMOUNT is global variable)
    }
    // function declaration
    function getDiscountAmount() {
      return 40;
    }  
                // 130        -     40               = 90
    const total = calculateTax() - getDiscountAmount();
    return total;
  }
  

  // Invoking the function

  const ammount =  readline.question("please specify your amount:  ");

  const billAmount = shopping(ammount) ; // ? Remove ammount & place 100 ans will be 90 > remove 21 & 1st line.

  console.log(`Bill Amount = ${billAmount}`);
  
  
  //---------------------------same fn below but some edited------bcoz of go read ponts-------
  /*
  / Points to be note
  // 1. We can't access any values from the function
  // 2. We can access outer variable in the function
  */