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
          <Heading size={3} lineHeight={2} textColor="secondary">¿Qué tiene de bueno?</Heading>
          <Appear>
            <Text size={6}>
              Me permite acceder a datos de los cuales puedo o no ser dueño y
              consumirlos con aplicaciones de manera sencilla
            </Text>
          </Appear>
          <Appear><Text size={6} margin="1em 0">Por ejemplo</Text></Appear>
          <Appear>
            <List>
              <ListItem>El precio de divisas extranjeras</ListItem>
              <ListItem>Datos climatológicos</ListItem>
              <ListItem>Información de perfiles públicos</ListItem>
              <ListItem>Datos estatales públicos</ListItem>
            </List>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={3} lineHeight={2} textColor="secondary">{"¿Qué más?"}</Heading>
          <Appear><Text size={6} margin="30px 0">Desacoplar dependecias estructurales y unificar la existencia de los datos</Text></Appear>
          <Appear>
            <Text size={6} margin="30px 0" textColor="tertiary" bold>
              Puedo tener todos los datos en una sola API, y tener una app web, una mobile y una de escritorio.
              Y que todas las aplicaciones usen los datos de la API, sin tener que tenerlos almacenados en
              lugares diferentes, repetidos o preocuparme de su sincronización
            </Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={3}>Cosas a tener en cuenta en todo momento de su desarrollo</Heading>
          <List>
            <ListItem size={5}>DRY</ListItem>
            <ListItem size={5}>Tiempo de desarrollo por app menor</ListItem>
            <ListItem size={5}>Reducción en la transferencia de datos</ListItem>
            <ListItem size={5}>Cacheable</ListItem>
            <ListItem size={5}>Mayor tiempo total de desarrollo en app pequeñas</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={1}>FIN</Heading>
        </Slide>
      </Deck>
    );
  }
}
