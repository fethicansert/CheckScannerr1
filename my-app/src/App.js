import Container from "./components/layout-components/Container";
import Header from "./components/layout-components/Header";
import Layout from "./components/layout-components/Layout";
import { Route, Routes } from "react-router-dom";
import CheckScanPage from "./components/checkscan-page/CheckScanPage";
import LoginPage from "./components/login-page/LoginPage";
import AddUserPage from "./components/adduser-page/AddUserPage"


import './css/checkscan-page.css'
import './css/header.css';
import './css/sidebar.css'

import DataManagementPage from "./components/datamanagement-page/DataManagementPage";
import UserListPage from "./components/userlist-page/UserListPage";
import LogsPage from "./components/logs-page/LogsPage";

function App() {

  return (
    <div className="App">

      <Container >

        <Header title={"CWSCANNER"} />

        <Routes>

          <Route index path="/" element={<LoginPage />} />
 
          <Route path="/layout" element={<Layout />}>

            <Route path="checkscan" element={<CheckScanPage />}></Route>

            <Route path="add-user" element={<AddUserPage />}></Route>

            <Route path="data-management" element={<DataManagementPage />}></Route>

            <Route path="user-list" element={<UserListPage />}></Route>

            <Route path="logs" element={<LogsPage />}></Route>

          </Route>


        </Routes>
       

      </Container>

    </div>
  );
}

export default App;
