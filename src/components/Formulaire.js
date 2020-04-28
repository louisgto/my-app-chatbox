import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Formulaire extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <form
        className='w-100'>
        <textarea 
        required
        maxLength='140' 
        className='w-100'/>
        <div className='d-flex justify-content-end mb-2'>
          140
        </div>
        <button type='submit' className='bt btn-dark w-100'>
          Envoyer !
        </button>
      </form>
    )
  }
}



