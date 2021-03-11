//Generator 1
function* generator() {
  yield "Hey";
}

const iterator = generator();

console.log(iterator.next()); // {value: 'Hey', done: false}
console.log(iterator.next()); // {value: undefined, done: true}

//Generator 2
function* generator2() {
  yield "a";
  yield "b";
  yield "c";
  yield "d";
}

const iterator2 = generator2();

console.log(iterator2.next()); // {value: 'a', done: false}
console.log(iterator2.next()); // {value: 'b', done: false}
console.log(iterator2.next()); // {value: 'c', done: false}
console.log(iterator2.next()); // {value: 'd', done: false}
console.log(iterator2.next()); // {value: undefined, done: true}

//Generator 3
function* generator3() {
  yield "Hey";
  return "Hello";
  yield "Hey";
}

const iterator3 = generator3();

console.log(iterator3.next()); // {value: 'Hey', done: false}
console.log(iterator3.next()); // {value: 'Hey', done: false}
console.log(iterator3.next()); // {value: undefined, done: true}

//Fibonacci generator
function* fibonacci() {
  let a = 0,
    b = 1,
    current;

  while (true) {
    current = a;

    yield current;

    a = b;
    b = current + b;
  }
}

const fibonacciIterator = fibonacci();

console.log(fibonacciIterator.next()); // {value: 0, done: false}
console.log(fibonacciIterator.next()); // {value: 1, done: false}
console.log(fibonacciIterator.next()); // {value: 1, done: false}
console.log(fibonacciIterator.next()); // {value: 2, done: false}
console.log(fibonacciIterator.next()); // {value: 3, done: false}
console.log(fibonacciIterator.next()); // {value: 5, done: false}
console.log(fibonacciIterator.next()); // {value: 8, done: false}
console.log(fibonacciIterator.next()); // {value: 13, done: false}

//Building a custom generator/iterator with custom yield order
let starwars = {
  title: "The Last Jedi",
  director: "Rian Johnson",
  year: 2017,
  boxOffice: "1.3B",
};

let count = -1;

let starwarsGenerator = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        count++;

        switch (count) {
          case 0:
            return {
              value: starwars.director,
              done: false,
            };

          case 1:
            return {
              value: starwars.boxOffice,
              done: false,
            };

          case 2:
            return {
              value: starwars.title,
              done: false,
            };

          case 3:
            return {
              value: starwars.year,
              done: false,
            };

          default:
            return {
              value: undefined,
              done: true,
            };
        }
      },
    };
  },
};

const starwarsIterator = starwarsGenerator[Symbol.iterator]();

console.log(starwarsIterator.next()); // {value: 'The Last Jedi', done: false}
console.log(starwarsIterator.next()); // {value: 'Rian Johnson', done: false}
console.log(starwarsIterator.next()); // {value: 2017, done: false}
console.log(starwarsIterator.next()); // {value: '1.3B', done: true}
console.log(starwarsIterator.next()); // {value: undefined, done: true}


