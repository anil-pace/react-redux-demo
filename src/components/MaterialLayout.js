import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
import {Select, MenuItem} from '@material-ui/core';
import NavBar from "./NavBar";
import Hook_1 from "./../components/MaterialUI/Button_1";
import Hook_2 from "./../components/MaterialUI/Button_2";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';


// export default styled(Button)`
//   color: white;
//   background-color: blue;
//   height: 80px;
// `;

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#006400"
      },
      secondary: {
        main: "#ffa500"
      }
    },
    bgColor: "yellow",
    color: "#000"
  });

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        // width: '25ch',
      },
    },
    textField: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
    },
    input: {
        color: '#000',
        background: '#ececec'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: theme.spacing(1.5)
      },
      borderColor:{
        border: '5px solid red'
    }
  }));

export default function FixedContainer() {
    const classes = useStyles();
    const [showPassword] = useState(false);
    const [getSelect, setSelect] = useState("");

 const handleClick = (event) =>{
     alert("button clicked");
 };

 const selectChange=(event)=>{
     console.log(event.target.value);
     setSelect(event.target.value);
 }
    
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>

      <Container fixed>
        <Typography component="div" style={{ backgroundColor: 'skyblue', height: '10vh' }} />
       
       <div style={{"display":"flex", "alignItems":"center",  "justifyContent":"center"}}>
           <div  style={{"width":"50%"}}>
                 <NavBar  header="Material UI for VRI" />
                
                 <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <InputLabel htmlFor="standard-basic">Access Code</InputLabel>

                        <TextField  
                            variant="outlined" 
                            InputLabelProps={{shrink: false}} 
                            id="outlined-password"
                            type="text"
                            label=""
                            className={classes.textField}
                            // value={this.state.form_email}
                            // onChange={this.handle_change('form_email')}
                            margin="normal"
                            InputProps={{
                                className: classes.input,
                            }}
                        />
                        <TextField  variant="outlined" InputLabelProps={{shrink: false}} 
                        id="outlined-password"
                        type={showPassword ? "text" : "password"}
                        label=""
                        className={classes.textField}
                        // value={this.state.form_email}
                        // onChange={this.handle_change('form_email')}
                        margin="normal"
                        InputProps={{
                            className: classes.input,
                        }}
                        />
                    </div>
                    <div className={classes.root}>
                            <Button 
                                onClick={handleClick} 
                                variant="contained" color="primary"
                            >
                                Login
                            </Button>
                    </div>
                    <Box>
                        <Select 
                            value={getSelect} 
                            displayEmpty
                            onChange={selectChange}
                        >
                        <MenuItem value="" disabled> Select Language</MenuItem>
                            <MenuItem value={1} > English</MenuItem>
                            <MenuItem value={2} > Hindi</MenuItem>
                            <MenuItem value={3} > Math</MenuItem>
                            <MenuItem value={4} > Chinese</MenuItem>
                            <MenuItem value={5} > Hebrew</MenuItem>
                        </Select>
                    </Box>
                </form>
            </div>
            <div className={classes.borderColor}>
                    <NavBar  header="Material UI homework" />
                    <Container fixed style={{"background":"lightgreen"}}>
                        <Box style={{"fontSize": "22px", "color":"red"}} clone>
                            <h1>This is with fixed property</h1>
                        </Box>
                    </Container>

                     <Container maxWidth="lg" style={{"background":"grey"}} >
                        <Box component="span" clone  p={5} m={5}>
                            <h4>This is with maxwith=lg property</h4>
                        </Box>
                    </Container>

                     <Container maxWidth="sm" style={{"background":"yellow"}}>
                        <Box component="h5">This is with maxwith=md property</Box>
                     </Container>

                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="" variant="filled" InputLabelProps={{shrink: false}}/>


                    {/* <div className={classes.root}> */}
                    <Box style={{}} clone m={2}>
                        <Button variant="contained">Default</Button>
                    </Box>
                    <Box>
                        <Button variant="contained" color="secondary">
                                Secondary
                        </Button>
                    </Box>
                    <Box>
                        <Button variant="contained" disabled>
                            Disabled
                        </Button>
                    </Box>
                    
                    <Box>
                        <Button variant="contained" color="primary" href="#contained-buttons">
                            Link
                        </Button>
                    </Box>
                    <Box>
                        <Hook_1 theme = {theme}/>
                    </Box>
                    <Box>
                    <Hook_2 theme={theme}/>
                    </Box>
                    
            
               
           </div>
       </div>
        

        

      </Container>
      </ThemeProvider>

    </React.Fragment>
  );
}