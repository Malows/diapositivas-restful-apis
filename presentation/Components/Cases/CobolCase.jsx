import React from 'react'

import { Text, Heading, TableItem } from 'spectacle'

export default class CobolCase extends React.Component {
  render() {
    let texto = this.props.text.split(' ').map( elem => elem.toUpperCase() ).join('-');
    return (
      <TableItem>
        <Heading margin="1em 0" textSize={30}>{"COBOL-CASE"}</Heading>
        <Text textSize={30}>{ texto }</Text>
      </TableItem>
    )
  }
}
