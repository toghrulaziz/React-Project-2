import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PropTypes from 'prop-types'

function GoodsComponent({name,description,price}) {

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

  return (
    <div className="GoodsComponent">
        <div>
          <h1>{name}</h1>
          <h4>{description}</h4>
          <h4>{price}$</h4>
          <p>Count: {count}</p>
          <button onClick={increaseCount}>Increase Count</button>
          <hr/>
        </div>
    </div>
  );
}

export default GoodsComponent;


GoodsComponent.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}