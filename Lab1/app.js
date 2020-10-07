const angleInRadians = 3;

const angleInDegrees = convertToDegrees(angleInRadians);

console.log(angleInDegrees);

function convertToDegrees(radians) {
	return radians * 180 / Math.PI;
}