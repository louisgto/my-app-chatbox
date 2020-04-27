import React, { Component } from 'react'


export default class Connexion extends Component {
  render() {
      return (
          <div className='container'>
              <form className='connexion'>
                <input
                type="text"
                placeholder='Pseudo'
                required />
                <button type='submit' className='btn btn-dark w-100'>GO</button>
              </form>
          </div>
      )
  }
}
