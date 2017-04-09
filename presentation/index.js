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
          <Heading size={3} textColor="secondary">Nociones generales</Heading>
          <List>
            <Appear><ListItem>Funcionamiento</ListItem></Appear>
            <Appear><ListItem>Estética</ListItem></Appear>
            <Appear><ListItem>Seguridad</ListItem></Appear>
            <Appear><ListItem>Flexibilidad</ListItem></Appear>
          </List>
        </Slide>

        <Slide>
          <Text margin="2em 0">Toda pieza de software debería ser tan buena como su documentación</Text>
          <Text margin="2em 0">Si nuestro software no esta bien documentado, es menos probable que sea utilizado</Text>
        </Slide>

        <Slide>
          <Heading size={2}>Funcionamiento</Heading>
        </Slide>

        <Slide>
          <Heading size={3}>I'm the resources buisness</Heading>
          <Text>Todo tipo de respuestas es llamado recurso, aún si es un error. Y todo recurso debe ser devuelto, sea cual sea la dirección solicitada</Text>
        </Slide>

        <Slide bgColor="tertiary">
          <Table>
            <TableRow>
              <TableHeaderItem>Acción</TableHeaderItem>
              <TableHeaderItem>Verbo</TableHeaderItem>
              <TableHeaderItem>Ruta</TableHeaderItem>
            </TableRow>
            <Appear>
              <TableRow>
                <TableItem>Crear</TableItem>
                <Appear><TableItem>POST</TableItem></Appear>
                <Appear><TableItem>...com/recursos/articulos</TableItem></Appear>
              </TableRow>
            </Appear>
            <Appear>
              <TableRow>
                <TableItem>Leer</TableItem>
                <Appear><TableItem>GET</TableItem></Appear>
                <Appear><TableItem>...com/recursos/articulos/id</TableItem></Appear>
              </TableRow>
            </Appear>
            <Appear>
              <TableRow>
                <TableItem>Editar</TableItem>
                <Appear><TableItem>PUT</TableItem></Appear>
                <Appear><TableItem>...com/recursos/articulos/id</TableItem></Appear>
              </TableRow>
            </Appear>
            <Appear>
              <TableRow>
                <TableItem>Borrar</TableItem>
                <Appear><TableItem>DELETE</TableItem></Appear>
                <Appear><TableItem>...com/recursos/articulos/id</TableItem></Appear>
              </TableRow>
            </Appear>
          </Table>
        </Slide>

        <Slide bgColor="tertiary">
          <Table>
            <TableRow>
              <TableHeaderItem>Acción</TableHeaderItem>
              <TableHeaderItem>Verbo</TableHeaderItem>
              <TableHeaderItem>Ruta</TableHeaderItem>
            </TableRow>
            <Appear>
              <TableRow>
                <TableItem>Listar</TableItem>
                <Appear><TableItem>GET</TableItem></Appear>
                <Appear><TableItem>...com/recursos/articulos</TableItem></Appear>
              </TableRow>
            </Appear>
            <Appear>
              <TableRow>
                <TableItem>Actualización</TableItem>
                <Appear><TableItem>PATCH</TableItem></Appear>
                <Appear><TableItem>...com/recursos/articulos/id</TableItem></Appear>
              </TableRow>
            </Appear>
          </Table>
        </Slide>

        <Slide>
          <Heading size={3}>Otros verbos HTTP?</Heading>
          <List>
            <ListItem>OPTIONS</ListItem>
            <ListItem>PURGE</ListItem>
          </List>
          <Appear>
            <Text>
              Options nos devuelve que métodos HTTP podemos llamar en la dirección que apuntamos
            </Text>
          </Appear>
          <Appear>
            <Text>
              Pruge no es un método estandar, se usa para sistemas de caché, elimina
              los archivos de chaché que podamos tener al recurso asociado y fuerza
              una creación de nuevos archivos de caché
            </Text>
          </Appear>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={3}>Y si no es CRUD?</Heading>
          <Appear>
            <Text>
              Intento restructurar la acción y tratarla como un parámetro
            </Text>
          </Appear>
          <Appear>
            <Text textColor="primary">
              GET ...com/recursos/articulos?filter=nuevos
            </Text>
          </Appear>
          <Appear>
            <Text textColor="primary">
              POST ...twitter.com/friendships/create.json?user_id=####&follow=true
            </Text>
          </Appear>
          <Appear>
            <Text>Tratar la acción como un sub-recurso</Text>
          </Appear>
          <Appear>
            <Text textColor="primary">
              PUT ...gists/:id/star
            </Text>
          </Appear>
          <Appear>
            <Text textColor="primary">
              DELETE ...gists/:id/unstar
            </Text>
          </Appear>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={3}>Y si no es CRUD?</Heading>
          <Text>
            Si aún no nos convence el resultado, el método es muy complejo o los
            parámetros lo vuelven poco legible
          </Text>
          <Appear>
            <Text>Dejarlo como esta es lo más sano</Text>
          </Appear>
          <Appear>
            <Text textColor="primary">.../search</Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={3}>Filtros</Heading>
          <Text>Para filtrar los resultados de una lista de recursos</Text>
          <List>
            <ListItem>
              GET ...com/tickets?state=open
            </ListItem>
          </List>
          <Text>Busco los tickets no resueltos</Text>
        </Slide>

        <Slide>
          <Heading size={3}>Ordenamiento</Heading>
          <Text>Retornar ordenada la lista de recursos</Text>
          <List>
            <ListItem>
              GET ...com/tickets?sort=created_at
            </ListItem>
          </List>
          <Text>
            Devuelve los tickets ordenados por el más antiguo primero
            <br />
            Podemos alterar el ordenamiento agregando + o - al nombre del parámetro de ordenamiento
          </Text>
        </Slide>

        <Slide>
          <Heading size={3}>Busuqeda</Heading>
          <Text>
            Busquedas son parecidas a los filtros pero hacen referencia a valores
            dentro del de un elemento del recurso
          </Text>
          <List>
            <ListItem>
              GET ...com/tickets?q=quest
            </ListItem>
          </List>
          <Text>Devuelvo una lista con los recursos cuyo mensaje contenga la plabra `quest`</Text>
        </Slide>

        <Slide>
          <Heading size={3}>Paginación</Heading>
          <Text>Limito la cantidad de datos devueltos</Text>
          <List>
            <ListItem>
              GET ...com/tickets?page=2
            </ListItem>
          </List>
          <Text>Super importante, limitar el tamaño de las páginas de información que devuelvo</Text>
        </Slide>

        <Slide>
          <Heading size={3}>Campos especificos</Heading>
          <Text>Retornar un conjunto especifico de datos dentro del recurso</Text>
          <List>
            <ListItem>
              GET ...com/tickets?fields=id,subject,battle_tag
            </ListItem>
          </List>
          <Text>
            No siempre es necesario una representación completa del recurso, puede ser muy grande o
            contener datos que no son de interes a quíen consuma la API
          </Text>
        </Slide>

        <Slide>
          <Heading size={3}>Alias</Heading>
          <Text>Si bien puedo combinar varios parámetros en una misma petición</Text>
          <List>
            <ListItem>
              GET ...com/tickets?state=open&q=quest&sort=created_at&fields=id,subject,battle_tag
            </ListItem>
          </List>
          <Appear>
            <Text>
              Podemos hacer mucho más amigable el uso de nuestra API implementando alias en nuestras rutas
            </Text>
          </Appear>
          <Appear>
            <List>
              <ListItem>
                GET ...com/oldest_open_tickets
              </ListItem>
            </List>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={2}>Estética</Heading>
        </Slide>

        <Slide>
          <Heading size={3}>URI Friendly</Heading>
          <Text>
            Como trabajamos con distintas URIs para navegar nuestra API,
            deben ser claras y no quedar duda alguna del funcionamiento asociado
            a la URI para que se pueda consumir facilmente la API
          </Text>
        </Slide>

        <Slide>
          <Heading size={3}>Pretty print</Heading>
          <Text margin="1em 0">Deveríamos devolver los recursos con pretty print por defecto. Minimificando la respuesta para ahorrar en datos solo pierdo legibilidad</Text>
          <Text margin="1em 0">Y al enviar la respuesta comprimida utilizando gzip, solo varía en pocos bytes y es transparente el proceso</Text>
        </Slide>

        <Slide>
          <Heading size={3}>Pretty print</Heading>
          <Text margin="1em 0">Si aún quiero enviar los datos minimificados, puedo agregar un parámetro</Text>
          <List>
            <ListItem textSize="36">GET ...com/recursos/articulo/:id?pretty_print=false</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={3}>camelCase</Heading>
          <Heading size={3}>vs</Heading>
          <Heading size={3}>snake_case</Heading>
          <Appear>
            <Text>snake_case > camelCase</Text>
          </Appear>
        </Slide>

        <Slide>
          <Caseify />
        </Slide>

        <Slide>
          <Heading size={1}>FIN</Heading>
        </Slide>
      </Deck>
    );
  }
}
