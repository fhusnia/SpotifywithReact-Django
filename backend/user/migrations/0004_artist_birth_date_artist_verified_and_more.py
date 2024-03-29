# Generated by Django 4.2.7 on 2023-12-13 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_remove_artist_verified'),
    ]

    operations = [
        migrations.AddField(
            model_name='artist',
            name='birth_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='artist',
            name='verified',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='customer',
            name='birth_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='customer',
            name='gender',
            field=models.CharField(blank=True, choices=[('man', 'Man'), ('woman', 'Woman'), ('other', 'Other')], max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='gender',
            field=models.CharField(blank=True, choices=[('man', 'Man'), ('woman', 'Woman'), ('other', 'Other')], max_length=10, null=True),
        ),
    ]
