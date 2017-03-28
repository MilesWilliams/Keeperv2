from django.conf.urls import url
from rest_framework_jwt.views import verify_jwt_token, obtain_jwt_token

from .views import (
    AuthRegister,
    UserLoginAPIView,
    )

urlpatterns = [
    url(r'^token/', obtain_jwt_token),
    url(r'^login/$', UserLoginAPIView.as_view(), name='login'),
    url(r'^token-verify/', verify_jwt_token),
    url(r'^register/$', AuthRegister.as_view()),

]
