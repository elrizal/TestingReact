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

const PartnerInfo = props => (
    <div>

    <p className={{'justify-text':'left'}}>Partner's Share of Profit, Loss and Capital <span class="dot">?</span></p>
      <div className="card">
      <Grid >
      <Row >
      <Col xs={12} md={2}>
    <br></br>
      </Col>
      <Col xs={12} md={5}>
      Beginning:<br></br>
      </Col>
      <Col xs={12} md={5}>
      Ending:<br></br>
      </Col>
      </Row>
      </Grid>
      <Grid>
      <Row>
      <Col xs={12} md={2} className="mid-center">
      Profit
      </Col>
      <Col xs={12} md={5}>
      <input type="text" className="form-control" onChange={this.handleInputChange} style={{'width': '90%', 'display': 'inline'}}></input> <b>&nbsp;%</b>
      </Col>
      <Col xs={12} md={5}>
      <input type="text" className="form-control" onChange={this.handleInputChange} style={{'width': '90%', 'display': 'inline'}}></input> <b>&nbsp;%</b>
      </Col>
      </Row>
      </Grid>
  </div>
  <div className="card-loss">
      <Grid>
      <Row>
      <Col className="mid-center" xs={12} md={2}>
      Loss
      </Col>
      <Col xs={12} md={5}>
      <input type="text" className="form-control" onChange={this.handleInputChange} style={{'width': '90%', 'display': 'inline'}}></input> <b>&nbsp;%</b>
      </Col>
      <Col xs={12} md={5}>
      <input type="text" className="form-control" onChange={this.handleInputChange} style={{'width': '90%', 'display': 'inline'}}></input> <b>&nbsp;%</b>
      </Col>
      </Row>
      </Grid>
      </div>
      <div className="card">
      <Grid>
      <Row>
      <Col className="mid-center" xs={12} md={2}>
      Capital
      </Col>
      <Col xs={12} md={5}>
      <input type="text" className="form-control" onChange={this.handleInputChange}style={{'width': '90%', 'display': 'inline'}}></input> <b>&nbsp;%</b>
      </Col>
      <Col xs={12} md={5}>
      <input type="text" className="form-control" onChange={this.handleInputChange}style={{'width': '90%', 'display': 'inline'}}></input> <b>&nbsp;%</b>
      </Col>
      </Row>
      </Grid>
      </div>
      <Grid>
      <Row>
      <Col className="mid-center" xs={12} md={6}>
      Partner’s share of liabilities at year end: 
      </Col>
      <Col xs={12} md={6}>
      <b>$&nbsp;</b><input type="text" className="form-control" onChange={this.handleInputChange}style={{'width': '85%', 'display': 'inline'}}></input>
      </Col>
      </Row>
      <Row>
      <Col className="mid-center" xs={12} md={6}>
      Qualified nonrecourse financing:
      </Col>
      <Col xs={12} md={6}>
      <b>$&nbsp;</b><input type="text" className="form-control" onChange={this.handleInputChange}style={{'width': '85%', 'display': 'inline'}}></input>
      </Col>
      </Row>
      <Row>
      <Col className="mid-center" xs={12} md={6}>
      Recourse
      </Col>
      <Col xs={12} md={6}>
      <b>$&nbsp;</b><input type="text" className="form-control" onChange={this.handleInputChange}style={{'width': '85%', 'display': 'inline'}}></input> 
      </Col>
      </Row>
      <hr></hr>
      <Row>
      <Col className="mid-center" xs={12} md={6}>
      Partner’s capital account analysis: 
      </Col>
      <Col xs={12} md={6}>
      <b>$&nbsp;</b><input type="text" className="form-control" onChange={this.handleInputChange}style={{'width': '85%', 'display': 'inline'}}></input>
      </Col>
      </Row>
      <Row>
      <Col className="mid-center" xs={12} md={6}>
      Current year increase (decrease) 
      </Col>
      <Col xs={12} md={6}>
      <b>$&nbsp;</b><input type="text" className="form-control" onChange={this.handleInputChange}style={{'width': '85%', 'display': 'inline'}}></input> 
      </Col>
      </Row>

      <Row>
      <Col className="mid-center" xs={12} md={6}>
      Ending capital account 
      </Col>
      <Col xs={12} md={6}>
      <b>$&nbsp;</b><input type="text" className="form-control" onChange={this.handleInputChange}style={{'width': '85%', 'display': 'inline'}}></input> 
      </Col>
      </Row>
      <br></br>

      <Row>
     
     <Col xs={6} md={3}>
     <div className="md-checkbox">
     <input id="i2" type="checkbox" onChange={this.handleInputChange}/>
     <label htmlFor="i2">Tax basis</label>
   </div>
     </Col>
     <Col  xs={6} md={3}>
     <div className="md-checkbox">
     <input id="i3" type="checkbox" onChange={this.handleInputChange}/>
     <label htmlFor="i3">GAAP</label>
   </div>
     </Col>
     <Col xs={6} md={3}>
     <div className="md-checkbox">
        <input id="i4" type="checkbox" onChange={this.handleInputChange}/>
        <label htmlFor="i4">Sect.704(b)</label>
      </div>

     </Col>
     <Col xs={6} md={3}>
     <div className="md-checkbox">
        <input id="i5" type="checkbox" onChange={this.handleInputChange}/>
        <label htmlFor="i5">Other</label>
      </div>
     </Col>
     </Row>
     <Row>
    <Col xs={12} md={8}>
    Did this person contribute property with a built-in gain or loss?
    </Col>
    <Col xs={12} md={4}>
    <div style={{ 'display': 'inline'}}>
    <div className="md-checkbox">
    <input id="i6" type="checkbox" onChange={this.handleInputChange}/>
    <label htmlFor="i6">Yes</label></div><div className="md-checkbox"> <input id="i7" type="checkbox" onChange={this.handleInputChange}/>
        <label htmlFor="i7">No</label>
      </div>
    </div>
    </Col>
      </Row>
     
    </Grid>


</div>
)
export default PartnerInfo;