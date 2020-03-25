from rest_framework import viewsets,permissions
from .serializers import (user_detail_serializer,account_info_serializer)

from users.models import (user_detail,account_info)


class UserDetailViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = user_detail_serializer
    
    def get_queryset(self):
        return user_detail.objects.filter(user=self.request.user)
        #return staff_detail.objects.all()

    def perform_create(self,serializer):
        serializer.save(user =self.request.user)


class AccountInfoViewSet(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.IsAuthenticated
    ]
    

    serializer_class = account_info_serializer
    
    def get_queryset(self):
        return account_info.objects.filter(staff = self.request.user)
        #return staff_detail.objects.all()

    def perform_create(self,serializer):
        serializer.save(staff = self.request.user)

