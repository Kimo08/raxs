import * as React from "react";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  IconButton,
  List,
  TextField,
  Typography,
} from "@mui/material";

const DisplayPost = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Container
        sx={{
          justifyContent: "center",
          display: "flex",
          // ml: 1,
          height: "100%",
          width: { xs: "56vh", md: "160vh" },
          // background: "#577399",
          background: "#495867",
        }}
      >
        <List
          sx={{
            mt: 2,
            mb: 2,
          }}
        >
          <Card
            variant="outlined"
            sx={{
              width: { xs: "50vh", md: "150vh" },
              mb: 2,
              background: "#e5ecf4",
            }}
          >
            <CardHeader
              avatar={
                <>
                  <Avatar>P</Avatar>
                </>
              }
              title="Port Mech"
              sx={{ height: "50px" }}
            />
            <Divider />
            <Box sx={{ height: "28vh" }}>
              <Typography gutterBottom>Hello Jeo</Typography>
            </Box>
            <Divider />
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <IconButton onClick={handleClickOpen}>
                <ModeCommentIcon />
                <Dialog
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    component: "form",
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                      event.preventDefault();
                      handleClose();
                    },
                  }}
                >
                  <DialogContent>
                    <TextField
                      autoFocus
                      required
                      margin="dense"
                      id="name"
                      name="post"
                      label="Post"
                      type="post"
                      fullWidth
                      variant="standard"
                      sx={{ border: " 0.8px solid black" }}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button sx={{ color: "#355070" }} onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button sx={{ color: "#355070" }} type="submit">
                      Post
                    </Button>
                  </DialogActions>
                </Dialog>
              </IconButton>
            </CardActions>
          </Card>
          <Card
            variant="outlined"
            sx={{
              width: { xs: "50vh", md: "150vh" },
              mb: 2,
              background: "#e5ecf4",
            }}
          >
            <CardHeader
              avatar={
                <>
                  <Avatar>P</Avatar>
                </>
              }
              title="Port Mech"
              sx={{ height: "50px" }}
            />
            <Divider />
            <Box sx={{ height: "28vh" }}>
              <Typography gutterBottom>Anchor the ship</Typography>
            </Box>
            <Divider />
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <IconButton onClick={handleClickOpen}>
                <ModeCommentIcon />
                <Dialog
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    component: "form",
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                      event.preventDefault();
                      handleClose();
                    },
                  }}
                >
                  <DialogContent>
                    <TextField
                      autoFocus
                      required
                      margin="dense"
                      id="name"
                      name="post"
                      label="Post"
                      type="post"
                      fullWidth
                      variant="standard"
                      sx={{ border: " 0.8px solid black" }}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button sx={{ color: "#355070" }} onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button sx={{ color: "#355070" }} type="submit">
                      Post
                    </Button>
                  </DialogActions>
                </Dialog>
              </IconButton>
            </CardActions>
          </Card>
        </List>
      </Container>
    </React.Fragment>
  );
};

export default DisplayPost;
