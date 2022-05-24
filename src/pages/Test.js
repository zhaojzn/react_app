import React from "react";
import axios from "axios";

const fetchList = async () =>{
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  return res;
}

class Test extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0, test: "Test", json: ""};
      
    }
    
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
        
      }));
    }
  
    
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
      this.json = fetchList();
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
          Seconds: {this.state.seconds}
          <br></br>
          Variable: {this.state.test}
          <br></br>
        </div>
      );
    }
  }

export default Test;