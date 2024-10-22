import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faPeopleGroup, faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Product({ nombre, imagenUrl, descripcion, precio, comunidad, categoria, disponibilidad }) {
  return (
    <Card className="mb-4" style={{ width: "100%", maxWidth: "350px" }}>
      <Card.Img className="card-img-top" variant="top" src={imagenUrl} alt={nombre} style={{ height: "200px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
          <br />
          <br />
          <strong>
            <FontAwesomeIcon icon={faDollarSign} /> Precio:
          </strong>{" "}
          ${precio}
          <br />
          <strong>
            <FontAwesomeIcon icon={faPeopleGroup} /> Comunidad:
          </strong>{" "}
          {comunidad}
          <br />
          <strong>
            <FontAwesomeIcon icon={disponibilidad ? faCircleCheck : faCircleXmark} />
            <span className={disponibilidad ? "text-success" : "text-danger"}>{disponibilidad ? " Disponible" : " No disponible"}</span>
          </strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;