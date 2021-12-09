import React from 'react';
import left from '../../../Images/left.png';
import right from '../../../Images/right.png';
import useStyles from '../style';

function Quote({ quote }) {
    const classes = useStyles();
    return (
        <div className={classes.quote}>
            <div className={classes.author} title={quote.author}>{quote.author}</div>
            <blockquote className={classes.blockquote}>
            <img className={classes.quoteIcons} src={left} alt="" />
            {quote.text}
            <img className={classes.quoteIcons} src={right} alt="" />
            </blockquote>
        </div>
    )
}

export default Quote
