// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, Code, Deck, Heading, Image, Layout, Fill, ListItem, List, Quote, S, Slide,
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
  blowYourMind: require('../assets/blowYourMind.gif'),
  yo: require('../assets/foto_presentacion.jpg')
}

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

preloader(images)

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
          <Layout>
            <Fill>
              <List textColor="primary">
    					  <Appear><ListItem textColor="primary">Juan Manuel Cruz</ListItem></Appear>
                <Appear><ListItem textColor="primary">Estudiante</ListItem></Appear>
                <Appear><ListItem textColor="primary">Desarrollador</ListItem></Appear>
                <Appear><ListItem textColor="primary">Autodidacta</ListItem></Appear>
                <Appear><ListItem textColor="primary">Hacker</ListItem></Appear>
    					</List>
            </Fill>
            <Fill>
              <Image src={images.yo.replace('/','')} height="45vh" />
            </Fill>
          </Layout>

					<Appear><Text textColor="tertiary"><FontAwesome name="twitter" size="lg"/> wroughtbywind</Text></Appear>
          <Appear><Text textColor="primary"><FontAwesome name="github" size="lg"/> Malows</Text></Appear>
				</Slide>

        <Slide bgColor="primary">
          <Heading size={3} fit lineHeight={1} textColor="secondary">¿Por qué usar APIs RESTful?</Heading>
          <List>
            <Appear><Text margin="30px 10px" textColor="tertiary" size={6}>Porque son geniales</Text></Appear>
            <Appear><Text margin="30px 10px" textColor="tertiary" size={6}>
              {"Porque la carga de transferencia en aplicaciones web SPA se hace solo al principio. Luego de la carga inicial solo se transfieren datos"}
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
            <Text size={6}>Es una aplicación que se encarga de brindar información a otras aplicaciones</Text>
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
          <Heading size={1}>Nociones generales</Heading>
        </Slide>

        <Slide>
          <Text margin="2em 0">Toda pieza de software debería ser tan buena como su documentación</Text>
          <Text margin="2em 0">Si nuestro software no esta bien documentado, es menos probable que sea utilizado</Text>
        </Slide>

        <Slide>
          <Heading size={3}>I'm the resources business</Heading>
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
                <TableItem>Actualizar</TableItem>
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
              Purge no es un método estandar, se usa para sistemas de caché, elimina
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
          <Heading size={3}>Busqueda</Heading>
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
            contener datos que no son de interes a quién consuma la API
          </Text>
        </Slide>

        <Slide>
          <Heading size={3}>Relaciones embebidas</Heading>
          <Text>Popular los campos relacionados</Text>
          <List>
            <ListItem>
              GET ...com/tickets/12?embed=costumer.tickets_submited,realm.name
            </ListItem>
          </List>
          <Text>
            Menos requests equivalen a menos datos, ideal para móviles y si capitalizamos nuestro número de requests
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
          <Heading size={3}>URI Friendly</Heading>
          <Text>
            Como trabajamos con distintas URIs para navegar nuestra API,
            deben ser claras y no quedar duda alguna del funcionamiento asociado
            a la URI para que se pueda consumir facilmente la API
          </Text>
        </Slide>

        <Slide>
          <Heading size={3}>Pretty print</Heading>
          <Text margin="1em 0">Deberíamos devolver los recursos con pretty print por defecto. Minificando la respuesta para ahorrar en datos solo pierdo legibilidad</Text>
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
            <Text margin="2em 0">snake_case > camelCase</Text>
          </Appear>
        </Slide>

        <Slide>
          <Caseify />
        </Slide>

        <Slide>
          <Heading size={3}>Envoltorios</Heading>
          <Text margin="1em 0">Muchas APIs hacen uso de envoltorios o wrappers para enviar sus datos y facilitar el envío de metadata</Text>
          <Text textSize="30" textColor="tertiary" textAlign="left">
            {'{ "data": { "_id": 123, "username": "johnDoe" }, '}<br/>
            {'"meta": { "page": #, "resources_per_page": #, "count_pages": #, "count_resources": #}  }'}
          </Text>
          <Text margin="1em 0">Esta práctica se está viendo rápidamente remplazada por la utilización de headers y CORS</Text>
        </Slide>

        <Slide>
          <Heading size={3}>Cuando usarlos?</Heading>
          <Text margin="1em 0">Si la API necesita soportar peticiones cross domain sobre JSONP</Text>
          <Text margin="1em 0">Si el cliente es incapaz de trabajar con encabezados HTTP</Text>
          <Text margin="1em 0">Si las peticiones JSONP vienen con un parámetro adicional de consulta(usualmente llamado callback o jsonp)</Text>
        </Slide>

        <Slide>
          <Heading size={3}>Autentificación</Heading>
          <Text margin="1em 0" textColor="tertiary">HTTP basic authentication</Text>
          <Text margin="1em 0" textColor="tertiary">hash based message authentication</Text>
          <Text margin="1em 0" textColor="tertiary">OAuth</Text>
          <Text margin="1em 0" textColor="tertiary">OAuth2</Text>
        </Slide>

        <Slide>
          <Heading size={3}>Versionado</Heading>
          <Text margin="1.5em 0">
            Versionar nuestra API nos permite poder hacer iteraciones rápidas y
            tener distintas versiones corriendo sin dejar de servir versiones
            anteriores a aplicaciones que aún no se han actualizado
          </Text>
          <Text margin="1.5em 0">
            Agregar un parámetro a la URI <br/>/v2/recursos/articulos, <br/>/v3/recursos/articulos
          </Text>
        </Slide>

        <Slide>
          <Heading size={3}>Limitar peticiones</Heading>
          <Text>
            Es útil siempre mantener informado al consumidor de la API como se encuentra su cuota de peticiones
          </Text>
          <List>
            <Appear>
              <ListItem>
                X-Rate-Limit-Limit
                <Text textColor="tertiary" textSize="24">
                  El número de peticiones por período
                </Text>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                X-Rate-Limit-Remaining
                <Text textColor="tertiary" textSize="24">
                  Cantidad de peticiones restantes en este período
                </Text>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                X-Rate-Limit-Reset
                <Text textColor="tertiary" textSize="24">
                  Segundos faltantes para que se reinicie el período
                </Text>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={3}>Wait! ¿Por qué no un timestamp?</Heading>
          <Text margin="1em 0">
            Un timestamp contiene una cantidad de información útil pero innecesaria
            como la fecha y probablemente el time-zone. Un consumidor de la API
            realmente quiere saber cuándo puede enviar la petición nuevamente
          </Text>
          <Text margin="1em 0">
            Las spec de HTTP establecen como estándar otros recursos diferentes como HTTP Date
          </Text>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary">HATEOAS</Heading>
          <Appear>
            <Heading size={3} textColor="secondary">¿Soy realmente RESTful?</Heading>
          </Appear>
          <Appear>
            <Text margin="2em 0">D=</Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary">HATEOAS</Heading>
          <Text>
            Para asegurar que nuestra API sea RESTful, deberíamos asegurar HATEOAS. ¿Pero qué es?
          </Text>
          <Text>
            Hypermedia as the Engine of Application State (hipermedia como motor del estado de la aplicación)
            es una restricción de la arquitectura REST. Básicamente las respuestas a las peticiones de la API
            deberían contener links a hipermedias accesibles por el estado actual del cliente que consume la API
          </Text>
        </Slide>

        <Slide>
          <Heading size={3}>Un ejemplo</Heading>
          <Text textSize="30" lineHeight={1.5} textAlign="left" margin="2em 0">
            Si planteo la API de un banco, y que un cajero automático consume.<br/>
            Cuando ingreso, me muestra la cantidad de dinero de la que dispongo (e.g. $100)
            Además me muestra las opciones con las que cuento, `depositar` o `extraer`.<br/>
          Si retiro los $100, automáticamente me debería mostrar solo la opción de `depositar` pero no porque el cajero evalue la cantidad de dinero.<br/>
            Sino porque la API le provee al cajero que acciones tiene a su disposición en ese momento
          </Text>
        </Slide>

        <Slide>
          <Heading size={3}>¿Cómo soy RESTful?</Heading>
          <Text margin="1.5em 0">Especificar la versión de la API en la respuesta</Text>
          <Text margin="1.5em 0">
            Evitar que el cliente adivine a que dirección debe dirigirse, la API debe
            dirigirse a través de las hipermedias
          </Text>
          <Text><a href="http://json-ld.org/">JSON-LD</a></Text>
        </Slide>

        <Slide>
          <Heading size={2}>Roads?</Heading>
          <Heading size={2} textColor="secondary">Where we're going we don't need roads</Heading>
        </Slide>

        <Slide>
          <Heading size={2} textColor="#E10098" textFont="'Rubik', 'Helvetica Neue', Helvetica, Arial, sans-serif">GraphQL <FontAwesome name="heart-o" size="lg"></FontAwesome></Heading>
        </Slide>

        <Slide>
          <Image src={images.blowYourMind.replace('/','')} height="70vh" />
        </Slide>

        <Slide>
          <Heading size={1}>PREGUNTAS?</Heading>
        </Slide>

        <Slide>
          <Heading size={1}>GRACIAS</Heading>
        </Slide>

        <Slide>
          <Heading size={3}>Datos útiles</Heading>
          <List>
            <ListItem textColor={"tertiary"}>APIS públicas <a href="https://github.com/toddmotto/public-apis">[1]</a></ListItem>
            <ListItem>HATEOAS <a href="http://restcookbook.com/Basics/hateoas/">[2]</a> <a href="http://restcookbook.com/Miscellaneous/richardsonmaturitymodel/">[3]</a></ListItem>
            <ListItem>GraphQL <a href="http://graphql.org/">[4]</a></ListItem>
            <ListItem>API Blueprint <a href="https://apiblueprint.org/">[5]</a></ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
