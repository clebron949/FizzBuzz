//Global Variable Definition
const form = document.getElementById('form');

//Event Listener
form.addEventListener('submit', formSubmit);

//Functions
  function formSubmit(event) {  
    
    const fizz = Number(document.getElementById("Fizz").value);
    const buzz = Number(document.getElementById("Buzz").value);
    
    console.log('Fizz = ' + fizz + ' Buzz = ' + buzz );

    fbData = FizzBuzzCheck(fizz, buzz);
 
    DisplayData(fbData);
    
    event.preventDefault();
  };

  function FizzBuzzCheck(fizz, buzz) {
      data = [];
      
      for (let index = 1; index <= 100; index++){
            data[index-1] = index;
            if(index % fizz === 0){
                data[index-1] = 'Fizz';
            }            
            if(index % buzz === 0){
                data[index-1] = 'Buzz';
            }
            if(index % fizz === 0 && index % buzz === 0){
                data[index-1] = 'FizzBuzz';
            }
        }

        data.forEach(element => {
            console.log(element);
        });
        
        return data;
    }

  function isFizz(number, fizz){
      if(number % fizz === 0)
      {
          return true;
      }
      else{
          return false;
      }
  };

  function isBuzz(number, buzz){
    if(number % buzz === 0)
    {
        return true;
    }
    else{
        return false;
    }
};

  function DisplayData(data){
    let table = document.getElementById('resultsTable');
    removeAllChildNodes(table);
    for (let index = 0; index < data.length; index += 5) {
        let row = table.insertRow(-1);
        for (let j = 0; j < 5; j++) {
            row.insertCell(j).textContent = data[index + j];            
        }
    }
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function InputErrorHandling(firstNumber, lastNumber){
    if (firstNumber === lastNumber){
        swal("Error!", "Both input numbers are the same.", "error");
        return true;
    }

    else if (firstNumber > lastNumber) {
        swal("Range out of bounds!", "First input is greater than second input.", "error");
        return true;
    }

    else{
        return false;
    }
}