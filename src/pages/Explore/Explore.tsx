import React from "react";
import ExploreByCategory from "../../components/organisms/ExploreByCategory/ExploreByCategory";
import Header from "../../components/organisms/Header/Header";
import Footer from "../../components/molecules/Footer/Footer";
import MyLibrary from "../../components/templates/MyLibrary/MyLibrary";
import baseTheme from "../../themes/theme";
import { ThemeProvider } from "@material-ui/styles";

const ExplorePage = () => {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <MyLibrary
          header={<Header />} pageName="Explore"
          mainContent={<ExploreByCategory />}
          footer={<Footer />}
        />
      </ThemeProvider>
    </>
  );
};

export default ExplorePage;
