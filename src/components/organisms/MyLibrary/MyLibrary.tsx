import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BookCard from "../../molecules/BookCard/BookCard";
import TypographyComponent from "../../atoms/Typography/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "white",
  },
  tab: {
    color: "#22C870",
  },
  inactive: {
    color: "#6D787E",
  },
  tabs:{
    marginTop:"30px",
  },
  font: {
    fontSize: "2.25rem",
    lineHeight: "2.8125rem",
    fontFamily: "arial",
    color: "#03314B",
    marginBottom: "0",
    fontWeight: "bold",
  },
}));

function TabPanel(props:any) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }
let newList1:any = [];
export default function MyLibrary({ booksList} :any) {
  let allBooks:any=[];
  for(let i=0;i<booksList.length;i++){
    allBooks.push(booksList[i]);
  }
  console.log(allBooks);
  var newbooks = [ {
    "id": 30,
    "title": "Diary of Young GIrl",
    "author": "Anne Frank",
    "time": "19",
    "category": "Autobiography",
    "image": "https://images.blinkist.io/images/books/601d347c6cee0700078f5ecd/1_1/470.jpg",
},
{
    "id": 40,
    "title": "Killing the Mob",
    "author": "Martin Dugard",
    "time": "10",
    "category": "History",
    "image": "https://images.blinkist.io/images/books/610d461d6cee070007427694/1_1/470.jpg",
}];

  if (newList1.length > 0) {
    let newbooks1 = booksList.filter((val:any) => !newList1.includes(val));
    for (let i = 0; i < newbooks1.length; i++) {
      newbooks.push(newbooks1[i]);
    }
  } else {
    for (let i = 0; i < booksList.length; i++) {
      newbooks.push(booksList[i]);
    }
  }
 
  allBooks.push(newbooks[0]);
  allBooks.push(newbooks[1]);
  const [readingBooksList, setBooksList] = useState(newbooks);
  const [finishedBooksList, setFinishedBooksList] = useState(newList1);
  const classes = useStyles();
  const [value, setValue] = useState(0);
  
  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };

  function changeBookStatus(bookId:any) {
    let newReadingBooks = readingBooksList.filter((book) => book.id !== bookId);
    setBooksList(newReadingBooks);
    let finishedBook = allBooks.find((book:any) => book.id === bookId);
    if (!finishedBooksList.includes(finishedBook)) {
      setFinishedBooksList((finishedBooksList:any) => [
        ...finishedBooksList,
        finishedBook,
      ]);
    }
    newList1.push(finishedBook);
  }

  function changeFinishedBooksStatus(bookId:any) {
    let newFinishedBooks = finishedBooksList.filter(
      (book:any) => book.id !== bookId
    );
    setFinishedBooksList(newFinishedBooks);
    let readAgainBook = allBooks.find((book:any) => book.id === bookId);
    let newLibraryBooks :any= [...readingBooksList];
    if (!newLibraryBooks.includes(newLibraryBooks)) {
      newLibraryBooks.push(readAgainBook);
    }
    setBooksList(newLibraryBooks);
    newList1 = [...newFinishedBooks];
  }

  let newBooks:any = [];
  if (finishedBooksList.length > 0) {
    newBooks = Array.from(new Set(finishedBooksList.map((book:any) => book)));
  } else {
    newBooks = [...finishedBooksList];
  }
  let newReads:any = [];
  if (readingBooksList.length > 0) {
    newReads = Array.from(new Set(readingBooksList.map((book:any) => book)));
  } else {
    newReads = [...readingBooksList];
  }
  
  return (
    <div style={{marginTop:"60px"}}>
      <TypographyComponent
        variant="alphaHeader3"
        className={classes.font}
        children="My Library"
      />
      <Tabs
        className={classes.tabs}
        value={value}
        indicatorColor="secondary"
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab
          label="Currently reading"
          className={value === 0 ? classes.tab : classes.inactive}
        />
        <Tab
          label="Finished"
          className={value === 1 ? classes.tab : classes.inactive}
        />
      </Tabs>
      <TabPanel value={value} key={value} index={value}>
        <div >
          <Grid container spacing={3}>
            {value === 0 && newReads
              ? newReads.map((book:any) => {
                  console.log(finishedBooksList.length);
                  return (
                    <Grid item xs={4}>
                      <div>
                        <BookCard
                          onClick={() => changeBookStatus(book.id)}
                          key={book.id}
                          buttonTitle="Finished Reading"
                          title={book.title}
                          author={book.author}
                          time={book.time}
                          image={book.image}
                        />
                      </div>
                    </Grid>
                  );
                })
              : newBooks.map((book:any) => {
                  return (
                    <Grid item xs={4}>
                      <div>
                        <BookCard
                          onClick={() => changeFinishedBooksStatus(book.id)}
                          key={book.id}
                          buttonTitle="Read Again"
                          title={book.title}
                          author={book.author}
                          time={book.time}
                          image={book.image}
                        />
                      </div>
                    </Grid>
                  );
                })}
          </Grid>
        </div>
      </TabPanel>
    </div>
  );
}