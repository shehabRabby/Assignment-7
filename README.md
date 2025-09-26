live Link: https://fluffy-gingersnap-d2d389.netlify.app/
Repo Link: https://github.com/shehabRabby/Assignment-7

       Queation Answer Session
       -------------------------

1.What is JSX, and why is it used?
Answer: JSX is the short version of JavaScript XML.Basically this syntax is used in REACT.JSX is a code that looks like HTML but it can be written inside JavaScript.

It is easier and clear because, In react it make writting HTML code for creating multiple components.JSX helps react efficiently render in the virtual DOM and also works directly inside JS.so variables, functions can be used easily.

2.What is the difference between State and Props?
Answer: State is a data that inside in to component that it manage itself.It is dynamic it can change over time. like update count value.

Props means passing data from parent component to a child component.The child can not modify them.

3.What is the useState hook, and how does it work?
Answer: useState is a hook in React that allows user to create and manage state inside components.It returns state Variable where data stored and also return state Updater Function that used to update the state.

suppose you give and initial value inside useState. when state updates, React rerenders the component and show the updated state on the UI.

4.How can you share state between components in React?
Answer: There are mainly 3 ways to share state between components in react
i.Life State Up: Move the state to their common parent and pass state as props
ii.Using API
iii.State manage libraries like Redux are used,

5.How is event handling done in React?
Answer: Must use CamelCase like onCLick. Pass a function not string like onClick={handleClick}.
