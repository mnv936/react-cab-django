from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    driver = models.BooleanField(default=False)
    location_x = models.IntegerField()
    location_y = models.IntegerField()
    available = models.BooleanField(default=False)

    def _str_(self):
        return self.username



