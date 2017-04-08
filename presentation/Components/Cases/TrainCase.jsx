import React from 'react'

import { Text, Heading, TableItem } from 'spectacle'

export default class TrainCase extends React.Component {
  capitalize( aux ) {
    return aux.charAt(0).toUpperCase() + aux.slice(1);
  }

  render() {
    let texto = this.props.text.split(' ').map( elem => this.capitalize(elem) ).join('-');
    return (
      <TableItem>
        <Heading margin="1em 0" textSize={30}>{"Train-Case"}</Heading>
        <Text textSize={30}>{ texto }</Text>
      </TableItem>
    )
  }
}
