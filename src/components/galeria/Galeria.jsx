import { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Carousel } from 'react-bootstrap';
import '../galeria/galeria.css'


const Galeria = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const querydb = getFirestore();
        const queryArray = doc(querydb, 'danza', 'aT7vyk2m73bm5Y5DBTIu');
        getDoc(queryArray)
            .then(res => setData([{ id: res.id, ...res.data() }]));

    }, []);

    return (
        <div className='galeria'>
            <Carousel  slide={false} >
                {
                    data[0]?.images?.map((d, index) => (

                        <Carousel.Item key={index}  >
                            <img
                                className="d-block w-100 imgDanza"
                                src={d}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default Galeria;

// _document.data.value.mapValue.fields.images.arrayValue