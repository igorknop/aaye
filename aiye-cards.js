const MAX_PLAYERS = 4;

export const CARDS = [
    { mask: 3, type: "moon", cost: 5, effect: ["sn", "sn"], pv: "0", extra: [, "p5","p8","p11", "per", "sn"], qty: 1 },
    { mask: 1, type: "moon", cost: 0, effect: ["sn"], pv: 0, extra: ["initial"], qty: 3 },
    { mask: 2, type: "sun", cost: 0, effect: ["sp"], pv: 0, extra: ["initial"], qty: 2 },
    { mask: 2, type: "sun", cost: 0, effect: ["xsp", "to", "sn", "sn", "sn"], pv: 0, extra: ["initial"], qty: 1 },

    { mask: 3, type: "moon", cost: 5, effect: ["sp", "sp"], pv: "0", extra: [, "p5","p8","p11", "per", "sp"], qty: 1 },
    { mask: 1, type: "moon", cost: 0, effect: ["sn"], pv: 0, extra: ["initial"], qty: 3 },
    { mask: 2, type: "sun", cost: 0, effect: ["sp"], pv: 0, extra: ["initial"], qty: 2 },
    { mask: 2, type: "sun", cost: 0, effect: ["xsp", "to", "sn", "sn", "sn"], pv: 0, extra: ["initial"], qty: 1 },

    { mask: 4, type: "sun", cost: 5, effect: ["sn", "sn"], pv: "0", extra: [, "p5","p8","p11", "per", "sn"], qty: 1 },
    { mask: 1, type: "moon", cost: 0, effect: ["sn"], pv: 0, extra: ["initial"], qty: 3 },
    { mask: 2, type: "sun", cost: 0, effect: ["sp"], pv: 0, extra: ["initial"], qty: 2 },
    { mask: 2, type: "sun", cost: 0, effect: ["xsp", "to", "sn", "sn", "sn"], pv: 0, extra: ["initial"], qty: 1 },

    { mask: 4, type: "sun", cost: 5, effect: ["sp", "sp"], pv: "0", extra: [, "p5","p8","p11", "per", "sp"], qty: 1 },
    { mask: 1, type: "moon", cost: 0, effect: ["sn"], pv: 0, extra: ["initial"], qty: 3 },
    { mask: 2, type: "sun", cost: 0, effect: ["sp"], pv: 0, extra: ["initial"], qty: 2 },
    { mask: 2, type: "sun", cost: 0, effect: ["xsp", "to", "sn", "sn", "sn"], pv: 0, extra: ["initial"], qty: 1 },

    { mask: 4, type: "sun", cost: 5, effect: ["so","ss"], pv: "0", extra: [, "p5","p8","p11", "per", "sn", "sp"], qty: 1 },
    { mask: 2, type: "sun", cost: 3, effect: ["so","sp"], pv: 4, extra: [], qty: 3 },
    { mask: 1, type: "moon", cost: 3, effect: ["so","sn"], pv: 4, extra: [], qty: 3 },

    { mask: 5, type: "sun", cost: 5, effect: ["xsj", "to", "sn", "sn", "sn"], pv: 16, extra: [, "pn1", "per", "sj"], qty: 1 },
    { mask: 1, type: "moon", cost: 3, effect: ["xsp", "to", "sn", "sn", "sn"], pv: 4, extra: [], qty: 1 },
    { mask: 2, type: "sun", cost: 3, effect: ["xsp", "to", "sn", "sn", "sn"], pv: 4, extra: [], qty: 1 },
    { mask: 1, type: "moon", cost: 3, effect: ["xsp", "to", "sn", "sn", "sn"], pv: 4, extra: [], qty: 1 },
    { mask: 1, type: "moon", cost: 3, effect: ["xsn", "to", "sp", "sp", "sp"], pv: 4, extra: [], qty: 1 },
    { mask: 2, type: "sun", cost: 3, effect: ["xsn", "to", "sp", "sp", "sp"], pv: 4, extra: [], qty: 1 },
    { mask: 2, type: "sun", cost: 3, effect: ["xsn", "to", "sp", "sp", "sp"], pv: 4, extra: [], qty: 1 },

    { mask: 6, type: "sun", cost: 5, effect: ["merge"], pv: "0", extra: [, "p1", "per", "gpile"], qty: 1 },
    { mask: 5, type: "moon", cost: 5, effect: ["split"], pv: "0", extra: [, "p1", "per", "spile"], qty: 1 },
    { mask: 1, type: "moon", cost: 1, effect: ["sp", "merge"], pv: 3, extra: [], qty: 1 },
    { mask: 2, type: "sun", cost: 1, effect: ["sp", "merge"], pv: 3, extra: [], qty: 1 },
    { mask: 1, type: "moon", cost: 1, effect: ["sn", "split"], pv: 3, extra: [], qty: 1 },
    { mask: 2, type: "sun", cost: 1, effect: ["sn", "split"], pv: 3, extra: [], qty: 1 },
    { mask: 2, type: "sun", cost: 2, effect: ["ca", "to", "sj", "sj", "sj"], pv: 3, extra: [], qty: 1 },


    { mask: 3, type: "sun", cost: 5, effect: ["so","ss","mca"], pv: "0", extra: [, "p2", "per", "pair"], qty: 1 },
    { mask: 4, type: "moon", cost: 5, effect: ["ss","mca"], pv: "0", extra: [, "p2", "per", "pair"], qty: 1 },
    { mask: 1, type: "moon", cost: 1, effect: ["ss","mca"], pv: 3, extra: [], qty: 2 },
    { mask: 2, type: "sun", cost: 1, effect: ["ss","mca"], pv: 3, extra: [], qty: 2 },
    { mask: 1, type: "moon", cost: 1, effect: ["so", "mca"], pv: 2, extra: [], qty: 1 },

    { mask: 6, type: "sun", cost: 5, effect: ["ca","sa"], pv: "0", extra: [, "p1", "per", "sun"], qty: 1 },
    { mask: 5, type: "moon", cost: 5, effect: ["ca","sa"], pv: "0", extra: [, "p1", "per", "moon"], qty: 1 },
    { mask: 1, type: "moon", cost: 1, effect: ["sn", "ca"], pv: 2, extra: [], qty: 2 },
    { mask: 2, type: "sun", cost: 1, effect: ["sn", "ca"], pv: 2, extra: [], qty: 2 },
    { mask: 2, type: "sun", cost: 3, effect: ["ca", "sa"], pv: 4, extra: [], qty: 1 },

    /**/
    { mask: 5, type: "moon", cost: 5, effect: ["ss","ms"], pv: "0", extra: [ "p5","p8","p11", "per", "sj"], qty: 1 },
    { mask: 1, type: "moon", cost: 3, effect: ["sa"], pv: 1, extra: [], qty: 3 },
    { mask: 2, type: "sun", cost: 3, effect: ["sa"], pv: 1, extra: [], qty: 3 },

    { mask: 4, type: "moon", cost: 5, effect: ["ss","sp"], pv: "0", extra: [, "p5","p8","p11", "per", "sn", "sp"], qty: 1 },
    { mask: 1, type: "moon", cost: 1, effect: ["sn","ms"], pv: 3, extra: [], qty: 3 },
    { mask: 2, type: "sun", cost: 1, effect: ["sp","ms"], pv: 3, extra: [], qty: 3 },

    { mask: 5, type: "sun", cost: 5, effect: ["so", "ss"], pv: "0", extra: [, "p5","p8","p11", "per", "so", "ss"], qty: 1 },
    { mask: 5, type: "moon", cost: 5, effect: ["so", "ss"], pv: "0", extra: [, "p1", "per", "so"], qty: 1 },
    { mask: 6, type: "moon", cost: 5, effect: ["so", "ss"], pv: "0", extra: [, "p1", "per", "ss"], qty: 1 },
    { mask: 1, type: "moon", cost: 1, effect: ["xca", "to", "sj", "sj", "sj"], pv: 2, extra: [], qty: 2 },
    { mask: 2, type: "sun", cost: 1, effect: ["xca", "to", "sj", "sj", "sj"], pv: 2, extra: [], qty: 2 },

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


    { mask: 5, type: "moon", cost: 5, effect: ["xca", "to", "sj", "sj", "sj"], pv: 16, extra: ["pn1", "per", "ca"], qty: 1 },
    { mask: 3, type: "sun", cost: 5, effect: ["sp"], pv: "0", extra: ["p2", "per", "sp", "sn"], qty: 1 },
    { mask: 3, type: "sun", cost: 5, effect: ["so"], pv: "0", extra: ["p2", "per", "so", "sn"], qty: 1 },


    { mask: 1, type: "moon", cost: 3, effect: ["sa"], pv: 4, extra: [], qty: 1 },
    { mask: 2, type: "sun", cost: 3, effect: ["sa"], pv: 4, extra: [], qty: 1 },
    { mask: 1, type: "moon", cost: 3, effect: ["sa"], pv: 4, extra: [], qty: 1 },
    { mask: 2, type: "sun", cost: 3, effect: ["sa"], pv: 4, extra: [], qty: 1 },




];
