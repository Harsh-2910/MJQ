import { makeStyles } from '@material-ui/core/styles';
import bg2 from '../../../Images/bg2.png';

export default makeStyles((theme) => ({
    container:{
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundImage: `url(${bg2})`,
    backgroundSize: 'cover',
    margin: 0,
    fontFamily: ["Poppins","sans-serif"].join(','),
    color: "hsl(0, 0%, 100%)",
    },

    copy:{
        backgroundColor: '#FF5151',
        minWidth: '150px',
        "&:hover": {
            backgroundColor: "#000",
            color: "#fff"
        },
        color: "#fff",
        width: "350px",
        borderRadius:"40px",
    },

    back:{
        backgroundColor: '#00C1D4',
        minWidth: '150px',
        "&:hover": {
            backgroundColor: "#000",
            color: "#fff"
        },
        color: "#fff",
        width: "350px",
        borderRadius:"40px",
    },

    img:{
        maxWidth: "300px",
        maxHeight: "300px",
    }
}));