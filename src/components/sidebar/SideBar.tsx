import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Header from "./Header";
import * as React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const SideBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "60vh",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Header />
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs"
        centered
        variant="fullWidth"
      >
        <Tab
          icon={<ChatBubbleOutlineIcon fontSize="small" />}
          iconPosition="start"
          label="Chat List"
          sx={{ minHeight: "inherit" }}
        />
        <Tab
          icon={<PersonIcon fontSize="medium" />}
          iconPosition="start"
          label="User List"
          sx={{ minHeight: "inherit" }}
        />
      </Tabs>
      {value === 0 && (
        <List sx={{ p: 0, overflowY: "auto", flex: "1 0 0" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Mike Lowry" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Mike Lowry"
              secondary={<Typography variant="caption">Ali Connors</Typography>}
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Michael Kyle" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Michael Kyle"
              secondary={<Typography variant="caption">Ali Connors</Typography>}
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Remy Sharp"
              secondary={<Typography variant="caption">Ali Connors</Typography>}
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Vanessa scott" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Vanessa scott"
              secondary={<Typography variant="caption">Ali Connors</Typography>}
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Harvey spectre" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Harvey spectre"
              secondary={<Typography variant="caption">Ali Connors</Typography>}
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Louis Litt" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Louis Litt"
              secondary={<Typography variant="caption">Ali Connors</Typography>}
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Michael Ross" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Michael Ross"
              secondary={<Typography variant="caption">Ali Connors</Typography>}
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Jessica Pearson" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Jessica Pearson"
              secondary={<Typography variant="caption">Ali Connors</Typography>}
            />
          </ListItem>
          <Divider component="li" />
        </List>
      )}
      {value === 1 && <div>1</div>}
    </Box>
  );
};

export default SideBar;
