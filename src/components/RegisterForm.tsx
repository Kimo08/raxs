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
import React from "react";
import { Link } from "react-router-dom";
import { IMedia } from "../pages/Register";

const RegisterForm = () => {
  const [state, setState] = React.useState<IMedia>({
    user: {
      firstname: "",
      lastname: "",
      phone: 0,
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
    alert("Register Success");
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div>
      <Box
        sx={{
          height: "80%",
          mt: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          maxWidth: { xs: "270px", md: "420px" },
          ml: 5,
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          textAlign={{ xs: "center" }}
          mb={1}
        >
          Register
        </Typography>
        <Typography variant="h6" textAlign="center" mb={1}>
          Please enter your details
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "row", gap: 4 }}>
            <TextField
              required
              value={state.user.firstname}
              id="firstname"
              fullWidth
              label="firstname"
              type="firstname"
              name="firstname"
              margin="dense"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              required
              value={state.user.lastname}
              id="lastname"
              fullWidth
              label="lastname"
              type="lastname"
              name="lastname"
              margin="dense"
              autoFocus
              onChange={handleChange}
            />
          </div>
          <TextField
            sx={{ mt: 1 }}
            fullWidth
            autoFocus
            required
            margin="dense"
            id="email"
            value={state.user.email}
            name="email"
            label="Email Address"
            type="email"
            onChange={handleChange}
          />
          <TextField
            required
            value={state.user.phone}
            id="phone"
            fullWidth
            label="phone"
            type="phone"
            name="phone"
            margin="dense"
            autoFocus
            onChange={handleChange}
          />
          <FormControl fullWidth sx={{ mt: 1 }} variant="filled" required>
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              value={state.user.password}
              onChange={handleChange}
              name="password"
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
          <Button
            sx={{ mt: 2 }}
            type="submit"
            color="secondary"
            variant="contained"
            fullWidth
            endIcon={<KeyboardArrowRight />}
            // onClick={handleRegister}
          >
            Register
          </Button>
        </form>
        <Typography
          variant="body1"
          sx={{ mt: 2, fontSize: { xs: "16px", md: "16px" } }}
        >
          Already have an account? <Link to="/">Login</Link>
        </Typography>
      </Box>
    </div>
  );
};
export default RegisterForm;
