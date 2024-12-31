import Header from "./components/Header.jsx"
import Guittar from "./components/Guittar.jsx"
import { useState, useEffect } from "react"
import { db } from "./data/db.js"


export default function App() {
  const [data, setData] = useState(db)
  return (
    <>
    <Header/>
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((guitar) => {
            return(
              <Guittar
                key={guitar.id}
                guitar={guitar}
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
