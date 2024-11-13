import { SubjectOutlined } from "@mui/icons-material";
import ChatIcon from "@mui/icons-material/Chat";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 170;

const SideDrawer = () => {
  const navigate = useNavigate();
  const menuItem = [
    {
      text: "Feeds",
      icon: <SubjectOutlined color="secondary" />,
      path: "feed",
    },
    {
      text: "Messages",
      icon: <ChatIcon color="secondary" />,
      path: "message",
    },
  ];

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          display: { xs: "none", sm: "block" },
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        open
      >
        <Toolbar />
        {/* list/ links */}
        <Box sx={{ overflow: "auto" }}>
          <List>
            {menuItem.map((item) => (
              <ListItem
                disablePadding
                key={item.text}
                onClick={() => navigate(item.path)}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default SideDrawer;
