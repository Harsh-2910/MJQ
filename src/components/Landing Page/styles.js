import { makeStyles } from '@material-ui/core/styles';
import water from '../../Images/water.jpg';

export default makeStyles((theme) => ({ 
    bdy:{
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundImage: `url(${water})`,
        backgroundSize: "cover",
        margin: 0,
        color: 'rgb(255, 255, 255)',
        textAlign: 'center',
    },

    btn:{
        width:"230px",
        borderRadius: "40px",
        "&:hover": {
            backgroundColor: "#000",
            color: "#00C1D4"
        },
    },

    subheading:{
        fontFamily:'Headland One',
    },
}));