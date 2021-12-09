import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({ 
    quote:{
        position:"relative",
    },
    blockquote:{
        fontFamily: ['Fira Code', 'monospace'].join(','),
        maxWidth: '720px',
        fontSize: '2rem',
        backgroundColor: '#131A26',
        padding: '3rem',
        borderRadius: '1.5rem',
        color: '#FFF',
        marginBottom: '50px',
    },
    author:{
        display: 'inline-block',
        padding: '0.75rem 1.5rem',
        color: '#FFFD95',
        borderRadius: '1.5rem',
        fontSize: '1.4rem',
        letterSpacing: '1px',
        maxWidth: '360px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        backgroundColor: '#EC255A',
        fontWeight: '400',
        [theme.breakpoints.down('sm')]:{
            transform: 'translate(2%,40%)',
        },
        transform: 'translate(-25%,50%)',
    },
    quoteIcons:{
        transform: 'translate(-25%,-50%)',
    },
    btn:{
        "&:hover": {
            backgroundColor: "#000",
            color: "#EC255A"
        },
    },
}));