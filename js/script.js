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

	var handler = StripeCheckout.configure({
	  key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
	  image: 'img/burrito.png',
	  locale: 'auto',
	  token: function(token) {
	    // Use the token to create the charge with a server-side script.
	    // You can access the token ID with `token.id`
	    var $form = $('#payment-form');
	    $form.append($('<input type="hidden" name="stripeToken" />').val(token.id));
	    $form.append($('<input type="hidden" name="stripeEmail" />').val(token.email));
	    $form.submit();
	  }
	});

	$('#customButton').on('click', function(e) {
	  // Open Checkout with further options
	  var total = Math.round($('#totalPrice').val());
	  handler.open({
	    name: 'Burritos4Basis',
	    description: 'Burritos',
	    amount: total
	  });
	  e.preventDefault();
	});

	// Close Checkout on page navigation
	$(window).on('popstate', function() {
	  handler.close();
	});
});