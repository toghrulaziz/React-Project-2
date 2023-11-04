import logo from './logo.svg';
import './App.css';
import GoodsComponent from './GoodsComponent';

function App() {

  let obj1 = {name: 'Monitor', description: 'Computer monitor', price: 300};
  let obj2 = {name: 'Mouse', description: 'Wireless mouse', price: 20};
  let obj3 = {name: 'Keyboard', description: 'Mechanical keyboard', price: 80};
  let obj4 = {name: 'Headphones', description: 'Headphones', price: 50};
  let obj5 = {name: 'Webcam', description: 'HD webcam', price: 40};

  return (
    <div className="App">
      <GoodsComponent {...obj1}/>
      <GoodsComponent {...obj2}/>
      <GoodsComponent {...obj3}/>
      <GoodsComponent {...obj4}/>
      <GoodsComponent {...obj5}/>
    </div>
  );
}

export default App;
