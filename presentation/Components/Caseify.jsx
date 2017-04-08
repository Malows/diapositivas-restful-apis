import React from "react"

import { Table, TableRow } from "spectacle"

import InputCase from "./InputCase.jsx"

import PascalCase from "./Cases/PascalCase.jsx"
import CamelCase from "./Cases/CamelCase.jsx"
import SnakeCase from "./Cases/SnakeCase.jsx"
import AdaCase from "./Cases/AdaCase.jsx"
import KebabCase from "./Cases/KebabCase.jsx"
import TrainCase from "./Cases/TrainCase.jsx"
import LispCase from "./Cases/LispCase.jsx"
import CobolCase from "./Cases/CobolCase.jsx"

export default class Caseify extends React.Component {
  constructor(props) {
    super(props)

    this.handleUserInput = this.handleUserInput.bind(this)

    this.state = {
      text: ""
    }
  }

  handleUserInput( caseInput ) {
    console.log(caseInput);
    this.setState({
      text: caseInput
    });
  }

  render() {
    let texto = this.state.text
    return (
      <div>
        <InputCase text={ this.state.text } onUserInput={ this.handleUserInput }/>
        <Table>
          <TableRow>
            <PascalCase text={ texto }  />
            <CamelCase text={ texto } />
          </TableRow>
          <TableRow>
            <SnakeCase text={ texto } />
            <AdaCase text={ texto } />
          </TableRow>
          <TableRow>
            <LispCase text={ texto } />
            <CobolCase text={ texto } />
          </TableRow>
          <TableRow>
            <KebabCase text={ texto } />
            <TrainCase text={ texto } />
          </TableRow>
        </Table>
      </div>
    )
  }
}
