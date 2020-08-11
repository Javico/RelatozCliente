import React, { useState, useEffect, useContext } from 'react';
import Historia from './Historia';
import Paginacion from '../paginacion/Paginacion';
import HistoriaContext from '../../context/historias/historiaContext';

export default function GridCategorias() {

    // Extraer contexto de state inicial
    const historiasContext = useContext(HistoriaContext);
    const { historiasTodas, obtenerHistoriasTodas } = historiasContext;

    //const [posts, guardarPosts] = useState([]);
    const [loading, guardarLoading] = useState(false);
    const [currentPage, gaurdarCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    // const categoriaslst = [
    //         { id: 1, titulo: 'Casas embrujadas', descripcion: "algo 1", historiaDetalle: 'algo' },
    //         { id: 2, titulo: 'Fantasmas', descripcion: "algo 2", historiaDetalle: 'algo' },
    //         { id: 3, titulo: 'Leyendas', descripcion: "algo 3", historiaDetalle: 'algo' },
    //     ];

    useEffect(() => {
        obtenerHistoriasTodas();
        guardarLoading(false);
        //guardarPosts(historias.ctaegoria);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //console.log(historias);

    //console.log(posts);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPost - postsPerPage;
    const currentPosts = historiasTodas.slice(indexOfFirstPage,indexOfLastPost);

    //console.log(posts.length);
    //console.log(currentPosts);

    const paginate = (pageNumber) => gaurdarCurrentPage(pageNumber);

    return (
       <div>
           <Historia posts={currentPosts} loading={loading} />
           <br />
           <Paginacion postsPerPage={postsPerPage} totalPosts={historiasTodas.length} paginate={paginate} />
       </div>
    )
}
