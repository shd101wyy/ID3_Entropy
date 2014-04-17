
var calculateEntropy = function(num0, args, num1, result){
	// calculate entropy of result
	var entropy_of_r = 0;
	for(var i = 0; i < num1; i++){
		var probability = 0;
		var num = 0;
		for(var j = 0; j < result.length; j++){
			if(result[j] === i)
				num++
		}
		probability = num / result.length;
		entropy_of_r = entropy_of_r - probability * (Math.log(probability) / Math.log(2) );
	}
	console.log("Entropy(Result): " + entropy_of_r);

	var entropies = [];
	for(var i = 0; i < num0; i++){
		var result__ = [];
		var entropy = 0;
		for(var a = 0; a < num1; a++){
			result__.push(0);
		}
		for(var j = 0; j < result.length; j++){
			if(i == args[j]){
				result__[result[j]]++;
			}
		}
		var sum_num = 0; // get sum
		for(var a = 0; a < result__.length; a++){
			if(result__[a] === 0) continue;
			sum_num += result__[a];
		}
		for(var a = 0; a < result__.length; a++){
			if(result__[a] === 0) continue;
			entropy -= result__[a] / sum_num * Math.log(result__[a] / sum_num) / Math.log(2); 
		}
		console.log("Entropy(" + i +"): " + entropy);
		entropies.push(entropy);
	}

	var probabilities = [];
	for(var i = 0; i < num0; i++){
		var count = 0;
		for(j = 0; j < args.length; j++){
			if(i === args[j]){
				count++;
			}
		}
		probabilities.push(count / args.length);
	}

	var gain = entropy_of_r;
	for(var i = 0; i < probabilities.length; i++){
		gain = gain - probabilities[i] * entropies[i];
	}
	console.log("Gain: " + gain);
}

calculateEntropy(2, [0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0],
				 2, [0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1])

calculateEntropy(3, [0,0,1,2,2,2,2,1,0,2,1,0,1,1,1,1],
				 2, [0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1])


calculateEntropy(3, [0,1,1,1,2,1,2,2,1,0,1,2,1,2,0,1],
				 2, [0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1])


calculateEntropy(4, [0,1,0,0,1,1,0,3,0,0,0,1,1,2,2,3],
				 2, [0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1])













