import React from 'react'

import { TableItem, Text, Heading } from 'spectacle'

export default class KebabCase extends React.Component {
  render() {
    let texto = this.props.text.split(' ').map( elem => elem.toLowerCase() ).join('-');
    return (
      <TableItem>
        <Heading margin="1em 0" textSize={30}>{"kebab-case"}</Heading>
        <Text textSize={30}>{ texto }</Text>
      </TableItem>
    )
  }
}
