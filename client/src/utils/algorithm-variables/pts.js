import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { changePTSVariables } from '../../actions/modal';

class PTS extends Component {
    state = {
        cluster : 1,
        seed: 0,
        iteractions: 100
    }

    handleChangeCluster(e){
        this.setState({ clusterNum: e })
    }

    handleChangeSeed(e) {
        this.setState({ seedNum: e })
    }

    handleChangeIteractions(e) {
        this.setState({ iteractions: e })
    }

    updateVariableData(){
        this.props.updateVariable( 'pts' , this.state )
    }

    render() {
        return (
            <div>
                <div>
                    <label htmlFor='clusterNumber'>Number of Clusters:</label>
                    <input type='number' id='clusterNumber' value='1' required onChange={(e) => this.handleChangeCluster(e)}></input>
                </div>
                <div>
                    <label htmlFor='clusterNumber'>Seed Number:</label>
                    <input type='number' id='seed' value='0' required onChange={(e) => this.handleChangeSeed(e)}></input>
                </div>
                <div>
                    <label htmlFor='clusterNumber'>Number of Iterations:</label>
                    <input type='number' id='iterations' value='100' required onChange={(e) => this.handleChangeIteractions(e)}></input>
                </div>
                <Button type='submit' variant="contained" size='small' color="primary" onClick={() => this.updateVariableData()}>Set Variables</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {return{}}

const mapDispatchToProps = dispatch => ({
    updateVariable: (algorithm, data) => dispatch(changePTSVariables(algorithm, data))
})

export default connect(mapStateToProps,mapDispatchToProps)(PTS);