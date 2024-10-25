from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Users
from .serializers import UsersSerializers, UserLoginSerializer, UserSignUpSerializer

class UserViewSet(viewsets.GenericViewSet):
    queryset = Users.objects.all()  # Fetch all users without filtering
    serializer_class = UsersSerializers

    @action(detail=False, methods=['post'])
    def login(self, request):
        print(request.data)
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # This should return the authenticated user and the token
        user, token = serializer.create(serializer.validated_data)  
        data = {
            'user': UsersSerializers(user).data,
            'access_token': token
        }

        return Response(data, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'])
    def signup(self, request):
        serializer = UserSignUpSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # Save the user instance
        user = serializer.save()  
        data = UsersSerializers(user).data
        
        return Response(data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['get'])
    def get_users(self, request):
        # This action fetches all users
        users = self.queryset  # Use the queryset defined at the class level
        serializer = self.get_serializer(users, many=True)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
