### Generators and Iterators

A generator function is a special type of iterator
that can pause its own execution while it maintains its context.
It uses the keywork yield to return a value and pause.

An iterator is the object returned by generator that has three methods:
- next():
  Yields the next value from the iteration

- return()
  Returns the value from the return statement. If none, return {value: undefined, done: false}

- throw()
  Throws an exeception

### Built-in generators

Arrays, Strings, Maps, Sets, NodeLists already come with native iterators

### Generator => Iterator => Object

```
function* generator() {
  yield "Hey";
}

const iterator = generator();

console.log(iterator.next());
```
