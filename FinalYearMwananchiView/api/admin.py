from django.contrib import admin
from .models import User,ResidentProfile,CountyServices,Report


admin.site.register(Report)
admin.site.register(User)
admin.site.register(ResidentProfile)
admin.site.register(CountyServices)

