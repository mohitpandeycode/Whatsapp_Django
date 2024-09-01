from django.shortcuts import render,redirect
from .models import User,Chat

# Create your views here.

def index(request):
    if request.method == "POST":
        form_type = request.POST.get('form_type')

        if form_type == "user_form":
            username = request.POST.get('name')
            image = request.FILES.get('image')
            user = User(name=username, image=image)
            user.save()
            return redirect('/')

        elif form_type == "chat_form":
            msg = request.POST.get('msg')
            chat = Chat(chat=msg)
            chat.save()
            return redirect('/')

    chats = Chat.objects.all()
    userdata = User.objects.all()
    data = {'users': userdata, 'chats': chats}
    return render(request, 'index.html', data)

def deletepage(request):
    userdata = User.objects.all()
    data = {'users':userdata}
    return render(request, 'delete.html',data)

def deleteitem(request,id):
    deletedata = User.objects.get(id=id)
    deletedata.delete()
    return redirect('/')