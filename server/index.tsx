 const React = require('react')
const renderToString = require('react-dom/server').renderToString;
const App = require('../src/App').default;
const reactDom = renderToString(<App/>);

console.info(reactDom)