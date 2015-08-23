function cleanup(input) {
	var input;
	input = input.trim();
	return input;
}

function calc() {
	var total = document.getElementById('total').value
	var start_1 = document.getElementById('start_1').value;
	var start_2 = document.getElementById('start_2').value;
	var target = document.getElementById('target').value;
	
	//convert commas to dots for UX compatibility
	total = cleanup(total);
	start_1 = cleanup(start_1);
	start_2 = cleanup(start_2);
	target = cleanup(target);
	
	
	var ratio_1;
	var ratio_2;
	var ratio_total; //ratio_total is only used internal
	var share_1;
	var share_2;
	var quantity_1;
	var quantity_2;
	
	ratio_1 = start_2 - target;
	ratio_1 = Math.abs(ratio_1);
	ratio_2 = start_1 - target;
	ratio_2 = Math.abs(ratio_2);
	
	ratio_total = ratio_1 + ratio_2;
	
	share_1 = ratio_1 / ratio_total * 100;
	share_2 = ratio_2 / ratio_total * 100;
	
	quantity_1 = share_1 / 100 * total;
	quantity_2 = share_2 / 100 * total;

	
	document.getElementById('ratio_1').value = ratio_1;
	document.getElementById('ratio_2').value = ratio_2;
	document.getElementById('share_1').value = share_1;
	document.getElementById('share_2').value = share_2;
	document.getElementById('quantity_1').value = quantity_1;
	document.getElementById('quantity_2').value = quantity_2;
}
