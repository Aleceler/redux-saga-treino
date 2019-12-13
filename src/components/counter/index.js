import React, { useEffect } from 'react'
import {Button, Content, CounterContent} from './styles'
import { increment, decrement } from '../../store/actions/counter'
import { useDispatch, useSelector} from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch()
    
    const valorAtual = useSelector(state => state.Counter)

    useEffect(() => {
        console.log('uhuuuu');
    },[valorAtual > 3]);

    return(
        <Content>
            <CounterContent>
                <Button onClick={() => dispatch({type: decrement, adicional: 1})}>
                    -
                </Button>
                    <h1>{valorAtual}</h1>
                <Button onClick={() => dispatch({type: increment, adicional: 0})}>
                    +
                </Button>
            </CounterContent>
        </Content>
    )
}

export default Counter;