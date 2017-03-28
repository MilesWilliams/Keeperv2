from django.contrib.auth import authenticate
from django.db.models import Q

from rest_framework_jwt.settings import api_settings


from rest_framework.serializers import (
    ModelSerializer,
    EmailField,
    ValidationError,
    CharField
    )
from rest_framework.response import Response
from Organizations.models import Users

jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_decode_handler = api_settings.JWT_DECODE_HANDLER

class UserLoginSerializer(ModelSerializer):
    token = CharField(allow_blank=True, read_only=True)
    username = CharField(label='Username', required=False, allow_blank=True)
    email = EmailField(label='Email Address', required=False, allow_blank=True)
    userdetails = CharField(allow_blank=True, read_only=True)
    class Meta:
        model = Users
        fields = (
            'username',
            'email',
            'password',
            'token',
            'userdetails',
        )
        extra_kwargs = {"password":
                            {"write_only": True}
                       }

    def validate(self, data):
        user_obj = None
        email = data.get("email")
        username = data.get("username")
        password = data["password"]
        if not email and not username:
            raise ValidationError("A username or email is required")

        user = Users.objects.filter(
            Q(email=email) |
            Q(username=username)
            ).distinct()
        user = user.exclude(email__isnull=True).exclude(email__iexact='')
        if user.exists() and user.count() == 1:
            user_obj = user.first()
        else:
            raise ValidationError("This username/email is not valid.")

        # if user_obj:
        #     if not user_obj.check_password(password):
        #         raise ValidationError("Incorrect credentials, please try again.")

        credentials = {'username': data.get("username"),
                       'password': data.get('password')}

        user_test = authenticate(**credentials)
        payload = jwt_payload_handler(user_test)
        print(payload)
        data["userdetails"] = payload
        data["token"] = jwt_encode_handler(payload)
        return data