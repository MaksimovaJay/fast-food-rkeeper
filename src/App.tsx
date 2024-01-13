import './App.css'
import MenuList from "./components/MenuList/MenuList";
import OrderDetails from "./components/OrderDetails/OrderDetails";

let totalPrice: number = 0;
function App() {

  return (
    <>
      <div className="wrapper">
      <OrderDetails totalPrice={totalPrice} />
      <MenuList />
      </div>
    </>
  )
}

export default App
