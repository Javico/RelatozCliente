import React, { useState, useEffect, useContext } from 'react';
import Usuario from './Usuario';
import Paginacion from '../paginacion/Paginacion';
import authContext from '../../context/auth/authContext';

export default function GridCategorias() {

    // Extraer proyectos de state inicial
    const authsContext = useContext(authContext);
    const { usuarios, obtenerUsuarios } = authsContext;

    //const [posts, guardarPosts] = useState([]);
    const [loading, guardarLoading] = useState(false);
    const [currentPage, gaurdarCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    // const categoriaslst = [
    //         { id: 1, titulo: 'Casas embrujadas', descripcion: "algo 1" },
    //         { id: 2, titulo: 'Fantasmas', descripcion: "algo 2" },
    //         { id: 3, titulo: 'Leyendas', descripcion: "algo 3" },
    //         { id: 4, titulo: 'Sueños', descripcion: "algo 4" },
    //         { id: 5, titulo: 'Muñecos', descripcion: "algo 5" },
    //         { id: 6, titulo: 'Traileros', descripcion: "algo 6" },
    //         { id: 7, titulo: 'Policias', descripcion: "algo 7" },
    //         { id: 1, titulo: 'Casas embrujadas', descripcion: "algo 1" },
    //         { id: 2, titulo: 'Fantasmas', descripcion: "algo 2" },
    //         { id: 3, titulo: 'Leyendas', descripcion: "algo 3" },
    //         { id: 4, titulo: 'Sueños', descripcion: "algo 4" },
    //         { id: 5, titulo: 'Muñecos', descripcion: "algo 5" },
    //         { id: 6, titulo: 'Traileros', descripcion: "algo 6" },
    //         { id: 7, titulo: 'Policias', descripcion: "algo 7" },
    //     ];

    useEffect(() => {
        //guardarPosts(categorias);
        obtenerUsuarios();
        guardarLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //console.log(posts);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPost - postsPerPage;
    const currentPosts = usuarios.slice(indexOfFirstPage,indexOfLastPost);

    const paginate = (pageNumber) => gaurdarCurrentPage(pageNumber);

    return (
       <div>
           <Usuario posts={currentPosts} loading={loading} />
           <br />
           <Paginacion postsPerPage={postsPerPage} totalPosts={usuarios.length} paginate={paginate} />
       </div>
    )
}
