import React from 'react'
import { connect } from 'react-redux';
import { buyFood } from '../redux/foodRedux/foodAction';
import { buyWater } from '../redux/waterReducer/waterAction';

function FoodWaterContainer(props) {
    return (
        <div>
            <br />***************** Food Water Combined **********************<br />
            <h2>Num of Food Packets : {props.numFoodPackets}</h2>
            <button onClick={props.buyFood}>Buy Food</button>
            <h2>Num of Water Bottles : {props.numWaterBottles}</h2>
            <button onClick={props.buyWater}>Buy Water</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numFoodPackets: state.foodReducer.numFoodPackets,
        numWaterBottles: state.waterReducer.numberWaterBottles,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyFood: () => { dispatch(buyFood()) },
        buyWater: () => { dispatch(buyWater()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FoodWaterContainer);
