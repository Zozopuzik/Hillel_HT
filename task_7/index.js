const animals = [
    ['🐭','mouse','Jerry'],
    ['🐹','hamster','Biscuit'],
    ['🐰','rabbit','Bugs'],
    ['🦊','fox','Mrs. Fox'],
    ['🐻','bear','Paddington']
   ];
   
   const food = [
    ['🍎','apple',10],
    ['🍐','pear',12],
    ['🍊','tangerine',15],
    ['🍋','lemon',5],
    ['🍌','banana',7]
   ];
   const universes = [
    ['🖤', 'DC', [' Superman', ' Batman', ' Wonder Woman']],
    ['❤️', 'Marvel', [' Iron Man', ' the Hulk', ' Black Widow']]
   ]
   
   
   const getInfo = (arr, title) =>{
       document.write(`
       <div class = "container">
       <h1>${title} info </h1>
       <table id = "${title.toLowerCase()}"></table>
       </div>
       `)
       let infoTable = document.getElementById(title.toLowerCase())
       for(i = 0; i < arr.length; i++){
           let row = infoTable.insertRow(i)
          for(j = 0; j < arr[i].length; j++){ 
               let cell = row.insertCell(j);
               cell.innerHTML = `${arr[i][j]}`
          }
       }
   }

   
   getInfo(animals, 'Animals')
   getInfo(food, 'Food')
   getInfo(universes, 'Universes')