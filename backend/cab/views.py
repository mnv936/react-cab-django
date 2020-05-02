from rest_framework import viewsets
from .serializers import UserSerializer
from .models import UserProfile

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = UserProfile.objects.all()

