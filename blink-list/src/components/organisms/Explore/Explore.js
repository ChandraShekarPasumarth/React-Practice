import React,{ useState }  from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CustomButton from '../../atoms/Button/Button';
import { Grid, ListItem, ListItemIcon } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket ,faLandmark,faFlask,faGraduationCap,faLightbulb, faGlobeAsia}  from '@fortawesome/free-solid-svg-icons';


const StyledMenu = withStyles({
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        
        '&:focus': {
            backgroundColor: grey[50],
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function CustomizedMenus(props) {
  const [expand,setExpand] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const names=["Entrepreneurship","Politics","Science","Education","Economics","Motivation"];
  const icons=[faRocket,faLandmark,faFlask,faGraduationCap,faGlobeAsia,faLightbulb];
  var i=0;
  const toggle=()=>{
    if(expand===0)
    {
    setExpand(1);
    }
    else
    {
    setExpand(0);
    }
  };
  const handleClick = (event) => {
    // props.click();
    setAnchorEl(event.currentTarget);
    toggle();
  };

  const handleClose = () => {
    setAnchorEl(null);
    toggle();
  };

    const categoryClick=(event) =>{
            props.cateClick(event.target.innerText);
            props.click();
            
    }
    return (
        <div>
            <CustomButton
                aria-controls="customized-menu"
                aria-haspopup="true"
                color="primary"
                name="Explore"
                onClick={handleClick}  endIcon={(expand===0 && <ExpandMoreIcon />)||(expand===1 && <ExpandLessIcon/>)} />
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <Grid container direction={"row"} justifyContent="center">
               
            {names.map((element)=>
            { 
            return (<Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={icons[i++]} /></ListItemIcon>
                            <CustomButton name={element} onClick={categoryClick}></CustomButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>)})}
                </Grid>
            </StyledMenu>
        </div>
    );
}
