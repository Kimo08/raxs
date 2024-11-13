import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import logon from "../assets/logon.svg";
import LoginForm from "../components/LoginForm";
// import { useMutation } from "@tanstack/react-query";
// import { login } from "../services/authService";

export interface IState {
  user: {
    email: string;
    password: string;
  };
}
const Login = () => {
  // const { mutate } = useMutation({
  //   mutationFn: login,
  // });

  // const handleLogin = () => {
  //   const payload = {
  //     username: state.user.email,
  //     password: state.user.password,
  //   };
  //   mutate(payload);
  // };

  return (
    <div
      style={{
        background: "url(/src/img/ava.jpg) no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        justifyContent: "space-evenly",
        display: "flex",
      }}
    >
      <Container
        sx={{
          background: "lightgrey",
          maxHeight: "80vh",
          minHeight: "70vh",
          width: { xs: "70%", md: "60%" },
          boxShadow: "0 0 10px rgba(0, 0, 0, .2)",
          mt: 9,
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={logon}
            width={40}
            height={40}
            style={{ display: "flex", marginRight: 6, marginTop: 6 }}
          />
          <Typography
            variant="h4"
            fontWeight={700}
            textAlign={"center"}
            gutterBottom
            sx={{ marginTop: 1 }}
          >
            Raxs
          </Typography>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ mt: 2, display: { xs: "none", md: "grid" } }}>
            <Paper
              square
              sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
                height: "100%",
                boxShadow: "0 0 10px rgba(0, 0, 0, .2)",
              }}
            >
              <Box sx={{ p: 2 }}>
                <Box sx={{ display: "flex", gap: 3, justifyContent: "center" }}>
                  <img
                    src={logon}
                    width={30}
                    height={30}
                    style={{ display: "flex", marginRight: 8 }}
                  />
                </Box>

                <Typography
                  variant="h4"
                  textAlign={"center"}
                  sx={{
                    fontWeight: { md: "700" },
                    fontSize: { xs: "16px", md: "28px" },
                    mt: 3,
                    text: "black",
                  }}
                >
                  Raxs Chat
                </Typography>
                <Typography
                  sx={{ mt: 2, fontSize: { xs: "12px", md: "16px" } }}
                >
                  Raxs chat was developed in the year 2024, the year of the
                  dragon. It is a platform where we connect with one another. It
                  offers a lot of services.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <LoginForm />
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
