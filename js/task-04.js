const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
const incrementBtn = document.querySelector(`button[data-action="increment"]`);
const valueNew = document.querySelector(`#value`);

let counterValue = 0;



decrementBtn.addEventListener("click", () => {
  
    counterValue -= 1;
        valueNew.textContent = counterValue;

  });
  
incrementBtn.addEventListener("click", () => {
  
    counterValue += 1;
    valueNew.textContent = counterValue;
        

  });