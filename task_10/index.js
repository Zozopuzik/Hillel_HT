const ITCompany = {
    id: 12332129,
    companyName: 'Playtika',
    type: 'product',
    vacancies: [
        {
            frontEnd: {
                salary: 1200
            },
        },
        {
            backEnd: {
                salary: 1500
            },
        },
        {
            scramMaster: {
                salary: 500
            },
        },
        {
            tester: {
                salary: 600
            },
        }
    ]
}


function hireEmployee() {
    const name = prompt('Enter your name');
    const position = prompt('Enter your position \n here is our open vacancies: frontEnd, backEnd,  scramMaster, tester');
    const salary = +prompt('Enter your desired salary');
    ITCompany.greeting = () =>{
        document.write(`hello my name is ${name}, im ${position} in ${ITCompany.companyName}`)
    }
   for(i = 0; i < ITCompany.vacancies.length; i++){
    let key = (Object.keys(ITCompany.vacancies[i])[0])
    if(position === key){
        console.log(key)
        if(ITCompany.vacancies[i][key].salary >= salary){
            let newObj = Object.create(ITCompany)
            newObj.name = name
            newObj.salary = salary
            newObj.position = position
            newObj.greeting()
        }
        else{
            document.write(`${name}, you has significant skills at ${position} but we hired another developer, let's keep contact !`)  
        }
    }


    
   }
  }
  hireEmployee()