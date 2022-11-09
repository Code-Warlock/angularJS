var app = angular.module("newApp", []);
app.controller("newController", function ($scope) {
  // $scope.show = false
  if ($scope.show == "false") {
    $scope.show = false;
  }
  $scope.test = null;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5ec5b8a860msh3bbe655cd10557ep15b27fjsna85c7aee73cd',
      'X-RapidAPI-Host': 'burgers1.p.rapidapi.com'
    }
  };
  
  fetch('https://burgers1.p.rapidapi.com/burgers', options)
    .then(response => response.json())
    .then(response =>{
      $scope.test = response
      console.log($scope.test)
    })
    .catch(err => console.error(err));
    
  $scope.btn = {
    display: 'block',
    width:'fit-content',
    marginInline:'auto',
    paddingBlock : '20px',
    paddingInline : '10px',
    textDecoration : 'none',
    color:'red',
    backgroundColor : 'white',
    borderRadius : '10px'
  }
  $scope.toggle = function(){
    if($scope.choice == true){
      $scope.choice = false
    }
    else{
      $scope.choice = true
    }
  }
});
