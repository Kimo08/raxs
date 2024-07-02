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

  // const [name, setName] = React.useState("Kio");
  // const [email, setEmail] = React.useState("email.email.com");
  // const [password, setPassword] = React.useState("12345");

  return (
    <div>
      <Container
        sx={{
          background: "lightgrey",
          height: "90vh",
          width: "120vh",
          boxShadow: "0 0 10px rgba(0, 0, 0, .2)",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Raxs Media
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper
              square
              sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
                height: "100%",
              }}
            >
              <Box sx={{ p: 5 }}>
                <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                  <AdbIcon
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  />
                </Box>

                <Typography
                  variant="h4"
                  sx={{ fontWeight: "500", mt: 3 }}
                  color="secondary"
                >
                  Raxs Chat
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Raxs chat was developed in the year 2024, the year of the
                  dragon. It is a platform where we connect with one another. It
                  offers a lot of services.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={6} sx={{ mt: 2 }}>
            <form noValidate autoComplete="off">
              <Typography
                variant="h5"
                sx={{ mb: 2, fontWeight: "500", textTransform: "uppercase" }}
              >
                Register
              </Typography>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  fullWidth
                  label="name"
                  type="name"
                  name="name"
                  autoFocus
                />
              </div>
              <div>
                <TextField
                  sx={{ marginTop: "20px" }}
                  fullWidth
                  helperText="please enter your email"
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  name="email"
                  label="Email Address"
                  type="email"
                />
              </div>
              <div>
                {/* <TextField
              sx={{ marginTop: "20px" }}
              required
              id="outlined-required"
              label="password"
              value={password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value);
              }}
            /> */}
                <FormControl
                  fullWidth
                  sx={{ marginTop: "20px" }}
                  variant="filled"
                  required
                >
                  <InputLabel htmlFor="filled-adornment-password">
                    Password
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
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
                sx={{ marginTop: "20px" }}
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<KeyboardArrowRight />}
                onClick={() => navigate("/dash")}
              >
                Register
              </Button>
            </form>
            <Typography variant="body1" sx={{ marginTop: "20px" }}>
              Already have an account? <Link to="/">Login</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
