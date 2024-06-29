var modal = document.querySelector('.modal');
var modalName = modal.querySelector('.modal__name');
var modalDesc = modal.querySelector('.modal__desc');
var modalImg = modal.querySelector('.modal__img');
var modalQty = modal.querySelector('.modal__qty');
const localQty = localStorage.getItem('qty')*1;
var qty = localQty ? localQty: 0;

document.querySelector('.modal__overlay, .modal__close').addEventListener('click', function(){
    modal.classList.remove('show');
});
document.querySelector('.modal__close').addEventListener('click', function(){
    modal.classList.remove('show');
});
document.querySelectorAll('.item__btn').forEach(function(i){
    i.addEventListener('click', function (e){
        var item = i.closest('.item');
        var name = item.querySelector('.item__name').textContent.trim();
        var desc = item.querySelector('.item__desc').textContent.trim();
        var img = item.querySelector('.item__img').innerHTML;

        modalName.innerHTML = name;
        modalDesc.innerHTML = desc;
        modalImg.innerHTML = img;
        if(qty>0){
            modalQty.innerHTML = `Товаров в корзине: <span>${qty}</span>`;
        }
        modal.classList.add('show');

    })
});
document.querySelector('.modal__btn').addEventListener('click', function(){
qty+=1;
    localStorage.setItem('qty', qty);
modalQty.innerHTML = `Товаров в корзине: <span>${qty}</span>`;
})