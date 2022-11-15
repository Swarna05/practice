import React,{ useState} from "react";
// import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';


import { Container, Paper, Box, Typography,Grid,TextField,IconButton,Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    height: "50vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
  },
}));
  

export default function Table(){
     const userTemplate={ITEM:"",QUANTITY:"",RATE:"",AMOUNT:""};
     const [users,setUsers]=useState([userTemplate]);

     const addUser= ()=>{
        setUsers([...users,userTemplate])
     }

     const classes = useStyles();
 return (
   <>
     <Container className={classes.root}>
      <Paper component={Box}  p={4} mx="auto">
       {
         users.map((user,index)=>(
            <Grid container spacing={3} key="{index}">
            <Grid item md="5">
               <TextField
               label="ITEM DETAILS"
               placeholder="Type or click to select an item"
               variant="outlined"
               fullWidth
               />
            </Grid>
            <Grid item md="2">
               <TextField
               label="QUANTITY"
               placeholder="1.0"
               variant="outlined"
               fullWidth
               />
            </Grid>
            <Grid item md="2">
               <TextField
               label="RATE"
               placeholder="0.0"
               variant="outlined"
               fullWidth
               />
            </Grid>
            <Grid item md="2">
               <TextField
               label="AMOUNT"
               placeholder="0.0"
               variant="outlined"
               fullWidth
               />
            </Grid>
            <Grid item md="1">
               <IconButton color="secondary"  >
                   <RemoveIcon/>
               </IconButton>
               
            </Grid>
   
           </Grid>
         ))
       }
       <Button variant="contained" color="secondary" onClick={addUser} >add another line</Button>
      </Paper>
    </Container>
   </>

 )

}