const body = document.body;
body.append("Hello World!", " ", "Welcome to JavaScript");


const div1 = document.createElement("div");
const div2 = document.createElement("div");

div1.innerText = "Div here";
body.append(div1);

div2.textContent = "div here twice";
body.append(div2);

/* inner text vs textContent
text content prints out text along with all the spacing and indentation.
inner text prints only text. (When you do console.log) */ 

div1.innerHTML = "<strong>Div</strong>"; // huge security problem as it'll change the content on webpage so can;t allow users to do it.

//proper way to do it:
const strong = document.createElement('strong');
strong.innerText = "Strong div";
div2.append(strong);

// removing elements from webpage
const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');

spanBye.remove(); //remove
div.append(spanBye); // adding again

// modify actual attributes of an element
console.log(spanHi.getAttribute('title'));
console.log(spanHi.getAttribute('id'));

spanHi.setAttribute('id', 'newId');
spanHi.title = 'qwerty';

console.log(spanHi.id);
console.log(spanHi.title);

// remove attribute
spanHi.removeAttribute('title');

// working with data attributes
console.log(spanHi.dataset);
spanHi.setAttribute('data-true', 'false');
console.log(spanHi.dataset);

delete spanHi.dataset.true;
console.log(spanHi.dataset);

// creating new attribute
spanHi.dataset.newAttribute = "Created via JS";
console.log(spanHi.hasAttribute('data-new-attribute'));
console.log(spanHi.dataset);

spanBye.classList.add('c3'); //adds class c3 to spanBye
spanBye.classList.remove('c3');
spanBye.classList.toggle('c4'); // remove if exists already or add
spanBye.classList.toggle('c4', true); // add if doesn't exist
spanBye.classList.toggle('c4', false); // remove if present

// modifying the style property
spanHi.style.color = 'red';
spanBye.style.backgroundColor = 'steelblue'; // use camelCasing as in dataset