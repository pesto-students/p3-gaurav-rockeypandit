
	function findPair(arr, size, n) {
	    arr.sort()
		let i = 0;
		let j = 1;
		while (i < size && j < size) {
			if (i != j && arr[j] - arr[i] == n) {
				return 1;
			}
			else if (arr[j] - arr[i] < n)
				j++;
			else
				i++;
		}

		return 0;
	}

	let arr = [12,40,80,10,20,32,50];
	let size = arr.length;
	let n = 60;
	console.log(findPair(arr, size, n))