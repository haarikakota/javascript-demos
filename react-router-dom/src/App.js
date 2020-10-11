import React from 'react';

import {Link,Route} from 'react-router-dom';

import './App.css';


const HomePage = (props) => {
    console.log(props);
    return(
        <div>
            //one way of updating url instead of dynamically passing
            <Link to='/topics'>TOPICS</Link>

            //another way of updating url
            <button onClick= {()=> props.history.push('/topics')}>TOPICS</button>

            <h1>HOME PAGE!!</h1>
        </div>
    );
};


const TopicsList = (props) => {
    console.log(props);
    return(
        <div>
            <h1>TOPICS LIST!!</h1>
            //Dynamically routing
            <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
            <Link to={`${props.match.url}/14`}>TO TOPIC 14</Link>
            <Link to={`${props.match.url}/21`}>TO TOPIC 21</Link>
        </div>
    );
};


const TopicsDetails = (props) => {
    console.log(props);
    return(
        <div>
            <h1>TOPICS DETAIL LIST : {props.match.params.topicid} </h1>
        </div>
    );
};


function App() {
    return (
      <div>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/topics' component={TopicsList}/>
          <Route path='/topics/:topicid' component={TopicsDetails}/>
     </div> 
    );
  }
  

export default App;

