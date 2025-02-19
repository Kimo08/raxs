import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Avatar, Box, Card, CardHeader } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import DisplayPost from "../components/DisplayPost";
import avatar from "/src/assets/img/ava.jpg";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "140vh",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "24%",
      "&:focus": {
        width: "20%",
      },
    },
  },
}));

const Feed = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      bgcolor="#001d3d"
      width="100%"
      minHeight="100dvh"
      px={{ xs: 3, md: 10 }}
    >
      <Card
        sx={{
          position: "sticky",
          bgcolor: "#001d3d",
          borderRadius: 0,
          color: "#fff",
          width: "100%",
          marginBottom: "40px",
        }}
      >
        <CardHeader
          avatar={<Avatar alt="Nature" src={avatar} />}
          title="POST"
        />
        <Search onClick={handleClickOpen}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="What is on your mind ?"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const formJson = Object.fromEntries((formData as any).entries());
            const post = formJson.post;
            console.log(post);
            handleClose();
          },
        }}
      >
        <DialogTitle>Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            What do you want to talk about...?
          </DialogContentText>
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
      <DisplayPost />
    </Box>
  );
};

export default Feed;
