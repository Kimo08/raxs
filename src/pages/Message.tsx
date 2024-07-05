import { Box } from "@mui/material";
import SideBar from "../components/sidebar/SideBar";
import ChatBox from "../components/chatbox/ChatBox";

const Message = () => {
  return (
    <Box
      sx={{
        top: 0,
        height: "100%",
        width: "92%",
        ml: 16,
        display: "flex",
      }}
    >
      <SideBar />
      <ChatBox />
    </Box>
  );
};

export default Message;
