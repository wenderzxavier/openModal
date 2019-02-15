import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { changeSignatureVariables } from '../../actions/modal';

class Signature extends Component {
    state = {
        unitArea : 1,
        test: 100
    }

    handleChangeUnitArea(e){
        this.setState({ unitArea : e })
    }

    handleChangeTest(e) {
        this.setState({ test: e })
    }

    updateVariableData(){
        this.props.updateVariable( 'signature' , this.state )
    }

    render() {
        return (
            <div>
                <div>
                    <label htmlFor='clusterNumber'>Unit Area:</label>
                    <input type='number' id='clusterNumber' value='1' required onChange={(e) => this.handleChanUnitArea(e)}></input>
                </div>
                <div>
                    <label htmlFor='seed'>Test:</label>
                    <input type='number' id='seed' value='0' required onChange={(e) => this.handleChangeTest(e)}></input>
                </div>
                <Button type='submit' variant="contained" size='small' color="primary" onClick={() => this.updateVariableData()}>Set Variables</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {return{}}

const mapDispatchToProps = dispatch => ({
    updateVariable: (algorithm, data) => dispatch(changeSignatureVariables(algorithm, data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Signature);