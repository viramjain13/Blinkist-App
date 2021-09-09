import React from "react";
import { useState, useEffect } from "react";
import { makeStyles, Grid, Typography, Link } from "@material-ui/core";
import Data from "../../../../src/assets/mock-data/data";
import BookCard from "../../molecules/BookCard/BookCard";

const useStyles = makeStyles((theme) => ({
  bookButton: {
    padding: theme.spacing(1),
    color: "white",
    backgroundColor: theme.palette.primary.main,
    cursor: "pointer",
  },
  middleContainer: {
    maxWidth: "59rem",
    margin: "0 auto",
  },
  libraryTabs: {
    position: "relative",
    zIndex: 1,
    overflow: "visible",
  },
  tabs: {
    display: "flex",
    boxSizing: "border-box",
    flexDirection: "row",
    flex: "0 1 auto",
    padding: "3rem 0",
  },
  tabNames: {
    display: "flex",
    borderBottom: "0.125rem solid #BAC8CE",
    paddingBottom: "0.5rem",
    flexBasis: "100%",
    cursor: "pointer",
    flexDirection: "column",
    color: "black",
  },
  tabActive: {
    color: "#22C870",
    borderBottom: "0.125rem solid #22C870",
  },
}));

const MyLibraryData = (props: any) => {
  const styles = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [bookState, setBookState] = useState(false);
  const [bookCardItems, setBookCardData] = useState<any>([]);
  const [currentTab, setCurrentTab] = useState("CR");
  const onchangeTab = () => {
    currentTab === "CR" ? setCurrentTab("F") : setCurrentTab("CR");
  };
  // const onStatusChange = (bookData: any) => {
  //   const data = bookData;
  //   const book_id = data.id;
  //   const bookStatus = data.status;
  //   bookStatus === "CR" ? (data["status"] = "F") : (data["status"] = "CR");
  //   setBookState(!bookState);
  //   API.put(`/myLibrary/${book_id}`, data)
  //     .then((res:any) => res.data)
  //     .then(
  //       (result:any) => {
  //         console.log(result, "Book status updated successfully");
  //       },
  //       (error:any) => {
  //         console.log(error, "Error while updating");
  //       }
  //     );
  // };

  useEffect(() => {
    const data = Data
    setBookCardData(data);
  }, [bookState]);

  return (
    <>
      <div className={styles.middleContainer}>
        <div className={styles.libraryTabs}>
          <div className={styles.tabs}>
            <a
              onClick={onchangeTab}
              className={
                currentTab === "CR"
                  ? `${styles.tabNames} ${styles.tabActive}`
                  : `${styles.tabNames}`
              }
            >
              <Typography variant="subtitle1">Currently reading</Typography>
            </a>
            <a
              onClick={onchangeTab}
              className={
                currentTab === "F"
                  ? `${styles.tabNames} ${styles.tabActive}`
                  : `${styles.tabNames}`
              }
            >
              <Typography variant="subtitle1">Finished</Typography>
            </a>
          </div>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid container item xs={12} spacing={4}>
          {bookCardItems.length !== 0 &&
            bookCardItems
              .filter((bookCardItem: any) => {
                return bookCardItem.status === `${currentTab}`;
              })
              ?.map((bookCardItem: any) => (
                <Grid key={bookCardItem.id} item xs={12} md={4}>
                  <BookCard
                    book={bookCardItem}
                    btnText={
                      bookCardItem.status === "CR"
                        ? "Finished Reading"
                        : "Currently Reading"
                    }
                    bookStateChange={(bookData: any) => {
                      // onStatusChange(bookData);
                    }}
                  />
                </Grid>
              ))}
        </Grid>
      </Grid>
      {bookCardItems.length === 0 && (
        <h3 style={{ textAlign: "center" }}>
          You don't have any books to read
        </h3>
      )}
    </>
  );
};

export default MyLibraryData;
