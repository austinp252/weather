function updateTemp(card, unit) { //updates under assumption of old units (not current unit)
    let temp = card.querySelector('.stats .temp');
    let card_unit = card.querySelector('.stats .unit');
    let card_temp = parseFloat(card.querySelector('.stats .temp').innerHTML);
    card_unit.innerHTML = '°'+unit.toUpperCase();
    if(unit === 'f') {
        temp.innerHTML = (card_temp * (9/5) + 32).toFixed(1);;
    } else if(unit === 'c') {
        temp.innerHTML = ((card_temp-32)*(5/9)).toFixed(1);;
    } else {
        return;
    }
}

export default updateTemp;