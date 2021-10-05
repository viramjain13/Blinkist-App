import React from 'react';
import TopNavBar from '../../organisms/TopNavBar/TopNavBar';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    
    navbar:{
        height:100,
    },
    typography:{
        marginLeft: 250,
        marginTop: theme.spacing(4.375),
    },
    font:{
        fontWeight:600,
    }
}));


function MainPage() {
    const classes = useStyles();
    return (
      <div >
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.navbar}>
              <TopNavBar />
          </Grid>
        </Grid>
      </div>
    );
  }
  export default MainPage;
  