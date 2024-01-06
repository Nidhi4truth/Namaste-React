REACT

React is a javascript library for web and native user interfaces.

What is Emmet?
Emmet is a plugin for many popular text editors and Integrated Development Environments (IDEs) that greatly improves HTML and CSS workflow. Essentially, it's a tool that helps developers write HTML and CSS code faster and more efficiently through the use of snippets and shortcuts. 

How to get React into your project?
1.Using CDN -> A CDN (Content Delivery Network) is used to host JavaScript libraries and frameworks. This allows developers to include these resources in their web projects without having to download and host them on their own servers. So developer can fetch React from CDN and use in there project.

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

Difference between react.development.js and react-dom.development.js are ->

react.development.js
1. Core Library: react.development.js is the core library that provides the necessary tools to define React components and manage their state and lifecycle.
2. Component Creation: It allows you to create components, which are the building blocks of your UI.
3. JSX: React introduces JSX, a syntax extension for JavaScript, which allows you to write HTML-like code inside your JavaScript.
4. Virtual DOM: React uses the concept of a Virtual DOM, which is a lightweight copy of the actual DOM. It makes UI updates more efficient by minimizing direct manipulations of the DOM and optimizing rendering.

react-dom.development.js
1. DOM Interaction: ReactDOM acts as the bridge between React components and the actual DOM in the browser. While React creates and manages components and their state, ReactDOM updates the browser's DOM to reflect those components.
2. Rendering: It provides methods for rendering components into the DOM. For instance, ReactDOM.render() is used to render a React component into a specific DOM node.
3. Server-Side Rendering: ReactDOM also includes capabilities for server-side rendering with ReactDOMServer.
4. Web-Specific: ReactDOM is specific to web applications. React's design allows for other renderers to be used for different environments (like React Native for mobile app development), but ReactDOM is specifically for web browsers.

This separation allows React to be platform-agnostic, enabling the development of applications for various platforms, not just for web browsers.

When using React from a CDN, you will typically find two different versions of the library: react.development.js and react.production.js. These two files are built for different purposes and environments -->
use react.development.js during the development phase for a better development experience with helpful warnings and error messages. When you're ready to deploy your application to users, switch to react.production.js for better performance and efficiency.

What is crossorigin? --> The crossorigin attribute in a <script> tag is used when your webpage wants to include a JavaScript file from a different website (or domain). It's about security and privacy.

Hello World Project Using Javascript

<script>
  const heading = document.createElement("h1");
  heading.innerHTML = "Hello World From Js";
  const root = document.getElementById("root");
  root.appendChild(heading);
</script>

Hello World Project Using React

<script>
  const heading = React.createElement("h1",{id:"heading"},"Hello World From React"); // createElement returns object.It takes three attributes - name of the tag,attributes of the tag,children of the tag.
  const root = ReactDOM.createRoot(document.getElementById("root")); 
  root.render(heading); //It takes the object created by React.createElement and create h1 tag that the browser can understand and put into the root.
</script>

Nested tags in React

 /*  
 <div id="parent">
   <div id="child">
     <h1>Heading inside div</h1>
   </div>
 </div>
 */

 For creating the following structure using React we can write code like below:

 <script>
   const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"Heading inside div")));
   const root = ReactDOM.createRoot(document.getElementById("root")); 
   root.render(parent);
 </script>

 If there are siblings of the tag we can use array.

 Difference between library and framework

 Library can work independtly on a samll portion of existing project as well but framework provides the restriction to create the whole project from that only.
 


