angular.module('flapperNews', [])
//.config([
//'$stateProvider',
//'$urlRouterProvider',

//.state('posts', {
  //url: '/posts/{id}',
  //templateUrl: '/posts.html',
  //controller: 'PostsCtrl'
//});

//function($stateProvider, $urlRouterProvider) {
  //$stateProvider
    //.state('home', {
      //url: '/home',
      //templateUrl: '/home.html',
      //controller: 'MainCtrl'
    //});
  //$urlRouterProvider.otherwise('home');
//}])

//.factory('posts', [function(){
	// service body
//  var o = { 
//    posts: []
//  };
//  return o;
//}])

.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';

  //$scope.posts = posts.posts;

  //$scope.posts.push({
    //title: $scope.title,
    //link: $scope.link,
    //upvotes: 0,
    //comments: [
      //{author: 'Joe', body: 'Cool post!', upvotes: 0},
      //{author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
    //]
  //});
  $scope.posts = [
  //'post 1',
  //'post 2',
  //'post 3',
  //'post 4',
  //'post 5'
    { title: 'post 1', upvotes: 5 },
    { title: 'post 2', upvotes: 2 },
    { title: 'post 3', upvotes: 15 },
    { title: 'post 4', upvotes: 9 },
    { title: 'post 5', upvotes: 4 }
  ];

  $scope.addPost = function(){
  	if(!$scope.title || $scope.title === '') { return; }
    $scope.posts.push({ 
      title: $scope.title,
      link: $scope.link,
      upvotes: 0 
    });
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post) {
  	post.upvotes += 1;
  };

 }]);

//.controller('PostsCtrl', [
//'$scope',
//'$stateParams',
//'posts',
//function($scope, $stateParams, posts) {
  //$scope.post = posts.posts[$stateParams.id];
  //$scope.addComment = function(){
    //if($scope.body === '') { return; }
      //$scope.post.comments.push({
      //body: $scope.body,
      //author: 'user',
      //upvotes: 0
    //});
    //$scope.body = '';
  //};
//}]);