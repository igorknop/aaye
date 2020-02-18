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
    { mask: 1, type: "neutral", costType:0, cost: 5, effect: ["sn", "sn"], pv: "0", extra: ["p5", "p8", "p11", "per", "sn", "sn"], qty: 1 , value: VALUES.tier},
    { mask: 13, type: "neutral", costType:0, cost: 0, effect: ["sn"], pv: 1, extra: ["initial"], qty: 3 },
    { mask: 10, type: "neutral", costType:0, cost: 0, effect: ["sp"], pv: 1, extra: ["initial"], qty: 3 },
    //{ mask: 14, type: "neutral", costType:0, cost: 0, effect: ["sn", "sp"], pv: 0, extra: ["initial"], qty: 1 },
    
    { mask: 2, type: "neutral", costType:0, cost: 5, effect: ["sp", "sp"], pv: "0", extra: ["p5", "p8", "p11", "per", "sp", "sp"], qty: 1 , value: VALUES.tier},
    { mask: 13, type: "neutral", costType:0, cost: 0, effect: ["sn"], pv: 1, extra: ["initial"], qty: 3 },
    { mask: 10, type: "neutral", costType:0, cost: 0, effect: ["sp"], pv: 1, extra: ["initial"], qty: 3 },
    //{ mask: 14, type: "neutral", costType:0, cost: 0, effect: ["sn", "sp"], pv: 0, extra: ["initial"], qty: 1 },
    
    { mask: 4, type: "neutral", costType:0, cost: 5, effect: ["sn", "sp"], pv: "0", extra: [, "p5", "p8", "p11", "per", "sn", "sp"], qty: 1 , value: VALUES.tier},
    { mask: 13, type: "neutral", costType:0, cost: 0, effect: ["sn"], pv: 1, extra: ["initial"], qty: 3 },
    { mask: 10, type: "neutral", costType:0, cost: 0, effect: ["sp"], pv: 1, extra: ["initial"], qty: 3 },
    //{ mask: 14, type: "neutral", costType:0, cost: 0, effect: ["sn", "sp"], pv: 0, extra: ["initial"], qty: 1 },
    
    { mask: 6, type: "neutral", costType:0, cost: 5, effect: ["merge"], pv: "0", extra: [, "p5", "per", "gpile"], qty: 1 , value: VALUES.tier},
    { mask: 13, type: "neutral", costType:0, cost: 0, effect: ["sn"], pv: 1, extra: ["initial"], qty: 3 },
    { mask: 10, type: "neutral", costType:0, cost: 0, effect: ["sp"], pv: 1, extra: ["initial"], qty: 3 },
    //{ mask: 14, type: "neutral", costType:0, cost: 0, effect: ["sn", "sp"], pv: 0, extra: ["initial"], qty: 1 },
    
    { mask: 5, type: "neutral", costType:0, cost: 5, effect: ["so", "ss"], pv: "0", extra: ["p5", "p8", "p11", "per", "so", "so"], qty: 1 , value: VALUES.tier},
    { mask: 15, type: "sun", costType:2, cost: 3, effect: ["so", "sp"], pv: 2, extra: [], qty: 3 },
    { mask: 15, type: "moon", costType:1, cost: 3, effect: ["so", "sn"], pv: 2, extra: [], qty: 3 },
    
    { mask: 4, type: "neutral", costType:0, cost: 5, effect: ["xsj", "to", "sn", "sn", "sn"], pv: 11, extra: [, "pn1", "per", "sj"], qty: 1 , value: -VALUES.tier},
    { mask: 14, type: "neutral", costType:0, cost: 3, effect: ["xsp", "to", "sn", "sn", "sn"], pv: 2, extra: [], qty: 3 },
    { mask: 14, type: "neutral", costType:0, cost: 3, effect: ["xsn", "to", "sp", "sp", "sp"], pv: 2, extra: [], qty: 3 },
    
    { mask: 3, type: "neutral", costType:0, cost: 5, effect: ["sp", "mca"], pv: "0", extra: [ "p5","p8","p11", "per", "pair"], qty: 1 , value: VALUES.tier},
    { mask: 6, type: "neutral", costType:0, cost: 5, effect: ["sn", "ms"], pv: "0", extra: ["p3", "per", "pile3"], qty: 1 , value: VALUES.tier},
    { mask: 6, type: "neutral", costType:0, cost: 5, effect: ["sn", "ss"], pv: "0", extra: ["p4", "per", "pile4"], qty: 1 , value: VALUES.tier},
    { mask: 18, type: "neutral", costType:0, cost: 3, effect: ["sa", "split"], pv: 2, extra: [], qty: 2 },
    { mask: 18, type: "neutral", costType:0, cost: 3, effect: ["sa", "split"], pv: 2, extra: [], qty: 2 },
    
    { mask: 3, type: "neutral", costType:0, cost: 5, effect: ["sj", "ca"], pv: "0", extra: ["p5", "p8", "p11", "per", "sun", "sun"], qty: 1 , value: VALUES.tier},
    { mask: 3, type: "neutral", costType:0, cost: 5, effect: ["sj", "ca"], pv: "0", extra: ["p5", "p8", "p11", "per", "moon", "moon"], qty: 1 },
    { mask: 5, type: "neutral", costType:0, cost: 5, effect: ["so", "ss"], pv: "0", extra: ["p5", "p8", "p11", "per", "ss", "ss"], qty: 1 , value: VALUES.tier},
    { mask: 17, type: "neutral", costType:0, cost: 3, effect: ["ss", "merge"], pv: 2, extra: [], qty: 2 },
    { mask: 17, type: "neutral", costType:0, cost: 3, effect: ["ss", "merge"], pv: 2, extra: [], qty: 2 },
    
    
    
    { mask: 16, type: "moon", costType:1, cost: 1, effect: ["ss","sp", "mca"], pv: 3, extra: [], qty: 3 },
    { mask: 16, type: "sun", costType:2, cost: 1, effect: ["ss","sn", "mca"], pv: 3, extra: [], qty: 3 },
    
    { mask: 5, type: "neutral", costType:0, cost: 5, effect: ["so", "ss"], pv: "0", extra: ["p5", "p8", "p11", "per", "so", "so"], qty: 1 , value: VALUES.tier},
    { mask: 11, type: "moon", costType:1, cost: 1, effect: ["sn", "sp", "ca"], pv: 2, extra: [], qty: 3 },
    { mask: 11, type: "sun", costType:2, cost: 1, effect: ["sn", "sp", "ca"], pv: 2, extra: [], qty: 3 },
    
    { mask: 6, type: "neutral", costType:0, cost: 5, effect: ["sp", "split"], pv: "0", extra: [, "p2", "per", "spile"], qty: 1 },
    { mask: 3, type: "neutral", costType:0, cost: 5, effect: ["sj", "ca"], pv: "0", extra: ["p5", "p8", "p11", "per", "sun", "sun"], qty: 1 , value: VALUES.tier},
    { mask: 3, type: "neutral", costType:0, cost: 5, effect: ["sj", "ca"], pv: "0", extra: ["p5", "p8", "p11", "per", "moon", "moon"], qty: 1 },
    { mask: 19, type: "neutral", costType:0, cost: 2, effect: ["sa"], pv: 2, extra: [], qty: 2 },
    { mask: 19, type: "neutral", costType:0, cost: 2, effect: ["sa"], pv: 2, extra: [], qty: 2 },
    
    { mask: 12, type: "moon", costType:1, cost: 1, effect: ["sn", "ms"], pv: 2, extra: [], qty: 2 },
    { mask: 12, type: "sun", costType:2, cost: 1, effect: ["sp", "ms"], pv: 2, extra: [], qty: 2 },
    
    /**/
    //{ mask: 4, type: "neutral", costType:0, cost: 5, effect: ["ss", "sp"], pv: "0", extra: ["p5", "p8", "p11", "per", "sn", "sp"], qty: 1 , value: VALUES.tier},
    //{ mask: 4, type: "neutral", costType:0, cost: 5, effect: ["sn", "sn"], pv: "0", extra: ["p5", "p8", "p11", "per", "sn", "sn"], qty: 1, value: VALUES.tier },
    //{ mask: 4, type: "neutral", costType:0, cost: 5, effect: ["sp", "sp"], pv: "0", extra: [, "p5", "p8", "p11", "per", "sp","sp"], qty: 1 , value: VALUES.tier},
    //{ mask: 2, type: "sun", costType:0, cost: 3, effect: ["sa", "split"], pv: 2, extra: [], qty: 1 },
    //{ mask: 1, type: "moon", costType:0, cost: 1, effect: ["so", "mca"], pv: 2, extra: [], qty: 1 },
    //{ mask: 2, type: "sun", costType:0, cost: 3, effect: ["sa", "ca"], pv: 2, extra: [], qty: 1 },
    //{ mask: 4, type: "neutral", costType:0, cost: 5, effect: ["ss", "mca"], pv: "0", extra: [ "p5","p8","p11","per", "pair"], qty: 1 },
    { mask: 14, type: "moon", costType:1, cost: 1, effect: ["xca", "to", "sj", "sj", "sj"], pv: 2, extra: [], qty: 2 },
    { mask: 14, type: "sun", costType:2, cost: 1, effect: ["xca", "to", "sj", "sj", "sj"], pv: 2, extra: [], qty: 2 },
    
];
export const CARDSO = [
    { mask: 4, type: "moon", cost: 5, effect: ["mca"], pv: "0", extra: ["p1", "per", "equi"], qty: 1 },
    { mask: 1, type: "moon", cost: 3, effect: ["sn", "sn"], pv: 4, extra: [], qty: 1 },
    { mask: 2, type: "sun", cost: 3, effect: ["sn", "sn"], pv: 4, extra: [], qty: 1 },
    { mask: 2, type: "sun", cost: 1, effect: ["sn"], pv: 2, extra: [], qty: 1 },
    { mask: 1, type: "moon", cost: 1, effect: ["sn"], pv: 2, extra: [], qty: 1 },


    { mask: 1, type: "moon", cost: 3, effect: ["sp", "sp"], pv: 4, extra: [], qty: 1 },
    { mask: 2, type: "sun", cost: 3, effect: ["sp", "sp"], pv: 4, extra: [], qty: 1 },
    { mask: 1, type: "moon", cost: 1, effect: ["sp"], pv: 2, extra: [], qty: 1 },
    { mask: 2, type: "sun", cost: 1, effect: ["sp"], pv: 2, extra: [], qty: 1 },


    { mask: 1, type: "moon", cost: 1, effect: ["xsp", "to", "sn", "sn"], pv: 2, extra: [], qty: 1 },
    { mask: 2, type: "sun", cost: 1, effect: ["xsp", "to", "sn", "sn"], pv: 2, extra: [], qty: 1 },

    { mask: 1, type: "moon", cost: 3, effect: ["xsp", "to", "so", "sn"], pv: 4, extra: [], qty: 1 },
    { mask: 2, type: "sun", cost: 3, effect: ["xsp", "to", "so", "sn"], pv: 4, extra: [], qty: 1 },
    { mask: 2, type: "sun", cost: 3, effect: ["xso", "to", "sn", "sn", "sn"], pv: 4, extra: [], qty: 1 },

    { mask: 1, type: "moon", cost: 3, effect: ["sn", "ca"], pv: 4, extra: [], qty: 1 },
    { mask: 1, type: "moon", cost: 1, effect: ["ca"], pv: 2, extra: [], qty: 1 },
    { mask: 2, type: "sun", cost: 0, effect: ["ca"], pv: 0, extra: ["initial"], qty: MAX_PLAYERS * 1 },

    { mask: 1, type: "moon", cost: 3, effect: ["xca", "to", "sj", "sj", "sj"], pv: 4, extra: [], qty: 1 },
    { mask: 2, type: "sun", cost: 3, effect: ["xca", "to", "sj", "sj", "sj"], pv: 4, extra: [], qty: 1 },


    { mask: 5, type: "moon", cost: 5, effect: ["xca", "to", "sj", "sj", "sj"], pv: 15, extra: ["pn1", "per", "ca"], qty: 1 },
    { mask: 3, type: "sun", cost: 5, effect: ["sp"], pv: "0", extra: ["p2", "per", "sp", "sn"], qty: 1 },
    { mask: 3, type: "sun", cost: 5, effect: ["so"], pv: "0", extra: ["p2", "per", "so", "sn"], qty: 1 },


    { mask: 1, type: "moon", cost: 3, effect: ["sa"], pv: 4, extra: [], qty: 2 },
    { mask: 2, type: "sun", cost: 3, effect: ["sa"], pv: 4, extra: [], qty: 2 },
   
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
