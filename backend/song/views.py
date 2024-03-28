from django.shortcuts import render
from rest_framework.parsers import FormParser,MultiPartParser
from rest_framework import generics
from .serializers import GenreSerializer,SongSerializer,PlayListSerializer,SongSummarySerializer
from .models import Genre,Song,Playlist
from .permissions import SongPermission
from .extended_serializers import SongSerializer,HistorySerializer
from django_filters.rest_framework import DjangoFilterBackend


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
    permission_classes= [SongPermission]
    filter_backends = [DjangoFilterBackend]
    filterset_fields= ['artists']

class SongSummaryListAV(SongListAV):
    serializer_class = SongSummarySerializer


class SongDetailAV(generics.RetrieveUpdateDestroyAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer 
    parser_classes = [MultiPartParser,FormParser]
    permission_classes= [SongPermission]


class PlaylistListAV(generics.ListCreateAPIView):
    queryset = Playlist.objects.all()
    serializer_class = PlayListSerializer

class PlaylistDetailAV(generics.RetrieveUpdateAPIView):
    queryset = Playlist.objects.all()
    serializer_class = PlayListSerializer

class HistoryListAV(generics.ListAPIView):
    def get_queryset(self):
        return self.user.customer.listen_histories.all()