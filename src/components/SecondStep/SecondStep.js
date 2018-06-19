import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Table from 'react-bootstrap/lib/Table';
import '../../App.css';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from 'react-bootstrap/lib/Button';
import { NavLink, Switch, Route } from 'react-router-dom';
import PartnerInfo from '../PartnerInfo/PartnerInfo';
const SecondStep = props => (
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
        <h2>Part II: Information about the partner</h2> </Col>

        <Col xs={3} md={2}>
        <div className="yearBox"><b className="halfyear">20</b><b className="otheryear">17</b></div> </Col>
        </Row>
        </th>
          </tr>
        </thead>
        <tbody>
    
        <tr>
        <td>Partner's Identifiying Number:
          <input type="text" className="form-control" style={{'padding-bottom': '1px'}} id="pIdNum" onChange={this.handleInputChange}></input>
          
            <FormControlLabel control={<Radio color="primary"/>} label="General partner or LLC member-manager"/>
                    <br></br>
                    <FormControlLabel control={<Radio color="primary"/>} label="Domestic partner"/>
                    <hr></hr>
                    <FormControlLabel control={<Radio color="primary"/>} label="Limited partner or other LLC member"/>
                    <br></br>
                    <FormControlLabel control={<Radio color="primary"/>} label="Foreign partner"/>
        <hr></hr>
      What type of entity is this partner? 
      <input type="text" className="form-control" onChange={this.handleInputChange}></input>
      <hr></hr>
    
      <div className="md-checkbox">
        <input id="i1" type="checkbox" onChange={this.handleInputChange}/>
        <label htmlFor="i1">My partner is a retirement plan(IRA/SEP/etc.)</label>
      </div>
      <Row>
      <button className="button-back"><NavLink to='/'>Previous</NavLink></button> 
    <button className="button-back"><NavLink to='/third'>Next</NavLink></button> 
    </Row>
      </td>
<PartnerInfo />
  </tr>
</tbody>
</Table> 
    </div>
)
export default SecondStep;