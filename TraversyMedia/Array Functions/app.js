const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for loop
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

console.log("----------------------------------------");

// for each
companies.forEach((company) => console.log(company.name));

// filter
// ! Companies lasted atleast 12 years
const c = companies.filter((company) => company.end - company.start > 11);
console.log(c);

console.log("----------------------------------------");

// ! Filter retail companies
const retail = companies.filter((company) => company.category === "Retail");
console.log(retail);

console.log("----------------------------------------");

// ! Filter companies that started in the 80s
const eighties = companies.filter(
  (company) => company.start > 1979 && company.start < 1990
);
console.log(eighties);

console.log("----------------------------------------");

// map
// ! Create array of company names
const cn = companies.map((company) => company.name);
console.log(cn);

console.log("----------------------------------------");

// ! Company name with their age
const cna = companies.map(
  (company) => `${company.name} ${company.end - company.start}`
);
console.log(cna);

console.log("----------------------------------------");

// ! return square of each element of ages array
const agesSquare = ages.map((age) => age * age);
console.log(agesSquare);

console.log("----------------------------------------");

// ! Multiply each element in ages array by 5 and then find the square root of the result

const misc = ages.map((age) => age * 5).map((age) => Math.sqrt(age));
console.log(misc);

console.log("----------------------------------------");

// sort
// takes in two params.
//! Sort companies based on start year
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

console.log("----------------------------------------");

//! Sort ages in desc
const agesDesc = ages.sort((a, b) => (a < b ? 1 : -1));
console.log(agesDesc);

// or
const agesDesc2 = ages.sort((a, b) => b - a); // descending
console.log(agesDesc);

console.log("----------------------------------------");

// reduce
// ! Add all of the ages in ages array and return sum.
const ageSum = ages.reduce((total, age) => total + age, 0);
// 0 here signifies initial value of total.
console.log(ageSum);

console.log("----------------------------------------");

// ! Get total years for all companies
const totalYearsC = companies.reduce(
  (total, years) => total + years.end - years.start,
  0
);
console.log(totalYearsC);

console.log("----------------------------------------");

// Combination questions

// ! ages that will be able to vote after 5 years in ascending order
const votePost5 = ages
  .map((age) => age + 5)
  .filter((age) => age > 17)
  .sort((a, b) => a - b);

console.log(votePost5);

console.log("----------------------------------------");

// find
// Allows us to find a single object in an array. It returns the first item which matches the condition else returns undefuned if condition not matched.

// ! find first technology company after sorting them by name desc.
const techCompany = companies
  .sort((a, b) => b.name.localeCompare(a.name))
  .find((company) => company.category === "Technology");
console.log(techCompany);
// ! Note company eight < company five lexicographically

console.log("----------------------------------------");

const unknown = companies.find((company) => company.category === "IT");
console.log(unknown); // undefined

// some
// it returns true or false on whether some of the items in the array match a certain condition.

//! Company  with category agriculture
const agriC = companies.some((company) => company.category === "Agriculture");
console.log(agriC); // false

//! Company with category finance
const financeC = companies.some((company) => company.category === "Finance");
console.log(financeC); // true

console.log("----------------------------------------");

// every
// it returns true or false on whether all the elements of an array match a given condition.

// ! All companies name has the word 'Company'
const companyNameCheck = companies.every((company) =>
  company.name.includes("Company")
);
console.log(companyNameCheck); // true

console.log("----------------------------------------");

// includes
// does a generic equalTo comparison on every element and will return true if at least one element in the array is equal to the value to find.

// some takes in a callback function where you can write your own logic to determine if an array contains some element which matches the conditions you wrote.

//! If 15 is present in ages array

const isFifteenPresentInAges = ages.includes(15);
console.log(isFifteenPresentInAges); // true

console.log("----------------------------------------");

const movies = [
  { name: "Spiderman", genre: "sci-fi" },
  { name: "Rocky Balboa", genre: "action" },
  { name: "Aquaman", genre: "sci-fi" },
  { name: "RRR", genre: "action" },
  { name: "Conjuring", genre: "horror" },
];

// ! group movies based on genre
const movieGroup = movies.reduce((category, movie) => {
  const genre = movie.genre;
  if (category[genre] == null) category[genre] = [];
  category[genre].push(movie);
  return category;
}, {});

console.log(movieGroup);

console.log("----------------------------------------");

// fill
// changes all the elments in the array with the provided value. It modifies the array and returns the modified array.

const agesZero = ages.fill(0);
console.log(agesZero);

console.log("----------------------------------------");

//! make the last digit zero in an array.
const nums = [1, 2, 3, 4, 5];
nums.fill(0, nums.length - 1);
console.log(nums); // [1, 2, 3, 4, 0]

console.log("----------------------------------------");

// ! make the first and last elements of an array to -1
nums.fill(-1, 0, 1).fill(-1, nums.length - 1);
console.log(nums); // [-1, 2, 3, 4, -1]

console.log("----------------------------------------");

// ! Given a number n. Return an array fill with 1 to n.
const numCreation = (n) =>
  Array(n)
    .fill(69)
    .map((_, index) => index + 1);
console.log(numCreation(5)); // for n = 5, [1, 2, 3, 4, 5]
// 2nd argument of the callback provided to the map function is index.

console.log("----------------------------------------");

//slice
// returns a shallow copy of a portion of an array. It doesn't modify the original array.

//! Return all elements except the first and last array element.
const n = [1, 2, 3, 4, 5, 9];

const exceptFirstAndLast = n.slice(1, n.length - 1);
console.log(exceptFirstAndLast); // [2, 3, 4, 5]

console.log("----------------------------------------");

//! last 3 items in an array.
const last3 = n.slice(-3);
console.log(last3);

console.log("----------------------------------------");

// splice
// changes an array by removing or replacing existing elements from an array. It changes the array and returns an array with the removed items.

//! remove last 3 elements in an array.
// [1, 2, 3, 4, 5, 9]
const removeLast3 = n.splice(-3);
console.log(removeLast3); // [4, 5, 9]
console.log(n); // [1, 2, 3]

console.log("----------------------------------------");

// ! remove last 2 items and fill them with zero in the original array
const n1 = [1, 2, 3, 4, 5];
const result = n1.splice(n1.length - 2, n1.length, 0, 0);
console.log(result); // [4, 5]
console.log(n1); // [1, 2, 3, 0, 0]

//! insert 2 numbers (0, 1) after 3rd index in an array
const n2 = [1, 2, 3, 4, 5];
const result2 = n2.splice(3, 0, 0, 1);
// 3--> starting index, 0 means no remove we add, 0,1 nos to be added
console.log(result2); // []
console.log(n2); // [1, 2, 3, 0, 1, 4, 5]

console.log("----------------------------------------");

//push
// adds an element to the end of an array.
// ! add 8 to the end of an array
const n3 = [1, 2];
n3.push(8);
console.log(n3); // [1, 2, 8]

console.log("----------------------------------------");

//pop
//removes the last element from an array.
const n4 = [1, 2, 3];
n4.pop();
console.log(n4); // [1, 2]

console.log("----------------------------------------");

//shift
// removes the first element from an array
const n5 = [1, 2, 3];
n5.shift();
console.log(n5); // [2, 3]

console.log("----------------------------------------");

//unshift
// adds an element to the beginning of an array
const n6 = [1, 2, 3];
n6.unshift(0);
console.log(n6); // [0, 1, 2, 3]

console.log("----------------------------------------");

//concat
// combines two or more arrays and returns a new array.
const a1 = [1, 2];
const a2 = [3, 4];
const a = a1.concat(a2);
console.log(a);

console.log("----------------------------------------");

//join
// returns array as string with specified delimiter. Default delimiter: comma
const j1 = [1, 2];
const j = j1.join();
console.log(j); // 1,2

console.log("----------------------------------------");

const j2 = [1, 2];
const jj = j2.join(" and ");
console.log(jj); // 1 and 2

console.log("----------------------------------------");

const n7 = [1, 2, 3];
const n8 = n7.reverse();
console.log(n7);
console.log(n8);

console.log("----------------------------------------");

const x = [1, 2, 3];
const y = [1, 2, 3, 4, 5];

const r1 = x.splice(2, 0, 4);
const r2 = y.splice(1, 2);
console.log(r1);
console.log(r2);
console.log(x);
console.log(y);
