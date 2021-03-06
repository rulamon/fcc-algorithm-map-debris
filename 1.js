function orbitalPeriod(arr) {
	var GM = 398600.4418;
	var earthRadius = 6367.4447;
  //formula for orbital period
  const formula = (index) => Math.round(2 * Math.PI * Math.sqrt(Math.pow((earthRadius + arr[index]["avgAlt"]), 3) / GM))
  //use array.prototype.map() to return object with orbitalPeriod instead of avgAlt 
  return arr.map((el, index) => {
  	return {
  		name: arr[index]["name"], 
  		orbitalPeriod: formula(index)}
  	})
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));