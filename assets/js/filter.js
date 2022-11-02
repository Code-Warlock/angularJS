var app = angular.module("angApp", []);

app.controller("angController", function ($scope) {
  $scope.testObj = {
    color: "red",
    width: "50%",
    backgroundColor: "blue",
  };
  $scope.img = "./assets/img/pywarlock.jpeg";
  $scope.imgObjStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "100%",
  };
  $scope.bodyObj = {
    backgroundColor: "#eef",
  };
  $scope.div = {
    display: "flex",
    paddingBlock: "40px",
    backgroundColor: "white",
    justifyContent: "space-evenly",
  };
  $scope.links = ["Home", "About", "Contact", "Login", "SignUp"];
  $scope.td = {
    textDecoration: "none",
    color: "red",
  };
  $scope.students = [
    { 
      sn: 1,
      name: "Linux",
      course: "ADSE",
      networth: 100 
    },
    { 
      sn: 2,
      name: "MayoSauce",
      course: "Web",
      networth: 100000000
    },
    { 
      sn: 3,
      name: "OyinDML",
      course: "ADSE",
      networth: 2000
    },
    { 
      sn: 4,
      name: "ay",
      course: "ADSE",
      networth: 1000
    },
    { 
      sn: 5,
      name: "CW",
      course: "ADSE",
      networth: 1000000000000000 
    },
  ];
  $scope.tableObjStyle = {
    border: "2px solid #444",
    display: "block",
    width: "fit-content",
    marginInline: "auto",
    marginBlock: "30px",
    borderCollapse: "collapse",
  };
});
// Style from the model
// cssText
