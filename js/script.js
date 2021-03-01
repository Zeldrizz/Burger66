const menu = {
  plainBurger:{
     name: 'Гамбургер с говядиной',
     price: 9999,
     amount: 0,
     Summ: function () {
      return this.price * this.amount
    }
 },
 bekonBurger:{
    name: 'Гамбургер с говядиной и беконом',
     price: 13500,
     amount: 0,
     Summ: function () {
      return this.price * this.amount
    }
 },
 cheeseBurger:{
     name: 'Чизбургер',
     price: 15500,
     amount: 0,
     Summ: function () {
      return this.price * this.amount
    }
 },
 comboBurger:{
     name: 'Комбо-бургер',
     price: 20999,
     amount: 0,
     Summ: function () {
      return this.price * this.amount
    }
 },
 crabsBurger:{
    name: 'Крабс-бургер',
     price: 16600,
     amount: 0,
     Summ: function () {
      return this.price * this.amount
    }
 },
 chickenBurger:{
    name: 'Чикенбургер',
     price: 13500,
     amount: 0,
     Summ: function () {
      return this.price * this.amount
    }
 },
 plainHotdog:{
    name: 'Обычный хот-дог',
    price: 8999,
    amount: 0,
    Summ: function () {
      return this.price * this.amount
    }
 },
 royaleHotdog:{
    name: 'Королевский хот-дог',
    price: 16500,
    amount: 0,
    Summ: function () {
      return this.price * this.amount
    }
 },
 longHotdog:{
    name: 'Лонгер',
    price: 17000,
    amount: 0,
    Summ: function () {
      return this.price * this.amount
    }
 },
 cokeDrink:{
    name: 'Coca-cola',
    price: 8000,
    amount: 0,
    Summ: function () {
      return this.price * this.amount
    }
 },
 mountainDrink:{
    name: 'Mountain Dew',
    price: 13300,
    amount: 0,
    Summ: function () {
      return this.price * this.amount
    }
 },
 beerDrink:{
    name: 'Пиво',
    price: 15000,
    amount: 0,
    Summ: function () {
      return this.price * this.amount
    }
 },
 potatoSnack:{
    name: 'Картоха Фри',
    price: 9000,
    amount: 0,
    Summ: function () {
      return this.price * this.amount
    }
 },
 salatSnack:{
    name: 'Овощной салат',
    price: 10000,
    amount: 0,
    Summ: function () {
      return this.price * this.amount
    }
 },
 beerSnack:{
    name: 'Закусончик',
    price: 15000,
    amount: 0,
    Summ: function () {
      return this.price * this.amount
    },
 },
};

const orderBtn = document.querySelectorAll('.btn-order'),
      totalBtn = document.querySelector('.main__link'),
      check = document.querySelector('.parent-order'),
      checklist = document.querySelector('.main-order__text');

for (let i = 0; i < orderBtn.length; i++) {
    orderBtn[i].addEventListener('click', function(){
      order(this);
    })
}

function order(element) {
    const parent = element.closest('.main-menu__card'),
          parentId = parent.getAttribute('id'),
          out = parent.querySelector('.main__order-num'),
          price = parent.querySelector('.main-menu__price'),
          elementDate = element.getAttribute('data-symbol');
          

          if (elementDate == '+' && menu[parentId].amount < 10) {
            menu[parentId].amount++;
          } else if (elementDate == '-' && menu[parentId].amount > 0) {
            menu[parentId].amount--;
          }

          out.innerHTML = menu[parentId].amount;
          price.innerHTML = menu[parentId].Summ();
          checklist.innerHTML = menu[parentId].name + ' | цена ' + menu[parentId].price + ' сум | количество ' + menu[parentId].amount + ' | итого ' + menu[parentId].Summ() + ' сум |';
};

let arrayMenu = [],
    totalName = '',
    totalPrice = 0;

    totalBtn.addEventListener('click', function(){
      for (const key in menu) {
        const array = menu[key];
        if (array.amount > 0) {
          arrayMenu.push(array);
          for (const keyS in array) {
          }
        }
      }
      console.log('Вы заказали:');
      arrayMenu.forEach(element => console.log(element));
      check.style.display = 'block';
    });