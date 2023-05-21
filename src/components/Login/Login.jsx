import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Tooltip } from "@mui/material";

import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import { theme } from "../../../ThemeConfig";
import { login, loginGoogle } from "../../../store/auth/thunk";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#513a45",
    width: "100px",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#cc9b9a",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#cc9b9a",
    },
    "&:hover fieldset": {
      borderColor: "#513a45",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#cc9b9a",
    },
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important", // override inline-style
  },
});
const CssTextField2 = styled(FormControl)({
  "& label.Mui-focused": {
    color: "#513a45",
    width: "100px",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#cc9b9a",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#cc9b9a",
    },
    "&:hover fieldset": {
      borderColor: "#513a45",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#cc9b9a",
    },
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important", // override inline-style
  },
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const { accessToken, errorMessage } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken]);

  const handleLoginGoggle = () => dispatch(loginGoogle());
  const ingresar = (data) => dispatch(login(data));

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: ingresar,
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Este campo es obligatorio")
        .email("Ingrese un email"),
      password: Yup.string()
        .required("Este campo es obligatorio")
        .min(6, "es muy corta"),
    }),
    validateOnChange: false,
  });

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Box>
        {/* <Typography variant="h4" color={"primary"} align="center">
          Inicia sesion
        </Typography> */}
        <img
          src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1679269993/01_1_bymnbs.png"
          alt=""
          style={{ width: "280px" }}
        />
      </Box>
      <form action="" onSubmit={handleSubmit}>
        <Box>
          <Grid
            container
            rowSpacing={2}
            // alignItems="center"
            justifyContent={"center"}
          >
            <Grid item xs={10} md={12}>
              <CssTextField
                label="Email"
                variant="outlined"
                name="email"
                value={values.email}
                onChange={handleChange}
                fullWidth
                autoComplete="none"
                autoFocus={false}
                error={errors.email ? true : false}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={10} md={12}>
              <CssTextField2 variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Contraseña
                </InputLabel>
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  autoComplete="current-password"
                  // helperText={errors.password}
                  name="password"
                  onChange={handleChange}
                  error={errors.password ? true : false}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                        color={"primary"}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  fullWidth
                />

                {!!errors.password && (
                  <FormHelperText error>{errors.password}</FormHelperText>
                )}
              </CssTextField2>
            </Grid>
            {errorMessage && (
              <Typography variant="h6" color={"error"} align="center">
                {errorMessage}
              </Typography>
            )}
            <Grid container justifyContent="center" spacing={3} mt={2}>
              <Grid item xs={8} md={5}>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  sx={{
                    color: "white",
                    textTransform: "none",
                    textShadow: "2px 2px 2px grey",
                  }}
                >
                  Ingresar
                </Button>
              </Grid>
              <Grid item xs={8} md={5}>
                <Tooltip title="ingresa con google">
                  <Button
                    variant="contained"
                    startIcon={<GoogleIcon />}
                    onClick={handleLoginGoggle}
                    fullWidth
                    sx={{
                      color: "white",
                      textTransform: "none",
                      textShadow: "2px 2px 2px grey",
                    }}
                  >
                    Ingresa con google
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item xs={8} md={8}>
                <Typography
                  color={"secondary.primary"}
                  variant={"h5"}
                  mt={1}
                  align="center"
                >
                  No tienes cuenta?
                </Typography>
              </Grid>
              <Grid item xs={8} md={5}>
                <Tooltip title="ingresa con google">
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => navigate("/signup")}
                    type="button"
                    sx={{
                      color: "white",
                      textTransform: "none",
                      textShadow: "2px 2px 2px grey",
                    }}
                  >
                    Registrate
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default Login;