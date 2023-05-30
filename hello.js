document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('form').addEventListener('submit',function(event ){
     name=document.querySelector('#name').value;
     alert('hello ,'+ name);
     event.preventDefault();// this is not to go to server prevent from normal behavior
         //from form inside that add event listner  
    });
});
