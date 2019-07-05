import React, { Component } from 'react';
import './App.css';
import { data } from "./assets/data";
import CardList from "./components/cardList/cardList";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
class App extends Component {
  render() {

    console.log(data.cards[0]);
    return (
      <div className="App">
        <Navbar />
        <CardList data = {data}/>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
