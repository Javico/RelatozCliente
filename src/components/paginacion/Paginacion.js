import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default function Paginacion({ postsPerPage, totalPosts, paginate }) {

    const pageNumbers = [];
    //console.log(postsPerPage + " " + totalPosts + " " + Math.ceil(totalPosts / postsPerPage))
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    //console.log(pageNumbers)


    return (
        <div>
            <Nav variant="pills" defaultActiveKey="1" onSelect={(number) => paginate(number)}>
                {pageNumbers.map((number, index) => (
                    <Nav.Item key={index}>
                        <Nav.Link  eventKey={number} >{number}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
        </div>
    );
}