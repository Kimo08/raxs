/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AdbIcon from "@mui/icons-material/Adb";

import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div>
      <Container
        sx={{
          background: "lightgrey",
          maxHeight: "80vh",
          minHeight: "80vh",
          width: { xs: "70%", md: "60%" },
          boxShadow: "0 0 10px rgba(0, 0, 0, .2)",
          mt: 7,
        }}
      >
        <Typography variant="h5" textAlign={"center"} mb={2} gutterBottom>
          Welcome to Raxs Media
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ mt: 2 }}>
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
                  <AdbIcon
                    sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}
                  />
                </Box>

                <Typography
                  variant="h4"
                  textAlign={"center"}
                  sx={{
                    fontWeight: { md: "500" },
                    fontSize: { xs: "16px", md: "28px" },
                    mt: 3,
                  }}
                  color="secondary"
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
          <Grid item xs={6} sx={{ mt: 2 }}>
            <Typography variant="h6">Register</Typography>
            <form
              noValidate
              autoComplete="off"
              onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
              }}
            >
              <div>
                <TextField
                  required
                  id="name"
                  fullWidth
                  label="name"
                  type="name"
                  name="name"
                  margin="dense"
                  autoFocus
                />
              </div>
              <div>
                <TextField
                  sx={{ mt: 1 }}
                  fullWidth
                  autoFocus
                  required
                  margin="dense"
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                />
              </div>
              <div>
                <FormControl fullWidth sx={{ mt: 1 }} variant="filled" required>
                  <InputLabel htmlFor="filled-adornment-password">
                    Password
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <Button
                sx={{ mt: 1 }}
                type="submit"
                color="secondary"
                variant="contained"
                fullWidth
                endIcon={<KeyboardArrowRight />}
                onClick={() => navigate("/dash")}
              >
                Register
              </Button>
            </form>
            <Typography
              variant="body1"
              sx={{ mt: 1, fontSize: { xs: "12px", md: "16px" } }}
            >
              Already have an account? <Link to="/">Login</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
