import logon from "../assets/logon.svg";
// // import { useMutation } from "@tanstack/react-query";
// // import { login } from "../services/authService";
import {
  KeyboardArrowRight,
  LockRounded,
  VisibilityOff,
  Visibility,
  Mail,
} from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export interface IState {
  user: {
    email: string;
    password: string;
  };
}
//   // const { mutate } = useMutation({
//   //   mutationFn: login,
//   // });

//   // const handleLogin = () => {
//   //   const payload = {
//   //     username: state.user.email,
//   //     password: state.user.password,
//   //   };
//   //   mutate(payload);
//   // };

const Login = () => {
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
    <div>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
        >
          <img
            src="/img/sea.png"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="chat"
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justifyContent="space-between"
          style={{ padding: 10 }}
        >
          <div />
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 400,
                minWidth: 300,
              }}
            >
              <Grid container display="flex" justifyContent="center">
                <img
                  src={logon}
                  width={40}
                  alt=""
                  style={{ display: "flex", marginRight: 6 }}
                />
                <Typography
                  variant="h4"
                  fontWeight={700}
                  textAlign={"center"}
                  mb={2}
                  mt={2}
                  gutterBottom
                >
                  Rasx
                </Typography>
              </Grid>
              <div>
                <Typography variant="h5" fontWeight={700} textAlign={"center"}>
                  Login
                </Typography>
              </div>
              <TextField
                value={state.user.email}
                margin="normal"
                onChange={handleChange}
                autoFocus
                required
                id="name"
                name="email"
                label="Email Address"
                type="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Mail />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl variant="outlined" margin="normal">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  name="password"
                  onChange={handleChange}
                  value={state.user.password}
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  startAdornment={
                    <InputAdornment position="start">
                      <LockRounded />
                    </InputAdornment>
                  }
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
              <div style={{ height: 20 }} />
              <Button
                color="secondary"
                type="submit"
                variant="contained"
                endIcon={<KeyboardArrowRight />}
                onClick={() => navigate("/dash")}
              >
                Login
              </Button>
            </div>
          </form>
          <div style={{ height: 20 }} />
          <Typography
            variant="body1"
            sx={{ mt: 2, fontSize: { xs: "16px", md: "16px" } }}
          >
            You don't have an account? <Link to="/register">Register</Link>
          </Typography>
          <div />
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
