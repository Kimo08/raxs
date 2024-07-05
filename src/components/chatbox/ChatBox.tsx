import { Box, Divider } from "@mui/material";
import Head from "./Head";
import ChatArea from "./ChatArea";
import Footer from "./Footer";

const ChatBox = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Head />
      <Divider />
      <ChatArea />
      <Footer />
    </Box>
  );
};

export default ChatBox;
