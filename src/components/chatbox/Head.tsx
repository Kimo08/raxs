import {
  Avatar,
  Button,
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CallIcon from "@mui/icons-material/Call";

const Head = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card
      sx={{
        borderRadius: 0,
        background: "#003566",
        color: "#fff",
      }}
      elevation={0}
    >
      <CardHeader
        avatar={
          <>
            <Button
              color="secondary"
              sx={{ minWidth: "auto", mr: 1 }}
              onClick={onClick}
            >
              <ArrowBackIcon />
            </Button>
            <Avatar>M</Avatar>
          </>
        }
        action={
          <>
            <IconButton>
              <VideoCallIcon />
            </IconButton>
            <IconButton>
              <CallIcon />
            </IconButton>
          </>
        }
        title="Mike Lowry"
        subheader={
          <Typography variant="caption">Software Developer</Typography>
        }
      />
    </Card>
  );
};

export default Head;
