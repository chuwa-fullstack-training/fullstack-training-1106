
// import { useState } from 'react'
// import '../App.css'
// function HW4() {
//   const [inputValue, setInputValue] = useState(null);
//   const [displayContent, setDisplayContent] = useState(null);
//   const convert = (num) => {
//     const arr = ['th', 'st', 'nd', 'rd'];
//     const v = num % 100;
//     console.log((v - 20) % 10);
//     return num + (arr[(v - 20) % 10] || arr[v] || arr[0]);
//   }
//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);
//     if (/^\d+$/.test(value)) {
//       setDisplayContent(convert(parseInt(value, 10)));
//     }
//     else {
//       setDisplayContent(value);
//     }
//   }
//   return (
//     <div className="hw4Container">
//       <input value={inputValue} onChange={handleInputChange}></input>
//       <div className='output'>{displayContent}</div>
//     </div>
//   )
// }
// export default HW4



import { Component } from 'react'
import '../App.css'
class HW4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null,
      displayContent: null
    };
  }
  convert = (num) => {
    const arr = ['th', 'st', 'nd', 'rd'];
    const v = num % 100;
    return num + (arr[(v - 20) % 10] || arr[v] || arr[0]);
  }
  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState({ inputValue: value });
    if (/^\d+$/.test(value)) {
      this.setState({ displayContent: this.convert(parseInt(value, 10)) });
    }
    else {
      this.setState({ displayContent: value });
    }
  }
  render() {


    return (
      <div className="hw4Container">
        <input value={this.state.inputValue} onChange={this.handleInputChange}></input>
        <div className='output'>{this.state.displayContent}</div>
      </div>
    )
  }
}
export default HW4
