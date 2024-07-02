import * as React from "react";
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
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AdbIcon from "@mui/icons-material/Adb";

const Login = () => {
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
        sx={{ background: "lightgrey", height: "80vh", width: "120vh", mt: 4 }}
      >
        <Typography variant="h3" gutterBottom>
          Raxs
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ mt: 4 }}>
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
          <Grid item xs={6} sx={{ mt: 4 }}>
            <Typography variant="h6" color="success">
              Login
            </Typography>
            <form
              noValidate
              autoComplete="off"
              onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
              }}
            >
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
                <FormControl variant="filled" fullWidth focused>
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
                fullWidth
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<KeyboardArrowRight />}
                onClick={() => navigate("/dash")}
              >
                Login
              </Button>
            </form>
            <Typography variant="body1" sx={{ marginTop: "20px" }}>
              You don't have an account? <Link to="/register">Register</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
