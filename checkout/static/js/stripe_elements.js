/*
    Core logic/payment flow for this comes from here:
    https://stripe.com/docs/payments/accept-a-payment
    CSS from here: 
    https://stripe.com/docs/stripe-js
*/

var stripePublicKey = document
    .getElementById('id_stripe_public_key')
    .innerHTML.slice(1, -1);
var clientSecret = document
    .getElementById('id_client_secret')
    .innerHTML.slice(1, -1);
var stripe = Stripe(stripePublicKey);
var elements = stripe.elements();
var style = {
    base: {
        color: '#000',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
            color: '#aab7c4',
        },
    },
    invalid: {
        color: '#dc3545',
        iconColor: '#dc3545',
    },
};

var card = elements.create('card', { style: style });
card.mount('#card-element');

// Handle realtime validation errors on the card element
card.addEventListener('change', function (event) {
    var errorDiv = document.getElementById('card-errors');
    if (event.error) {
        errorDiv.textContent =
            'There seems to be a probelm processing your card right now please check you have the correct details';
    } else {
        errorDiv.textContent = '';
    }
});

// Handle form submit
var form = document.getElementById('payment-form');
// form submit button
var submitButton = document.getElementById('submit-button');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    card.update({ disabled: true });
    submitButton.disabled = true;

    var saveInfo = Boolean(
        document.querySelector('#id-save-info:checked').value
    );
    // From using {% csrf_token %} in the form
    var csrfToken = document.querySelector(
        'input[name="csrfmiddlewaretoken"]'
    ).value;
    var postData = {
        csrfmiddlewaretoken: csrfToken,
        client_secret: clientSecret,
        save_info: saveInfo,
    };
    var url = '/checkout/cache_checkout_data/';

    fetch(url, postData, {
        method: 'POST',
    });

    stripe
        .confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: form.full_name.value.trim(),
                    phone: form.phone_number.value.trim(),
                    email: form.email.value.trim(),
                    address: {
                        line1: form.street_address1.value.trim(),
                        line2: form.street_address2.value.trim(),
                        city: form.town_or_city.value.trim(),
                        state: form.county.value.trim(),
                    },
                },
            },
            shipping: {
                name: form.full_name.value.trim(),
                phone: form.phone_number.value.trim(),
                address: {
                    line1: form.street_address1.value.trim(),
                    line2: form.street_address2.value.trim(),
                    city: form.town_or_city.value.trim(),
                    postal_code: form.postcode.value.trim(),
                    state: form.county.value.trim(),
                },
            },
        })
        .then(function (result) {
            if (result.error) {
                var errorDiv = document.getElementById('card-errors');
                errorDiv.textContent =
                    'There seems to be a probelm processing your card right now please check you have the correct details';
                card.update({ disabled: false });
                submitButton.disabled = false;
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    form.submit();
                }
            }
        });
});
