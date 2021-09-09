import React from "react";
import { useState, useEffect } from "react";
import { makeStyles, Grid, TextField } from "@material-ui/core";
import Data from "../../../assets/mock-data/data";
import BookCard from "../../molecules/BookCard/BookCard";
import { useRouteMatch } from "react-router-dom";
import SearchAutoComplete from "../SearchAutoComplete/SearchAutoComplete";

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
}));

function ExploreByCategoryComponent() {
  const styles = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [bookState, setBookState] = useState(false);
  const [bookCardItems, setBookCardData] = useState<any>([]);

  const { path, url } = useRouteMatch();

  const onStatusChange = (bookData:any) => {
    const data = bookData;
    updateExplore(bookData);
    data["status"] = "CR";
    setBookState(!bookState);
    // API.post(`/myLibrary`, data)
    //   .then((res) => res.data)
    //   .then(
    //     (result) => {
    //       console.log(result, "Book added to my library successfully");
    //     },
    //     (error) => {
    //       console.log(error, "Error while updating");
    //     }
    //   );
  };

  const updateExplore = (bookData:any) => {
    const exploreData = bookData;
    const book_id = exploreData.id;
    const bookStatus = exploreData.status;
    bookStatus === "E"
      ? (exploreData["status"] = "")
      : (exploreData["status"] = "Add to Library");
    // API.put(`/explore/${book_id}`, exploreData)
    //   .then((res) => res.data)
    //   .then(
    //     (result) => {
    //       console.log(result, "Updated book status successfully");
    //     },
    //     (error) => {
    //       console.log(error, "Error while updating");
    //     }
    //   );
  };

  useEffect(() => {
  
    //       setIsLoaded(true);
          setBookCardData(Data);
    // 
  }, [bookState]);

  return (
    <>
      <div className={styles.middleContainer}>
        <div >
          <SearchAutoComplete inputData={bookCardItems} />
        </div>
      </div>
      <br />
      <Grid container spacing={2}>
        <Grid container item xs={12} spacing={4}>
          {bookCardItems?.map((bookCardItem:any) => (
            <Grid key={bookCardItem.id} item xs={12} md={4}>
              <BookCard
                book={bookCardItem}
                btnText={bookCardItem.status === "E" ? "Add to Library" : ""}
                bookStateChange={(bookData:any) => {
                  onStatusChange(bookData);
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default ExploreByCategoryComponent;
