import React,{ useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components 
import Loginform from './components/Loginform'; // Loginform components for authentication
import Navbar from './components/Navbar'; // Navbar components for navigation

//pages
import Enroll from './pages/Enroll'; // Enroll page for enrolling staff
import Manage from './pages/Manage'; // Staff Details page management
import Dashboard from './pages/Dashboard'; // Dashboard
import Profile from './pages/Profile'; // Profile Management
import Documentation from './pages/Documentation'; // Website Document
import Help from './pages/Help'; // For Help related to website

function App() {
  if(sessionStorage.session === undefined){  // checking session in sessionStorage
    sessionStorage.session = false; // setting session in session storage if it's undefined.
  }
  if(localStorage.accounts === undefined){ // checking accounts in localStorage
    localStorage.accounts = JSON.stringify([{ // setting accounts in localStorage incase it's undefined.
      'firstname':'superuser',
      'lastname':'admin',
      'email':'user@support.com',
      'password':'%G346g9J'
    }])
  }
  const [accounts, setAccounts] = useState(JSON.parse(localStorage.accounts)); // getting localstorage data
  const [session, setSession] = useState(JSON.parse(sessionStorage.session)); // getting sessionStorage data i.e whether session is set or not

  // getting data from enroll to register in localStorage 
  const createAccount = (datum) =>{
    setAccounts([...accounts,datum]);
    return true;
  }
  const removeAccount = (datum) => {
    setAccounts(accounts.filter((e) => {
      return e !== datum;
    }));
  }
  useEffect(()=>{ // updating value when new data is set to accounts state and that value is set to localstorage 
    localStorage.accounts = JSON.stringify(accounts);
  },[accounts]);

  return (
    <BrowserRouter>
      <Navbar session={session}/>
      <Routes>
        <Route exact path="/" element={session ? <Dashboard session={session} accounts={accounts}/>:<Loginform accounts={accounts} setsession={setSession}/>}></Route>
        <Route exact path="/enroll" element={session ? <Enroll accounts={accounts} session={session} setaccount={createAccount}/>:<Loginform accounts={accounts} setsession={setSession}/>}></Route>
        <Route exact path="/manage" element={session ? <Manage session={session} accounts={accounts} removeaccount={removeAccount}/>:<Loginform accounts={accounts} setsession={setSession}/>}></Route>
        <Route exact path="/profile" element={session ? <Profile session={session}/>:<Loginform accounts={accounts} setsession={setSession}/>}></Route>
        <Route exact path="/documentation" element={<Documentation/>}></Route>
        <Route exact path="/help" element={<Help/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
