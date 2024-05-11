import { Divider, Header, Image, MenuItem, Sidebar  } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../../App.css"
// import logo from "../../assets/Logo.svg"
import Dashboard_active from "../../assets/Dashboard-active.svg";
import Dashboard_inactive from "../../assets/Dashboard.svg";
import Project_list_active from "../../assets/Project-list-active.svg";
import Project_list_inactive from "../../assets/Project-list.svg";
import create_project_active from "../../assets/create-project-active.svg";
import create_project_inactive from "../../assets/create-project.svg";
import logout_img from "../../assets/Logout.svg";
// import CreateProject from "./createProject";
// import ProjectListing from "./projectListing";
// import ProjectDashboard from "./projectDashboard";



const CommonDashboard = (props) => {

    const name = props.page_name;
     return (
        <div>
            <Sidebar                
                className="side-bar"
                inverted
                verticle  
                visible
                width="very thin">              
                <MenuItem as={Link} to="/dashboard">
                {name === "Dashboard" ? 
                    <Image className="sidebar-img1" src={Dashboard_active}/> 
                    : <Image className="sidebar-img1" src={Dashboard_inactive}/> }
                </MenuItem>
                <MenuItem as={Link} to="/dashboard/projectListing" >
                {name === "Project Listing" ?
                <Image className="sidebar-img2" src={Project_list_active}/>: 
                <Image className="sidebar-img2" src={Project_list_inactive}/>}
                </MenuItem >
                <Divider horizontal visible></Divider>
                <MenuItem as={Link} to="/dashboard/createProject">
                {name === "Create Project" ?
                <Image className="sidebar-img3" src={create_project_active} />:
                <Image className="sidebar-img3" src={create_project_inactive}/>}
                </MenuItem>
                <MenuItem as={Link} to="/">
                <Image className="sidebar-img4" src={logout_img}/>
                </MenuItem>
            </Sidebar>

  
    <div className="project_dashboard" style={{height:'50vh'}} > 
            <Header className="dashboard-header" >
                <div className="page-heading">{name}
                {/* <img className="img-opm" src={logo}></img> */}
                </div>
            </Header>
        
            <div  className="page-content" style={{backgroundColor:"grey"}} >
            
            </div>
    </div>  
 

</div>













     );
}

 export default CommonDashboard;


