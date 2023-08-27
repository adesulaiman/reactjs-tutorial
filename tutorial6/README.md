## React Tutorial 5
- useState
- useEffect
- useContext
- useRef
- useCallback
- Fatching / Rest API

## useState

The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.
State have basic usage :
- Import useState
- Initialize useState
- Read State
- Update State
see example code in folder *state*

## useEffect

The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is optional.
see example code : effect/SampleEffect.js

## useContext

React Context is a way to manage state globally.
It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

## useRef

The useRef Hook allows you to persist values between renders.
it can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.
see example code : context/Samplecontext.js

## useCallback

The React useCallback Hook returns a memoized callback function.
This allows us to isolate resource intensive functions so that they will not automatically run on every render.
The useCallback Hook only runs when one of its dependencies update.
This can improve performance.
see example code : callback/Samplecontext.js

## Fatching / Rest API

for get data from Rest API u can use fatch function in javascript, see example code : RestAPI/Fatch.js

# Exercise

make a library feature with a borrow book menu and a book borrower view with backend services and integrated with Rest API !!