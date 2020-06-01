from rest_framework import permissions


class IsOwnerAdminOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow super users or authors of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        is_admin = super().has_permission(request, view)
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        # If authenticated user is a super user, they can update the object
        if request.method in permissions.SAFE_METHODS or is_admin:
            return True

        # Else, update permissions are only allowed to the object's author.
        return obj.author == request.user


class IsAdmin(permissions.IsAdminUser):
    """
    Custom permission to only allow super users to access an API endpoint
    """
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_superuser)


class IsAdminOrReadOnly(permissions.IsAdminUser):
    """
    Custom permission to allow only super users to create/edit model objects
    All other users can read only
    """
    def has_permission(self, request, view):
        is_admin = super().has_permission(request, view)
        return request.method in permissions.SAFE_METHODS or is_admin
