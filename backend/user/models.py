from django.db import models

# Create your models here.

GENDER_CHOICES = [
    ('man', 'Man'),
    ('woman', 'Woman'),
    ('other', 'Other')
]


class Customer(models.Model):
    user = models.OneToOneField('auth.User', on_delete=models.PROTECT)
    image = models.ImageField(upload_to='customer/images', null=True, blank=True)
    following_artist = models.ManyToManyField('Artist',related_name='followed_customers')
    birth_date = models.DateField(null=True, blank=True)
    gender = models.CharField(choices=GENDER_CHOICES,max_length=10,null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username

class Artist(models.Model):
    user = models.OneToOneField('auth.User', on_delete=models.PROTECT)
    image = models.ImageField(upload_to='artist/images', null=True, blank=True)
    verified = models.BooleanField(default=False)
    birth_date = models.DateField(null=True, blank=True)
    gender = models.CharField(choices=GENDER_CHOICES,max_length=10,null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.user.username
    






