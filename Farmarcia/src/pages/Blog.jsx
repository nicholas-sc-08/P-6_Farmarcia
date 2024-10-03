import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'



function Blog() {
  return (
    <div className='blog_page'>
      
    <div className="blog_page_um">


    <div className="blog_faixada">

      <h2>Blog Page</h2>
      <div className="faixa_blog"></div>
      <p>Cuidados Médicos Essenciais: O que Você Precisa Saber para Manter sua Saúde!</p>
    </div>

    <div className="imagem_blog">
        
        <img src="blog_page.svg" alt="Blog"/>
    
    </div>

    </div>

    <div className="cards_page">


        <div className="alinhamento_cards">

        <div className="card_um">

                <div className="conteudo_card_um">

                    <img src="article_um.svg" alt="Esporte" />
                </div>
            
                <div className="tema_artigo_um">
                    <h4>Health</h4>
                </div>

                <h2>Esportes</h2>
                <div className="faixa_card_um"></div>
            
                <p> Comece sua jornada esportiva hoje mesmo! Inscreva-se em uma atividade que você ama e sinta a diferença na sua saúde física e mental!</p>

        </div>


        <div className="card_dois">

                <div className="conteudo_card_dois">

                    <img src="article_tres.svg" alt="Esporte" />
                </div>
            
                <div className="tema_artigo_dois">
                    <h4>Health</h4>
                </div>

                <h2>Meditação</h2>
                <div className="faixa_card_dois"></div>
            
                <p> Descubra como a meditação pode trazer paz interior, reduzir o estresse e melhorar sua qualidade de vida. Não perca a oportunidade de iniciar sua jornada de autoconhecimento e bem-estar!</p>

        </div>


            <div className="card_tres">

                <div className="conteudo_card_tres">

                    <img src="article_dois.svg" alt="Esporte" />
                </div>
            
                <div className="tema_artigo_tres">
                    <h4>Health</h4>
                </div>

                <h2>Saúde</h2>
                <div className="faixa_card_tres"></div>
            
                <p> Comece sua jornada esportiva hoje mesmo! Inscreva-se em uma atividade que você ama e sinta a diferença na sua saúde física e mental!</p>

        </div>


        </div>

        <div className="alinhamento_cards">

        <div className="card_quatro">

                <div className="conteudo_card_quatro">

                    <img src="article_quatro.svg" alt="Esporte" />
                </div>
            
                <div className="tema_artigo_quatro">
                    <h4>Care</h4>
                </div>

                <h2>Atendimento</h2>
                <div className="faixa_card_quatro"></div>
            
                <p> Não espere mais para priorizar seu bem-estar. Agende uma consulta com nossos especialistas e descubra como podemos ajudá-lo a viver melhor.</p>

        </div>


        <div className="card_cinco">

                <div className="conteudo_card_cinco">

                    <img src="article_cinco.svg" alt="Esporte" />
                </div>
            
                <div className="tema_artigo_cinco">
                    <h4>Care</h4>
                </div>

                <h2>Meditação</h2>
                <div className="faixa_card_cinco"></div>
            
                <p> Descubra como a meditação pode trazer paz interior, reduzir o estresse e melhorar sua qualidade de vida. Não perca a oportunidade de iniciar sua jornada de autoconhecimento e bem-estar!</p>

        </div>


            <div className="card_seis">

                <div className="conteudo_card_seis">

                    <img src="article_seis.svg" alt="Esporte" />
                </div>
            
                <div className="tema_artigo_seis">
                    <h4>Nature</h4>
                </div>

                <h2>Saúde</h2>
                <div className="faixa_card_seis"></div>
            
                <p> Comece sua jornada esportiva hoje mesmo! Inscreva-se em uma atividade que você ama e sinta a diferença na sua saúde física e mental!</p>

        </div>


        </div>

    </div>

    </div>
  )
}

export default Blog
