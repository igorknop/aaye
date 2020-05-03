const MAX_PLAYERS = 4;
const VALUES = {
    'action': 1,
    'sj': 0.5,//seed joker
    'xsj': -0.5,//seed joker
    'pv': 2,
    'sp': 0.5,//seed gold
    'xsp': -0.5,//seed gold
    'sn': 0.5,//seed silver
    'xsn': -0.5,//seed silver
    'ca': 1,//card
    'xca': -1,//card
    'per': 0,//card
    'so': 0.5,//attack
    'ss': 0.5,//defense
    'split': -0.5,//split
    'join': 1,//join
    'mca': -0.5,//join
    'sa': 2,//seed again
    'ms': 0.5,//move seed
    'tier': (0.10*0+0.30*5+0.30*8+0.30*11)*2,
};

export const CARDS = [
    {name: "e01", mask: 1, type: "neutral", costType:0, cost: 5, effect: ["sn", "sn"], pv: "0", extra: ["p5", "p8", "p11", "per", "sn", "sn"], qty: 1 , value: VALUES.tier},
    {name: "#01", mask: 13, type: "neutral", costType:0, cost: 0, effect: ["sn"], pv: 1, extra: ["initial"], qty: 3 },
    {name: "#02", mask: 10, type: "neutral", costType:0, cost: 0, effect: ["sp"], pv: 1, extra: ["initial"], qty: 3 },
    //{name: "#00", mask: 14, type: "neutral", costType:0, cost: 0, effect: ["sn", "sp"], pv: 0, extra: ["initial"], qty: 1 },
    
    {name: "e02", mask: 2, type: "neutral", costType:0, cost: 5, effect: ["sp", "sp"], pv: "0", extra: ["p5", "p8", "p11", "per", "sp", "sp"], qty: 1 , value: VALUES.tier},
    {name: "#01", mask: 13, type: "neutral", costType:0, cost: 0, effect: ["sn"], pv: 1, extra: ["initial"], qty: 3 },
    {name: "#02", mask: 10, type: "neutral", costType:0, cost: 0, effect: ["sp"], pv: 1, extra: ["initial"], qty: 3 },
    //{name: "#00", mask: 14, type: "neutral", costType:0, cost: 0, effect: ["sn", "sp"], pv: 0, extra: ["initial"], qty: 1 },
    
    {name: "e03", mask: 4, type: "neutral", costType:0, cost: 5, effect: ["sn", "sp"], pv: "0", extra: [, "p5", "p8", "p11", "per", "sn", "sp"], qty: 1 , value: VALUES.tier},
    {name: "#01", mask: 13, type: "neutral", costType:0, cost: 0, effect: ["sn"], pv: 1, extra: ["initial"], qty: 3 },
    {name: "#02", mask: 10, type: "neutral", costType:0, cost: 0, effect: ["sp"], pv: 1, extra: ["initial"], qty: 3 },
    //{name: "#00", mask: 14, type: "neutral", costType:0, cost: 0, effect: ["sn", "sp"], pv: 0, extra: ["initial"], qty: 1 },
    
    //{name: "#00", mask: 6, type: "neutral", costType:0, cost: 5, effect: ["merge"], pv: "0", extra: [, "p5", "per", "gpile"], qty: 1 , value: VALUES.tier},
    {name: "#01", mask: 13, type: "neutral", costType:0, cost: 0, effect: ["sn"], pv: 1, extra: ["initial"], qty: 3 },
    {name: "#02", mask: 10, type: "neutral", costType:0, cost: 0, effect: ["sp"], pv: 1, extra: ["initial"], qty: 3 },
    //{name: "#00", mask: 14, type: "neutral", costType:0, cost: 0, effect: ["sn", "sp"], pv: 0, extra: ["initial"], qty: 1 },
    
    {name: "e04", mask: 5, type: "neutral", costType:0, cost: 5, effect: ["so", "ss"], pv: "0", extra: ["p5", "p8", "p11", "per", "so", "so"], qty: 1 , value: VALUES.tier},
    {name: "#03a", mask: 15, type: "sun", costType:2, cost: 3, effect: ["so", "sp"], pv: 2, extra: [], qty: 3 },
    {name: "#03b", mask: 15, type: "moon", costType:1, cost: 3, effect: ["so", "sn"], pv: 2, extra: [], qty: 3 },
    
    {name: "e05", mask: 4, type: "neutral", costType:0, cost: 5, effect: ["xsj", "to", "sn", "sn", "sn"], pv: 11, extra: [, "pn1", "per", "sj"], qty: 1 , value: -VALUES.tier},
    {name: "#04a", mask: 14, type: "neutral", costType:0, cost: 3, effect: ["xsp", "to", "sn", "sn", "sn"], pv: 2, extra: [], qty: 3 },
    {name: "#04b", mask: 14, type: "neutral", costType:0, cost: 3, effect: ["xsn", "to", "sp", "sp", "sp"], pv: 2, extra: [], qty: 3 },
    
    {name: "e06", mask: 3, type: "neutral", costType:0, cost: 5, effect: ["sp", "mca"], pv: "0", extra: [ "p5","p8","p11", "per", "pair"], qty: 1 , value: VALUES.tier},
    {name: "e07", mask: 6, type: "neutral", costType:0, cost: 5, effect: ["sn", "ms"], pv: "0", extra: ["p3", "per", "pile3"], qty: 1 , value: VALUES.tier},
    {name: "e08", mask: 6, type: "neutral", costType:0, cost: 5, effect: ["sn", "ss"], pv: "0", extra: ["p4", "per", "pile4"], qty: 1 , value: VALUES.tier},
    {name: "#05a", mask: 18, type: "neutral", costType:0, cost: 3, effect: ["sa", "split"], pv: 2, extra: [], qty: 4 },
    
    {name: "e09", mask: 3, type: "neutral", costType:0, cost: 5, effect: ["sj", "ca"], pv: "0", extra: ["p5", "p8", "p11", "per", "sun", "sun"], qty: 1 , value: VALUES.tier},
    {name: "e10", mask: 3, type: "neutral", costType:0, cost: 5, effect: ["sj", "ca"], pv: "0", extra: ["p5", "p8", "p11", "per", "moon", "moon"], qty: 1 },
    {name: "e11", mask: 5, type: "neutral", costType:0, cost: 5, effect: ["so", "ss"], pv: "0", extra: ["p5", "p8", "p11", "per", "ss", "ss"], qty: 1 , value: VALUES.tier},
    {name: "#06", mask: 17, type: "neutral", costType:0, cost: 3, effect: ["ss", "merge"], pv: 2, extra: [], qty: 4 },
    
    
    
    {name: "#07a", mask: 16, type: "moon", costType:1, cost: 1, effect: ["ss","sp", "mca"], pv: 3, extra: [], qty: 3 },
    {name: "#07b", mask: 16, type: "sun", costType:2, cost: 1, effect: ["ss","sn", "mca"], pv: 3, extra: [], qty: 3 },
    
    {name: "e12", mask: 5, type: "neutral", costType:0, cost: 5, effect: ["so", "ss"], pv: "0", extra: ["p5", "p8", "p11", "per", "so", "so"], qty: 1 , value: VALUES.tier},
    {name: "#08a", mask: 11, type: "moon", costType:1, cost: 1, effect: ["sn", "sp", "ca"], pv: 2, extra: [], qty: 3 },
    {name: "#08b", mask: 11, type: "sun", costType:2, cost: 1, effect: ["sn", "sp", "ca"], pv: 2, extra: [], qty: 3 },
    
    {name: "e13", mask: 6, type: "neutral", costType:0, cost: 5, effect: ["sp", "split"], pv: "0", extra: [, "p2", "per", "spile"], qty: 1 },
    {name: "e09", mask: 3, type: "neutral", costType:0, cost: 5, effect: ["sj", "ca"], pv: "0", extra: ["p5", "p8", "p11", "per", "sun", "sun"], qty: 1 , value: VALUES.tier},
    {name: "e10", mask: 3, type: "neutral", costType:0, cost: 5, effect: ["sj", "ca"], pv: "0", extra: ["p5", "p8", "p11", "per", "moon", "moon"], qty: 1 },
    {name: "#05b", mask: 19, type: "neutral", costType:0, cost: 2, effect: ["sa"], pv: 2, extra: [], qty: 2 },
    {name: "#05c", mask: 19, type: "neutral", costType:0, cost: 2, effect: ["sa"], pv: 2, extra: [], qty: 2 },
    
    {name: "#06a", mask: 12, type: "moon", costType:1, cost: 1, effect: ["sn", "ms"], pv: 2, extra: [], qty: 2 },
    {name: "#06b", mask: 12, type: "sun", costType:2, cost: 1, effect: ["sp", "ms"], pv: 2, extra: [], qty: 2 },
    
    /**/
    //{name: "#00", mask: 4, type: "neutral", costType:0, cost: 5, effect: ["ss", "sp"], pv: "0", extra: ["p5", "p8", "p11", "per", "sn", "sp"], qty: 1 , value: VALUES.tier},
    //{name: "#00", mask: 4, type: "neutral", costType:0, cost: 5, effect: ["sn", "sn"], pv: "0", extra: ["p5", "p8", "p11", "per", "sn", "sn"], qty: 1, value: VALUES.tier },
    //{name: "#00", mask: 4, type: "neutral", costType:0, cost: 5, effect: ["sp", "sp"], pv: "0", extra: [, "p5", "p8", "p11", "per", "sp","sp"], qty: 1 , value: VALUES.tier},
    //{name: "#00", mask: 2, type: "sun", costType:0, cost: 3, effect: ["sa", "split"], pv: 2, extra: [], qty: 1 },
    //{name: "#00", mask: 1, type: "moon", costType:0, cost: 1, effect: ["so", "mca"], pv: 2, extra: [], qty: 1 },
    //{name: "#00", mask: 2, type: "sun", costType:0, cost: 3, effect: ["sa", "ca"], pv: 2, extra: [], qty: 1 },
    //{name: "#00", mask: 4, type: "neutral", costType:0, cost: 5, effect: ["ss", "mca"], pv: "0", extra: [ "p5","p8","p11","per", "pair"], qty: 1 },
    {name: "#04c", mask: 14, type: "moon", costType:1, cost: 1, effect: ["xca", "to", "sj", "sj", "sj"], pv: 2, extra: [], qty: 2 },
    {name: "#04d", mask: 14, type: "sun", costType:2, cost: 1, effect: ["xca", "to", "sj", "sj", "sj"], pv: 2, extra: [], qty: 2 },
    {name: "e11", mask: 5, type: "neutral", costType:0, cost: 5, effect: ["so", "ss"], pv: "0", extra: ["p5", "p8", "p11", "per", "so", "ss"], qty: 1 },
    
    
];
export const CARDSO = [
    {name: "#00", mask: 4, type: "moon", cost: 5, effect: ["mca"], pv: "0", extra: ["p1", "per", "equi"], qty: 1 },
    {name: "#00", mask: 1, type: "moon", cost: 3, effect: ["sn", "sn"], pv: 4, extra: [], qty: 1 },
    {name: "#00", mask: 2, type: "sun", cost: 3, effect: ["sn", "sn"], pv: 4, extra: [], qty: 1 },
    {name: "#00", mask: 2, type: "sun", cost: 1, effect: ["sn"], pv: 2, extra: [], qty: 1 },
    {name: "#00", mask: 1, type: "moon", cost: 1, effect: ["sn"], pv: 2, extra: [], qty: 1 },


    {name: "#00", mask: 1, type: "moon", cost: 3, effect: ["sp", "sp"], pv: 4, extra: [], qty: 1 },
    {name: "#00", mask: 2, type: "sun", cost: 3, effect: ["sp", "sp"], pv: 4, extra: [], qty: 1 },
    {name: "#00", mask: 1, type: "moon", cost: 1, effect: ["sp"], pv: 2, extra: [], qty: 1 },
    {name: "#00", mask: 2, type: "sun", cost: 1, effect: ["sp"], pv: 2, extra: [], qty: 1 },


    {name: "#00", mask: 1, type: "moon", cost: 1, effect: ["xsp", "to", "sn", "sn"], pv: 2, extra: [], qty: 1 },
    {name: "#00", mask: 2, type: "sun", cost: 1, effect: ["xsp", "to", "sn", "sn"], pv: 2, extra: [], qty: 1 },

    {name: "#00", mask: 1, type: "moon", cost: 3, effect: ["xsp", "to", "so", "sn"], pv: 4, extra: [], qty: 1 },
    {name: "#00", mask: 2, type: "sun", cost: 3, effect: ["xsp", "to", "so", "sn"], pv: 4, extra: [], qty: 1 },
    {name: "#00", mask: 2, type: "sun", cost: 3, effect: ["xso", "to", "sn", "sn", "sn"], pv: 4, extra: [], qty: 1 },

    {name: "#00", mask: 1, type: "moon", cost: 3, effect: ["sn", "ca"], pv: 4, extra: [], qty: 1 },
    {name: "#00", mask: 1, type: "moon", cost: 1, effect: ["ca"], pv: 2, extra: [], qty: 1 },
    {name: "#00", mask: 2, type: "sun", cost: 0, effect: ["ca"], pv: 0, extra: ["initial"], qty: MAX_PLAYERS * 1 },

    {name: "#00", mask: 1, type: "moon", cost: 3, effect: ["xca", "to", "sj", "sj", "sj"], pv: 4, extra: [], qty: 1 },
    {name: "#00", mask: 2, type: "sun", cost: 3, effect: ["xca", "to", "sj", "sj", "sj"], pv: 4, extra: [], qty: 1 },


    {name: "#00", mask: 5, type: "moon", cost: 5, effect: ["xca", "to", "sj", "sj", "sj"], pv: 15, extra: ["pn1", "per", "ca"], qty: 1 },
    {name: "#00", mask: 3, type: "sun", cost: 5, effect: ["sp"], pv: "0", extra: ["p2", "per", "sp", "sn"], qty: 1 },
    {name: "#00", mask: 3, type: "sun", cost: 5, effect: ["so"], pv: "0", extra: ["p2", "per", "so", "sn"], qty: 1 },


    {name: "#00", mask: 1, type: "moon", cost: 3, effect: ["sa"], pv: 4, extra: [], qty: 2 },
    {name: "#00", mask: 2, type: "sun", cost: 3, effect: ["sa"], pv: 4, extra: [], qty: 2 },
   
];


function evaluateCard(card) {
    let value = card.value!==undefined?card.value:0.0;
    value -= card.cost * VALUES.sj;
    value += card.pv * VALUES.pv;
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
