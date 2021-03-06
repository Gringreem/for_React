import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment';

const commentsFromServer = [
  {id: 1, name: 'HS', content: 'Comment1'},
  {id: 2, name: 'Hs', content: 'Comment2'},
  {id: 3, name: 'hs', content: 'Comment3'}
];

var timer;

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      comments: [
        {id: 1, name: 'HS', content: 'Comment1'},
        {id: 2, name: 'Hs', content: 'Comment2'},
        {id: 3, name: 'hs', content: 'Comment3'}
      ],
    };
  }

  componentDidMount(){
    let comments = this.state.comments;
    timer = setInterval(() => {
      if(comments.length > 0){
        comments.pop();
        this.setState({
          comments: comments,
        });
      } else if (timer){
        clearInterval(timer);
      }
    }, 5000);

  }

  render(){
    const { comments } = this.state;

    return (
      <div className="App" style={{ padding: 16, backgroundColor: '#282c34'}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          {comments.map(function(comment, index){
            return(
              <Comment
                key={comment.id}
                id={comment.id}
                name={comment.name}
                content={comment.content} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
