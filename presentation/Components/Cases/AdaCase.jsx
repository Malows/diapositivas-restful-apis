import React from 'react'

import { TableItem, Text, Heading } from 'spectacle'


export default class AdaCase extends React.Component {
  capitalize( aux ) {
    return aux.charAt(0).toUpperCase() + aux.slice(1);
  }

  render() {
    let texto = this.props.text.split(' ').map( elem => this.capitalize(elem) ).join('_');
    return (
      <TableItem>
        <Heading margin="1em 0" textSize={30}>{"Ada_Case"}</Heading>
        <Text textSize={30}>{ texto }</Text>
      </TableItem>
    )
  }
}
