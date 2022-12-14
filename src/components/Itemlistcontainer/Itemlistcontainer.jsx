import Proptypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Itemcount from '../Itemcount'
import {Link, link} from 'react-router-dom';

// <Itemcount stock = {16} initial = {1} onAdd={onAdd}/>

const productoslista = [
    {
        itemid: '1',
        name: 'REPRESENT - Sudadera Crema',
        img: 'https://ogsbrand.storage.googleapis.com/media/images/Sudadera_FRONT_01_SVrNmGg.2e16d0ba.fill-800x933-c100.png',
        categoria: 'represent',
        precio: '$28.000'
    },
    {
        itemid: 2,
        name: 'REPRESENT - Pantalón',
        img: 'https://ogsbrand.storage.googleapis.com/media/images/Pantalon_FRONT_01_y7btEwS.2e16d0ba.fill-800x933-c100.png',
        categoria: 'represent',
        precio: '$28.000'
    },
    {
        itemid: 3,
        name: 'C.R.E.A.M. - Sudadera Beige',
        img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_SudaOriginalsV2_Beige_Del.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'cream',
        precio: '$28.000'
    },
    {
        itemid: 4,
        name: 'C.R.E.A.M. - Sudadera Negra',
        img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_SudaOriginalsV2_Negra_Del.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'cream',
        precio: '$28.000'
    },
    {
        itemid: 5,
        name: `MAKE OG'S GREAT AGAIN - Camiseta`,
        img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_MakeOGSGreat_Camiseta_Bla.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'presidente',
        precio: '$28.000'
    },
    {
        itemid: 6,
        name: `MAKE OG'S GREAT AGAIN - Sudadera con Capucha`,
        img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_MakeOGSGreat_Hoodie_Blanc.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'presidente',
        precio: '$28.000'
    },
    {
        itemid: 7,
        name: `KOREAN BEER - Camiseta`,
        img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_KoreanBeer_Camiseta_Blanc.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'beer',
        precio: '$28.000'
    },
    {
        itemid: 8,
        name: `KOREAN BEER - Sudadera con Capucha`,
        img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_KoreanBeer_Hoodie_Blanca_.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'beer',
        precio: '$28.000'
    },
    {
        itemid: 9,
        name: `TIGER - Camiseta Relaxed Fit`,
        img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_Rawr_Camiseta_Black_Delan.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'tiger',
        precio: '$28.000'
    },
    {
        itemid: 10,
        name: `TIGER - Sudadera con Capucha`,
        img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_Rawr_Hoodie_Negra_Delante.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'tiger',
        precio: '$28.000'
    },
    {
        itemid: 11,
        name: `The OG's - Sudadera`,
        img: 'https://ogsbrand.storage.googleapis.com/media/images/og_sweatshirt_black.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'og',
        precio: '$28.000'
    },
    {
        itemid: 12,
        name: `OG's 2.0 - Sudadera Con Capucha`,
        img: 'https://ogsbrand.storage.googleapis.com/media/images/Ogs_2_hood_White.2e16d0ba.fill-800x933-c100.jpg',
        categoria: 'og',
        precio: '$28.000'
    }
]

const Itemlistcontainer = ({menus}) => { 

    const [data, setData] = useState([]);

    const {categoriaid} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productoslista);
            }, 1000)
        });
        if(categoriaid) {
            getData.then(res => setData(res.filter(productoslista => productoslista.categoria === categoriaid)));
        } else {
            getData.then(res => setData(res));
        } 
    }, [categoriaid])
  
    const onAdd = (count) => {
        console.log(`La compra de ${count} fue exitosa`);
    }

    return (
        <div className="itemlist__container">
            <div className='itemlist__containerflex'>
                { data && data.map((producto, index) =>{
                    const newKey = `${producto}-${index}`
                    return (
                        <Link to={`/item/${producto.itemid}`} key={newKey} className="itemlist__itemcontainer">
                            <img src={producto.img} alt="" />
                            <div className='itemlist__detalles'>
                                <p className="itemlist__items">{producto.name}</p>
                                <p className="itemlist__items">{producto.precio}</p>
                            </div>
                        </Link>
                    )  
                })
                } 
            </div>      
        </div>
    )
}

Itemlistcontainer.proptype = {
    productos: Proptypes.array.isRequired
}

export default Itemlistcontainer;
