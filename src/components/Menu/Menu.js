import React from 'react';
import Link from 'next/link';

const Menu = () => {
    const [currentPage, setCurrentPage] = React.useState('accueil');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="flex justify-center pt-1">
            <nav className="flex justify-center mt-4">
                <ul className="space-x-4 list-inline">
                    <li className="mr-4 list-inline-item">
                        <Link href="/#accueil" legacyBehavior>
                            <a
                                className={`btn ${currentPage === 'accueil' ? 'btn-primary' : ''}`}
                                onClick={() => handlePageChange('accueil')}
                            >
                                Accueil
                            </a>
                        </Link>
                    </li>
                    <li className="mr-4 list-inline-item">
                        <Link href="/#parfumA" legacyBehavior>
                            <a
                                className={`btn ${currentPage === 'parfumA' ? 'btn-primary' : ''}`}
                                onClick={() => handlePageChange('parfumA')}
                            >
                                Parfum A
                            </a>
                        </Link>
                    </li>
                    <li className="mr-4 list-inline-item">
                        <Link href="/#parfumB" legacyBehavior>
                            <a
                                className={`btn ${currentPage === 'parfumB' ? 'btn-primary' : ''}`}
                                onClick={() => handlePageChange('parfumB')}
                            >
                                Parfum B
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="mt-4">
                {currentPage === 'accueil' && (
                    <div id="accueil">
                        <h1>Page d'accueil</h1>
                        {/* Ajoutez le contenu de la page d'accueil */}
                    </div>
                )}
                {currentPage === 'parfumA' && (
                    <div id="parfumA">
                        <h1>Parfum A</h1>
                        {/* Ajoutez le contenu spécifique à Parfum A */}
                    </div>
                )}
                {currentPage === 'parfumB' && (
                    <div id="parfumB">
                        <h1>Parfum B</h1>
                        {/* Ajoutez le contenu spécifique à Parfum B */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Menu;
