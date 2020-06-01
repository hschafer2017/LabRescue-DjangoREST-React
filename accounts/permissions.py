from rest_framework import permissions


class IsOwnerAdminOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow super users or authors of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        is_admin = super().has_permission(request, view)
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        # Checking if authenticated user is a super user
        if request.method in permissions.SAFE_METHODS or is_admin:
            return True

        # Write permissions are only allowed to the author of the object.
        return obj.author == request.user
