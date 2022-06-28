import React from 'react'
import './About.css'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function About() {
  return (
    <div className="about-body">
      <h1>Sobre nosotres</h1>
      <p>Somos una empresa falsa de venta de productos para montaña, pero solamente remeras térmicas, cuellos y balaclavas y dos variedades de botas porque cargar todos los productos al Firebase es muy cansador. Aceptamos todos los medios de pago: Visa, American Express, Mastercard, PayPal, Cafecito, ticket canasta, ticket to ride, pesos y dólares. Venimos a democratizar la ropa de montaña. Todas las imágenes, textos y precios son robados de otro lado, por favor no me denuncien, sólo soy una estudiante.</p>
      <h2 className="testimoniosTitle">Testimonios</h2>
      <div className="testimonios">
      <Card className="card">
        <Card.Header as="h5">Mi Mama</Card.Header>
        <Card.Body>
          <Card.Title>"Que linda"</Card.Title>
          <Card.Text>
            Que linda tu página web mi vida. Cuándo me vas a devolver el taper? Cuándo me vas a hacer mi página? Venis a comer? Abrigate.
          </Card.Text>
          <Link to={"/"} className="lse botonPrincipal">Ver Productos</Link>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Header as="h5">Mi Pareja</Card.Header>
        <Card.Body>
          <Card.Title>"Está buenísima!"</Card.Title>
          <Card.Text>
            Y no lo digo porque estoy obligado, si fuera profe le daría un diez. O un once incluso. Está tan buena. Que buena que está.
          </Card.Text>
          <Link to={"/"} className="lse botonPrincipal">Ver Productos</Link>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Header as="h5">Mi Tutor</Card.Header>
        <Card.Body>
          <Card.Title>"Muy bueno!"</Card.Title>
          <Card.Text>
          "Me encanta como esta quedando el sitio, muy muy bueno!"
          - Primera entrega del proyecto final
          </Card.Text>
          <Link to={"/"} className="lse botonPrincipal">Ver Productos</Link>
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}
