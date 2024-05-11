//import { Grid, Header, Icon, Image, ImageGroup, Menu, MenuItem, Sidebar, TextArea } from "semantic-ui-react";
//import { Grid } from "semantic-ui-react";
import { Grid, Label, Segment } from "semantic-ui-react";
import "../../App.css"
import CommonDashboard from "./CommonDashboard";
// import CreateProject from "./createProject"; 
// import ProjectListing from "./projectListing"
// import { Route, Routes } from "react-router-dom";
// import logo from "../../assets/Logo.svg"
// import Dashboard_active from "../../assets/Dashboard-active.svg";
// import Dashboard_inactive from "../../assets/Dashboard.svg";
// import Project_list_active from "../../assets/Project-list-active.svg";
// import Project_list_inactive from "../../assets/Project-list.svg";
// import create_project_active from "../../assets/create-project-active.svg";
// import create_project_inactive from "../../assets/create-project.svg";
// import logout_img from "../../assets/Logout.svg";




const ProjectDashboard = () => {

        
     return (
        <div>
        <CommonDashboard page_name = {"Dashboard"}/>
        <Grid container columns={5}>
            <Grid.Column>
                <Segment className="dashboard-count">Total Projects
                <div>8</div></Segment>
            </Grid.Column>
            <Grid.Column>
            <Segment className="dashboard-count">Closed
                <div>8</div></Segment>
            </Grid.Column>
            <Grid.Column>
            <Segment color="aqua" className="dashboard-count">Running
                <div>8</div></Segment>
            </Grid.Column>
            <Grid.Column>
            <Segment className="dashboard-count">Closure Delay
                <div>8</div></Segment>
            </Grid.Column>
            <Grid.Column>
            <Segment className="dashboard-count">Cancelled
                <div>8</div></Segment>
            </Grid.Column>
        </Grid>
        <Label>Department wise - Total Vs Closed</Label>
        <Segment stacked>
            
        </Segment>
        </div>
     );
}

 export default ProjectDashboard;

/* <Grid className="project_dashboard" style={{height:'150vh'}} verticalAlign="middle">
            <Grid className="page-content" >
            <Header className="dashboard-header">
                <div className="page-heading">Dashboard
                <Image className="img-opm" src={logo}></Image></div>
                
            </Header>
            </Grid>

            <Sidebar 
            className="side-bar"  
            visible
            width="very thin">
            <MenuItem  onClick={onClickHandler}>
                {page === "Dashboard" ? 
                    <Image className="sidebar-img" src={Dashboard_active}/> 
                    : <a href="/dashboard"><Image className="sidebar-img" src={Dashboard_inactive}/></a> }
            </MenuItem>
            <MenuItem as='a' onClick={onClickHandler}>
                {page === "Project_List" ?
                <Image className="sidebar-img" src={Project_list_active}/>: 
                <a href="/projectListing"><Image className="sidebar-img" src={Project_list_inactive}/></a>}
            </MenuItem>
            <MenuItem as='a' onClick={onClickHandler}>
                {page === "create_project" ?
                <Image className="sidebar-img" src={create_project_active} />:
                <a href="/createProject"><Image className="sidebar-img" src={create_project_inactive}/></a>}
            </MenuItem>
            <MenuItem onClick={onClickHandler}>
                <a href="/"><Image className="sidebar-img-logout" src={logout_img}/></a>
            </MenuItem>
            </Sidebar>
        </Grid> */


//  <Grid className="header-data" ></Grid>


 //     const [open, setOpen] = useState(false);
//     const toggleDrawer = () => {
//         setOpen(!open);
//     };

// const styles = {
//     boxStyled: {
//         backgroundColor: (theme) =>
//             theme.palette.mode === 'light'
//                 ? theme.palette.grey[100]
//                 : theme.palette.grey[900],
//         flexGrow: 1,
//         height: '100vh',
//         overflow: 'auto',
//     },
//     toolBarStyled: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'flex-end',
//         px: [1],
//     },
//     drawerStyled: {
//         display: "flex"
//     },
//     hideDrawer: {
//         display: 'flex',
//         '@media (max-width: 600px)': {
//             display: 'none',
//         },
//     },
// }


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