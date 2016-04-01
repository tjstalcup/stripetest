$(document).ready(function(){
	var price = 5;
	var total = 0;
	$('#qty').change(function(){
		var qty = Math.round($(this).val());
		if(qty!=''){
			var total = price * qty;
			$('#total').text('$'+total+'.00');
			$('#totalPrice').val(total+'00');
		}
	});
});