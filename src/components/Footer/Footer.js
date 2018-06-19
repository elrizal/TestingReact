import React from 'react';
import '../../App.css';
import {NavLink, Switch, Route} from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const Footer = props => (
  <div>
    <Grid>
      <Row>
        <div id="buttons">
          <Button className="active-button" size="medium" spacing={5}>
            SUBMIT
          </Button>
          <Button className="active-button" id="save-button" spacing={5}>
            SAVE
          </Button>
        </div>
      </Row>
    </Grid>
  </div>
)
export default Footer;