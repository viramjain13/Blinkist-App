import React from "react";
import BookCard from "../../molecules/BookCard/BookCard";
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';

const Transition:any = React.forwardRef(function Transition(props:any, ref:any) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const BookCards = ({ booksList }:any) => {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: "flex", marginTop: "75px", flexWrap: "wrap" }}>
      {booksList.map((book:any) => {
        return (
          <>
            <Grid item xs={4}>
              <div>
                <BookCard
                  onClick={handleClickOpen}
                  buttonTitle="Add to Library"
                  key={book.id}
                  title={book.title}
                  author={book.author}
                  time={book.time}
                  image={book.image}
                />
              </div>
            </Grid>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Please Login to continue
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  OK
                </Button>
              </DialogActions>
            </Dialog>
          </>
        );
      })}
    </div>
  );
};

export default BookCards;