import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
function Body() {
  return (
    <div>
      
    <Header/>

    <div className="carrossel">

        <div className="conteudo_carrossel">

            <h2>Cadastre-se na Plataforma</h2>
            <h3>e faça parte da comunidade!</h3>
            <div className="conteudo_carrossel_line"></div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, delectus neque iste est placeat blanditiis non unde rem ipsa laboriosam quia mollitia dolore natus architecto fugit beatae amet animi molestiae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut tempora hic eius voluptatem autem praesentium, eaque ipsam quia, officiis facilis sit molestiae doloremque assumenda impedit quod corporis, eos optio quaerat!</p>

            <div className="alinhamento_botao_carrossel">
                <button>Saiba mais</button>
            </div>
        </div>

        <div className="alinhamento_imagem_carrossel">
            <img src="carrossel_landing_page.png" alt="Imagem carrossel" />
        </div>
    </div>

    <div className="cta">

        <img src="farmarcia-cartoes.PNG.png" alt="Imagem de Cartões" />

        <div className="cta_texto">

            <h3>Convites para Inauguração da Farmárcia!</h3>
            <div className="cta_line"></div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fuga a eius ad eos quo possimus beatae aliquam tenetur velit nobis, esse, porro fugit! Veritatis officia ipsam porro officiis fugit!</p>

            <div>
                <button>Junte-se</button>
            </div>

        </div>

    </div>

    <Footer/>

    </div>
  )
}

export default Body
