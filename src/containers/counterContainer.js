import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement, reset } from '../redux/actions/index';


class Counter extends Component {
    render() {
        const { counter, increment, decrement, reset } = this.props;
        return (
            <div >
                <div>counter:
                    <span style={{ "font-size": "20px", "font-weight":"bold" }}>{counter} </span>
                </div>
                <div>
                    <button onClick={increment}>INCREMENT BY 1</button>
                </div>
                <div>
                    <button onClick={decrement}>DECREMENT BY 1</button>
                </div>
                <button onClick={reset}>RESET</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps====>" + state);
    return {
        counter: state
    };
};
const mapDispatchToProps = (dispatch) => {
    console.log("mapStateToProps====>" + dispatch);
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);