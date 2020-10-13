import * as React from 'react';
import { Suit, parseSuit, suitColor } from './Suit';
import './Card.css';

function rankFormat(rank: number): string {
    if(rank === 1) { return "A" }
    else if(rank === 11) { return "J"; }
    else if(rank === 12) { return "Q"; }
    else if(rank === 13) { return "K"; }
    else {
        return rank.toString(); 
    }
}

export function Card(props: { rank: string, suit: string }): React.ReactElement {
    const suit: Suit = parseSuit(props.suit);
    return (
        <div className={`card ${suitColor(suit)}`}>
            <span className="cardIdentity">{props.rank}{suit}</span>
        </div>
    );
}