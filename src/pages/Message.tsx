import { Box } from "@mui/material";
import SideBar from "../components/sidebar/SideBar";
import ChatBox from "../components/chatbox/ChatBox";

const Message = () => {
  return (
    <Box
      mt={0}
      sx={{
        height: "120vh",
        marginLeft: "22vh",
        display: "flex",
      }}
    >
      <SideBar />
      <ChatBox />
    </Box>
  );
};

export default Message;
