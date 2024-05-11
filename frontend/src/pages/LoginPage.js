import "../App.css";
import { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';
//import {Grid, Input } from "semantic-ui-react";
import { Button, Form, Grid, Header,  Image,  Segment} from 'semantic-ui-react'


// // import studentloginimg from "../assets/studentloginimage.jpg";
// // import parentloginimg from "../assets/parentloginimage.jpg"
// // import teacherloginimg from "../assets/teacherloginimage.jpg";

import logo from "../assets/Logo.svg";
// // import homepageimg from '../assets/homepage.jpg';
// import { loginUser } from '../redux/userRelated/userHandle';
// //import Popup from '../components/Popup';



const LoginPage = () => {

    //const dispatch = useDispatch()
    const navigate = useNavigate()

    const { status, response, error } = useSelector(state => state.user);

    // const [toggle, setToggle] = useState(false)
    // const [guestLoader, setGuestLoader] = useState(false)
     //const [loader, setLoader] = useState(false)
    // const [showPopup, setShowPopup] = useState(false);
    // const [message, setMessage] = useState("");

    const [emailError, setEmailError] = useState(false);
    //const [passwordError, setPasswordError] = useState(false);
   



    const handleInputChange = (event) => {
        const { name } = event.target;
        if (name === 'email') setEmailError(false);
        //if (name === 'password') setPasswordError(false);
    };

        const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target?.email?.value || "kirangosavi";
        const password = event.target?.password?.value || "abc"; 
        if (!email || !password) {
            if (!email) setEmailError(true);
            //if (!password) setPasswordError(true);
                return;
        }

        //const fields = { email, password }
        //setLoader(true)
        navigate('/dashboard');
        // if(fields.email === "kiran.gosavi@techprimelab.com" && fields.password==="abc"){
            
        // }
        // dispatch(loginUser(fields))
        
    };

    useEffect(() => {
        if (status === 'success') {
                navigate('/dashboard');
           
        }
        else if (status === 'failed') {
            // setMessage(response)
            // setShowPopup(true)
            // setLoader(false)
        }
        else if (status === 'error') {
            // setMessage("Nhetwork Error")
            // setShowPopup(true)
             //setLoader(false)
            // setGuestLoader(false)
        }
    }, [status,  navigate, error, response]);

     return (
  <Grid className="login_page" textAlign="center" style={{height:'150vh'}} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450  }}>
    <Image src={logo}/>
    <div color="white">Online Project Management</div>
    <Segment stacked size='large'>
      <Header as='h3' color='grey' textAlign='center'>
         Login to get started
      </Header>
      <Form size='large'>
          <Form.Input 
                label = "Email" 
                textAlign='left' 
                required
                error={emailError}
                helperText={emailError && 'Email is required'}
                onChange={handleInputChange}/>
          <Form.Input
              label="Password"
              fluid
              type='password'
              margin="normal"
              required
              fullWidth
              onChange={handleInputChange}
          />
          <span><a href="/">Forgot password?</a></span>
          <div>
          <Button circular color="#1c50b0" className="blueButton" onClick={handleSubmit}>
            Login
          </Button>
          </div>
          
        
      </Form>
      </Segment>
    </Grid.Column>
  </Grid>










        //         <Grid item xs={8} sm={4} md={5}  elevation={6} >
        //             <Grid> </Grid>
        //         </Grid>
        //     </Grid>
        // </Grid>
                   
             

         
   );
}

export default LoginPage;


//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const email = event.target.email.value;
//         const password = event.target.password.value; 
//         if (!email || !password) {
//             if (!email) setEmailError(true);
//             if (!password) setPasswordError(true);
//                 return;
//         }

//         const fields = { email, password }
//         setLoader(true)
//         if(fields.email === "kiran.gosavi@techprimelab.com" && fields.password==="abc"){
//             navigate('/dashboard');
//         }
//         dispatch(loginUser(fields))
        
//     };

// // const StyledLink = styled(Link)`
// //   text-align: right;
// //   text-decoration: none;
// //   color: #318CE7;
// // `;


//NewBlueButton

//                         sx={{
//                             my: 4,
//                             mx: 4,
//                             alignContent:'center',
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <text variant="h5" sx={{ mb: 2, color: "#2c2143" }}>
//                             Login to get started
//                         </text>
                        
//                         <Grid component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
//                             <Input
//                                     margin="normal"
//                                     required
//                                     fullWidth
//                                     id="email"
//                                     label="Email"
//                                     name="email"
//                                     autoComplete="email"
//                                     autoFocus
//                                     error={emailError}
//                                     helperText={emailError && 'Email is required'}
//                                     onChange={handleInputChange}
//                             />
                            
//                             <Input
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 name="password"
//                                 label="Password"
//                                 type={toggle ? 'text' : 'password'}
//                                 id="password"
//                                 autoComplete="current-password"
//                                 error={passwordError}
//                                 helperText={passwordError && 'Password is required'}
//                                 onChange={handleInputChange}
//                                 // InputProps={{
//                                 //     endAdornment: (
//                                 //         <InputAdornment position="end">
//                                 //             <IconButton onClick={() => setToggle(!toggle)}>
//                                 //                 {toggle ? (
//                                 //                     <Visibility />
//                                 //                 ) : (
//                                 //                     <VisibilityOff />
//                                 //                 )}
//                                 //             </IconButton>
//                                 //         </InputAdornment>
//                                 //     ),
//                                 // }}
//                             />
//                             <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
//                                 <link href="#">
//                                     Forgot password?
//                                 </link>
//                             </Grid>

                                
//                         </Grid>
//                             <NewBlueButton
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 sx={{ mt: 3 , mx : 3 }}
//                             >
//                                 {/* {loader ?
//                                     <CircularProgress size={24} color="inherit" />
//                                     : "Login"} */}
//                             </NewBlueButton>
                           
                        
//                     </Grid>
//                 </Grid>
      
   




                 /* {
    //                     role === "Student" &&
    //                     <Grid
    //                     item
    //                     xs={false}
    //                     sm={4}
    //                     md={7}
    //                     sx={{
    //                         backgroundImage: `url(${studentloginimg})`,
    //                         backgroundRepeat: 'no-repeat',
    //                         backgroundColor: (t) =>
    //                             t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
    //                         backgroundSize: 'cover',
    //                         backgroundPosition: 'center',
    //                     }}
    //                 />
    //                 } */


//             </Grid>
//             {/* <Backdrop
//                 sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//                 open={guestLoader}
//             >
//                 <CircularProgress color="primary" />
//                 Please Wait
//             </Backdrop> */}
//             {/* <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} /> */}
