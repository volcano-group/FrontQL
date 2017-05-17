import React, { Component } from 'react'
import { connect } from 'react-redux'
import { gql } from 'react-apollo'

import { createTodo } from '../actions/todo'

const mutation = gql`
  mutation CreateTodo($complete: Boolean!, $text: String!)
  {
    createTodo(complete: $complete, text: $text)
    {
      id
      text
      complete
    }
  }
`

class TodoCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.createTodo({text: this.state.text, complete: false, mutation})
    this.setState({
      text: ''
    })
  }

  render () {
    return (
      <div className='row'>
        <form className='col s12' onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='input-field col s12'>
              <input id='createTodo' type='text' className='validate' value={this.state.text} onChange={({target}) => this.setState({text: target.value})} />
              <label htmlFor='createTodo'>Create a new todo</label>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { createTodo })(TodoCreate)
