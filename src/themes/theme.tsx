import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

import { grey, cyan, orange } from "@material-ui/core/colors";




const defaultTheme = createTheme();
declare module "@material-ui/core/styles/createPalette" {
  interface  PaletteOptions    {
    
    containerSecondary?:any
  }

}
declare module "@material-ui/core/styles/createTypography"{

  interface TypographyOptions {
    fontWeight?:string;
  }
}

declare module "@material-ui/core/styles/createTheme"{

  interface ThemeOptions{
    
    container:any,
    
  }


}



const baseTheme = createTheme({
  container: {
    primary: {
      borderRadius: defaultTheme.spacing(1),
      padding: defaultTheme.spacing(2),
    },
    secondary: {
      borderRadius: defaultTheme.spacing(1),
      padding: defaultTheme.spacing(2),
    },
  },
  palette: {
    type: "dark",
    primary: {
      main: cyan[200],
    },
    secondary: {
      main: orange[500],
    },
  
    containerSecondary: {
      main: grey[400],
      light: "#f5f5f5",
      dark: "#373737",
    },
  },
  typography: {
    fontSize: 2,
    fontWeight: 'bold' ,
  } , 
  spacing: 8,
  // overrides: {
    
  //     backgroundColor:"green",
     
  // },
});

const responsiveFontTheme = responsiveFontSizes(baseTheme);

export default responsiveFontTheme;
