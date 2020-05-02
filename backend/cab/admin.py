from django.contrib import admin
from .models import UserProfile

class DriverAdmin(admin.ModelAdmin):
      list_display = ('title', 'email', 'pswd', 'location_x', 'location_y', 'available')

class RiderAdmin(admin.ModelAdmin):
      list_display = ('title', 'email', 'pswd', 'location_x', 'location_y', 'history')

admin.site.register(UserProfile)
