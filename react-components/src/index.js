import React from 'react';
import ReactDOM from 'react-dom';


/* Components using props*/

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Chandra Shekar" />; 

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

/* Components inside another component 
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text"> {props.text}</div>
      <div className="Comment-date"> {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};
ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
);

*/

class Test extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = { hello : "World!" };
	}

	componentWillMount()
	{
		console.log("componentWillMount()");
	}

	componentDidMount()
	{
		console.log("componentDidMount()");
	}

	changeState()
	{
		this.setState({ hello : "Geek!" });
	}

	render()
	{
		return (
			<div>
			<h1> Hello{ this.state.hello }</h1>
			<h2>
			<a onClick={this.changeState.bind(this)}>Press Here!</a>
			</h2>
			</div>);
	}

	shouldComponentUpdate(nextProps, nextState)
	{
		console.log("shouldComponentUpdate()");
		return true;
	}

	componentWillUpdate()
	{
		console.log("componentWillUpdate()");
	}

	componentDidUpdate()
	{
		console.log("componentDidUpdate()");
	}
}

ReactDOM.render(
	<Test />,
	document.getElementById('root'));
