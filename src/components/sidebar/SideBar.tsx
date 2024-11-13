import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Header from "./Header";

const SideBar = ({
  onClick,
  chat,
}: {
  onClick: (_id: string) => void;
  chat: string | null;
}) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "30%" },
        display: { xs: chat ? "none" : "flex", md: "flex" },
        flexDirection: "column",
      }}
    >
      <Header />
      <List sx={{ p: 0, overflowY: "auto", flex: "1 0 0" }}>
        <ListItem alignItems="flex-start" onClick={() => onClick("5")}>
          <ListItemAvatar>
            <Avatar alt="Mike Lowry" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Mike Lowry"
            secondary={
              <Typography variant="caption">How was your night?</Typography>
            }
          />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Michael Kyle" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Michael Kyle"
            secondary={
              <Typography variant="caption">
                When is the next business meeting?
              </Typography>
            }
          />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Remy Sharp"
            secondary={<Typography variant="caption">My Bro</Typography>}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Vanessa scott" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Vanessa scott"
            secondary={<Typography variant="caption">Sab </Typography>}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Harvey spectre" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Harvey spectre"
            secondary={
              <Typography variant="caption">
                Alibaba is a good platform to check for the shoes
              </Typography>
            }
          />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Louis Litt" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Louis Litt"
            secondary={<Typography variant="caption">Jumong</Typography>}
          />
        </ListItem>
        <Divider component="li" />
      </List>
    </Box>
  );
};

export default SideBar;
