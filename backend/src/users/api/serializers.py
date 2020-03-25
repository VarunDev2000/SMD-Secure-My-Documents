from rest_framework import serializers
from users.models import (user_detail,account_info)

class user_detail_serializer(serializers.ModelSerializer):
    class Meta:
        model = user_detail
        fields = '__all__'

class account_info_serializer(serializers.ModelSerializer):
    class Meta:
        model = account_info
        fields = '__all__'