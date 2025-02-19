// // import { useMutation } from "@tanstack/react-query";
// // import { register } from "../services/authService";
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
import logon from "../assets/logon.svg";
import {
  AccountCircle,
  Contacts,
  KeyboardArrowRight,
  LockRounded,
  Mail,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
export interface IMedia {
  user: {
    firstname: string;
    phone: number;
    lastname: string;
    email: string;
    password: string;
  };
}
//   // const { mutate } = useMutation({
//   //   mutationFn: register,
//   // });

//   // const handleRegister = () => {
//   //   const payload = new FormData();
//   //   payload.append("firstname", state.user.firstname);
//   //   payload.append("lastname", state.user.lastname);
//   //   payload.append("phone", String(state.user.phone));
//   //   payload.append("role", "PATIENT");
//   //   payload.append("email", state.user.email);
//   //   payload.append("password", state.user.password);
//   //   mutate(payload);
//   // };

const Register = () => {
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
            src="/src/assets/img/meditate.jpg"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
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
                  Raxs
                </Typography>
              </Grid>
              <div>
                <Typography variant="h5" fontWeight={700} textAlign={"center"}>
                  Register
                </Typography>
              </div>
              <div style={{ display: "flex", flexDirection: "row", gap: 4 }}>
                <TextField
                  required
                  value={state.user.firstname}
                  id="firstname"
                  label="firstname"
                  type="firstname"
                  name="firstname"
                  margin="normal"
                  autoFocus
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  required
                  value={state.user.lastname}
                  id="lastname"
                  label="lastname"
                  type="lastname"
                  name="lastname"
                  margin="normal"
                  autoFocus
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
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
              <TextField
                required
                value={state.user.phone}
                id="phone"
                label="phone"
                type="phone"
                name="phone"
                margin="normal"
                autoFocus
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Contacts />
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
                Register
              </Button>
            </div>
          </form>
          <div style={{ height: 20 }} />
          <Typography
            variant="body1"
            sx={{ mt: 2, fontSize: { xs: "16px", md: "16px" } }}
          >
            Already have an account? <Link to="/">Login</Link>
          </Typography>
          <div />
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
