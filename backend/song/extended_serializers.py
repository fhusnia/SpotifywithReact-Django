from rest_framework import serializers
from user.serializers import ArtistSerializer
from .models import Genre, Song,ListenHistory
from .serializers import GenreSerializer,PlayListSerializer

class SongSerializer(serializers.ModelSerializer):
    genre_info = GenreSerializer(source='genre', read_only=True)
    artists_info = ArtistSerializer(source='artists', many=True, read_only=True)
    like_count = serializers.IntegerField(source='liked_customers.count', read_only=True)
    artists = serializers.JSONField(write_only=True)
    
    class Meta:
        model = Song
        exclude = ['updated', 'created', 'liked_customers']
        extra_kwargs = {
            'genre': {'write_only': True}
        }
        
    def validate_artists(self, data):
        data.append(self.context['request'].user.artist.id)
        return data
    
class HistorySerializer(serializers.ModelSerializer):
    data = serializers.SerializerMethodField()
    
    class Meta:
        model = ListenHistory
        fields = ('id','customer','type')
        
    def get_data(self,instance):
        if instance.type == 'artist':
            serializer = ArtistSerializer(instance.artist)
            return serializer.data
        elif instance.type == 'playlist':
            serializer = PlayListSerializer(instance.playlist)
            return serializer.data