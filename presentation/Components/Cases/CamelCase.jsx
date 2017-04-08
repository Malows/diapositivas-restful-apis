import React from 'react'

import { TableItem, Text, Heading } from 'spectacle'

export default class CamelCase extends React.Component {
  capitalize( aux ) {
    return aux.charAt(0).toUpperCase() + aux.slice(1);
  }

  render() {
    let arr = this.props.text.split(' ')

    let texto = arr.slice(0,1)
      .map( elem => elem.toLowerCase() )
      .concat(
        arr.slice(1)
          .map( elem => this.capitalize(elem) ) )
      .join('');
    return (
      <TableItem>
        <Heading margin="1em 0" textSize={30}>camelCase</Heading>
        <Text textSize={30}>{ texto }</Text>
      </TableItem>
    )
  }
}
