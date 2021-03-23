'use strict';

const box = document.getElementById('box'),
      buttons = document.getElementsByTagName('button'),
      circle = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),        
      oneHeart = wrapper.querySelector('.heart');
      

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

buttons[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color: blue; width: 500px';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');

// const text = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circle[0].remove();
// wrapper.removeChild(hearts[1]);

hearts[0].replaceWith(circle[0]);

div.innerHTML = "<h1>Hello, World</h1>";

// div.textContent = "Hello";

div.insertAdjacentHTML('afterbegin', "<h2>Hello</h2>");