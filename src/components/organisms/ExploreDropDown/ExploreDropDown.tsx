import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  explore_container: {
    backgroundColor: "#ecf2fb",
    width: "100%",
    padding: "2rem",
    display: "grid",
    justifyContent: "center",
  },
  explore_header: {
    display: "inline-flex",
    borderBottom: "1px solid black",
    paddingBottom: "1rem",
  },
  explore_titles: {
    marginRight: "4rem",
  },
  explore_content: {
    paddingTop: "1rem",
    paddingRight: "8rem",
    display: "inline-block",
  },
  explore_content_titles: {
    paddingBottom: "1rem",
    cursor: "pointer",
  },
}));

const ExploreDropDownComponent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.explore_container}>
      <div className={classes.explore_header}>
        <Typography
          color="primary"
          className={classes.explore_titles}
          variant="subtitle1"
        >
          Explore by category
        </Typography>
        <Typography
          color="textPrimary"
          className={classes.explore_titles}
          variant="subtitle1"
        >
          See recently added titles
        </Typography>
        <Typography
          color="textPrimary"
          className={classes.explore_titles}
          variant="subtitle1"
        >
          See popular titles
        </Typography>
      </div>
      <div className={classes.explore_content_titles}>
        <div className={classes.explore_content}>
          <Typography
            color="textPrimary"
            className={classes.explore_content_titles}
            variant="body1"
          >
            <Link to="/explore">Entrepreneurship</Link>
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Science{" "}
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Economics
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Corporate Culture
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Money &amp; Investments
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Sex &amp; Relationships
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Parenting
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Biography &amp; Memoir
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Religion &amp; Spirituality
          </Typography>
        </div>
        <div className={classes.explore_content}>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Politics
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Health &amp; Nutrition
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            History
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Management &amp; Leadership
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Psychology
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Technology &amp; the Future
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Society &amp; Culture
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Career &amp; Success
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Creativity
          </Typography>
        </div>
        <div className={classes.explore_content}>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Marketing &amp; Sales
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Personal Development
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Communication Skills
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Motivation &amp; Inspiration
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Productivity
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Mindfulness &amp; Happiness
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Nature &amp; Environment
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Education
          </Typography>
          <Typography
            className={classes.explore_content_titles}
            color="textPrimary"
            variant="body1"
          >
            Policy
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default ExploreDropDownComponent;
