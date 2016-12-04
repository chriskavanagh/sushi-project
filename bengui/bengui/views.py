from django.contrib import messages
from django.core.urlresolvers import reverse
from django.shortcuts import render, redirect, get_object_or_404


def home(request):
	return render(request, 'index.html', {})