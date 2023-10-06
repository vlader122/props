import './App.css'
import Countries from './components/Countries'
import Title from './components/Title'
function App() {
  const pais = [["USA","$8,754k",'https://proyectoviajero.com/wp-content/uploads/2023/01/san_marino_bandera.webp'],["Brazil","$2,754k",'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/300px-Flag_of_Brazil.svg.png']]
  return (
    <>
    <h1>PROPS</h1>
    <Title 
      titulo="Sales by countries" 
      subtitulo="Mountly Sales Overview"
    />

    {pais.map((e,key)=>{
      return <Countries url={e[2]} money={e[1]} pais={e[0]}/>
    })}
    </>
  )
}

export default App
