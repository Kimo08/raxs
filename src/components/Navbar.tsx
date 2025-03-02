import * as React from "react";
import { SubjectOutlined } from "@mui/icons-material";
import ChatIcon from "@mui/icons-material/Chat";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Divider, ListItemIcon, Menu } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import logon from "../assets/logon.svg";
import SideDrawer from "./SideDrawer";
import { Outlet, useNavigate } from "react-router-dom";

interface Props {
  window?: () => Window;
}
const drawerWidth = 170;

const Navbar = (props: Props) => {
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
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const { window } = props;
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
    !isClosing;
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, height: "60px" }}
      >
        <Box display="flex" alignItems="center" px={5}>
          <img
            src={logon}
            width={40}
            height={40}
            style={{ display: "flex", marginRight: 8 }}
          />

          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
            }}
          >
            RAXS
          </Typography>
          <div>
            <Box sx={{}}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Nature"
                    src="/img/ava.jpg"
                    sx={{
                      width: { xs: 48, md: 56 },
                      height: { xs: 48, md: 56 },
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                onClick={handleCloseUserMenu}
              >
                <MenuItem onClick={() => navigate("/profile")}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleCloseUserMenu}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={() => navigate("/")}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </AppBar>
      <Box display="flex" mt="60px" width="100%">
        {/* side drawer */}
        <SideDrawer />
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{ keepMounted: true }}
          sx={{
            width: drawerWidth,
            display: { xs: "block", sm: "none" },
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
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
        <Box width={{ xs: "100%", md: "calc(100% - 170px)" }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
