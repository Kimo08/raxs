import React from "react";
import { IState } from "../pages/Login";
import { Link, useNavigate } from "react-router-dom";
import {
  KeyboardArrowRight,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

const LoginForm = () => {
  const [state, setState] = React.useState<IState>({
    user: {
      email: "",
      password: "",
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    alert("Login Success");
  };

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <Box
        sx={{
          height: "80%",
          mt: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          maxWidth: { xs: "270px", md: "320px" },
          ml: 5,
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          textAlign={{ xs: "center" }}
          mb={2}
        >
          Login
        </Typography>
        <Typography variant="h6" textAlign="center">
          Please enter your details
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <TextField
              sx={{
                mt: 2,
                fontSize: { xs: "6px", md: "12px" },
                justifyItems: { xs: "center" },
              }}
              fullWidth
              value={state.user.email}
              onChange={handleChange}
              autoFocus
              required
              id="name"
              name="email"
              label="Email Address"
              type="email"
            />
          </div>
          <div>
            <FormControl
              variant="filled"
              fullWidth
              focused
              sx={{ marginTop: 2 }}
            >
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                name="password"
                onChange={handleChange}
                value={state.user.password}
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
            // onClick={handleLogin}
          >
            Login
          </Button>
        </form>
        <Typography
          variant="body1"
          sx={{ mt: 2, fontSize: { xs: "16px", md: "16px" } }}
        >
          You don't have an account? <Link to="/register">Register</Link>
        </Typography>
      </Box>
    </>
  );
};

export default LoginForm;
