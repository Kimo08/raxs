import * as React from "react";

import ModeCommentIcon from "@mui/icons-material/ModeComment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  List,
  Typography,
} from "@mui/material";

const DisplayPost = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          marginLeft: "10vh",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          // background: "#577399",
          background: "#495867",
        }}
      >
        <List
          sx={{
            p: 4,
            overflowY: "auto",
            marginLeft: "4vh",
            flex: "1 0 0 ",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              maxWidth: 500,
              marginBottom: "20px",
              marginLeft: "27vh",
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
              <IconButton>
                <ModeCommentIcon />
              </IconButton>
            </CardActions>
          </Card>
          <Card
            variant="outlined"
            sx={{
              maxWidth: 500,
              marginBottom: "20px",
              marginLeft: "27vh",
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
              <IconButton>
                <ModeCommentIcon />
              </IconButton>
            </CardActions>
          </Card>
          <Card
            variant="outlined"
            sx={{
              maxWidth: 500,
              marginBottom: "20px",
              marginLeft: "27vh",
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
              <Typography gutterBottom>Trump VS Biden</Typography>
            </Box>
            <Divider />
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <IconButton>
                <ModeCommentIcon />
              </IconButton>
            </CardActions>
          </Card>
          <Card
            variant="outlined"
            sx={{
              maxWidth: 500,
              marginBottom: "20px",
              marginLeft: "27vh",
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
              <Typography gutterBottom>Jah bless rasta !</Typography>
            </Box>
            <Divider />
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <IconButton>
                <ModeCommentIcon />
              </IconButton>
            </CardActions>
          </Card>
          <Card
            variant="outlined"
            sx={{
              maxWidth: 500,
              marginBottom: "20px",
              marginLeft: "27vh",
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
              <Typography gutterBottom>One Love</Typography>
            </Box>
            <Divider />
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <IconButton>
                <ModeCommentIcon />
              </IconButton>
            </CardActions>
          </Card>
          <Card
            variant="outlined"
            sx={{
              maxWidth: 500,
              marginBottom: "20px",
              marginLeft: "27vh",
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
              <Typography gutterBottom>Web Development</Typography>
            </Box>
            <Divider />
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <IconButton>
                <ModeCommentIcon />
              </IconButton>
            </CardActions>
          </Card>
        </List>
      </Box>
    </React.Fragment>
  );
};

export default DisplayPost;
