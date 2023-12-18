import React from "react";
import { debounce } from "lodash";
import "./App.css";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = { currStr: "", resultStr: "" };
   }

   debouncedUpdateResult = debounce((inputStr) => {
      this.setState({
         resultStr: /^\d+$/.test(inputStr)
            ? inputStr + "th"
            : inputStr,
      })
   }, 300);

   handleChange = (event) => {
      const inputStr = event.target.value;
      this.setState({
         currStr: inputStr,
      });

      this.debouncedUpdateResult(inputStr);
   }

   render() {
      return (
         <>
            <input
               type="text"
               name="input-box"
               value={this.state.currStr}
               onChange={this.handleChange}
            />
            <input type="text" value={this.state.resultStr} readOnly />
         </>
      );
   }
}

export default App;
