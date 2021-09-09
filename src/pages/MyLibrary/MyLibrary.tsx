import React from "react";
import MyLibraryData from "../../components/organisms/MyLibrary/MyLibrary";
import Header from "../../components/organisms/Header/Header";
import Footer from "../../components/molecules/Footer/Footer";
import MyLibrary from "../../components/templates/MyLibrary/MyLibrary";
import baseTheme from "../../themes/theme";
import { ThemeProvider } from "@material-ui/styles";

const MyLibraryPage = () => {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <MyLibrary
          header={<Header />} pageName='My Library'
          mainContent={<MyLibraryData />}
          footer={<Footer />}
        />
      </ThemeProvider>
    </>
  );
};

export default MyLibraryPage;
