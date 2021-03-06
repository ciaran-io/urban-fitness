from django.shortcuts import render, get_object_or_404

from .models import UserProfile


def user_profile(request):
    """ Display the user's profile. """

    profile = get_object_or_404(UserProfile, user=request.user)

    template = 'users/profile.html'
    context = {
        'profile': profile,
    }


    return render(request, template, context)