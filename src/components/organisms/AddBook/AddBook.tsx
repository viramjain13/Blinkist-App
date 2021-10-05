import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  CardHeader,
  TextField,
  
} from "@material-ui/core";
import Button from "../../atoms/Button/Button";
// import API from "../../../api";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "1rem",
  },
  btn: {
    textAlign: "center",
  },
}));

const AddBook = (props: any) => {
  
  const styles = useStyles();
  
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    category: "",
    readCount: "",
    
    imgSrc: "",
    status: "E",
  });
  const handleChange = (e: any) => {
    const data = formData;
    const inputData: any = { ...data };
    inputData[e.target.id] = e.target.value;
    setFormData(inputData);
  };

  const addBook = (e: any) => {
    e.preventDefault();
    
    // API.post(`/explore`, bookData).then((res) => {
    //   console.log(res);
    //   console.log(res.data, res.status);
    // });
    
    console.log("book details submitted", formData);
    alert("Book details added successfully");
      window.location.reload();
  };

  return (
    <Grid container>
      <Card variant="outlined">
        <CardHeader title="Add Book"></CardHeader>
        <CardContent>
          <form >
            <TextField
              className={styles.root}
              required
              type="text"
              fullWidth
              id="name"
              placeholder="Enter Book Name"
              variant="outlined"
              label="Book Name"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              className={styles.root}
              type="text"
              fullWidth
              id="author"
              placeholder="Enter Author Name"
              variant="outlined"
              label="Book Author"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              className={styles.root}
              type="text"
              fullWidth
              id="category"
              placeholder="Enter Book Category"
              variant="outlined"
              label="Book Category"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              className={styles.root}
              type="text"
              fullWidth
              id="readCount"
              placeholder="Enter Read Count"
              variant="outlined"
              label="Read Count"
              onChange={(e) => handleChange(e)}
            />
        
            <TextField
              className={styles.root}
              type="text"
              fullWidth
              id="imgSrc"
              placeholder="Enter Book Image Url"
              variant="outlined"
              label="Book Image Url"
              onChange={(e) => handleChange(e)}
            />
            <div className={styles.btn}>
              <Button
                type="submit"
                color="primary"
                onClick={(e: any) => addBook(e)}
                variant="contained"
                title="Add Book"
              />
            </div>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AddBook;
