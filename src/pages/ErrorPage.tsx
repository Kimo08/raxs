import { Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Typography variant="body1" gutterBottom id="error-page">
      Oops!
      <br />
      Sorry, an unexpected error has occurred.
    </Typography>
  );
}
