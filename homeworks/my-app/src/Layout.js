import React from 'react';
import './Layout.css';

const Layout = () => {
    return (
        <div class="container">
          <div className ="flex-container"> 
           <div className='text'>Header</div>
           </div>
              <div className ="flex-container">
                <div className='text nav'>Nav</div>
                </div>
            <div class="flex-row-container">
                <div class = "col-aside">
                <div className='text aside'>Aside</div>
                </div>
                <div class="col-section">
                <div className='text aside' >Section</div>
                </div>
      
            </div>
            <div className ="flex-container"> 
           <div className='text'>Footer</div>
           </div>
          

        </div>
    )
}
export default Layout;