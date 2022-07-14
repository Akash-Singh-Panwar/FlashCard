import reactDOM from 'react-dom';
import Navbar from './Navbar/navBarDesign1.js';
import Footer from './Footer/footerDesign1.js';
import App from './App.js';

reactDOM.render(<Navbar/>, document.getElementById("head"));
reactDOM.render(<App/>, document.getElementById("content"));
reactDOM.render(<Footer/>, document.getElementById("foot"));