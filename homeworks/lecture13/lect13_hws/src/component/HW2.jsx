// import { useState } from 'react';
// import '../App.css'
// function HW2() {
//   const [curBar, setCurBar] = useState(null);
//   const main = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
//   const footer = [17, 18, 19, 20];
//   const handleOnClick = (id) => {
//     setCurBar(id);
//   }
//   return (
//     <div className='hw2'>
//       <div className='phone'>
//         <div className='screen'>
//           <div>
//             <div className='statusBar'>{curBar || 'status bar'}</div>
//           </div>
//           <div className='main'>
//             {main.map(btn => (
//               <div key={btn} className="item">
//                 <button className='phoneBtn' onClick={() => { handleOnClick(btn) }}>{btn}</button>
//               </div>
//             ))
//             }
//           </div>
//           <div className='footer'>
//             {footer.map(btn => (
//               <div key={btn} className="item">
//                 <button className='phoneBtn' onClick={() => { handleOnClick(btn) }}>{btn}</button>
//               </div>
//             ))
//             }
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default HW2



import '../App.css'
import { Component } from 'react';

class HW2 extends Component {
  constructor() {
    super();
    this.state = ({
      curBar: null
    })
  }

  handleOnClick = (id) => {
    this.setState({
      curBar: id
    })
  }
  render() {
    const main = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const footer = [17, 18, 19, 20];
    return (
      <div className='hw2' >
        <div className='phone'>
          <div className='screen'>
            <div>
              <div className='statusBar'>{this.state.curBar || 'status bar'}</div>
            </div>
            <div className='main'>
              {main.map(btn => (
                <div key={btn} className="item">
                  <button className='phoneBtn' onClick={() => { this.handleOnClick(btn) }}>{btn}</button>
                </div>
              ))
              }
            </div>
            <div className='footer'>
              {footer.map(btn => (
                <div key={btn} className="item">
                  <button className='phoneBtn' onClick={() => { this.handleOnClick(btn) }}>{btn}</button>
                </div>
              ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

}
export default HW2
