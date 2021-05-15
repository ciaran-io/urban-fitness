from django.shortcuts import render, redirect, reverse
from django.contrib import messages

from .forms import OrderForm

# code source Code Institude

# https://github.com/Code-Institute-Solutions/boutique_ado_v1/blob/8486523459273dddf96932a4ae19dd9a83af679d/checkout/views.py


def checkout(request):
    cart= request.session.get('cart', {})
    if not cart:
        messages.error(request, "There's nothing in your cart at the moment")
        return redirect(reverse('products'))

    order_form = OrderForm()
    template = 'checkout/checkout.html'
    context = {
        'order_form': order_form,
        'stripe_public_key': 'pk_test_51Iqg7UH6g6fmvO7HCa9e9SsT7Xy0AQkuTVRLZ76QFD6lLH8Q6Sboz8Er8mukm5rZgGeqTCGTcTpwYv8WhDcboCqf00zJFwG2ee',
        'client_secret': 'test client secret',
    }

    return render(request, template, context)
