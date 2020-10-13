import * as React from 'react';
import { Card } from './Card';

export interface HandPropType {
    cards: {rank: string, suit: string }[]
}

function rankToNumber(rank: string): number {
    if(rank === "A") {
        return 1;
    } else if(rank === "J") {
        return 11;
    } else if(rank === "Q") {
        return 12;
    } else if(rank === "K") {
        return 13;
    } else {
        return parseInt(rank);
    }
}

export function Hand(props: HandPropType): React.ReactElement {
    const renderedCards = props.cards.map((card) => {
        return <Card rank={card.rank} suit={card.suit} />
    });
    return (
        <div className="hand">
            {renderedCards}
        </div>
    );
}