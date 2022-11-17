import React from 'react'
import {Router,BrowserRouter, Routes,Route,Link} from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";
import {CustomRouter} from "../CustomRouter";



const App = () => {
    return(
        <div className='ui container'>
           <CustomRouter history={history}>
               <Header/>
               <Routes>
             <Route path='/' exact element={<StreamList/>}/>
             <Route path='/streams/new' exact element={<StreamCreate/>}/>
             <Route path='/streams/edit/:streamId' exact element={<StreamEdit/>}/>
             <Route path='/streams/delete' exact element={<StreamDelete/>}/>
             <Route path='/streams/show' exact element={<StreamShow/>}/>
            </Routes>
           </CustomRouter>
        </div>
    )
}

export default App