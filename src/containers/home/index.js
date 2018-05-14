import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome!</p>
    <p>Count: {props.count}</p>
    <p>
      <button onClick={props.increment} disabled={props.isIncrementing}>INCREMENT</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
    </p>
    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>DECREMENT</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
    </p>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
