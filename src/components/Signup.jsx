import React from 'react'
import {Grid ,Paper , TextField , Avatar , FormControl , FormLabel , FormControlLabel ,Radio , RadioGroup  , Button } from '@mui/material'

import LockOpenIcon from '@mui/icons-material/LockOpen';



export default function Signup() {
    const mainstyle ={ margin:' 20px auto', height:'80vh' , padding:'auto' , width:280 }
    const avtstyle ={backgroundColor:'#15dd7d'}
    const btnstyle={backgroundColor:'#15dd7d' , borderRadius:60 , padding:'auto' }
    
  return (
    <>
     <Grid style={mainstyle}>
        <Paper elevation={10} style={mainstyle}  height>
        <Avatar style={ avtstyle}><LockOpenIcon/></Avatar>
        
        <TextField  id="standard-basic" label="NAME" variant="standard" placeholder='Enter Name' fullWidth required />
        <TextField id="standard-basic" label="EMAIL" variant="standard" placeholder='Enter Name' fullWidth required  type={"email"}/>
        <TextField id="standard-basic" label="PASSWORD" variant="standard" type={"password"} placeholder='Enter Name' fullWidth required />
        <TextField id="standard-basic" label="CONFIRM PASSWORD" variant="standard" type={"password"} placeholder='Enter Name' fullWidth required />
        <TextField id="standard-basic" label="PHONE NUMBER" variant="standard" type={"number"} placeholder='Enter Name' fullWidth required />
        
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" fullWidth>Gender</FormLabel>
           <RadioGroup fullWidth
              aria-labelledby="demo-radio-buttons-group-label"
               defaultValue="female"
              name="radio-buttons-group"
               required
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
           </RadioGroup>
          </FormControl>
          <Button color="primary" variant="contained" fullWidth style={btnstyle}> SIGN Up</Button>
        </Paper>
     </Grid>
    </>
  )
}
