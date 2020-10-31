import React, {useEffect, useState} from 'react';
import decoration from "../assets/Decoration.svg";
import {withFirebase} from "./Firebase/FirebaseContext";

const WhoWeHelp = ({firebase}) => {
    const [currentChoice, setCurrentChoice] = useState("foundation");
    const [currentPage, setCurrentPage] = useState(1);
    const [foundationsList, setFoundationsList] = useState(null);
    const [nonGovOrgList, setNonGovOrgList] = useState(null);
    const [localList, setLocalList] = useState(null);
    const [currentList, setCurrentList] = useState(foundationsList);

    useEffect(() => {
        let mounted = true;
        firebase.database.collection("foundations").get().then((snapshot) => {
            if (mounted) {
                setFoundationsList(snapshot.docs);
            }
        })

        firebase.database.collection("nonGovOrganisations").get().then((snapshot) => {
            if (mounted) {
                setNonGovOrgList(snapshot.docs);
            }
        })
        firebase.database.collection("local").get().then((snapshot) => {
            if (mounted) {
                setLocalList(snapshot.docs);
            }
        })
        setCurrentList(foundationsList);

        return () => {
            mounted = false;
        }

    }, [])

    useEffect(() => {
        setCurrentList(foundationsList);
    },[foundationsList])

    useEffect(() => {
        setCurrentPage(1);
        if (currentChoice === "foundation") {
            setCurrentList(foundationsList);
        }
        if (currentChoice === "non-governmental") {
            setCurrentList(nonGovOrgList);
        }
        if (currentChoice === "local") {
            setCurrentList(localList);
        }
    }, [currentChoice])

    const handleOptionClick = (chosenOption) => {
        setCurrentChoice(chosenOption);
    }

    const handlePageNumber = (e) => {
        setCurrentPage(parseInt(e.target.id));
    }

    const indexOfLastItem = currentPage * 3;
    const indexOfFirstItem = indexOfLastItem - 3;

    const itemsToDisplay = currentList && currentList.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    if (currentList) {
        for (let i = 1; i <= Math.ceil(currentList.length / 3); i++) {
            pageNumbers.push(i);
        }
    }


    const displayPageNumbers = pageNumbers.map(number => {
        return (
            <li
                style={currentPage === number ? {border: "1px solid #707070"} : {border: "1px solid transparent"}}
                key={number}
                id={number}
                onClick={handlePageNumber}
            >
                {number}
            </li>
        );
    });


    return (
        <section className="container whoWeHelp" id="who-we-help">
            <h1>Komu pomagamy?</h1>
            <img src={decoration} alt="decoration"/>
            <div className="whoWeHelp__options">
                <button
                    style={currentChoice === "foundation" ? {border: "1px solid #3C3C3C"} : {border: "1px solid transparent"}}
                    onClick={() => handleOptionClick("foundation")}>Fundacjom
                </button>
                <button
                    style={currentChoice === "non-governmental" ? {border: "1px solid #3C3C3C"} : {border: "1px solid transparent"}}
                    onClick={() => handleOptionClick("non-governmental")}>Oranizacjom pozarządowym
                </button>
                <button
                    style={currentChoice === "local" ? {border: "1px solid #3C3C3C"} : {border: "1px solid transparent"}}
                    onClick={() => handleOptionClick("local")}>Lokalnym zbiórkom
                </button>
            </div>
            <div className="option__details">
                {currentChoice === "foundation" &&
                <p className="description">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
                    współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                }
                {currentChoice === "non-governmental" &&
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation.</p>
                }
                {currentChoice === "local" &&
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium non orci
                    ut venenatis. Nullam vel nulla eu nisl tincidunt accumsan ut et lacus.</p>
                }
                <ul className="option__list">
                    {currentChoice === "foundation" && itemsToDisplay && itemsToDisplay.map((foundation, index) => {
                        return (
                            <li key={index}>
                                <div className="option__list-text">
                                    <div>
                                        <p>Fundacja "{foundation.data().name}"</p>
                                        <p>Cel i misja: {foundation.data().mission}</p>
                                    </div>
                                    <span>{foundation.data().neededItems}</span>
                                </div>
                                <hr/>
                            </li>
                        )
                    })}
                    {currentChoice === "non-governmental" && itemsToDisplay && itemsToDisplay.map((organisation, index) => {
                        return (
                            <li key={index}>
                                <div className="option__list-text">
                                    <div>
                                        <p>Organizacja "{organisation.data().name}"</p>
                                        <p>Cel i misja: {organisation.data().mission}</p>
                                    </div>
                                    <span>{organisation.data().neededItems}</span>
                                </div>
                                <hr/>
                            </li>
                        )
                    })}
                    {currentChoice === "local" && itemsToDisplay && itemsToDisplay.map((local, index) => {
                        return (
                            <li key={index}>
                                <div className="option__list-text">
                                    <div>
                                        <p>Zbiórka "{local.data().name}"</p>
                                        <p>Cel i misja: {local.data().mission}</p>
                                    </div>
                                    <span>{local.data().neededItems}</span>
                                </div>
                                <hr/>
                            </li>
                        )
                    })}
                </ul>
                <ul className="option__list-pageNumbers">
                    {pageNumbers.length > 1 && displayPageNumbers}
                </ul>
            </div>
        </section>
    );
};

export default withFirebase(WhoWeHelp);
