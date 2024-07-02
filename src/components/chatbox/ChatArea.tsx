import {
  Avatar,
  Box,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const ChatArea = () => {
  return (
    <Box sx={{ overflowY: "auto", flex: "1 0 0", background: "#f9f9f9" }}>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          py: 2,
          position: "sticky",
          top: 0,
          zIndex: 2,
          background: "#f9f9f9",
        }}
      >
        <Chip label="Today" />
      </Stack>
      <List
        sx={{
          p: 0,
          overflowY: "auto",
          flex: "1 0 0",
        }}
      >
        <ListItem sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", width: "70%" }}>
            <ListItemAvatar>
              <Avatar alt="Mike Lowry" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Paper sx={{ width: "100%", p: 1.5 }}>
              <ListItemText
                sx={{ m: 0 }}
                primary="Mike Lowry"
                secondary={
                  <Typography variant="caption">Ali Connors</Typography>
                }
              />
              <Box
                mt={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography variant="body2"> 12.30 PM</Typography>
                <Box>
                  <IconButton size="small">
                    <ReplyIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>
        </ListItem>
        <ListItem sx={{ flexDirection: "row-reverse", mb: 2 }}>
          <Box
            sx={{ display: "flex", width: "70%", flexDirection: "row-reverse" }}
          >
            <ListItemAvatar
              sx={{ display: "flex", flexDirection: "row-reverse" }}
            >
              <Avatar alt="Jemy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Paper
              sx={{
                width: "100%",
                p: 1.5,
                bgcolor: "#ccc",
              }}
            >
              <ListItemText
                sx={{ m: 0 }}
                primary="Jemy Sharp"
                secondary={
                  <Typography variant="caption">Ali Connors</Typography>
                }
              />
              <Box
                mt={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography variant="body2"> 12.30 PM</Typography>
                <Box>
                  <IconButton size="small">
                    <ReplyIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>
        </ListItem>
        <ListItem sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", width: "70%" }}>
            <ListItemAvatar>
              <Avatar alt="Mike Lowry" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Paper sx={{ width: "100%", p: 1.5 }}>
              <ListItemText
                sx={{ m: 0 }}
                primary="Mike Lowry"
                secondary={
                  <Typography variant="caption">Ali Connors</Typography>
                }
              />
              <Box
                mt={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography variant="body2"> 12.30 PM</Typography>
                <Box>
                  <IconButton size="small">
                    <ReplyIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default ChatArea;
