function toggleUnits(unit) {
    if(unit === 'f') {
        return 'c';
    } else if(unit === 'c') {
        return 'f';
    } else {
        return unit;
    }
}

export default toggleUnits;