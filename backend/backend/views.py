from django.http import JsonResponse
from django.db import connection

def get_users(request):
    with connection.cursor() as cursor:
        cursor.execute("SELECT id_user, nombre, email FROM users")
        rows = cursor.fetchall()
        
    users = []
    for row in rows:
        users.append({
            'id_user': row[0],
            'nombre': row[1],
            'email': row[2],
        })
    
    return JsonResponse(users, safe=False)
