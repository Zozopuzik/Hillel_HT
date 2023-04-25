const userData = {
	USD: 1000,
	EUR: 900,
	UAH: 15000,
	BIF: 20000,
	AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}


function getMoney(userData, bankData) {
    const myPromise = new Promise((resolve, reject) => {
        let confirmation  = confirm('see balance')
        if(confirmation){
            resolve(userData);
        } 
        else{
            reject(bankData)
        } 
      });
      
      myPromise
      .then(result => {
            console.log(result)
            let currency = prompt(`select your currency ${Object.keys(result).join(', ')}`)
            while(!result[`${currency}`]){
                currency = prompt(`select your currency ${Object.keys(result).join(', ')}`)
            }
            console.log(`balance of ${currency}: ${result[currency]}`)
      })
      .catch((result2) =>{
        let bankCurrencies = Object.keys(result2)
        console.log(bankCurrencies)
        bankCurrencies.forEach(element => {
            if(result2[`${element}`].max === 0 || userData[`${element}`] === false){
                bankCurrencies.splice(bankCurrencies.indexOf(element), 1)
            }
        })
        console.log(bankCurrencies) 
        let counter = false
        let currency1 = prompt(`select your currency ${bankCurrencies.join(', ')}`)
        while(counter === true){
            for(i = 0; i < bankCurrencies.length; i++){
                if(currency1 === bankCurrencies[i]){
                    counter = true
                }
                else{
                    currency1 = prompt(`select your currency ${bankCurrencies.join(', ')}`)
                }
            }
        }
        let amount = +prompt('enter the amout of currency')
        if(amount < result2[`${currency1}`].max && amount > result2[`${currency1}`].min){
            console.log(`Here is your cash ${amount} ${currency1}`)
        }
        else if(amount > result2[`${currency1}`].max ){
            console.log(`your amount is bigger than posasible`)
        }
        else if(amount < result2[`${currency1}`].min ){
            console.log(`your amount is smaller than posasible`)
        }
        else if(amount > userData[`${currency1}`].max ){
            console.log(`Not enought money on yuor bank account`)
        }

      })
      .finally(() =>{
        console.log('Thank you! Have a good day')
      })
      
    }


  getMoney(userData, bankData)