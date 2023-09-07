/* eslint-disable no-unused-vars */
import { Avatar, Typography, Box } from "@mui/material";
import useOnlineStatus from "../utils/useOnlineStatus";

const UserCard = (props) => {
  const onlineStatus = useOnlineStatus();
  const statusColor = onlineStatus ? 'green' : 'red';

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Avatar
        alt="User Photo"
        src="https://www.pinkvilla.com/images/2022-09/legend_balakrishna_1.jpg"
        sx={{
          width: 100,
          height: 100,
          backgroundColor: 'transparent',
        }}
      />
      <br/>
      <Typography variant="body2">
        Balayya
      </Typography>
      <br/>
      <Typography variant="body2" style={{ color: statusColor }}>
        {onlineStatus ? '● Online' : '● Offline'}
      </Typography>
    </Box>
  );
};

export default UserCard;
