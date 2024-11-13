import { Box, Container, Grid, Paper, Typography } from "@mui/material";
// import { useMutation } from "@tanstack/react-query";
// import { register } from "../services/authService";
import logon from "../assets/logon.svg";
import RegisterForm from "../components/RegisterForm";

export interface IMedia {
  user: {
    firstname: string;
    phone: number;
    lastname: string;
    email: string;
    password: string;
  };
}
const Register = () => {
  // const { mutate } = useMutation({
  //   mutationFn: register,
  // });

  // const handleRegister = () => {
  //   const payload = new FormData();
  //   payload.append("firstname", state.user.firstname);
  //   payload.append("lastname", state.user.lastname);
  //   payload.append("phone", String(state.user.phone));
  //   payload.append("role", "PATIENT");
  //   payload.append("email", state.user.email);
  //   payload.append("password", state.user.password);
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
          maxHeight: "87vh",
          minHeight: "87vh",
          width: { xs: "85%", md: "80%" },
          boxShadow: "0 0 10px rgba(0, 0, 0, .2)",
          mt: 5,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
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
            mb={2}
            mt={1}
            gutterBottom
          >
            Raxs
          </Typography>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ mt: 8, display: { xs: "none", md: "grid" } }}>
            <Paper
              square
              sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
                height: "65%",
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
          <RegisterForm />
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
