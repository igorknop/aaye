const MAX_PLAYERS = 4;
const VALUES = {
    'action': 1,
    'seedjoker': 0.5,//seed joker
    'xseedjoker': -0.5,//seed joker
    'pv': 2,
    'seeddark': 0.5,//seed gold
    'xseeddark': -0.5,//seed gold
    'seedlight': 0.5,//seed silver
    'xseedlight': -0.5,//seed silver
    'buy': 1,//card
    'xbuy': -1,//card
    'per': 0,//card
    'attack': 0.5,//attack
    'defense': 0.5,//defense
    'split': -0.5,//split
    'join': 1,//join
    'merge': -0.5,//join
    'seedagain': 2,//seed again
    'moveseed': 0.5,//move seed
    'tier': (0.10*0+0.30*5+0.30*8+0.30*11)*2,
};

export const CARDS = [
    {name: "#01", mask: 13, type: "neutral", costType:0, cost: 0, effect: ['seedlight'], pv: 1, extra: ["initial"], qty: 3 },
    {name: "#02", mask: 10, type: "neutral", costType:0, cost: 0, effect: ['seeddark'], pv: 1, extra: ["initial"], qty: 3 },
    //{name: "#00", mask: 14, type: "neutral", costType:0, cost: 0, effect: ['seedlight', 'seeddark'], pv: 0, extra: ["initial"], qty: 1 },
    
    {name: "#01", mask: 13, type: "neutral", costType:0, cost: 0, effect: ['seedlight'], pv: 1, extra: ["initial"], qty: 3 },
    {name: "#02", mask: 10, type: "neutral", costType:0, cost: 0, effect: ['seeddark'], pv: 1, extra: ["initial"], qty: 3 },
    //{name: "#00", mask: 14, type: "neutral", costType:0, cost: 0, effect: ['seedlight', 'seeddark'], pv: 0, extra: ["initial"], qty: 1 },
    
    {name: "#01", mask: 13, type: "neutral", costType:0, cost: 0, effect: ['seedlight'], pv: 1, extra: ["initial"], qty: 3 },
    {name: "#02", mask: 10, type: "neutral", costType:0, cost: 0, effect: ['seeddark'], pv: 1, extra: ["initial"], qty: 3 },
    //{name: "#00", mask: 14, type: "neutral", costType:0, cost: 0, effect: ['seedlight', 'seeddark'], pv: 0, extra: ["initial"], qty: 1 },
    
    //{name: "#00", mask: 6, type: "neutral", costType:0, cost: 5, effect: ["merge"], pv: "0", extra: [, "p5", "per", "gpile"], qty: 1 , value: VALUES.tier},
    {name: "#01", mask: 13, type: "neutral", costType:0, cost: 0, effect: ['seedlight'], pv: 1, extra: ["initial"], qty: 3 },
    {name: "#02", mask: 10, type: "neutral", costType:0, cost: 0, effect: ['seeddark'], pv: 1, extra: ["initial"], qty: 3 },
    //{name: "#00", mask: 14, type: "neutral", costType:0, cost: 0, effect: ['seedlight', 'seeddark'], pv: 0, extra: ["initial"], qty: 1 },
    
    {name: "#03a", mask: 15, type: "sun", costType:2, cost: 3, effect: ['attack', 'seeddark'], pv: 2, extra: [], qty: 3 },
    {name: "#03b", mask: 15, type: "moon", costType:1, cost: 3, effect: ['attack', 'seedlight'], pv: 2, extra: [], qty: 3 },
    
    {name: "#04a", mask: 14, type: "neutral", costType:0, cost: 3, effect: ['xseeddark', "to", 'seedlight', 'seedlight', 'seedlight'], pv: 2, extra: [], qty: 3 },
    {name: "#04b", mask: 14, type: "neutral", costType:0, cost: 3, effect: ['xseedlight', "to", 'seeddark', 'seeddark', 'seeddark'], pv: 2, extra: [], qty: 3 },
    
    {name: "#05a", mask: 18, type: "neutral", costType:0, cost: 3, effect: ['seedagain', "split"], pv: 2, extra: [], qty: 4 },
    {name: "#05b", mask: 19, type: "neutral", costType:0, cost: 2, effect: ['seedagain'], pv: 2, extra: [], qty: 2 },
    {name: "#05c", mask: 19, type: "neutral", costType:0, cost: 2, effect: ['seedagain'], pv: 2, extra: [], qty: 2 },
    
    {name: "#06", mask: 17, type: "neutral", costType:0, cost: 3, effect: ['defense', "merge"], pv: 2, extra: [], qty: 4 },
    {name: "#06a", mask: 12, type: "moon", costType:1, cost: 1, effect: ['seedlight', 'moveseed'], pv: 2, extra: [], qty: 2 },
    {name: "#06b", mask: 12, type: "sun", costType:2, cost: 1, effect: ['seeddark', 'moveseed'], pv: 2, extra: [], qty: 2 },
    
    
    
    {name: "#07a", mask: 16, type: "moon", costType:1, cost: 1, effect: ['defense','seeddark', 'merge'], pv: 3, extra: [], qty: 3 },
    {name: "#07b", mask: 16, type: "sun", costType:2, cost: 1, effect: ['defense','seedlight', 'merge'], pv: 3, extra: [], qty: 3 },
    
    {name: "#08a", mask: 11, type: "moon", costType:1, cost: 1, effect: ['seedlight', 'seeddark', 'buy'], pv: 2, extra: [], qty: 3 },
    {name: "#08b", mask: 11, type: "sun", costType:2, cost: 1, effect: ['seedlight', 'seeddark', 'buy'], pv: 2, extra: [], qty: 3 },
    
    
    
    /**/
    //{name: "#00", mask: 4, type: "neutral", costType:0, cost: 5, effect: ['defense', 'seeddark'], pv: "0", extra: ["p5", "p8", "p11", "per", 'seedlight', 'seeddark'], qty: 1 , value: VALUES.tier},
    //{name: "#00", mask: 4, type: "neutral", costType:0, cost: 5, effect: ['seedlight', 'seedlight'], pv: "0", extra: ["p5", "p8", "p11", "per", 'seedlight', 'seedlight'], qty: 1, value: VALUES.tier },
    //{name: "#00", mask: 4, type: "neutral", costType:0, cost: 5, effect: ['seeddark', 'seeddark'], pv: "0", extra: [, "p5", "p8", "p11", "per", 'seeddark','seeddark'], qty: 1 , value: VALUES.tier},
    //{name: "#00", mask: 2, type: "sun", costType:0, cost: 3, effect: ['seedagain', "split"], pv: 2, extra: [], qty: 1 },
    //{name: "#00", mask: 1, type: "moon", costType:0, cost: 1, effect: ['attack', 'merge'], pv: 2, extra: [], qty: 1 },
    //{name: "#00", mask: 2, type: "sun", costType:0, cost: 3, effect: ['seedagain', 'buy'], pv: 2, extra: [], qty: 1 },
    //{name: "#00", mask: 4, type: "neutral", costType:0, cost: 5, effect: ['defense', 'merge'], pv: "0", extra: [ "p5","p8","p11","per", "pair"], qty: 1 },
    {name: "#04c", mask: 14, type: "moon", costType:1, cost: 1, effect: ['xbuy', "to", 'seedjoker', 'seedjoker', 'seedjoker'], pv: 2, extra: [], qty: 2 },
    {name: "#04d", mask: 14, type: "sun", costType:2, cost: 1, effect: ['xbuy', "to", 'seedjoker', 'seedjoker', 'seedjoker'], pv: 2, extra: [], qty: 2 },
    
    {name: "e01", mask: 1, type: "neutral", costType:0, cost: 5, effect: ['seedlight', 'seedlight'], pv: "0", extra: ["p5", "p8", "p11", "per", 'seedlight', 'seedlight'], qty: 1 , value: VALUES.tier},
    {name: "e02", mask: 2, type: "neutral", costType:0, cost: 5, effect: ['seeddark', 'seeddark'], pv: "0", extra: ["p5", "p8", "p11", "per", 'seeddark', 'seeddark'], qty: 1 , value: VALUES.tier},
    {name: "e03", mask: 4, type: "neutral", costType:0, cost: 5, effect: ['seedlight', 'seeddark'], pv: "0", extra: [, "p5", "p8", "p11", "per", 'seedlight', 'seeddark'], qty: 1 , value: VALUES.tier},
    {name: "e04", mask: 5, type: "neutral", costType:0, cost: 5, effect: ['attack', 'defense'], pv: "0", extra: ["p5", "p8", "p11", "per", 'attack', 'attack'], qty: 1 , value: VALUES.tier},
    {name: "e05", mask: 4, type: "neutral", costType:0, cost: 5, effect: ['xseedjoker', "to", 'seedlight', 'seedlight', 'seedlight'], pv: 11, extra: [, "pn1", "per", 'seedjoker'], qty: 1 , value: -VALUES.tier},
    {name: "e06", mask: 3, type: "neutral", costType:0, cost: 5, effect: ['seeddark', 'merge'], pv: "0", extra: [ "p5","p8","p11", "per", "pair"], qty: 1 , value: VALUES.tier},
    {name: "e07", mask: 6, type: "neutral", costType:0, cost: 5, effect: ['seedlight', 'moveseed'], pv: "0", extra: ["p3", "per", "pile3"], qty: 1 , value: VALUES.tier},
    {name: "e08", mask: 6, type: "neutral", costType:0, cost: 5, effect: ['seedlight', 'defense'], pv: "0", extra: ["p4", "per", "pile4"], qty: 1 , value: VALUES.tier},
    {name: "e09", mask: 3, type: "neutral", costType:0, cost: 5, effect: ['seedjoker', 'buy'], pv: "0", extra: ["p5", "p8", "p11", "per", "sun", "sun"], qty: 1 , value: VALUES.tier},
    {name: "e10", mask: 3, type: "neutral", costType:0, cost: 5, effect: ['seedjoker', 'buy'], pv: "0", extra: ["p5", "p8", "p11", "per", "moon", "moon"], qty: 1 },
    {name: "e11", mask: 5, type: "neutral", costType:0, cost: 5, effect: ['attack', 'defense'], pv: "0", extra: ["p5", "p8", "p11", "per", 'defense', 'defense'], qty: 1 , value: VALUES.tier},
    {name: "e12", mask: 5, type: "neutral", costType:0, cost: 5, effect: ['attack', 'defense'], pv: "0", extra: ["p5", "p8", "p11", "per", 'attack', 'attack'], qty: 1 , value: VALUES.tier},
    {name: "e13", mask: 6, type: "neutral", costType:0, cost: 5, effect: ['seeddark', "split"], pv: "0", extra: [, "p2", "per", "spile"], qty: 1 },
    {name: "e09", mask: 3, type: "neutral", costType:0, cost: 5, effect: ['seedjoker', 'buy'], pv: "0", extra: ["p5", "p8", "p11", "per", "sun", "sun"], qty: 1 , value: VALUES.tier},
    {name: "e10", mask: 3, type: "neutral", costType:0, cost: 5, effect: ['seedjoker', 'buy'], pv: "0", extra: ["p5", "p8", "p11", "per", "moon", "moon"], qty: 1 },
    {name: "e11", mask: 5, type: "neutral", costType:0, cost: 5, effect: ['attack', 'defense'], pv: "0", extra: ["p5", "p8", "p11", "per", 'attack', 'defense'], qty: 1 },
    
];
export const CARDSO = [
    {name: "#00", mask: 4, type: "moon", cost: 5, effect: ['merge'], pv: "0", extra: ["p1", "per", "equi"], qty: 1 },
    {name: "#00", mask: 1, type: "moon", cost: 3, effect: ['seedlight', 'seedlight'], pv: 4, extra: [], qty: 1 },
    {name: "#00", mask: 2, type: "sun", cost: 3, effect: ['seedlight', 'seedlight'], pv: 4, extra: [], qty: 1 },
    {name: "#00", mask: 2, type: "sun", cost: 1, effect: ['seedlight'], pv: 2, extra: [], qty: 1 },
    {name: "#00", mask: 1, type: "moon", cost: 1, effect: ['seedlight'], pv: 2, extra: [], qty: 1 },


    {name: "#00", mask: 1, type: "moon", cost: 3, effect: ['seeddark', 'seeddark'], pv: 4, extra: [], qty: 1 },
    {name: "#00", mask: 2, type: "sun", cost: 3, effect: ['seeddark', 'seeddark'], pv: 4, extra: [], qty: 1 },
    {name: "#00", mask: 1, type: "moon", cost: 1, effect: ['seeddark'], pv: 2, extra: [], qty: 1 },
    {name: "#00", mask: 2, type: "sun", cost: 1, effect: ['seeddark'], pv: 2, extra: [], qty: 1 },


    {name: "#00", mask: 1, type: "moon", cost: 1, effect: ['xseeddark', "to", 'seedlight', 'seedlight'], pv: 2, extra: [], qty: 1 },
    {name: "#00", mask: 2, type: "sun", cost: 1, effect: ['xseeddark', "to", 'seedlight', 'seedlight'], pv: 2, extra: [], qty: 1 },

    {name: "#00", mask: 1, type: "moon", cost: 3, effect: ['xseeddark', "to", 'attack', 'seedlight'], pv: 4, extra: [], qty: 1 },
    {name: "#00", mask: 2, type: "sun", cost: 3, effect: ['xseeddark', "to", 'attack', 'seedlight'], pv: 4, extra: [], qty: 1 },
    {name: "#00", mask: 2, type: "sun", cost: 3, effect: ['xattack', "to", 'seedlight', 'seedlight', 'seedlight'], pv: 4, extra: [], qty: 1 },

    {name: "#00", mask: 1, type: "moon", cost: 3, effect: ['seedlight', 'buy'], pv: 4, extra: [], qty: 1 },
    {name: "#00", mask: 1, type: "moon", cost: 1, effect: ['buy'], pv: 2, extra: [], qty: 1 },
    {name: "#00", mask: 2, type: "sun", cost: 0, effect: ['buy'], pv: 0, extra: ["initial"], qty: MAX_PLAYERS * 1 },

    {name: "#00", mask: 1, type: "moon", cost: 3, effect: ['xbuy', "to", 'seedjoker', 'seedjoker', 'seedjoker'], pv: 4, extra: [], qty: 1 },
    {name: "#00", mask: 2, type: "sun", cost: 3, effect: ['xbuy', "to", 'seedjoker', 'seedjoker', 'seedjoker'], pv: 4, extra: [], qty: 1 },


    {name: "#00", mask: 5, type: "moon", cost: 5, effect: ['xbuy', "to", 'seedjoker', 'seedjoker', 'seedjoker'], pv: 15, extra: ["pn1", "per", 'buy'], qty: 1 },
    {name: "#00", mask: 3, type: "sun", cost: 5, effect: ['seeddark'], pv: "0", extra: ["p2", "per", 'seeddark', 'seedlight'], qty: 1 },
    {name: "#00", mask: 3, type: "sun", cost: 5, effect: ['attack'], pv: "0", extra: ["p2", "per", 'attack', 'seedlight'], qty: 1 },


    {name: "#00", mask: 1, type: "moon", cost: 3, effect: ['seedagain'], pv: 4, extra: [], qty: 2 },
    {name: "#00", mask: 2, type: "sun", cost: 3, effect: ['seedagain'], pv: 4, extra: [], qty: 2 },
   
];


function evaluateCard(card) {
    let value = card.value!==undefined?card.value:0.0;
    value -= card.cost * VALUES['seedjoker'];
    value += card.pv * VALUES['pv'];
    let valuee = 0.0;
    for (const e in card.effect) {
        const effect = card.effect[e];
        valuee += VALUES[effect] !== undefined ? VALUES[effect] : 0;
    }
    value += valuee;

    return value.toFixed(2)*1;
}

for (const c in CARDS) {
    const card = CARDS[c];
    card.value = evaluateCard(card);

}
