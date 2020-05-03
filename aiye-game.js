export const stats = {
    cards: 4
};


export function createCard(card) {
    stats[`cards`] = stats[`cards`] ? stats[`cards`] + 1 : 1;
    const eCard = document.createElement("div");
    eCard.classList.add("card");
    eCard.classList.add("mini-euro");
    eCard.classList.add(card.type);
    eCard.classList.add(`mask${card.mask}`);
    let eType = document.createElement("div");
    eType.classList.add("type");
    eType.classList.add(card.type);
    eType.innerText = card.type;
    eCard.appendChild(eType);
    stats[`${card.type}`] = stats[`${card.type}`] ? stats[`${card.type}`] + 1 : 1;

    let eCost = document.createElement("div");
    eCost.classList.add("cost");
    switch (card.costType) {
        case 1:
            eCost.classList.add('seedlight');
            break;
        case 2:
            eCost.classList.add('seeddark');
            break;
    }
   
    eCost.innerText = card.cost;
    eCard.appendChild(eCost);
    stats[`$${card.cost}`] = stats[`$${card.cost}`] ? stats[`$${card.cost}`] + 1 : 1;

    let eExtra = document.createElement("div");
    eExtra.classList.add("extra");
    if (card.extra.length > 0 && card.extra[0] !== "initial") {
        stats[`extras`] = stats[`extras`] ? stats[`extras`] + 1 : 1;

    }
    for (const key in card.extra) {
        const item = card.extra[key];
        let eItem = document.createElement("div");
        eItem.classList.add("item");
        eItem.classList.add(item);
        eItem.innerText = item;
        eExtra.appendChild(eItem);
        if (item === "initial") {
            stats[`${item}`] = stats[`${item}`] ? stats[`${item}`] + 1 : 1;
        }
    }
    eCard.appendChild(eExtra);
    let ePV = document.createElement("div");
    ePV.classList.add("pv");
    ePV.innerText = card.pv;
    eCard.appendChild(ePV);
    stats[`${card.pv}pv`] = stats[`${card.pv}pv`] ? stats[`${card.pv}pv`] + 1 : 1;

    let eEffect = document.createElement("div");
    eEffect.classList.add("effect");
    for (const key in card.effect) {
        const item = card.effect[key];
        let eItem = document.createElement("div");
        eItem.classList.add("item");
        eItem.classList.add(item);
        eItem.innerText = item;
        eEffect.appendChild(eItem);
        stats[`action ${item}`] = stats[`action ${item}`] ? stats[`action ${item}`] + 1 : 1;
    }
    eCard.appendChild(eEffect);

    const eValue = document.createElement("div");
    console.log(card.type, card.value);

    eValue.classList.add("cardValue");
    eValue.textContent = `${card.name} ${card.value}`;
    eCard.appendChild(eValue);
    return eCard;
}
