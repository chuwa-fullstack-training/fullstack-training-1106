import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ColorComponent from './ColorComponent';
import Test from './Test'

function AppRouter({selectColor, selectName, pairs, updateName, selectedName}){
    <Routes>
        <Route  path='/' element={<Test />}/>
        <Route path='/c/:name' element={<ColorComponent selectColor={selectColor} selectName={selectName} updateName={updateName}  pairs={pairs} selectedName={selectedName}/>}/>
    </Routes>
}

export default AppRouter;