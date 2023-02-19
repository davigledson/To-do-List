const localStorageName= 'to-do-list-dg'
function validateIfExistNewTask() // função criada por ultima
{
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")

    let inputValue = document.getElementById('input-new-task').value

    let exists = values.find(x => x.name == inputValue)

    return !exists ? false : true
   
}
function newTask(){
    
    let input = document.getElementById('input-new-task')
    input.style.border =''

    //validation

    
    if(!input.value){
        input.style.border ='2px  solid red'
        alert('Digite algo para inserir em sua lista')

    } else if(validateIfExistNewTask()){

        alert('Já existe uma task com essa descrição')
    }

    else{
        //increment to localStorage
        let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")

        values.push({
            name: input.value
        })

        localStorage.setItem(localStorageName,JSON.stringify(values))
        
    }

    input.value=''
    showValues()
}

function showValues(){
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]") 

    let list =document.getElementById('to-do-list')

    list.innerHTML =''

    for(let i = 0; i < values.length; i++){

        list.innerHTML += `<li>${values[i]['name']}<button id ='btn-ok' onclick='removeItem("${values[i]['name']}")'>ok</button></li>`
    }
}
function removeItem(data){
   
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]") 

    let index = values.findIndex(x => x.name == data)

    values.splice(index,1)

    localStorage.setItem(localStorageName,JSON.stringify(values))

    showValues()
}

showValues()