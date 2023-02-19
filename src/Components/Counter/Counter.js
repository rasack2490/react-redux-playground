import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {getCatImg} from '../../redux/Reducers/dataImgReducer'
function Counter() {

    const [cartData, setCartData] = useState(0);
    const {cart, count, imgURL} = useSelector(state => ({
        ...state.AddCartReducer,
        ...state.CounterReducer,
        ...state.dataImgReducer
    }))

    const dispatch = useDispatch();

    const incrFunc = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }

    const decrFunc = () => {
        dispatch({
            type: 'DECREMENT'
        })
    }

    const addCartFunc = () => {
        dispatch({
            type: 'ADDCART',
            payload: cartData
        })
    }

    useEffect(() => {
        dispatch(getCatImg())
    }, [])


  return (
    <div>
        <h1>Votre panier : {cart}</h1>
        {/* <button onClick={decrFunc}>-1</button>
        <button onClick={incrFunc}>+1</button> */}
        <input 
        type="number" 
        value={cartData} 
        onInput={(e) => setCartData(e.target.value)}
        name="" 
        id="" />
        <br/>
        <br/>
        <button onClick={addCartFunc}>Ajouter au panier</button> <br/>
        {imgURL && <img style={{width:"300px"}} src={imgURL} alt="" />}
    </div>
  )
}

export default Counter