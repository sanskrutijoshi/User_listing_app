import { AppBar } from "@material-ui/core"
import { Toolbar } from "@material-ui/core"
import { Typography } from "@material-ui/core"

export const Navbar = () => {
  return (
      <AppBar position="static">
        
        <Typography variant='h6' >
          <h2
           style ={{
             textAlign: 'center',
             margin: 'auto'
           }}>

            User Listing App
            
            </h2>
        </Typography>
      </AppBar>
   
  )
}

