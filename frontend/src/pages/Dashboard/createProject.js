import "../../App.css";
import {  Button, Dropdown, Grid,  Segment, TextArea} from 'semantic-ui-react'
import { useDispatch } from "react-redux";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from "react";
import CommonDashboard from "./CommonDashboard";
import { saveProjectDetails } from "../../redux/projectRelated/projectHandle";
import { Category, Department, Division, Location, Priority, Reason, Type } from "./OptionConstants";


const CreateProject = () => {
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




