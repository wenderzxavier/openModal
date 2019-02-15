import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const style = {
    area: {
        backgroundColor: 'white',
        margin: 15,
        textAlign: 'center'
    },
    title: {
        fontFamly: 'Raleway'
    }
}

class Results extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.area}>
                {this.props.activeStep === 2 ? <Grid container spacing={8}>
                    <Grid item xs={12} lg={6}>
                        TODO AREA
                    </Grid>
                    )}
            </Grid>
                    : ''}
            </div>
        )
    }
}

export default withStyles(style)(Results)