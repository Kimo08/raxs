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
      <List
        sx={{
          p: 0,
          overflowY: "auto",
          flex: "1 0 0",
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {Array(8)
          .fill("")
          .map((index) => (
            <div key={index}>
              <ListItem alignItems="flex-start" onClick={() => onClick("5")}>
                <ListItemAvatar>
                  <Avatar alt="Mike Lowry" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Mike Lowry"
                  secondary={
                    <Typography variant="caption">
                      How was your night?
                    </Typography>
                  }
                />
              </ListItem>
              <Divider component="li" />
            </div>
          ))}
      </List>
    </Box>
  );
};

export default SideBar;
