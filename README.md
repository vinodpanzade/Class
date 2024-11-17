Class and functional Based Componant Notes
![Screenshot (83)](https://github.com/user-attachments/assets/2e828026-a593-4ffa-a712-ad2aa507711d)
React is one of the most in-demand JavaScript libraries which helps in building single-page applications. React helps in complex state management, easy component composition, and performance optimization

Applications based on React can be built with two types of components: 

Functional components 
Class components

1:Functional components are a simple, fast, and easy way to design and develop a component in React.
2: They are used to create components that return JSX and don’t have their state

3:Functional components take props as input and return a React element that describes what should be rendered on the screen. 
4:They are simpler to write and understand in comparison with class components.
5:They are faster than class components as they do not have state and lifecycle methods. 
6:The functional component is also known as the stateless component as they do not handle states.
7:but using hook we can manage the state in functional component
8:functional components use React hooks i.e. useState() to provide state management and useEffect() to access the component’s various stages in its lifecycle.

Class Based component:
1:Class components are complex in comparison to functional components.
2:Class components also known as stateful components contain state and lifecycle methods and are written with JavaScript ES6 classes. 
3:A state is an object that contains data that can be updated and displayed in the component. 
Lifecycle methods are called at different stages of the component’s life cycle, such as when it is updated.
it doesnt contain hooks it use lifecycle methods for side effect in component

4:Define how a class component behaves during its "lifetime" (Mounting, Updating, Unmounting).
Key Methods:
componentDidMount(): Runs after the component is added to the DOM.
componentDidUpdate(): Runs after state/props change.
componentWillUnmount(): Runs before the component is removed from the DOM.

5:React component class extends the React.Component, a method called render() is created that returns JSX element. 
6:This method, Render in ReactJS is responsible for displaying content on the screen by converting the app’s state into a DOM node.


Very Short different:

class and functional

Syntax:
Functional components are written as a JavaScript function.
Class components are written as a JavaScript class.

State and Lifecycle Methods:
Functional components do not have a state or lifecycle methods.
Class components have a state and can implement lifecycle methods like componentDidMount and componentDidUpdate.

performance:
Faster as they do not have state and lifecycle, react needs to do less work to render these components.
Slower as they have state and lifecycle, react needs to do comparatively more work to render these components.

Code Length:
Functional components tend to be shorter and more concise
Class components require the boilerplate code, such as a constructor method and the use of “this” to access props and state.

this and super keywords constructor
it dont use constructor,this, super
Functional components do not use “this” at all, which makes them easier to understand for beginners.

Class components use the “this” keyword is used to refer to the current instance of the component which can be confusing for new developers.
it use all concept like this , super , constructor

Conclusion
Functional components are simpler and faster, on the other hand, class components are more feature-rich and reusable. Both can be used for building high-quality front-ends and depending on the requirements both can be used. Developers can make informed decisions based on their differences.


