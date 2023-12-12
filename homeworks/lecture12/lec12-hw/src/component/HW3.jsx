
// import { useState } from 'react'
// import '../App.css'
// function HW3() {
//   const [count, setCount] = useState(0);
//   const [lastActiveBtn, setLastActiveBtn] = useState(null);
//   const add = (num, btnId) => {
//     setLastActiveBtn(btnId);
//     setCount(count + num);
//   }
//   const reset = () => {
//     setCount(0);
//     setLastActiveBtn(null);
//   }
//   return (
//     <>
//       <div className='btnContainer'>
//         <button className={`incrementBtn ${lastActiveBtn === 1 ? 'active' : ''}`} onClick={() => add(1, 1)}>+1</button>
//         <button className={`incrementBtn ${lastActiveBtn === 2 ? 'active' : ''}`} onClick={() => add(10, 2)}>+10</button>
//         <button className={`incrementBtn ${lastActiveBtn === 3 ? 'active' : ''}`} onClick={() => add(100, 3)}>+100</button>
//         <button className={`incrementBtn ${lastActiveBtn === 4 ? 'active' : ''}`} onClick={() => add(1000, 4)}>+1000</button>
//       </div>
//       <p><label>{count}</label> <button onClick={() => reset()}>reset</button></p>
//     </>
//   )
// }
// export default HW3




import { Component } from 'react'
import '../App.css'
class HW3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      lastActiveBtn: null
    }
  }
  add = (num, btnId) => {
    this.setState({
      lastActiveBtn: btnId,
      count: this.state.count + num
    });
  }
  reset = () => {
    this.setState({
      lastActiveBtn: null,
      count: 0
    });
  }
  render() {
    const { count, lastActiveBtn } = this.state;
    return (
      <>
        <div className='btnContainer'>
          <button className={`incrementBtn ${lastActiveBtn === 1 ? 'active' : ''}`} onClick={() => this.add(1, 1)}>+1</button>
          <button className={`incrementBtn ${lastActiveBtn === 2 ? 'active' : ''}`} onClick={() => this.add(10, 2)}>+10</button>
          <button className={`incrementBtn ${lastActiveBtn === 3 ? 'active' : ''}`} onClick={() => this.add(100, 3)}>+100</button>
          <button className={`incrementBtn ${lastActiveBtn === 4 ? 'active' : ''}`} onClick={() => this.add(1000, 4)}>+1000</button>
        </div>
        <p><label>{count}</label> <button onClick={() => this.reset()}>reset</button></p>
      </>
    )
  }
}
export default HW3