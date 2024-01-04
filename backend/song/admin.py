from django.contrib import admin
from .models import Genre,Playlist,Song
# Register your models here.

admin.site.register(Genre)
admin.site.register(Song)
admin.site.register(Playlist)