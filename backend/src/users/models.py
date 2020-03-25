from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse


class user_detail(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,related_name = "Userinfo",null=True)
    name = models.CharField(max_length=200, blank=True, null=True, default=None)
    dob = models.DateField(blank=True, null=True, default=None)
    mail = models.EmailField(null=True,blank = True, help_text='A valid email address, please.')
    mobile_no = models.IntegerField(blank=True, null=True, default=None)
    res_address = models.CharField(max_length=1000,default = None,blank=True, null=True)
    perm_address = models.CharField(max_length=1000,blank=True, null=True,default =None)
    
    class Meta:
        verbose_name_plural = "User Details"

    def __str__(self):
        return self.name


class account_info(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "UsersAccountInfo",null=True)
    account_id = models.CharField(max_length=500, default=None, blank=True, null=True)

    class Meta:
        verbose_name_plural = "Accounts"

    def __str__(self):
        return self.user.username+"'s Account Details"