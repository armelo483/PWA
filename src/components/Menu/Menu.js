import React from 'react';
import Link from 'next/link';
import Accueil from '../../../pages/accueil';
import ParfumA from '../../../pages/parfumA';
import ParfumB from '../../../pages/parfumB';


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
                    <Accueil />
                )}
                {currentPage === 'parfumA' && (
                    <ParfumA />
                )}
                {currentPage === 'parfumB' && (
                    <ParfumB />
                )}
            </div>
        </div>
    );
};

export default Menu;
