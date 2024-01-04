from django.shortcuts import render
from rest_framework.generics import RetrieveAPIView,CreateAPIView,ListAPIView
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate
from .serializers import CustomerAuthSerializer, ArtistAuthSerializer,ArtistSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import Customer,Artist
from rest_framework.parsers import FormParser,MultiPartParser

@api_view(['POST'])
def customer_login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username,password=password)
    if user:
        serializer = CustomerAuthSerializer(instance=user.customer)
        return Response(serializer.data)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def artist_login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username,password=password)
    if user:
        serializer = ArtistAuthSerializer(instance=user.artist)
        return Response(serializer.data)
    return Response(status=status.HTTP_400_BAD_REQUEST)


class CustomerRegisterAV(CreateAPIView):
    serializer_class = CustomerAuthSerializer
    queryset = Customer.objects.all()
    parser_classes = [MultiPartParser,FormParser]


class ArtistRegisterAV(CreateAPIView):
    serializer_class = ArtistAuthSerializer
    queryset = Artist.objects.all()
    parser_classes = [MultiPartParser,FormParser]


class ArtistListAV(ListAPIView):
    serializer_class = ArtistSerializer
    queryset = Artist.objects.all()

class ArtistDetailAV(RetrieveAPIView):
    serializer_class = ArtistSerializer
    queryset = Artist.objects.all()