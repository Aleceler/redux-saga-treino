import React, { useEffect } from 'react'
import {Button, Content, CounterContent} from './styles'
import { increment, decrement, valor } from '../../store/actions/counter'
import { useDispatch, useSelector} from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch()
    
    const valorAtual = useSelector(state => state.Counter)

    return(
        <Content>
            <CounterContent>
                <Button onClick={() => dispatch({type: decrement})}>
                    -
                </Button>
                    <h1>{valorAtual}</h1>
                <Button onClick={() => dispatch({type: increment})}>
                    +
                </Button>
            </CounterContent>
        </Content>
    )
}

export default Counter;