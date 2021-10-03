import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import Profile from "./template/Profile"
import Biography from "./template/Biography"

const useStyles = makeStyles({
  root: {
    display: "flex",
    paddingTop: 50,
    paddingLeft: 100,
    paddingRight: 100
  }
})

const Home = () => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.root}>
        <Profile />
        <Biography />
      </Box>
    </>
  )
};

export default Home;
