from django.db import models
# Create your models here.

class Genre(models.Model):
    title = models.CharField(max_length=100)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title



class Playlist(models.Model):
    title = models.CharField(max_length=100)
    customer = models.ForeignKey('user.Customer', on_delete=models.SET_NULL, null=True, blank=True, related_name='playlists')
    image = models.ImageField(upload_to='user/images/', null=True, blank=True)
    liked_customers = models.ManyToManyField('user.Customer', related_name='liked_playlists', blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title




class Song(models.Model):
    title = models.CharField(max_length=100)
    genre = models.ForeignKey('Genre',on_delete=models.SET_NULL,null=True,blank=True,related_name='songs')
    image = models.ImageField(upload_to='song/images/', null=True, blank=True)
    description = models.TextField(null=True,blank=True)
    duration = models.IntegerField(default=240)
    file = models.FileField(upload_to='song/files')
    artists = models.ManyToManyField('user.Artist',related_name='songs')
    playlists = models.ManyToManyField(Playlist,related_name='songs',blank=True)
    liked_customers = models.ManyToManyField('user.Customer', related_name='liked_songs', blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title


HISTORY_TYPES = [
    ('artist','Artist'),
    ('playlist','Playlist')
]

class ListenHistory(models.Model):
    customer = models.ForeignKey('user.Customer',on_delete=models.CASCADE,related_name = 'listen_histories')
    type = models.CharField(max_length=100,choices=HISTORY_TYPES)
    playlist = models.ForeignKey('song.Playlist',on_delete=models.CASCADE,null=True,blank=True)
    artist = models.ForeignKey('user.Artist',on_delete=models.CASCADE,null=True,blank=True)
    pinned = models.BooleanField(default=False)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)