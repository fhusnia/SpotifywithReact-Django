# Generated by Django 4.2.7 on 2023-12-13 12:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_remove_artist_birth_date_remove_customer_birth_date_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='artist',
            name='verified',
        ),
    ]
