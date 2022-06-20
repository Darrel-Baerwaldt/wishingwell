const Journal = require('../models/Journal');

exports.journalEntry = async (req, res) => {
  const { entries, userId, title, date, body } = req.body;

  const journalEntries = await journalEntry.findOne({ userId: userId });

  if (!userId) {
    const newJournal = new User.Journal({
      entries: [
        {
          userId: { type: Schema.Types.ObjectId, ref: 'User' },
          title: { type: String },
          date: { type: String },
          body: { type: String },
        },
      ],
    });

    newUser.Journal.save();
    return res.json('Journal Entry Saved');
  }

  console.log('Entry Not Saved');
  res.json('Try Again');
};

exports.handleNewJournal = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newJournal = {
      date: data.get('date'),
      title: data.get('title'),
      body: data.get('body'),
      // id: data.get('id'),
    };
    console.log('newJournal is ', newJournal);
    await axios
      .post('/inspired', newJournal)
      .then((res) => console.log('Journal Saved'));
  };

exports.handleDelete = (title) => {
    const newJournals = journals.filter((journal) => journal.title !== title);
    setJournals(newJournals);
  };
