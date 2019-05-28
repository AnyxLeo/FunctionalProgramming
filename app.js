
function nosy(f){
	return (...args) => {
	  console.log('calling with', args);
	  let result = f(...args);
	  console.log('called with', args,', returned ', result);
	  return result
	}
  }
  
  nosy(Math.min)(3, 2, 1);

  function greaterThan(n){
	  return m => m > n;
  }

  let greaterThan10 = greaterThan(10);
  console.log(greaterThan10(11));