import Frogger from "./frogger/frogger"
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import '../index.scss'

export default function BoredPage() {
    return (
      <div>
          <h1>Bored?</h1>
          <p>Distract yourself for a few with a classic game!</p>
          <Container component="main" maxWidth="md">
          <CssBaseline />         
          <Frogger />
          </Container>          
      </div>
    )
  }