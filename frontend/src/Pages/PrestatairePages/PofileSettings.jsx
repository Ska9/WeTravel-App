import React from "react";

//React Bootstrap
import { Button , Form } from "react-bootstrap";

//Components
import SideBar from "../../core/SideBar";

const ProfileSettings = () => {
  return (
    <div>
      <SideBar />
      <Form className="form">
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Nom</Form.Label>
          <Form.Control placeholder="Votre Nom" />
        </Form.Group>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Prénom</Form.Label>
          <Form.Control placeholder="Votre Prénom" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Ancien Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Ancien Mot de passe" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Nouveau Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Nouveau Mot de passe" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirmation Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Confirmation Mot de passe" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProfileSettings;
