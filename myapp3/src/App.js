import logo from './logo.svg';
import './main.css';
import React, { Component } from "react";

class Greeting extends Component {
  render() {
  return <h1>React, Hello</h1>;
}
}
const imagePath = `${process.env.PUBLIC_URL}/logo192.png`;

function App() {
  const isRed = false;
  return (
    //<div className="App">
    <>
    
      <section class="post1">
            <h2 className={isRed ? 'red-text' : 'blue-text'}>Post Title 1</h2>
            
            <p>something to write about</p>
            <a href="#">Read more</a>
        </section>

        <section class="post2">
        <img src={imagePath} alt="React Logo" />
            <h2>Post Title 2</h2>
            <Greeting/>
            <p>something to write about</p>
            <a href="#">Read more</a>
        </section>

        <section class="post3">
            <h2>Post Title 3</h2>
            <p>something to write about</p>
            <a href="#">Read more</a>
        </section>

        <section class="post4">
            <h2>Post Title 4</h2>
            <p>something to write about</p>
            <a href="#">Read more</a>
        </section>
      </>
   // </div>
  );
}


export default App;
