import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <style dangerouslySetInnerHTML={{__html: "\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  max-width: 300px;" +
        "\n  margin: auto;\n  text-align: center;\n  font-family: arial;\n}\n\n.title" +
        " {\n  color: grey;\n  font-size: 18px;\n}\n\nbutton {\n  border: none;\n  outline: 0;\n " +
        " display: inline-block;\n  padding: 8px;\n  color: white;\n  background-color: #000;\n  text-align: center;\n" +
        "  cursor: pointer;\n  width: 100%;\n  font-size: 18px;\n}\n\na {\n  text-decoration: none;\n  font-size: 22px;\n  " +
        "color: black;\n}\n\nbutton:hover, a:hover {\n  opacity: 0.7;\n}\n" }} />
        <h2 style={{textAlign: 'center'}}>Doctor Profile Card</h2>
        <div className="card">
          <img src="https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="John" style={{width: '100%'}} />
          <h1>Dr. Rama Krishna</h1>


            <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Font Awesome Icon Library */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <style dangerouslySetInnerHTML={{__html: "\n* {\n    box-sizing: border-box;\n}\n\n.fa {\n    font-size: 25px;\n}\n\n.checked {\n    color: orange;\n}\n\n" }} />
        <span className="heading">Rating</span>
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star" />


          <p className="title">5 Years of experience<br/>Engglish,Hindi,Kannada<br/>12 Recomenadtions<br/>MON-SAT | 09:30 AM-10:00 AM</p>
          <p>Apollo Hospitals</p>
          <div style={{margin: '24px 0'}}>
            <a href="#"><i className="fa fa-dribbble" /></a>
              &nbsp;
            <a href="#"><i className="fa fa-twitter" /></a>
              &nbsp;
            <a href="#"><i className="fa fa-linkedin" /></a>
              &nbsp;
            <a href="#"><i className="fa fa-facebook" /></a>
          </div>
          <p><button>Contact</button></p>
        </div>


      </div>
    );
  }
}

export default App;
