from django.urls import path
from . import views

app_name = 'user'



urlpatterns = [
    path('customer-register/', views.CustomerRegisterAV.as_view(), name='customer-register'),
    path('artist-register/', views.ArtistRegisterAV.as_view(), name='artist-register'),
    path('customer-login/', views.customer_login_view, name='customer-login'),
    path('artist-login/', views.artist_login_view, name='artist-login'),
    path('artists/', views.ArtistListAV.as_view(), name='artist-list'),
    path('artists/<int:pk>/', views.ArtistDetailAV.as_view(), name='artist-detail'),
    path('artists/<int:pk>/auth/', views.ArtistAuthDetailAV.as_view(), name='artist-auth'),
    path('artists/auth/', views.ArtistAuthDetailAV.as_view(), name='artist-auth'),
    path('customers/auth/', views.CustomerAuthDetailAV.as_view(), name='customer-auth'),
    path('logout/',views.logout_view, name='logout')
]