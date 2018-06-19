import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Table from 'react-bootstrap/lib/Table';
import '../../App.css';
import Clearfix from 'react-bootstrap/lib/Clearfix';

const FirstStep = props => (
  <div>
    <Table responsive>
      <thead>
        <tr>
          <th style={{
            width: '20%'
          }}>
            <h1>Schedule K-1</h1>
            <h2>(Form 1065)</h2>
          </th>
          <th tyle={{
            width: '50%'
          }}>
            <h1>Partner’s Share of Income, Deductions, Credits, etc.</h1>
            <h2>For calendar year 2017, or tax year</h2>
          </th>
          <th className='yearBox'>
            <b className="halfyear">20</b>
            <b className="otheryear">17</b>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{
            'max-width': '22px'
          }}>1
          </td>
          <td>Partner's Identifiying Number;
          </td>
          <td>
            <input type="text" className="form-control" onChange={this.handleInputChange}></input>

          </td>
        </tr>
        <tr>
          <td style={{
            'max-width': '22px'
          }}>2
          </td>
          <td>Partnership’s name, address, city, state, and ZIP code
          </td>
          <td>
            <input type="text" className="form-control" onChange={this.handleInputChange}></input>
          </td>
        </tr>
        <tr>
          <td style={{
            'max-width': '22px'
          }}>3
          </td>
          <td>IRS Center where partnership filed return
          </td>
          <td>
            <input type="text" className="form-control" onChange={this.handleInputChange}></input>
          </td>
        </tr>
        <tr>
          <td style={{
            'max-width': '22px'
          }}>4
          </td>
          <td>Check if this is a publicly traded partnership (PTP)
          </td>
          <td>
            <form>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                onChange={this.handleInputChange}></input>
            </form>
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
)
export default FirstStep;