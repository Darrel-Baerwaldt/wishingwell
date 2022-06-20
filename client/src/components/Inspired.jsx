// import { useState, useEffect } from 'react';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

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
    
//     const createJournalEntry = () => {
      
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
//               id="email"
//               type="email"
//               label="Email Address"
//               name="email"
//               value={data.email}
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               onChange={handleChange}
//               type="password"
//               name="password"
//               label="Password"
//               id="password"
//               value={data.password}
//               autoComplete="current-password"
//             />
//             <Button
//               type="submit"
//               // href="/moodwall"
//               fullWidth
//               variant="contained"
//               style={{color: "white"}}
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
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