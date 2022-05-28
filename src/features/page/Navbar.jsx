import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ThemeToggle from "../theme/ThemeToggle";
import {Button, Grid, Icon, Typography, useMediaQuery} from "@mui/material";
import {useContext} from "react";
import {LayoutContext} from "./Page";
import theme from "../theme/theme";
import {FaReact} from "react-icons/fa";

const Navbar = () => {
    const [layout, setLayout] = useContext(LayoutContext)

    const handleNavChange = (event, newValue) => {
        setLayout(newValue ? newValue : null);
    };

    const smUp = useMediaQuery(theme.breakpoints.up('sm'));
    const mdUp = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Grid
            container
            wrap='nowrap'
            alignItems='center'
            justifyContent={mdUp ? 'space-between' : 'center'}
        >
            <Grid item>
                <Button
                    disableRipple
                    onClick={handleNavChange}
                    color='secondary'
                    size='small'
                    style={{ backgroundColor: 'transparent' }}
                >
                    <Grid
                        container
                        wrap='nowrap'
                        spacing={1}
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Grid item>
                            <Icon>
                                <FaReact/>
                            </Icon>
                        </Grid>
                        {smUp &&
                            <Grid item>
                                <Typography
                                    variant='body1'
                                    sx={{fontWeight: 'bold'}}
                                >
                                    React+MUI
                                </Typography>
                            </Grid>
                        }
                    </Grid>
                </Button>
            </Grid>
            <Grid item>
                <Grid
                    container
                    wrap="nowrap"
                    alignItems='center'
                    justifyContent='center'
                >
                    <Grid item>
                        <BottomNavigation
                            showLabels
                            value={layout}
                            onChange={handleNavChange}
                            sx={{
                                '& .Mui-selected': {
                                    '& .MuiBottomNavigationAction-label': {
                                        fontWeight: 'bold',
                                    },
                                    '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
                                        color: theme => theme.palette.primary.main

                                    }
                                },
                            }}
                        >
                            <BottomNavigationAction
                                label="Cashew"
                                value="cashew"
                            />
                            <BottomNavigationAction
                                label="Hendrix"
                                value="hendrix"
                            />
                            <BottomNavigationAction
                                label="Nova"
                                value="nova"
                            />
                        </BottomNavigation>
                    </Grid>
                    <Grid item>
                        <ThemeToggle/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Navbar
