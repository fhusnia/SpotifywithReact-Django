from django.shortcuts import render
from rest_framework.parsers import FormParser,MultiPartParser
from rest_framework import generics
from .serializers import GenreSerializer,SongSerializer,PlayListSerializer
from .models import Genre,Song,Playlist


class GenreListAV(generics.ListCreateAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer


class GenreDetailAV(generics.RetrieveUpdateDestroyAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer 



class SongListAV(generics.ListCreateAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer
    parser_classes = [MultiPartParser,FormParser]


class SongDetailAV(generics.RetrieveUpdateDestroyAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer 
    parser_classes = [MultiPartParser,FormParser]


class PlaylistListAV(generics.ListCreateAPIView):
    queryset = Playlist.objects.all()
    serializer_class = PlayListSerializer

class PlaylistDetailAV(generics.RetrieveUpdateAPIView):
    queryset = Playlist.objects.all()
    serializer_class = PlayListSerializer
