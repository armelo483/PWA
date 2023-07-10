import React, {useEffect, useState} from 'react';

const ParfumA = () => {
    // ici on declare et initialise avec "useState" le tableau dans elements, en recuperant setElements
    // retourne par useState qui va permettre de mettre a jour le ta bleau elements
    const [elements, setElements] = useState(Array.from({ length: 9 }, (_, index) => index + 1));
    useEffect(() => {
        const animateElements = () => {
            const animatedItems = document.querySelectorAll('.animated-item');
            animatedItems.forEach((item, index) => {
                item.style.animationDelay = `${index * .35}s`;
                item.classList.add('fadeInUp');
            });
        };

        animateElements();
    }, []);

    // A exploiter plus tard quand il s agira de supprimer ou updater la liste des favoris
    const removeElement = (element) => {
        const updatedElements = elements.filter((el) => el !== element);
        setElements(updatedElements);
    };

    return (
        <div className="container">
            <div className="row">

                {elements.map((element) => (
                    <div key={element} className="col-md-3 animated-item  mt-2" style={{ maxWidth: "400px", maxHeight: "400px" }}>
                        {/*<div className="card" style={{ width: '15rem' }}>*/}
                        <div className="card" >
                            <img src="https://www.parfumsmoinschers.com/21620-43079-thickbox/adidas-team-five.jpg"
                                 className="img-fluid card-img-top mx-auto"
                                 style={{ width: "59%", height: "auto" }}
                                 alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default ParfumA;

