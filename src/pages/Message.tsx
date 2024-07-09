import { Box } from "@mui/material";
import SideBar from "../components/sidebar/SideBar";
import ChatBox from "../components/chatbox/ChatBox";

const Message = () => {
  return (
    <Box
      sx={{
        top: 0,
        height: "100%",
        width: { sx: "100%", md: "91.5%" },
        ml: { sx: "none", md: "11%" },
        display: "flex",
      }}
    >
      <SideBar />
      <ChatBox />
    </Box>
  );
};

export default Message;
