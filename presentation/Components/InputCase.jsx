import React from 'react'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    // console.log(this.refs.textoDeInput);
    this.props.onUserInput( this.refs.textoDeInput.value )
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Embrace yourcasef"
          ref="textoDeInput" value={ this.props.text } onChange={ this.handleChange } />
      </form>
    )
  }
}
