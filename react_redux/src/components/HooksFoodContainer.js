import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyFood } from '../redux/foodRedux/foodAction';
function HooksFoodContainer() {
    const numFoodPacket = useSelector(state => state.foodReducer.numFoodPackets)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>No of food packets : {numFoodPacket}</h2>
            <button onClick={() => { dispatch(buyFood()) }}>Buy food packet</button>
        </div>
    )
}

export default HooksFoodContainer
