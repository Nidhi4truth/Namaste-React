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
