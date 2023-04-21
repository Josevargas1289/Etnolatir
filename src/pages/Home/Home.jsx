import React from 'react';
import "../Home/home.css"
import logoHorizonatl from "../../assets/logoH.png"
import imgHome from "../../assets/logoH.png"



const Home = () => {
    return (
        <div className='home'>
            <div className='title'>
                <img className='img-logo' src={logoHorizonatl} alt="" />
                <h1>Proyecto Etnoeducativo</h1>
                <p className='paragraft'>Cada 21 de mayo se conmemora en Colombia el Día de la Afrocolombianidad, como un tributo a la población afrodescendiente. La historia comenzó muchos años atrás con la abolición de la esclavitud en el país, justamente el 21 de mayo de 1851, una fecha que marcaría la historia de las personas negras en Colombia.</p>
            </div>

            <img className='imgHome' src="https://firebasestorage.googleapis.com/v0/b/etno-latir.appspot.com/o/IMG_1231.JPG?alt=media&token=522752db-8ea8-4a66-9be1-c7b074d5663b" alt="" />

            <div className='activities'>

            </div>

        </div>
    );
};

export default Home;