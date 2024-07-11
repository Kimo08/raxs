import { Box } from "@mui/material";
import SideBar from "../components/sidebar/SideBar";
import ChatBox from "../components/chatbox/ChatBox";
import { useState } from "react";

const Message = () => {
  const [chat, setChat] = useState<string | null>(null);
  return (
    <Box
      maxHeight="calc(100dvh - 60px)"
      minHeight="calc(100dvh - 60px)"
      sx={{ overflow: "hidden" }}
      display="flex"
      width={{ xs: "100%", md: "100%" }}
    >
      <SideBar onClick={(id) => setChat(id)} chat={chat} />
      <ChatBox chat={chat} onClick={() => setChat(null)} />
    </Box>
  );
};

export default Message;
