function updateTemp(card, unit) { //updates under assumption of old units (not current unit)
    let temp = card.querySelector('.stats .temp');
    let card_unit = card.querySelector('.stats .unit');
    let card_temp = parseFloat(card.querySelector('.stats .temp').innerHTML);
    card_unit.innerHTML = '°'+unit.toUpperCase();

    let high_temp = card.querySelector('.additional .high-number');
    let high_card_unit = card.querySelector('.additional .high-unit');
    let high_card_temp = card.querySelector('.additional .high-number').innerHTML;
    high_card_unit.innerHTML = '°'+unit.toUpperCase();

    let low_temp = card.querySelector('.additional .low-number');
    let low_card_unit = card.querySelector('.additional .low-unit');
    let low_card_temp = card.querySelector('.additional .low-number').innerHTML;
    low_card_unit.innerHTML = '°'+unit.toUpperCase();

    if(unit === 'f') {
        temp.innerHTML = (card_temp * (9/5) + 32).toFixed(1);
        high_temp.innerHTML = (high_card_temp * (9/5) + 32).toFixed(1);
        low_temp.innerHTML = (low_card_temp * (9/5) + 32).toFixed(1);
    } else if(unit === 'c') {
        temp.innerHTML = ((card_temp-32)*(5/9)).toFixed(1);
        high_temp.innerHTML = ((high_card_temp-32)*(5/9)).toFixed(1);
        low_temp.innerHTML = ((low_card_temp-32)*(5/9)).toFixed(1);
    } else {
        return;
    }
}

export default updateTemp;