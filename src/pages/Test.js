import React from "react";
import axios from "axios";

const fetchList = async () =>{
  const res = await axios.get("https://216.232.179.126:8080");
  console.log(res);
  return res.data.message;
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
      this.apiCall().then(result => this.setState({
        json: result
      }))
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }

    apiCall(){
      return fetchList()
    }
  
    render() {
      return (
        <div>
          Seconds: {this.state.seconds}
          <br></br>
          Variable: {this.state.test}
          <br></br>
          API: {this.state.json}
        </div>
      );
    }
  }

export default Test;