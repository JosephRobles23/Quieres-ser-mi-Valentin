import { useState } from "react";
import JSConfetti from 'js-confetti'
function App() {


  const jsConfetti = new JSConfetti()
  const [randomValor, setRandomValor] = useState({})

  const [imagenCargada, setImagenCargada] = useState(false);
  const [agrandar, setAgrandar] = useState(45)
  const [valueSi, setValueSi] = useState(false)
  const [fondo, setFondo] = useState("fondo") // Estado para controlar el fondo

  let random = [{
    id: 1,
    description: "Di que si por favor monchi",
    img: "https://i.pinimg.com/originals/af/a8/a2/afa8a2d285947ddef7450c7884618f59.gif"
  },
  {
    id: 1,
    description: "Piénsalo de nuevo :(",
    img: "https://i.pinimg.com/originals/20/d1/05/20d105117ac558a3a22d163595e6b9cc.gif"
  }
    ,
  {
    id: 2,
    description: "Vamos, atrévete a decir que sí.",
    img: "https://i.pinimg.com/originals/49/b4/51/49b451ec654220421c648195b8cf6d85.gif"
  },
  {
    id: 3,
    description: "No tengas miedo, será genial.",
    img: "https://i.pinimg.com/originals/2c/64/fa/2c64fa48975088628c557c586fc01a01.gif"
  },
  {
    id: 4,
    description: "Confía en mí, será divertido.",
    img: "https://i.pinimg.com/originals/35/4c/e4/354ce4652c46345ce662e39b7d9527ee.gif"
  },
  {
    id: 5,
    description: "No tengas dudas, te hará sonreír.",
    img: "https://i.pinimg.com/originals/59/80/be/5980be1d8a9d74ccf9b36a4f2c422974.gif"
  },
  {
    id: 6,
    description: "Te prometo que será inolvidable.",
    img: "https://i.pinimg.com/originals/95/55/9f/95559fdbc5feb2271766ff19ef67d31a.gif"
  },
  {
    id: 7,
    description: "No dejes que el miedo te detenga.",
    img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif"
  },
  {
    id: 8,
    description: "Confía en el destino, nos está dando una señal.",
    img: "https://media.tenor.com/cbEccaK9QxMAAAAi/peach-goma.gif"
  },
  {
    id: 9,
    description: "Confía en mí.",
    img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif"
  },
  {
    id: 10,
    description: "No te arrepentirás.",
    img: "https://media.tenor.com/I7KdFaMzUq4AAAAi/peach-goma.gif"
  }]

  const randomResponse = () => {
    let index = Math.floor(Math.random() * 11);
    console.log(random[index])
    if (agrandar <= 500) {
      setAgrandar(agrandar + 10)
    }
    setRandomValor(random[index]);
  }

  const handleImageLoad = () => {
    setImagenCargada(true);
  }

  return (
    <main id="canvas" className={`${fondo} w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center`}>
      {
        !valueSi ? (
          <div className="p-5">
            {<h1 className="text-white font-bold text-5xl text-center"></h1>}
            <img 
              src={Object.keys(randomValor).length === 0 ?
                "https://i.pinimg.com/originals/35/43/4e/35434e945ab6aa2489d4753a74ecf6ca.gif" : randomValor.img} 
              alt="San Valentin" 
              className="mx-auto" 
              width={400} 
              height={400} 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
              <button 
                onClick={() => {
                  setValueSi(true)
                  setFondo("fondo3") // Cambiar el fondo a "fondo3"
                  jsConfetti.addConfetti({
                    emojis: ['🎉','😍', '🎊','🥰', '❤️', '🥳'],
                    emojiSize: 70,
                    confettiNumber: 80,
                  })
                }} 
                className={`bg-green-500 text-white font-bold p-2 rounded-md text-xl h-${agrandar}`} 
                style={{ height: agrandar }}
              >
                Si
              </button>
              <button
                className="bg-red-500 text-white font-bold p-2 rounded-md text-xl"
                onClick={randomResponse}
                disabled={imagenCargada}
              >
                {Object.keys(randomValor).length === 0 ? "No" : randomValor.description}
                <span hidden>{document.title = Object.keys(randomValor).length === 0 ? "¿Quieres ser mi San Valentin?" : randomValor.description}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col space-y-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center font-bold ">Sabia que dirias que si mi solecito 🌟🧡!</h1>
            <img src="https://i.pinimg.com/originals/1e/44/fc/1e44fc7afb507ffe03650b3d473952f0.gif" alt="" className="mx-auto mt-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 " />
            <span hidden>{document.title = 'Sabia que dirias que si ❤️!'}</span>
          </div>
        )
      }
    </main>
  )
}

export default App