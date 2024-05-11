import "../../App.css";
import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button,  Dropdown,  Pagination,  Search } from 'semantic-ui-react';
import {
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableCell,
    TableBody,
    Table,
  } from 'semantic-ui-react';
import CommonDashboard from "./CommonDashboard";
import { getProjectDetails } from "../../redux/projectRelated/projectHandle";
import { sortOption } from "./OptionConstants";

const ProjectListing = () => {  
  const dispatch = useDispatch();
  const { projectDetails } = useSelector(state => state.projectlist);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projectDetails);
  const [sortBy, setSortBy] = useState(null);

  const handleSearchChange = (e, { value }) => {
    setSearchTerm(value);
    const filterdList = projectDetails.filter(project =>      
     
      project.project_name.toLowerCase().includes(value.toLowerCase()) ||
      project.reason.toLowerCase().includes(value.toLowerCase()) ||
      project.type.toLowerCase().includes(value.toLowerCase()) ||
      project.division.toLowerCase().includes(value.toLowerCase()) ||
      project.category.toLowerCase().includes(value.toLowerCase()) ||
      project.priority.toLowerCase().includes(value.toLowerCase()) ||
      project.department.toLowerCase().includes(value.toLowerCase()) ||
      project.location.toLowerCase().includes(value.toLowerCase()) ||
      project.status.toLowerCase().includes(value.toLowerCase()) 
    );  
    setFilteredProjects(filterdList)
  };


  const sortProjectList = (coloumn_name) => {
    let sortedProjects =  [...filteredProjects];
    if(coloumn_name === "project_name"){
      sortedProjects = [...filteredProjects].sort((a, b) =>
        a.project_name.localeCompare(b.project_name)
      );
    }
    if(coloumn_name === "reason"){
      sortedProjects = [...filteredProjects].sort((a, b) =>
        a.reason.localeCompare(b.reason)
      );
    }
    if(coloumn_name === "type"){
      sortedProjects = [...filteredProjects].sort((a, b) =>
        a.type.localeCompare(b.type)
      );
    }
    if(coloumn_name === "division"){
      sortedProjects = [...filteredProjects].sort((a, b) =>
        a.division.localeCompare(b.division)
      );
    }
    if(coloumn_name === "category"){
      sortedProjects = [...filteredProjects].sort((a, b) =>
        a.category.localeCompare(b.category)
      );
    }
    if(coloumn_name === "priority"){
      sortedProjects = [...filteredProjects].sort((a, b) =>
        a.priority.localeCompare(b.priority)
      );
    }
    if(coloumn_name === "department"){
      sortedProjects = [...filteredProjects].sort((a, b) =>
        a.department.localeCompare(b.department)
      );
    }
    if(coloumn_name === "location"){
      sortedProjects = [...filteredProjects].sort((a, b) =>
        a.location.localeCompare(b.location)
      );
    }
    if(coloumn_name === "status"){
      sortedProjects = [...filteredProjects].sort((a, b) =>
        a.status.localeCompare(b.status)
      );
    }  
    setFilteredProjects(sortedProjects);
  };

  const handleDropdownChange = (e,{value}) => {
    setSortBy(value);
    sortProjectList(value);
}

useEffect(() => {
    dispatch(getProjectDetails("Project"));
    
}, [dispatch]);

return(
    <div >
        <CommonDashboard page_name = {"Project Listing"}/>
        <div className="projectlist-content">
          <div>
            <Search 
            input={{icon:"search",iconPosition:"left"}}
            placeholder="Search"
            value={searchTerm}
            onSearchChange={handleSearchChange}
            ></Search>
            <Dropdown
             className="sortDropdown"
             fluid
             selection
             value={sortBy}
             options={sortOption}
             onChange={handleDropdownChange}
            ></Dropdown>
          </div>       
        <Table basic='very'>
    <TableHeader className="table-header">
      <TableRow>
        <TableHeaderCell>Project Name</TableHeaderCell>
        <TableHeaderCell>Reason</TableHeaderCell>
        <TableHeaderCell>Type</TableHeaderCell>
        <TableHeaderCell>Division</TableHeaderCell>
        <TableHeaderCell>Category</TableHeaderCell>
        <TableHeaderCell>Priority</TableHeaderCell>
        <TableHeaderCell>Dept.</TableHeaderCell>
        <TableHeaderCell>Location</TableHeaderCell>
        <TableHeaderCell>Status</TableHeaderCell>
        <TableHeaderCell></TableHeaderCell>
        <TableHeaderCell></TableHeaderCell>
        <TableHeaderCell></TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
    {filteredProjects && Object.entries(filteredProjects).map(item => (
      <TableRow>
      <TableCell>{item[1].project_name}</TableCell>
      <TableCell>{item[1].reason}</TableCell>
      <TableCell>{item[1].type}</TableCell>
      <TableCell>{item[1].division}</TableCell>
      <TableCell>{item[1].category}</TableCell>
      <TableCell>{item[1].priority}</TableCell>
      <TableCell>{item[1].department}</TableCell>
      <TableCell>{item[1].location}</TableCell>
      <TableCell>{item[1].status}</TableCell>
      <TableCell><Button circular className="blueButton">Start</Button></TableCell>
      <TableCell><Button circular className="blueButton">Close</Button></TableCell>
      <TableCell><Button circular className="blueButton">Cancel</Button></TableCell>
    </TableRow>
    ))} 
    </TableBody>
  </Table>
            <Pagination className="pagination" defaultActivePage={2} totalPages={5} />
        </div>
        
    </div>
)}

export default ProjectListing;





// import { useState } from 'react';
// import {
//     CssBaseline,
//     Box,
//     Toolbar,
//     List,
//     Typography,
//     Divider,
//     IconButton,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import { AppBar, Drawer } from '../../components/styles';
// import Logout from '../Logout';
// import SideBar from './SideBar';
// import AdminProfile from './AdminProfile';
// import AdminHomePage from './AdminHomePage';

// import AddStudent from './studentRelated/AddStudent';
// import SeeComplains from './studentRelated/SeeComplains';
// import ShowStudents from './studentRelated/ShowStudents';
// import StudentAttendance from './studentRelated/StudentAttendance';
// import StudentExamMarks from './studentRelated/StudentExamMarks';
// import ViewStudent from './studentRelated/ViewStudent';

// import AddNotice from './noticeRelated/AddNotice';
// import ShowNotices from './noticeRelated/ShowNotices';

// import ShowSubjects from './subjectRelated/ShowSubjects';
// import SubjectForm from './subjectRelated/SubjectForm';
// import ViewSubject from './subjectRelated/ViewSubject';

// import AddTeacher from './teacherRelated/AddTeacher';
// import ChooseClass from './teacherRelated/ChooseClass';
// import ChooseSubject from './teacherRelated/ChooseSubject';
// import ShowTeachers from './teacherRelated/ShowTeachers';
// import TeacherDetails from './teacherRelated/TeacherDetails';

// import AddClass from './classRelated/AddClass';
// import ClassDetails from './classRelated/ClassDetails';
// import ShowClasses from './classRelated/ShowClasses';

//     const [open, setOpen] = useState(false);
//     const toggleDrawer = () => {
//         setOpen(!open);
//     };

//     return (
//         <>
//             <Box sx={{ display: 'flex' }}>
//                 <CssBaseline />
//                 <AppBar open={open} position='absolute'>
//                     <Toolbar sx={{ pr: '24px' }}>
//                         <IconButton
//                             edge="start"
//                             color="inherit"
//                             aria-label="open drawer"
//                             onClick={toggleDrawer}
//                             sx={{
//                                 marginRight: '36px',
//                                 ...(open && { display: 'none' }),
//                             }}
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Typography
//                             component="h1"
//                             variant="h6"
//                             color="inherit"
//                             noWrap
//                             sx={{ flexGrow: 1 }}
//                         >
//                             Admin Dashboard
//                         </Typography>
//                     </Toolbar>
//                 </AppBar>
//                 <Drawer variant="permanent" open={open} sx={open ? styles.drawerStyled : styles.hideDrawer}>
//                     <Toolbar sx={styles.toolBarStyled}>
//                         <IconButton onClick={toggleDrawer}>
//                             <ChevronLeftIcon />
//                         </IconButton>
//                     </Toolbar>
//                     <Divider />
//                     <List component="nav">
//                         <SideBar />
//                     </List>
//                 </Drawer>
//                 <Box component="main" sx={styles.boxStyled}>
//                     <Toolbar />
//                     <Routes>
//                         <Route path="/" element={<AdminHomePage />} />
//                         <Route path='*' element={<Navigate to="/" />} />
//                         <Route path="/Admin/dashboard" element={<AdminHomePage />} />
//                         <Route path="/Admin/profile" element={<AdminProfile />} />
//                         <Route path="/Admin/complains" element={<SeeComplains />} />

//                         {/* Notice */}
//                         <Route path="/Admin/addnotice" element={<AddNotice />} />
//                         <Route path="/Admin/notices" element={<ShowNotices />} />

//                         {/* Subject */}
//                         <Route path="/Admin/subjects" element={<ShowSubjects />} />
//                         <Route path="/Admin/subjects/subject/:classID/:subjectID" element={<ViewSubject />} />
//                         <Route path="/Admin/subjects/chooseclass" element={<ChooseClass situation="Subject" />} />

//                         <Route path="/Admin/addsubject/:id" element={<SubjectForm />} />
//                         <Route path="/Admin/class/subject/:classID/:subjectID" element={<ViewSubject />} />

//                         <Route path="/Admin/subject/student/attendance/:studentID/:subjectID" element={<StudentAttendance situation="Subject" />} />
//                         <Route path="/Admin/subject/student/marks/:studentID/:subjectID" element={<StudentExamMarks situation="Subject" />} />

//                         {/* Class */}
//                         <Route path="/Admin/addclass" element={<AddClass />} />
//                         <Route path="/Admin/classes" element={<ShowClasses />} />
//                         <Route path="/Admin/classes/class/:id" element={<ClassDetails />} />
//                         <Route path="/Admin/class/addstudents/:id" element={<AddStudent situation="Class" />} />

//                         {/* Student */}
//                         <Route path="/Admin/addstudents" element={<AddStudent situation="Student" />} />
//                         <Route path="/Admin/students" element={<ShowStudents />} />
//                         <Route path="/Admin/students/student/:id" element={<ViewStudent />} />
//                         <Route path="/Admin/students/student/attendance/:id" element={<StudentAttendance situation="Student" />} />
//                         <Route path="/Admin/students/student/marks/:id" element={<StudentExamMarks situation="Student" />} />

//                         {/* Teacher */}
//                         <Route path="/Admin/teachers" element={<ShowTeachers />} />
//                         <Route path="/Admin/teachers/teacher/:id" element={<TeacherDetails />} />
//                         <Route path="/Admin/teachers/chooseclass" element={<ChooseClass situation="Teacher" />} />
//                         <Route path="/Admin/teachers/choosesubject/:id" element={<ChooseSubject situation="Norm" />} />
//                         <Route path="/Admin/teachers/choosesubject/:classID/:teacherID" element={<ChooseSubject situation="Teacher" />} />
//                         <Route path="/Admin/teachers/addteacher/:id" element={<AddTeacher />} />

//                         <Route path="/logout" element={<Logout />} />
//                     </Routes>
//                 </Box>
//             </Box>
//         </>
    