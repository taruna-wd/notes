import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter , Route  , createRoutesFromElements} from 'react-router-dom';
import { NotesProvider } from './context/NotesContext';
import { DrawingProvider } from './context/DrawingContext'; 
import Reminder from './components/Reminder/Reminder';
import Archive from './components/Archive/Archive';
import Trash from './components/Trash/Trash';
import Layout from './components/layout/Layout';
import Notes from './components/Notes/Notes';
import Tools from './components/Drawing/Tools';
import Login from './components/Forms/Login';
import Signup from './components/Forms/Signup';
// import ProtectedRoute from './context/ProtectedRoute';


const router = createBrowserRouter ( 
  createRoutesFromElements(
    <Route path="/" element = {<Layout/>} >
      
      <Route path="/login"  element = {<Login/>}/> 
      <Route path="/signup"  element = {<Signup/>}/>  
    <Route  >
      <Route index  element = {<Notes/>}/> 
      <Route path="notes"  element = {<Notes/>}/> 
      <Route path="reminder"  element = {<Reminder/>}/> 
      <Route path="archive" element={<Archive />} />
      <Route path="trash"  element = {<Trash/>}/> 
      <Route path="notes/:id" element={
    <DrawingProvider>
      <Tools />
    </DrawingProvider>
  }
/> 

    </Route>
    </Route>

    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotesProvider>
      <RouterProvider router={router} />
    </NotesProvider>
  </React.StrictMode>
);
