import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.scss';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestNameJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
    });

    return <div className="results-container">{suggestNameJsx}</div>;
};

export default ResultsContainer;