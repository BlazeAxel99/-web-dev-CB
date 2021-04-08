window.onload = function () {
    let newtask = document.getElementById('newtask')
    let addtask = document.getElementById('addtask')
    let todolist = document.getElementById('todolist')

    addtask.onclick = function(){
        let li = document.createElement('li')

         //Add the X button
        let xBtn = document.createElement('button')
        xBtn.innerText = 'X'
        xBtn.onclick = function(event){
            console.log(event.target.parentElement.remove());
        }
        let upBtn = document.createElement('button')
        upBtn.innerText = '^'
        upBtn.onclick = function(event){
            //event.target = the up button
            //event.target.parentElement = the <li> item
            //event.target.parentElemnet.parentElemnt is the todolist
            
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement,
                event.target.parentElement.previousElementSibling
            )
        }
        let dnBtn = document.createElement('button')
        dnBtn.innerText = '~^'
        dnBtn.onclick = function(event){
                //event.target = the up button
                //event.target.parentElement = the <li> item
                //event.target.parentElemnet.parentElemnt is the todolist
                
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling,//insert next element
                event.target.parentElement//before current element 
            )
        }
               
            

        
        //Add the task text
        let taskSpan = document.createElement('span')
        taskSpan.innerHTML = newtask.value 

       
        
        li.appendChild(xBtn)
        li.appendChild(upBtn)
        li.appendChild(dnBtn)
        li.appendChild(taskSpan)
        todolist.appendChild(li)
      }
}