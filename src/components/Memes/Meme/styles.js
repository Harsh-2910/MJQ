import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  btn:{
      minWidth: '150px',
      backgroundColor: '#EC255A',
      color: '#FAEDF0',
      "&:hover": {
        backgroundColor: "#000",
        color: "#EC255A"
      },
      borderRadius: "40px",
      width: "350px",
      fontWeight:"500",
  },
  textbox:{
      width: '276px',
  },
  goIcon:{
    width:'30px',
    backgroundColor: '#3B14A7',
    color: '#FFED99',
    paddingBottom: '10px',
    paddingTop: '12px',
    paddingLeft: '17px',
    "&:hover": {
        backgroundColor: "#000",
        color: "#fff"
    },
    fontWeight:"700",
  },
  createbtn:{
    minWidth: '150px',
    backgroundColor: '#6B7AA1',
    color: '#FAEDF0',
    "&:hover": {
        backgroundColor: "#000",
        color: "#fff"
    },
    borderRadius: "40px",
    width: "350px",
    fontWeight:"700",
  },
  captionbox:{
      textAlign:"center",
      borderRadius: "40px",
  }
}));