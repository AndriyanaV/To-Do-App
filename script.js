// Global variables - global scope 
var toDos = [];
var id = 0; 


function addToDo()
{
    const title = document.getElementsByName('title')[0];
    const description = document.getElementsByName('description')[0];

    toDos.push(
      {
        title: title.value,
        description: description.value,
        id: id,
        done: false
      }
    )
    
    id++;
    title.value = '';
    description.value = '';
    renderToDos();
}


function deleteTodo(id) {
  const newToDos = [];

  for(var i =0; i < toDos.length; i++)
  {
    if(toDos[i].id !== id)
    {
      newToDos.push(toDos[i]);
    }
  }
  toDos = newToDos;
  renderToDos();
}

function doneToDo(id) {
  
  for(var i=0; i< toDos.length;i++) {
    if (id === toDos[i].id) {
      if(toDos[i].done === false)
      {
        toDos[i].done = true;
      }
      else if (toDos[i].done === true)
      {
        toDos[i].done = false;
      }
      
    }

  }
  
  renderToDos();
}

function renderToDos()
{

  const todosCarts = document.getElementsByName('todosCards')[0];
  todosCarts.innerHTML = '';

  for(var i = 0; i< toDos.length; i++)
  {
    const card = document.createElement('div');
    card.className = 'card';
    if(toDos[i].done === true ) {
      card.className += ' ' + 'card-done';
    }

    const cardTitle = document.createElement('div');
    cardTitle.className = 'card-title';
    cardTitle.innerHTML = toDos[i].title;

    // button for trash
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.className = 'delete-button';
    const cardId = toDos[i].id;
    deleteButton.onclick = () => { 
       deleteTodo(cardId);
     };
    cardTitle.append(deleteButton);

    // button for done 
    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="fas fa-check-circle"></i>';
    doneButton.className = 'done-button';
    doneButton.onclick = () => {
      doneToDo(cardId);
    }
    cardTitle.append(doneButton);


    const cardDescription = document.createElement('div');
    cardDescription.className = 'card-description';
    cardDescription.innerHTML = toDos[i].description;
  
    card.append(cardTitle,cardDescription);

    todosCarts.append(card);
  }
 
 
}