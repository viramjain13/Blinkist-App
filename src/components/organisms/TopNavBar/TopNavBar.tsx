import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import {
  Box,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../atoms/logo.svg";
import Button from "../../atoms/Button/Button";
import MyLibrary from "../MyLibrary/MyLibrary";
import CategoryBooks from "../CategoryBooks/CategoryBooks";
import { ImBook } from "react-icons/im";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useAuth0 } from "@auth0/auth0-react";
import BookCards from "../BookCards/BookCards";
import AccountMenu from "../AccountMenu/AccountMenu";
import Image from "../../atoms/Image/Image";
import AddBook from "../AddBook/AddBook";
// import libraryBooks from "material-ui/svg-icons/av/library-books";
const data1 = require("../../../data/books.json");
const category = require("../../../category/categories.json");
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "250px",
    marginTop: theme.spacing(4.375),
  },
  title: {
    marginRight: "2rem",
    color: "black",
  },
  category: {
    gridTemplateColumns: "auto auto auto",
    display: "grid",
  },
  font: {
    fontWeight: 500,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  typographyStyle: {
    color: "#03314b",
    fontWeight: 500,
  },
  book: {
    marginTop: 100,
  },
  explore: {
    display: "contents",
    // marginBottom: 200,
    marginLeft: -30,
    // marginTop: -15,
  },
  dropdown: {
    fontSize: "xx-large",
  },
  btn: {
    marginRight: 25,
    color: "#03314b",
    fontWeight: "bold",
  },
  header: {
    color: "#0365f2",
    fontWeight: 500,
    fontSize: 1,
  },
  lib: {
    // marginRight: -100,
    marginTop:-8,
    marginLeft: 300,
  },
  divider: {
    borderBottom: "1px solid",
  },
  modal: {
    backgroundColor: "#ddd",
    position: "fixed",
    width: 100,
    height: 100,
    left: 30,
    top: 0,
    marginLeft: -50,
  },
  open: {
    display: "block",
    height: "fit-content",
    backgroundColor: "#f1f6f4",
    zIndex: 315,
    position: "fixed",
    width: "150vh",
    marginTop: "",
  },
  close: {
    display: "none",
  },
  icon: {
    marginLeft: -29,
    marginTop: 25,
  },
}));
var newLibraryBooks: any = [];
var newTwo: any = [];

const Modal = ({ handleClose, show, children }: any) => {
  const classes = useStyles();
  console.log(show);
  return (
    <div className={show ? classes.open : classes.close}>
      <div className="modal-container">{children}</div>
    </div>
  );
};

function TopNavBar() {
  const classes = useStyles();
  const [library, setLibrary] = useState(true);
  const [categoryBooks, setCategoryBooks] = useState(data1);
  const [showAllBooks, setBooks] = useState(false);
  const [libraryBooks, setLibraryBooks] = useState<any>([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [categorySelected, setCategory] = useState([]);
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const [filter, setFilter] = useState("");
  const [open, setOpen] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [searchResult, setSearchResult] = useState<any>([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const getBookDetails = (book: any) => {
  //   let newBook = {
  //     id: book[0],
  //     title: book[1],
  //     author: book[2],
  //     time: book[3],
  //     category: book[4],
  //     image: book[5],
  //   };
  //   newLibraryBooks.push(newBook);
  //   setLibraryBooks((libraryBooks: any) => [...libraryBooks, newBook]);
  //   newTwo.push(newBook);
  //   for (let j = 0; j < newTwo.length; j++) {
  //     setCategoryBooks((categoryBooks: any) => [...categoryBooks, newTwo[j]]);
  //   }
  // };

  const onChangeHandler = (e: any) => {
    console.log("on onChangeHandler");
    setFilter(e.target.value);

    let books = data1.filter((item: any) => {
      return Object.keys(item).some((key) => {
        return item[key]
          .toString()
          .toLowerCase()
          .includes(filter.toString().toLowerCase());
      });
    });

    if (e.target.value === "") {
      setIsClick(false);
    } else {
      setIsClick(true);
    }
    // setLibraryBooks(books);
    // setIsLoaded(true);

    // setSearchResult(books);
    console.log("setSearchResult");
    console.log(books);
    setSearchResult(books);
  };
  function myLibrary() {
    setLibrary(true);
    // setExplore(false);
    setButtonPopup(false);
  }

  const getExploreCategory = (bookId: any) => {
    let libraryBook = data1.find((book: any) => book.id === bookId);
    newLibraryBooks.push(libraryBook);
    setLibraryBooks(newLibraryBooks);
  };

  function explore() {
    // setExplore(true);
    setBooks(!showAllBooks);
  }
  const [displaySearchBar, setDisplaySearchBar] = React.useState("none");
  const buttonClick = (category: any) => {
    let newCategoryBooks = categoryBooks.filter(
      (book: any) => book.category === category
    );
    setCategory(newCategoryBooks);
    setBooks(!showAllBooks);
    setButtonPopup(true);
    setLibrary(false);
  };
  function toggleSearch() {
    if (displaySearchBar === "none") {
      setDisplaySearchBar("block");
      // setIsClick(true);
    } else {
      setDisplaySearchBar("none");
      // setIsClick(false);
    }
  }
  const textFieldContainerStyle: any = {
    width: 700,
    position: "absolute",
    top: 35,
    left: 550,
    zIndex: 10,
    backgroundColor: "white",
  };
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={2} style={{ marginTop: "2.5px" }}>
            <img src={logo} className={classes.logo} alt="Blinkist logo" />
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            item
            xs={1}
            style={{ paddingTop: 15 }}
          >
            <Box component="span" onClick={toggleSearch}>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg"
                styleObject={{ height: 35, width: 35 }}
              />
            </Box>
          </Grid>
          <Container component="div" style={textFieldContainerStyle}>
            <Box display={displaySearchBar}>
              <TextField
                placeholder="Search Titles"
                value={filter}
                onChange={onChangeHandler}
                style={{ width: 400 }}
              />
            </Box>
          </Container>
          
            <Grid item xs={6} className={classes.explore} onClick={explore}>
              <Button className={classes.btn} title="Explore">
                {" "}
              </Button>
              {showAllBooks ? (
                <ExpandLessIcon className={classes.icon} />
              ) : (
                <ExpandMoreIcon className={classes.icon} />
              )}
            </Grid>
          
          {isAuthenticated && (
            
              <Grid item xs={2} onClick={myLibrary} className={classes.explore}>
                <Button title="My Library" className={classes.btn} />
              </Grid>
            
          )}
          {!isAuthenticated && (
            
              <Grid item xs={2} className={classes.explore}>
                <Button
                  onClick={() => loginWithRedirect()}
                  title="Login"
                  className={classes.btn}
                />
              </Grid>
            
          )}
          {isAuthenticated && (
            <>
              <Grid item xs={2} className={classes.explore}>
                  <Button
                    title="Add Book"
                    className={classes.btn}
                    onClick={handleClickOpen}
                  />
                  {/* <DraggableDialog
                open={open}
                handleClose={(open: any) => handleClose()}
                getBookDetails={(book: any) => getBookDetails(book)}
              /> */}
                
                
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                  >
                    <DialogContent>
                      <AddBook />
                    </DialogContent>
                    <DialogActions>
                      <Button
                        onClick={handleClose}
                        color="primary"
                        variant="contained"
                        title="Cancel"
                      />
                    </DialogActions>
                  </Dialog>
                
              </Grid>

              <Grid item xs={2} className={classes.lib}>
                <AccountMenu />
              </Grid>
            </>
          )}
        </Grid>
        {/* <Profile /> */}
        <Modal class={classes.modal} show={showAllBooks}>
          <div>
            <h3 className={classes.header}>Explore by category</h3>
            <div className={classes.divider}></div>
            <div className={classes.category}>
              {category.map((category: any) => {
                return (
                  <div>
                    <ImBook />
                    <Button
                      onClick={() => buttonClick(category.category)}
                      title={category.category}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Modal>
        {buttonPopup && (
          <CategoryBooks
            getExploreCategory={(id: any) => getExploreCategory(id)}
            booksList1={categorySelected}
          />
        )}
        {isClick && <BookCards booksList={searchResult} />}
        {!isAuthenticated && !isClick && !buttonPopup && (
          <BookCards booksList={categoryBooks} />
        )}
        {library && !isClick && !open && isAuthenticated && (
          <MyLibrary booksList={libraryBooks} />
        )}
      </div>
    </>
  );
}
export default TopNavBar;
