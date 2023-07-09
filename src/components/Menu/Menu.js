import React from 'react';
import Link from 'next/link';

const Menu = () => {
    const [currentPage, setCurrentPage] = React.useState('accueil');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="flex justify-center pt-1">
            # METTRE LES ELEMENTS DU MENU ICI 
        </div>
    );
};

export default Menu;
