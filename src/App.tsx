import { AppBar, Tabs, Tab, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Home from './pages/Home'

const useStyles = makeStyles({
  flex: {
    flex: 1
  },
  title: {
    cursor: "pointer"
  }
})

const App:React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
              variant="h6"
              className={`${classes.flex} ${classes.title}`}
            >
              My Portfolio!
            </Typography>
          <Tabs >
            <Tab label="Home" />
            <Tab label="Works"/>
            <Tab label="Resume" />
          </Tabs>
        </Toolbar>
      </AppBar>

      <Home />
    </>
  );
};

export default App;
