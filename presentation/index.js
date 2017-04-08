// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, Deck, Heading, Layout, Fill, ListItem, List, Quote, Slide,
  Text, Table, TableHeaderItem, TableItem, TableRow
} from "spectacle";

import FontAwesome from 'react-fontawesome';

import Caseify from './Components/Caseify.jsx';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  yo: require("../assets/foto_presentacion.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
					<Heading size={1} fit lineHeight={1} textColor="secondary">RESTful APIs</Heading>
					<Text margin="10px 0 0" textColor="tertiary" size={6} bold>Buenas prácticas</Text>
				</Slide>

        <Slide bgColor="black">
					<Heading size={1} caps fit textColor="primary" textFont="primary">Quién soy?</Heading>
          <List textColor="primary">
					  <Appear><ListItem textColor="primary">Juan Manuel Cruz</ListItem></Appear>
            <Appear><ListItem textColor="primary">Estudiante</ListItem></Appear>
            <Appear><ListItem textColor="primary">Desarrollador</ListItem></Appear>
            <Appear><ListItem textColor="primary">Autodidacta</ListItem></Appear>
            <Appear><ListItem textColor="primary">Hacker</ListItem></Appear>
					</List>
					<Appear><Text textColor="tertiary"><FontAwesome name="twitter" size="lg"/> wroughtbywind</Text></Appear>
          <Appear><Text textColor="primary"><FontAwesome name="github" size="lg"/> Malows</Text></Appear>
				</Slide>

        <Slide bgColor="primary">
          <Heading size={3} fit lineHeight={1} textColor="secondary">¿Por qué usar APIs RESTful?</Heading>
          <List>
            <Appear><Text margin="30px 10px" textColor="tertiary" size={6}>Proque son geniales</Text></Appear>
            <Appear><Text margin="30px 10px" textColor="tertiary" size={6}>
              {"Porque la carga de transferencia en aplicaciones web isomorfas se hace solo al principio. Luego de la carga inicial solo se transfieren datos"}
            </Text></Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">{"???"}</Heading>
        </Slide>

        <Slide>
          <Heading size={3} lineHeight={1} textColor="secondary">{"¿Qué son?"}</Heading>
          <BlockQuote textColor="secondary">
            <Quote textSize={36} lineHeight={1} textColor="secondary">
              Un conjunto de protocolos y estándares que sirven para intercambiar datos entre aplicaciones
            </Quote>
            <Cite textSize={30} lineHeight={1} textColor="secondary">
              <a href="https://en.wikipedia.org/wiki/Web_service">Wikipedia</a>
            </Cite>
          </BlockQuote>
          <Appear>
            <Text size={6}>Es una aplicación que se encarga de brindar información o otras aplicaciones</Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={1}>FIN</Heading>
        </Slide>
      </Deck>
    );
  }
}
