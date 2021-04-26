from django.urls import path
from .views import *
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework import routers
from django.conf.urls import include
from rest_framework_simplejwt import views as jwt_views


router = routers.DefaultRouter()
router.register('users', UserViewSet)

urlpatterns = [

    path('films', FilmsView.as_view()),
    path('allfilms', FilmsView.as_view()),
    path('search', FilmsSearchView.as_view()),
    path('toprated', FeatFilmView.as_view()),
    path('genre', FilmInfoView.as_view()),
	path('auth', obtain_auth_token),
	path('cast', PersonsView.as_view()),
	path('', include(router.urls)),
	path('reviews', ReviewsView.as_view()),
	path('addr', AddReviewsView.as_view()),
	path('wlist', WatchlistView.as_view()),
	path('updaterating/<str:id>', Updaterating.as_view()),

	
]