import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({currentTarget: input}) => {
    setData({...data, [input.name]: input.value})
  }
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {data: res} = await axios.post("http://localhost:3001/users/login", data)
      console.log(res.data)
      localStorage.setItem("token", res.data)
      res.cookie("Access Token", res.data)
      navigate('/moodwall')
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message)
      }
    }
    // await axios.post("/users/login", user).then(res => {
    //   console.log(res.json())
    // })
      // .then (data => {
      //   console.log(data)
      // })
    // navigate('/moodwall')
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h1>Welcome to the Wishing Well!</h1>
      <h3>Please login below to access the mood wall</h3>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              onChange={handleChange}
              required
              fullWidth
              id="email"
              type="email"
              label="Email Address"
              name="email"
              value={data.email}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleChange}
              type="password"
              name="password"
              label="Password"
              id="password"
              value={data.password}
              autoComplete="current-password"
            />
            {error && <div>{error}</div>}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              // href="/moodwall"
              fullWidth
              variant="contained"
              style={{color: "white"}}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/users/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}