/* eslint-disable no-unused-vars */
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { Card, Typography, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card variant="outlined" style={{ width: 400, padding: 28 }}>
        <Typography variant="h6" align="center">Create Account</Typography>
        <br/><br/>
        <TextField
          onChange={(event) => setName(event.target.value)}
          fullWidth={true}
          label="Name"
          variant="outlined"
        />
        <br /><br />
        <TextField
          onChange={(event) => setEmail(event.target.value)}
          fullWidth={true}
          label="Email"
          variant="outlined"
        />
        <br /><br />
        <TextField
          onChange={(event) => setPassword(event.target.value)}
          fullWidth={true}
          label="Password"
          variant="outlined"
          type="password"
        />
        <br /><br />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
        <br /><br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            size="large"
            fullWidth={true}
            variant="contained"
            onClick={async () => {
               
            }}
          >Sign In</Button>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
          <Typography variant="body2">
            Already have an account?{" "}
            <Link to='/login'>login</Link>
          </Typography>
        </div>
      </Card>
    </div>
  );
}

export default Signup;
