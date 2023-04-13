import React from 'react';
import "../footer/footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <h4>Institución Educativa Nuevo Latir</h4>
            &copy; Todos los derechos reservados
            <div className='redes'>
            <i className='bx bxl-instagram-alt bx-lg'></i>
            <i className='bx bxl-facebook-circle bx-lg' ></i>
            <i className='bx bxl-wordpress bx-lg'></i>
            </div>
            
            
        </div>
    );
};

export default Footer;