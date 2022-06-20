import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, theme } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

const journalEntries = [];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
};

export default function Journal() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {journalEntries.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

// const handleCreateEntry = () => {
//   return (
//     <div>
//       <p>Created!</p>
//     </div>
//   );
// };

// export default function InspiredPage() {
//   const journalEntries = [];
//   const [journals, setJournals] = useState();

//   useEffect(() => {
//     fetch()
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setJournals(data);
//       });
//   }, []);

//   return (
//     <div className='journalEntriesPage'>
//       <div className='pageHeading'>
//         <h1>Feeling Inspired Today??</h1>
//         <p>Create an entry below.</p>
//       </div>

//       <div className="createJournalEntry">
//         <h2>Add a New Journal Entry</h2>
//         <form>
//           <label>Title:</label>
//           <input type='text' required></input>
//           <label>Date:</label>
//           <input type='text' required></input>
//           <label>Journal Entry:</label>
//           <textarea required></textarea>
//           <button>Add Entry</button>
//         </form>
//       </div>

//       {/* <div>
//         <Button onClick={handleCreateEntry}>Create a new Entry</Button>
//         <Button onClick={handleDelete}>Permanatly Delete an Entry</Button>
//       </div> */}

//       <div className='journalEntries'>
//         <h2>All Journal Entries</h2>
//         <hr></hr>
//         {journalEntries && {journalEntries.map((journalEntry) => (
//           <div className='journalEntry' key={journalEntry.id}>
//             <h3>{journalEntry.title}</h3>
//             <h4>{journalEntry.date}</h4>
//             <p>{journalEntry.body}</p>
//             <hr></hr>
//           </div>
//         ))}}
//       </div>
//     </div>
//   );
// }

// [
//   {
//     date: 'June 14, 2014',
//     title: 'Moody Title',
//     body: '“I am quite sure of him,” replied Jekyll; “I have grounds for certainty that I cannot share with any one. But there is one thing on which you may advise me. I have--I have received a letter; and I am at a loss whether I should show it to the police. I should like to leave it in your hands, Utterson; you would judge wisely, I am sure; I have so great a trust in you.”',
//     id: 2,
//   },
//   {
//     date: 'June 10, 2014',
//     title: 'Witty Title',
//     body: 'Elizabeth would not oppose such an injunction--and a moment’s consideration making her also sensible that it would be wisest to get it over as soon and as quietly as possible, she sat down again and tried to conceal, by incessant employment the feelings which were divided between distress and diversion. Mrs. Bennet and Kitty walked off, and as soon as they were gone, Mr. Collins began.',
//     id: 1,
//   },
// ]);
