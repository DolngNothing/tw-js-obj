var fruit = {
apple: 20,
pear: 20,
peach: 10
};
var total=0;
for(x in fruit){
	total += fruit[x];
}

console.log(`total: ${total}`);