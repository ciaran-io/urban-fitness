/*
    Core logic/payment flow for this comes from here:
    https://stripe.com/docs/payments/accept-a-payment
    CSS from here: 
    https://stripe.com/docs/stripe-js
*/

var stripePublicKey = document.getElementById('id_stripe_public_key').innerHTML.slice(1, -1);
var clientSecret = document.getElementById('id_client_secret').innerHTML.slice(1, -1);
var stripe = Stripe(stripePublicKey);
var elements = stripe.elements();
var style = {
    base: {
        color: '#000',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
            color: '#aab7c4'
        }
    },
    invalid: {
        color: '#dc3545',
        iconColor: '#dc3545'
    }
};
var card = elements.create('card', {style: style});
card.mount('#card-element');

// Handle realtime validation errors on the card element
card.addEventListener('change', function (event) {
    var errorDiv = document.getElementById('card-errors');
    if (event.error) {
        errorDiv.textContent = 
        "There seems to be a probelm processing your card right now please check you have the correct details"
    } else {
        errorDiv.textContent = '';
    }
});


// Handle form submit
var form = document.getElementById('payment-form');
var submitButton = document.getElementById('submit-button');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    card.update({ 'disabled': true});
    submitButton.disabled = true;
    stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
        }
    }).then(function(result) {
        if (result.error) {
            var errorDiv = document.getElementById('card-errors');
            errorDiv.textContent = 
            "There seems to be a probelm processing your card right now please check you have the correct details"
            card.update({ 'disabled': false});
            submitButton.disabled = false;
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                form.submit();
            }
        }
    });
});