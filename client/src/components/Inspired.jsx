// import { useState, useEffect } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { TextareaAutosize } from '@mui/base';

// const journalEntries = [];

// export default function InspiredPage() {
//   const [journals, setJournals] = useState([]);

//   useEffect(() => {
//     fetch('/journal')
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setJournals(data);
//       });
//     }, []);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//           const {journals: res} = await axios.post("/journals", journals)
//           console.log(res.journals)
//           alert('Your entry was saved.')
//           navigate('/inspired')
//         } catch (error) {
//           if (
//             error.response &&
//             error.response.status >= 400 &&
//             error.response.status <= 500
//           ) {
//             setError(error.response.data.message)
//           }
//         }
//     }

//     console.log(journals)
//   const test = (journals) => {
//     journals.map((oneEntry) => {
//       return(
//       <div className='journalEntry' key={oneEntry.id}>
//         <h4>{oneEntry.date}</h4>
//         <h3>{oneEntry.title}</h3>
//         <p>{oneEntry.body}</p>
//         <hr></hr>
//       </div>
//     )})
//   };

//   return (
//     <div className='journalEntriesPage'>
//       <div className='pageHeading'>
//         <h1>Feeling Inspired Today??</h1>
//         <p>Create an entry below.</p>
//       </div>

//       <div className='createJournalEntry'>
//         <h2>Add a New Journal Entry</h2>
//         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               onChange={handleChange}
//               required
//               fullWidth
//               id="title"
//               type="title"
//               label="Title"
//               name="title"
//               value={journals.title}
//               autoComplete="title"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               onChange={handleChange}
//               type="text"
//               name="date"
//               label="date"
//               id="date"
//               value={journals.date}
//             />
//             <TextareaAutosize
//               margin="normal"
//               required
//               fullWidth
//               onChange={handleChange}
//               type="text"
//               name="body"
//               label="body"
//               id="body"
//               value={journals.body}
//             />
//             <Button
//               type="submit"
//               // href="/moodwall"
//               fullWidth
//               variant="contained"
//               style={{color: "white"}}
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Submit Entry
//             </Button>
//             </Box>
//       </div>

//       <div className='journalEntries'>
//         <h2>All Journal Entries</h2>
//         <hr></hr>
//         {test}
//       </div>
//     </div>
//   );
// }