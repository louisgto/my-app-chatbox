import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


export default class Connexion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: '',
      goToChat: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({pseudo: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ goToChat: true })
  }

  render() {
    if (this.state.goToChat) {
      return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
    }

    return (
      <div className="container vh-100 d-flex align-items-center">
        <form className='col-4 row align-items-center mx-auto' onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder='Pseudo'
            value={this.state.pseudo}
            onChange={this.handleChange}
            required
            className='w-100'></input>
          <button type='submit' className='btn btn-dark w-100 mt-2'>Connexion</button>
        </form>
      </div> 
    );
  }
}
