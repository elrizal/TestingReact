import React from 'react';
import '../../App.css';
import '../../bar.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Navigation = props => (
    <div>
    <nav>
       <ul class="progress-indicator">
<li class="completed">
<NavLink to='/'><span class="bubble"></span></NavLink>
Part I
</li>
<li class="completed">
<span class="bubble-top"></span>

<NavLink to='/second'><span class="bubble"></span></NavLink>
Part II  
</li>
<li>
<NavLink to='/third'><span class="bubble"></span></NavLink>
Part III
</li>
</ul>
  </nav> 
   
  <div className="spacer">
  <span class="bubble-top"></span>
</div>
    </div>
)
export default Navigation;