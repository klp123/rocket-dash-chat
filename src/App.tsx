import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
// import User from './user/user';
// import List from './list/list';
import './App.css';
import SidebarHome from './sidebar/home/home';
import UserHome from './user-details/home/home';

function App() {
  const [data, setDataState] = useState('sharing data');
  const [formData, setFormState] = useState<any>([]);

  const onSubmit = () => {
    setDataState('shared data  modified');
  }

  const onClickSubmit = (form: any) => {
    setFormState([...formData,form]);
  }

  const onTriggerEdit = (form:any) => {
    let data = form;

  }

  return (
    <div className="App main-div">
      <SidebarHome/>
      <UserHome/>
    </div>
  );
}


export default App;


{/* <List handleEdit={onTriggerEdit} formData={formData}/> */}
