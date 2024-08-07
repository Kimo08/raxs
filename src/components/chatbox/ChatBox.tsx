import { Box, Divider } from "@mui/material";
import Head from "./Head";
import ChatArea from "./ChatArea";
import Footer from "./Footer";
const ChatBox = ({
  onClick,
  chat,
}: {
  onClick: () => void;
  chat: string | null;
}) => {
  return (
    <Box
      sx={{
        overflow: "auto",
        width: { xs: "100%", md: "%" },
        display: { xs: chat ? "flex" : "none", md: "flex" },
        flexDirection: "column",
      }}
    >
      <Head onClick={onClick} />
      <Divider />
      <ChatArea />
      <Footer />
    </Box>
  );
};

export default ChatBox;
