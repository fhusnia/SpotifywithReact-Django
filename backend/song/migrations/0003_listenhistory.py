# Generated by Django 4.2.1 on 2024-03-24 16:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0006_artist_birth_date_artist_gender_customer_birth_date_and_more'),
        ('song', '0002_remove_playlist_songs_song_playlists'),
    ]

    operations = [
        migrations.CreateModel(
            name='ListenHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('artist', 'Artist'), ('playlist', 'Playlist')], max_length=100)),
                ('pinned', models.BooleanField(default=False)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('artist', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='user.artist')),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='listen_histories', to='user.customer')),
                ('playlist', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='song.playlist')),
            ],
        ),
    ]