import React from 'react'

import { Text, Heading, TableItem } from 'spectacle'

export default class LispCase extends React.Component {
  capitalize( aux ) {
    return aux.charAt(0).toUpperCase() + aux.slice(1);
  }

  render() {
    let arr = this.props.text.split(' ')

    let texto = arr.slice(0,1)
      .map( elem => this.capitalize(elem) )
      .concat(
        arr.slice(1)
          .map( elem => elem.toLowerCase() ) )
      .join('-');
    return (
      <TableItem>
        <Heading margin="1em 0" textSize={30}>{"Lisp-case"}</Heading>
        <Text textSize={30}>{ texto }</Text>
      </TableItem>
    )
  }
}
