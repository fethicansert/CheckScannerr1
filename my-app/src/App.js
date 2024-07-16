import Container from "./components/main-components/Container";
import Header from "./components/main-components/Header";
import Layout from "./components/main-components/Layout";
import { Route, Routes } from "react-router-dom";
import CheckScanPage from "./components/page-components/CheckScanPage";
import LoginPage from "./components/page-components/LoginPage";
import AddUserPage from "./components/page-components/AddUserPage"
import Main from "./components/main-components/Main";

import './css/checkScanPage.css'
import './css/header.css';
import './css/sidebar.css'
import DataManagementPage from "./components/page-components/DataManagementPage";
import UserListPage from "./components/page-components/UserListPage";
import LogsPage from "./components/page-components/LogsPage";

function App() {

  return (
    <div className="App">

      <Container >

        <Header title={"CWSCANNER"} />

        <Routes>

          <Route index path="/" element={<LoginPage />} />
 
          <Route path="/layout" element={<Layout />}>

            <Route index  element={<Main />}></Route>

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
