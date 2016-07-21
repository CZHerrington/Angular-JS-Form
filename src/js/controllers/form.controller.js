function FormController ($scope, SERVER, $http) {

  $scope.forms = [];

  init();

  function init () {
    console.log("%cController Initializing","color: blue;")
  };

$scope.addForm = function (form) {
  console.log("Sending POST request")
  $http.post(SERVER.URL, form).then(function (res) {
    console.log(" Server status code ", res.status, res.statusText,"\n\n" , "Data Received: " , res.data )
        $scope.forms.push(res.data);
        $scope.form = {};
      });
}


};
  FormController.$inject = ['$scope', 'SERVER', '$http'];
export { FormController };
