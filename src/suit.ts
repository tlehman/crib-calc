export enum Suit {
    CLUB = "♣️",
    DIAMOND = "♦",
    HEART = "♥️",
    SPADE = "♠️"
}

export function suitColor(suit: Suit): string {
    if(suit === Suit.DIAMOND || suit === Suit.HEART) {
        return "red";
    } else {
        return "black";
    }
}

export function parseSuit(suit: string): Suit {
    if(suit === "C") {
        return Suit.CLUB;
    } else if(suit === "H") {
        return Suit.HEART;
    } else if(suit === "D") {
        return Suit.DIAMOND;
    } else {
        return Suit.SPADE;
    }
}