import Button from '@mui/material/Button';
import { Card, Typography} from "@mui/material";


function FBIntegration() {
  

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card  sx={{ borderRadius: '16px' }} variant="outlined" style={{ width: 400, padding: 28 }}>
        <Typography variant="h6" align="center">Facebook Page Inegration</Typography>
        <br/><br/>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            size="large"
            fullwidth={true}
            variant="contained"
            onClick={async () => {
             
            }}
          >Connect Page</Button>
        </div>
      </Card>
    </div>
  );
}

export default FBIntegration;
