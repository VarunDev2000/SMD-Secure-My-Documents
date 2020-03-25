from rest_framework.routers import DefaultRouter
from users.api.views import (UserDetailViewSet,AccountInfoViewSet)


router = DefaultRouter()
router.register(r'userdetail', UserDetailViewSet, basename='userdetail')
router.register(r'accountinfo', AccountInfoViewSet, basename='accountinfo')

urlpatterns = router.urls
