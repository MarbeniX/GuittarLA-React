import Header from "./components/Header.jsx"
import Guitar from "./components/Guittar.jsx"
import { useCart } from "./hooks/useCart.js"


export default function App() {
  const {data, cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal} = useCart()

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />
    <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>
      <div className="row mt-5">
        {data.map((guitar) => {
          return(
            <Guitar
              key={guitar.id}
              guitar={guitar}
              addToCart={addToCart}
            />
          )
        })}
      </div>
    </main>

    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}
