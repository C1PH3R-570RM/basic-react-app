import React from 'react';
import Carousel from './Carousel';




const Home = () => {
    return  <>
        <h2 className="home-title">My Web App</h2>
        <div className="column-container">
            {/* <img src ="https://doodleipsum.com/700/flat?i=99da02b7f3bceb80f22ae7e4ada6debc" alt="" ></img> */}
           <section className="left-column">Lorem ipsum dolor sit amet, vis dicam appareat cu, ei meliore ceteros accusata est, sit ad vitae denique nominati. In sed omnis dissentiunt, 
           ei alienum voluptua assentior ius.

        Dicit possit qui id, sumo malis ei vel. Aeterno oporteat accusamus eam ut, est erat assum honestatis te. Ea regione integre sea, odio consul causae ex eos.</section>
           {/* <img src ="https://doodleipsum.com/700?i=c911b1c61fa13ad2632a1aead97b5051" alt="" ></img> */}
           <section className="right-column">Lorem ipsum dolor sit amet, vis dicam appareat cu, ei meliore ceteros accusata est, sit ad vitae denique nominati. In sed omnis dissentiunt,
            ei alienum voluptua assentior ius. 

         Dicit possit qui id, sumo malis ei vel. Aeterno oporteat accusamus eam ut, est erat assum honestatis te. Ea regione integre sea, odio consul causae ex eos.   </section>
        </div>
        <div className="carousel-container">
            <Carousel />
        </div>
    </>
};

export default Home;