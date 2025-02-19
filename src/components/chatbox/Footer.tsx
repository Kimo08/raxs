import { Box, Button, TextField } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendIcon from "@mui/icons-material/Send";
import { PhotoLibrary } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ p: 1, display: "flex" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button color="secondary" sx={{ minWidth: "auto", mr: 1 }}>
          <MoreVertIcon />
        </Button>
        <Button color="secondary" sx={{ minWidth: "auto", mr: 1 }}>
          <InsertEmoticonIcon />
        </Button>
      </Box>
      <Box sx={{ display: "flex", flex: 1 }}>
        <TextField
          placeholder="Type your msg and hit"
          size="small"
          sx={{ "&.MuiInputBase-root": { borderRadius: 0, borderRight: 0 } }}
          fullWidth
        />
        <label
          htmlFor="image"
          style={{
            cursor: "pointer",
            minWidth: "auto",
            marginLeft: "10px",
            marginTop: "8px",
            color: "#0179FE",
          }}
        >
          <input type="file" id="image" accept=".png, .jpeg" hidden />
          <PhotoLibrary />
        </label>
        <Button color="secondary" sx={{ minWidth: "auto" }}>
          <SendIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
