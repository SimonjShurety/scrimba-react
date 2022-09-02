// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

// ReactDOM.render(
// 	<ul>
// 		<li>1</li>
// 		<li>2</li>
// 		<li>3</li>
// 	</ul>,
// 	document.getElementById('root')
// );

// ***Imperative Vanilla JS***

// const h1 = document.createElement('h1');
// h1.textContent = 'This is an imperative way to program';
// h1.className = 'header';
// document.getElementById('root').append(h1);

// ***JSX***
// ReactDOM.render(<h1>This is JSX</h1>, document.getElementById('root'));

// const h1 = document.createElement('h1');
// h1.textContent = 'Hello world';
// h1.className = 'header';
// console.log(h1);

// // <h1 class="header">

// const element = <h1 className="header">This is JSX</h1>;
// console.log(element);

/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX"
    }, 
    _owner: null, 
    _store: {}
}
 */

// JSX
// ReactDOM.render(element, document.getElementById('root'));

// JSX
const page = (
	<div>
		<h1 className="header">This is JSX</h1>
		<p>This is a paragraph</p>
	</div>
);

console.log(page);
// {$$typeof: Symbol(react.element), type: 'div', key: null, ref: null, props: {…}, …}

// props:
// children: Array(2)
// 0: {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …} {className: 'header', children: 'This is JSX'}
// 1: {$$typeof: Symbol(react.element), type: 'p', key: null, ref: null, props: {…}, …} {children: 'This is a paragraph'}
// length: 2
// [[Prototype]]: Array(0)

// ReactDOM.render(page, document.getElementById('root'));

/*
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navbar = (
	<nav>
		<h1>Simon's Bistro</h1>
		<ul>
			<li>Menu</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	</nav>
);

ReactDOM.render(navbar, document.getElementById('root'));
