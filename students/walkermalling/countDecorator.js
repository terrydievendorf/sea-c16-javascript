var countDecorator = function(Add){
	var count = 0;
	function decorator(){
		count++;
		return Add.apply(this,arguments);
	}
	decorator.callCount = function(){
		return count;
	}
	return decorator;
}