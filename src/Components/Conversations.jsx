/* eslint-disable no-unused-vars */
import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import UserCard from './UserCard';
import UserDetails from './UserDetails';

function Conversations() {
    return (
        <div>
          <Grid container spacing={0}>
           
            <Grid item xs={12} sm={3}>
              <Paper style={{ padding: 16 }}>
                {/* Content for the first column */}
                Column 1
              </Paper>
            </Grid>
            
            {/* Second Column */}
            <Grid item xs={12} sm={3}>
              <Paper style={{ padding: 16 }}>
                {/* Content for the second column */}
                Column 2
              </Paper>
            </Grid>
            
            {/* Third Column */}
            <Grid item xs={12} sm={3}>
              <Paper style={{ padding: 16 }}>
                {/* Content for the third column */}
                Column 3
              </Paper>
            </Grid>
            
            {/* Fourth Column */}
            <Grid item xs={12} sm={3}>
              <Paper style={{ padding: 16}}>
               <UserCard/>
               <UserDetails/>
              </Paper>
            </Grid>
          </Grid>
        </div>
      );
}

export default Conversations;
