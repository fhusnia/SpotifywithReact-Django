from rest_framework import serializers
from .models import Genre,Song,Playlist,ListenHistory
from user.models import Artist



class ArtistSummary(serializers.ModelSerializer):
    full_name = serializers.CharField(source='user.get_full_name')
    class Meta:
        model = Artist
        fields = ['id','full_name']



class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        exclude = ['updated','created']



class SongSerializer(serializers.ModelSerializer):
    genre_info = GenreSerializer(source='genre',read_only = True)
    artist_info = ArtistSummary(source='artists' ,many=True,read_only=True)
    like_count = serializers.IntegerField(source = 'liked_customers.count',read_only=True)
    artists = serializers.JSONField(write_only=True)

    class Meta:
        model = Song
        exclude = ['updated','created','liked_customers','playlists']
        extra_kwargs = {
            'genre': {'write_only': True}
        }


    def validate_artists(self, data):
        data.append(self.context['request'].user.artist.id)
        return data

class SongSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = ['id','image','title']



class PlayListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = '__all__'
        extra_kwargs = {
            'customer': {'read_only' : True},
            'liked_customers': {'read_only' : True}
        }
        
    def create(self,validated_data):
        return Playlist.objects.create(customer=self.context['request'].user.customer, **validated_data)
    
    

        
    