import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home/Home.jsx';
import JobSearch from './jobSearch/JobSearch.jsx';
import SavedJobs from './savedJobs/SavedJobs.jsx';
import AppliedJobs from './appliedJobs/AppliedJobs.jsx';
import Timelines from './timelines/Timelines.jsx';
import Feedback from './feedback/Feedback.jsx';
import VerizonInfo from './verizonInfo/VerizonInfo.jsx';

class App extends Component {
    render() {
       return (
          <Router>
             <div>
                <h2>Welcome to Verizon Job Portal</h2>
                <ul>
                   <li><Link to={'/'}>Career Home</Link></li>
                   <li><Link to={'/app/jobSearch'}>Job Search</Link></li>
                   <li><Link to={'/app/savedJobs'}>Saved Jobs</Link></li>
                   <li><Link to={'/app/appliedJobs'}>Applied Jobs</Link></li>
                   <li><Link to={'/app/timelines'}>Timelines</Link></li>                   
                   <li><Link to={'/app/feedback'}>Feedback</Link></li>
                   <li><Link to={'/app/verizonInfo'}>Verizon Info</Link></li>
                </ul>
                <hr />
                
                <Switch>
                   <Route exact path='/' component={Home} />
                   <Route exact path='/app/jobSearch' component={JobSearch} />
                   <Route exact path='/app/savedJobs' component={SavedJobs} />
                   <Route exact path='/app/appliedJobs' component={AppliedJobs} />
                   <Route exact path='/app/timelines' component={Timelines} />
                   <Route exact path='/app/feedback' component={Feedback} />
                   <Route exact path='/app/verizonInfo' component={VerizonInfo} />
                </Switch>
             </div>
          </Router>
       );
    }
 }

export default App;