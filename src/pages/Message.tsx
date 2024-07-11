import { Box } from "@mui/material";
import SideBar from "../components/sidebar/SideBar";
import ChatBox from "../components/chatbox/ChatBox";

const Message = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: { sx: "100%", md: "100%" },
        display: "flex",
      }}
    >
      <SideBar />
      <ChatBox />
    </Box>
  );
};

export default Message;
