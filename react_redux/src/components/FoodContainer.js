import React from 'react'
import { connect } from 'react-redux';
import { buyFood } from '../redux/foodRedux/foodAction';

function FoodContainer(props) {
    console.log(props)
    return (
        <div>
            <h2>
                Number of Food Packet : {props.numFoodPackets}
            </h2>
            <button onClick={props.buyFood}>Buy Food</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numFoodPackets: state.foodReducer.numFoodPackets
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyFood: () => dispatch(buyFood())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FoodContainer);

