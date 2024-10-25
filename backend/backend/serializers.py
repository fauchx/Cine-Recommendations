from rest_framework import serializers
from .models import Users  
from rest_framework.authtoken.models import Token
from rest_framework.validators import UniqueValidator
from django.contrib.auth import password_validation, authenticate

class UsersSerializers(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'

class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()  
    contrasena = serializers.CharField(max_length=20)

    def validate(self, data):
        print(f"Attempting to authenticate with email: {data['contrasena']}")
        user = authenticate(username=data['email'], password=data['contrasena'])  
        if user is None:
            raise serializers.ValidationError('Incorrect data')
        self.context['user'] = user
        return data

    def create(self, data):
        user = self.context['user']
        token, created = Token.objects.get_or_create(user=user)  
        return user, token.key

#create a user
class UserSignUpSerializer(serializers.Serializer):
    id_user = serializers.IntegerField()
    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=Users.objects.all())]
    )
    nombre = serializers.CharField(
        validators=[UniqueValidator(queryset=Users.objects.all())]
    )
    contrasena = serializers.CharField(min_length=8, max_length=20)
    contrasena_confirmacion = serializers.CharField(min_length=8, max_length=20)

    def validate(self, data):
        passwd = data['contrasena']
        passwd_conf = data['contrasena_confirmacion']
        if passwd != passwd_conf:
            raise serializers.ValidationError("Las contraseñas no coinciden")
        password_validation.validate_password(passwd)

        return data

    def create(self, validated_data):
        validated_data.pop('contrasena_confirmacion') 
        user = Users.objects.create(**validated_data)
        return user