import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    textField: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: '#000',
        background: '#ececec'
    }
  }));

export default function FixedContainer() {
    const classes = useStyles();
    
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: 'skyblue', height: '100vh' }} />
       
       <div style={{"display":"flex", "alignItems":"center",  "justifyContent":"center"}}>
           <div  style={{"width":"50%"}}>
           <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <InputLabel htmlFor="standard-basic">Access Code</InputLabel>
                        <TextField  variant="outlined" InputLabelProps={{shrink: false}} 
                        id="password"
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
                    <Button variant="contained" color="primary">
                        Login
                    </Button>
                </div>
           

            
        </form>
           </div>
           <div>
               
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
                    
                    <Button variant="contained" disabled>
                        Disabled
                    </Button>
                    <Button variant="contained" color="primary" href="#contained-buttons">
                        Link
                    </Button>
            
               
           </div>
       </div>
        

        

      </Container>
    </React.Fragment>
  );
}