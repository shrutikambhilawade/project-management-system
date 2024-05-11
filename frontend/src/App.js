import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Homepage from './pages/Homepage';
// import AdminDashboard from './pages/admin/AdminDashboard';
// import StudentDashboard from './pages/student/StudentDashboard';
// import TeacherDashboard from './pages/teacher/TeacherDashboard';
import LoginPage from './pages/LoginPage';
import ProjectDashboard from './pages/Dashboard/projectDashboard';
import CreateProject from './pages/Dashboard/createProject';
import ProjectListing from './pages/Dashboard/projectListing';
//import CommonDashboard from './pages/Dashboard/CommonDashboard';
// import AdminRegisterPage from './pages/admin/AdminRegisterPage';
// import ChooseUser from './pages/ChooseUser';

const App = () => {

  return (
    <Router>
      {
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<ProjectDashboard />} />
          <Route path="/dashboard/createProject" element={<CreateProject />} />
          <Route path="/dashboard/projectListing" element={<ProjectListing />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>}

    </Router>
  )
}

export default App;



//   {/* <Route path="/choose" element={<ChooseUser visitor="normal" />} />
//           <Route path="/chooseasguest" element={<ChooseUser visitor="guest" />} /> */}
// {/* 
//           <Route path="/Adminlogin" element={<LoginPage role="Admin" />} /> */}
//           {/* <Route path="/Studentlogin" element={<LoginPage role="Student" />} />
//           <Route path="/Teacherlogin" element={<LoginPage role="Teacher" />} />
//           <Route path="/Parentlogin" element={<LoginPage role="Parent" />} /> */}




