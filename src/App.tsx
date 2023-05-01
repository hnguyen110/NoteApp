import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import {
  Button,
  TextField,
  Container,
  Box,
  Typography,
  CssBaseline,
} from "@mui/material";
import { Fragment } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";
import Nav from "./Nav";

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: indigo,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <Fragment>
        <Container
          sx={{
            mt: 10,
          }}
          maxWidth="xs"
        >
          <Formik
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
            initialValues={{
              username: "",
              password: "",
            }}
          >
            {({ touched, errors }) => (
              <Form>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Sign In
                  </Typography>

                  <Field
                    name="username"
                    margin="normal"
                    fullWidth
                    label="Username"
                    variant="outlined"
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                    as={TextField}
                  />

                  <Field
                    name="password"
                    type="password"
                    margin="normal"
                    fullWidth
                    label="Password"
                    variant="outlined"
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    as={TextField}
                  />

                  <Button
                    sx={{
                      mt: 3,
                      mb: 2,
                    }}
                    fullWidth
                    variant="contained"
                    type="submit"
                  >
                    submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Container>
      </Fragment>
    </ThemeProvider>
  );
}

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export default App;
