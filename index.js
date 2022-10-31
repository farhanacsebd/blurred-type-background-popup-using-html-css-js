containerE1 = document.querySelector('.container');
popupContainerE1 = document.querySelector('.popupContainer');
btnE1 = document.querySelector(".btn");
closeIconE1 = document.querySelector(".close-icon");

btnE1.addEventListener('click',function(){
    containerE1.classList.add('active');
    popupContainerE1.classList.remove('active');
})
closeIconE1.addEventListener('click',function(){
    containerE1.classList.remove('active');
    popupContainerE1.classList.add('active');
})