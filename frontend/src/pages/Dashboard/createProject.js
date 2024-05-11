import "../../App.css";
import {  Button, Dropdown, FormTextArea, Grid,  Segment, TextArea} from 'semantic-ui-react'
import { useDispatch } from "react-redux";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from "react";
import CommonDashboard from "./CommonDashboard";
import { saveProjectDetails } from "../../redux/projectRelated/projectHandle";
import { Category, Department, Division, Location, Priority, Reason, Type } from "./OptionConstants";
// import { useNavigate, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerUser } from '../../../redux/userRelated/userHandle';
// import Popup from '../../../components/Popup';
// import { underControl } from '../../../redux/userRelated/userSlice';
// import { getAllSclasses } from '../../../redux/sclassRelated/sclassHandle';
// import React, { useEffect, useState } from 'react';

const CreateProject = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false)
  const [projectName , setProjectName] = useState('');
  const [reasonValue, setReason] = useState('');
  const [typeValue, setType] = useState('');
  const [divisionValue, setDivision] = useState('')
  const [categoryValue, setCategory] = useState('')
  const [priorityValue, setPriority] = useState('')
  const [departmentValue, setDepartment] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [locationValue, setLocation] = useState('')

  const onSaveProject=(event)=>{
        event.preventDefault();
        const project_name = projectName;
        const reason = reasonValue;
        const type = typeValue;
        const division = divisionValue;
        const category = categoryValue;
        const priority = priorityValue;
        const department = departmentValue;
        const start_date = startDate;
        const end_date = endDate;
        const location = locationValue;
        
        const fields = { project_name, reason, type, division, category, priority, department, start_date, end_date, location }
        setLoader(true)
        dispatch(saveProjectDetails(fields,"Project"))
  }


const handleDropdownChange = (event,{id,value}) => {
  id === "reason" && setReason(value);
  id === "type" && setType(value);
  id === "division" && setDivision(value);
  id === "category" && setCategory(value);
  id === "priority" && setPriority(value);
  id === "department" && setDepartment(value);
  id === "location" && setLocation(value);
}

const setSelectedStartDate = (date)=>{
 setStartDate(date);
}

const setSelectedEndDate = (date)=>{
 setEndDate(date);
}

const handleTestChanger = (event,{value}) => {
  setProjectName(value);
}

return (
  <>
    <CommonDashboard
    page_name = {"Create Project"}/>
    <div style={{border :"5px",borderBlockColor:"black"}}>
    <Button className="blueButton" circular onClick={onSaveProject} style={{float:"right"}}>Save Project</Button>
    <Grid columns={2} container >
    <TextArea value={projectName} placeholder='Enter Project Theme' style={{ minHeight: 100 }} onChange={handleTestChanger} />
  </Grid>
  <Grid columns={3} container>

  <Grid.Column>
    <label>Reason</label>
    <Dropdown
    id="reason"
      placeholder='Select an option'
      fluid
      selection
      value={reasonValue}
      options={Reason}
      onChange={handleDropdownChange}
    />
  </Grid.Column>
  <Grid.Column>
  <label>Type</label>
    <Dropdown
     id="type"
   placeholder='Select an option'
   fluid
   selection
   value={typeValue}
   options={Type}
   onChange={handleDropdownChange}
    ></Dropdown>
  </Grid.Column>
  <Grid.Column>
  <label>Divison</label>
  <Dropdown
   id="division"
   placeholder='Select an option'
   fluid
   selection
   value={divisionValue}
   options={Division}
   onChange={handleDropdownChange}
    ></Dropdown>
  </Grid.Column>
  <Grid.Column>
  <label>Category</label>
    <Dropdown
     id="category"
     placeholder='Select an option'
     fluid
     selection
     value={categoryValue}
     options={Category}
     onChange={handleDropdownChange}
    ></Dropdown>
  </Grid.Column>
  <Grid.Column>
  <label>Priority</label>
  <Dropdown
   id="priority"
    placeholder='Select an option'
    fluid
    selection
    value={priorityValue}
    options={Priority}
    onChange={handleDropdownChange}
    ></Dropdown>
  </Grid.Column>
  <Grid.Column>
  <label>Department</label>
  <Dropdown
   id="department"
  placeholder='Select an option'
  fluid
  selection
  value={departmentValue}
  options={Department}
  onChange={handleDropdownChange}
    ></Dropdown>
  </Grid.Column>

  <Grid.Column>
  <label>Star Date as per Project Plan</label>
  <Segment
  as={DatePicker}
  id="start_date"
  selected={startDate}
  onChange={date => setSelectedStartDate(date)}
  dateFormat="dd/MM/yyyy"
  placeholderText="Select a date"
    ></Segment>
  </Grid.Column>


  <Grid.Column>
  <label>End Date as per Project Plan</label>
  <Segment
  as={DatePicker}
  id="end_date"
  selected={endDate}
  onChange={date => setSelectedEndDate(date)}
 dateFormat="dd/MM/yyyy"
 placeholderText="Select a date"
    ></Segment>
  </Grid.Column>

  <Grid.Column>
  <label>Location</label>
  <Dropdown
  id="location"
   placeholder='Select an option'
   fluid
   selection
   value={locationValue}
   options={Location}
   onChange={handleDropdownChange}
    ></Dropdown>
  </Grid.Column>
</Grid> 
</div>

</>


)
}

export default CreateProject;






//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const params = useParams()

//     const userState = useSelector(state => state.user);
//     const { status, currentUser, response, error } = userState;
//     const { sclassesList } = useSelector((state) => state.sclass);

//     const [name, setName] = useState('');
//     const [rollNum, setRollNum] = useState('');
//     const [password, setPassword] = useState('')
//     const [className, setClassName] = useState('')
//     const [sclassName, setSclassName] = useState('')

//     const adminID = currentUser._id
//     const role = "Student"
//     const attendance = []

//     useEffect(() => {
//         if (situation === "Class") {
//             setSclassName(params.id);
//         }
//     }, [params.id, situation]);

//     const [showPopup, setShowPopup] = useState(false);
//     const [message, setMessage] = useState("");
//     const [loader, setLoader] = useState(false)

//     useEffect(() => {
//         dispatch(getAllSclasses(adminID, "Sclass"));
//     }, [adminID, dispatch]);

//     const changeHandler = (event) => {
//         if (event.target.value === 'Select Class') {
//             setClassName('Select Class');
//             setSclassName('');
//         } else {
//             const selectedClass = sclassesList.find(
//                 (classItem) => classItem.sclassName === event.target.value
//             );
//             setClassName(selectedClass.sclassName);
//             setSclassName(selectedClass._id);
//         }
//     }

//     const fields = { name, rollNum, password, sclassName, adminID, role, attendance }

//     const submitHandler = (event) => {
//         event.preventDefault()
//         if (sclassName === "") {
//             setMessage("Please select a classname")
//             setShowPopup(true)
//         }
//         else {
//             setLoader(true)
//             dispatch(registerUser(fields, role))
//         }
//     }

//     useEffect(() => {
//         if (status === 'added') {
//             dispatch(underControl())
//             navigate(-1)
//         }
//         else if (status === 'failed') {
//             setMessage(response)
//             setShowPopup(true)
//             setLoader(false)
//         }
//         else if (status === 'error') {
//             setMessage("Network Error")
//             setShowPopup(true)
//             setLoader(false)
//         }
//     }, [status, navigate, error, response, dispatch]);





//             <div className="register">
//                 <form className="registerForm" onSubmit={submitHandler}>
//                     <span className="registerTitle">Add Student</span>
//                     <label>Name</label>
//                     <input className="registerInput" type="text" placeholder="Enter student's name..."
//                         value={name}
//                         onChange={(event) => setName(event.target.value)}
//                         autoComplete="name" required />

//                     {
//                         situation === "Student" &&
//                         <>
//                             <label>Class</label>
//                             <select
//                                 className="registerInput"
//                                 value={className}
//                                 onChange={changeHandler} required>
//                                 <option value='Select Class'>Select Class</option>
//                                 {sclassesList.map((classItem, index) => (
//                                     <option key={index} value={classItem.sclassName}>
//                                         {classItem.sclassName}
//                                     </option>
//                                 ))}
//                             </select>
//                         </>
//                     }

//                     <label>Roll Number</label>
//                     <input className="registerInput" type="number" placeholder="Enter student's Roll Number..."
//                         value={rollNum}
//                         onChange={(event) => setRollNum(event.target.value)}
//                         required />

//                     <label>Password</label>
//                     <input className="registerInput" type="password" placeholder="Enter student's password..."
//                         value={password}
//                         onChange={(event) => setPassword(event.target.value)}
//                         autoComplete="new-password" required />

//                     <button className="registerButton" type="submit" disabled={loader}>
//                         {loader ? (
//                             <CircularProgress size={24} color="inherit" />
//                         ) : (
//                             'Add'
//                         )}
//                     </button>
//                 </form>
//             </div>
//             <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
//         </Grid>
   






