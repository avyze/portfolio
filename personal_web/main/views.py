from django.shortcuts import render, HttpResponse

# Create your views here.
def home(request):
    context = {
        'title': 'Patryk Lickowski | Home',
    }
    return render(request, "home.html", context)

def testing(request):
    context = {
        'title': 'Testing'
    }
    return render(request, 'testing.html', context)
