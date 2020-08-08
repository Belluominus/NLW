//Seach button
document.querySelector('#add-time')
//On click in button
.addEventListener('click', cloneField)

//Execult action
function cloneField(){
  //Duplicate field
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
  
  //Clean field
  const fields = newFieldContainer.querySelectorAll('input')
  fields.forEach(element = function(field) {
    field.value = '';
  });
  
  //Incert the field on page
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}