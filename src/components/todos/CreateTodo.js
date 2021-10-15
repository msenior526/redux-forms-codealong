import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch({type: 'ADD_TODO', payload: this.state})
    this.setState({text: ''});
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="add todo" 
          onChange={this.handleChange}
          value={this.state.text}/>
          <input type="submit" />
        </form>    
        {this.state.text}  
      </div>
    )
  }
}

export default connect()(CreateTodo);
