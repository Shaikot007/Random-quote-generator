import React, { Component, Fragment } from 'react';
import './QuoteGenerator.css';

class QuoteGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    }
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => { 
    fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com", {
      method: "POST",
      headers:{
        'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
        'X-RapidAPI-Key': 'azDfMNiayumshLNm8LqjF9dsMTkcp1iw8Eljsn4teh0209W9ZE',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => response.json())
    .then(data => {
      // console.log(JSON.stringify(data));
        this.setState({
          quote: data[0].quote,
          author: data[0].author
        })
      }
    )
  }
  render() {
    return (
      <Fragment>
        <div className="QuoteGenerator">
          <div id="wrapper">
            <header id="quote-box">
              <h1>Quote Machine</h1>
              <div id="text">
                " {this.state.quote} " 
              </div>
              <div id="author">
                - {this.state.author}
              </div>
              <div className="SocialButton">
                <a id="tweet-quote" href={('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + this.state.quote + '" ' + this.state.author))} title="Tweet this quote!" target="_blank" rel="noopener noreferrer">
                  <i class="fa fa-twitter-square fa-2x btn-tweeter" aria-hidden="true"></i>
                </a>
                <a id="tumblr-quote" href={('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + encodeURIComponent(this.state.author) + '&content=' + encodeURIComponent(this.state.quote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button')} title="Tumblr this quote!" target="_blank" rel="noopener noreferrer">
                  <i class="fa fa-tumblr-square fa-2x btn-tumblr" aria-hidden="true"></i>
                </a>
                <button id="new-quote" onClick={this.fetchData}>New quote</button>
              </div>
            </header>
            <footer>
              <p>Made by <a href="https://github.com/Shaikot007" target="_blank" rel="noopener noreferrer">Shaikot</a></p>
            </footer>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default QuoteGenerator;