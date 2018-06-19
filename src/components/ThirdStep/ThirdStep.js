import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Table from 'react-bootstrap/lib/Table';
import '../../App.css';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from 'react-bootstrap/lib/Button';
import { NavLink, Switch, Route } from 'react-router-dom';
import Checkbox from '../Checkbox/Checkbox';
import PartnerInfo from '../PartnerInfo/PartnerInfo';

const ThirdStep = props => (
    <div>
     <Table responsive>
    <thead>
    <tr>
    <th className="sched"><h1>Schedule K-1</h1>
    <h2>(Form 1065)</h2>
    </th>
    <th>
    <Row>
    <Col xs={9} md={10}>
   <h1>Partner’s Share of Income, Deductions,
    Credits, etc.</h1>
    <h2>Part III: Partner’s Share of Current Year Income,
     Deductions, Credits, etc.</h2> </Col>
    
    <Col xs={3} md={2}>
    <div className="yearBox"><b className="halfyear">20</b><b className="otheryear">17</b></div> </Col>
    </Row>
     </th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>
    <Row>
    <Col xs={6} md={1}>
    <h1>1</h1>
    </Col>
    <Col xs={6} md={10}>
    Ordinary business income (loss) 
    <input type="text" className="form-control" id="fullname" name="fullname"  onChange={this.handleInputChange}></input>
    </Col>
      </Row>
      <hr></hr>
      <Row>
    <Col xs={6} md={1}>
    <h1>2</h1>
    </Col>
    <Col xs={6} md={10}>
    Net rental real estate income (loss) 
    <input type="text" className="form-control" id="fullname" name="fullname"  onChange={this.handleInputChange}></input>
    </Col>
      </Row>
      <hr></hr>
      <Row>
    <Col xs={6} md={1}>
    <h1>3</h1>
    </Col>
    <Col xs={6} md={10}>
    Other net rental income (loss) 
    <input type="text" className="form-control" id="fullname" name="fullname"  onChange={this.handleInputChange}></input>
    </Col>
      </Row>
      <hr></hr>
      <Row>
    <Col xs={6} md={1}>
    <h1>4</h1>
    </Col>
    <Col xs={6} md={10}>
    Guaranteed payments
    <input type="text" className="form-control" id="fullname" name="fullname"  onChange={this.handleInputChange}></input>
    </Col>
     </Row>
      <hr></hr>
     <Row>
    <Col xs={6} md={1}>
    <h1>5</h1>
    </Col>
    <Col xs={6} md={10}>
    Interest income 
    <input type="text" className="form-control" id="fullname" name="fullname"  onChange={this.handleInputChange}></input>
    </Col>
      </Row>
      <hr></hr>
      <Row>
  <Col xs={6} md={1}>
  <h1>6a</h1>
  </Col>
  <Col xs={6} md={10}>
  Ordinary dividends 
  <input type="text" className="form-control" id="fullname" name="fullname"  onChange={this.handleInputChange}></input>
  </Col>
    </Row>
    <hr></hr>
    <Row>
  <Col xs={6} md={1}>
  <h1>6b</h1>
  </Col>
  <Col xs={6} md={10}>
  Qualified dividends 
  <input type="text" className="form-control" id="fullname" name="fullname"  onChange={this.handleInputChange}></input>
  </Col>
    </Row>
    <hr></hr>
    <Row>
  <Col xs={6} md={1}>
  <h1>7</h1>
  </Col>
  <Col xs={6} md={10}>
  Net short-term capital gain (loss)
  <input type="text" className="form-control" id="fullname" name="fullname"  onChange={this.handleInputChange}></input>
  </Col>
    </Row>
    <br></br>
    <Row>
    <button className="button-back"><NavLink to='/second'>Previous</NavLink></button> 
  <button className="button-back"><NavLink to='/first'>Next</NavLink></button> 
    </Row>
  </td>
    <PartnerInfo />
  </tr>
</tbody>
</Table> 
    </div>
)
export default ThirdStep;