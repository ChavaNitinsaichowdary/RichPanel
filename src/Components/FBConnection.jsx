import Button from '@mui/material/Button';
import { Card, Typography} from "@mui/material";


function FBConnection() {
  

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card  sx={{ borderRadius: '16px' }} variant="outlined" style={{ width: 400, padding: 28 }}>
      <Typography variant="h6" align="center">Facebook Page Inegration</Typography>
      <Typography variant="h6" align="center">Integrated Page : Amazon Business</Typography>        
        <br/>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            size="large"
            fullwidth={true}
            variant="contained"
            color = "error"
            onClick={async () => {
              
            }}
          >Delete Integration</Button>
        </div>
        <br/>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            size="large"
            fullwidth={true}
            variant="contained"
            onClick={async () => {
             
            }}
          >Reply to Messages</Button>
        </div>
      </Card>
    </div>
  );
}

export default FBConnection;
