angular
  .module("angularChart", ["chart.js"])
  .controller("LineCtrl", function ($scope, $http) {
    var total = new Array();

    //Pasamos por get la query de las incidencias del día de hoy
    $http.get("./IncidenciasDia0.php").then(function (response) {
      var datos = [];
      var elements = [];
      datos = response.data;
      angular.forEach(datos, function (key, valor) {
        var a;
        a = datos[valor].INCIDENCIAS;
        elements.push(a);
        return elements;
      });

      $scope.data = [elements];
      total = [elements];
      console.log(total);
    });

    //Pasamos por get las incidencias del día -2
    $http.get("./IncidenciasDiaMenos2.php").then(function (response) {
      var data3 = [];
      var elements3 = [];
      data3 = response.data;
      angular.forEach(data3, function (key, valor) {
        var a;
        //Se parsea a integer ya que en la BBDD recibimos un String
        a = parseInt(data3[valor].INCIDENCIAS);
        elements3.push(a);
        return elements3;
      });

      //Añadimos al array los datos del día -2
      total.push(elements3);
      console.log(total);
    });

    //Pasamos por get las incidencias del día -3
    $http.get("./IncidenciasDiaMenos3.php").then(function (response) {
      var data4 = [];
      var elements4 = [];
      data4 = response.data;
      angular.forEach(data4, function (key, valor) {
        var a;
        //Se parsea a integer ya que en la BBDD recibimos un String
        a = parseInt(data4[valor].INCIDENCIAS);
        elements4.push(a);
        return elements4;
      });

      //Añadimos al array los datos del día -3
      total.push(elements4);
      console.log(total);
    });

    //Pasamos por get las incidencias del día -4
    $http.get("./IncidenciasDiaMenos4.php").then(function (response) {
      var data5 = [];
      var elements5 = [];
      data5 = response.data;
      angular.forEach(data5, function (key, valor) {
        var a;
        //Se parsea a integer ya que en la BBDD recibimos un String
        a = parseInt(data5[valor].INCIDENCIAS);
        elements5.push(a);
        return elements5;
      });

      //Añadimos al array los datos del día -4
      total.push(elements5);
      console.log(total);
    });

    //Pasamos por get las incidencias del día -5
    $http.get("./IncidenciasDiaMenos5.php").then(function (response) {
      var data6 = [];
      var elements6 = [];
      data6 = response.data;
      angular.forEach(data6, function (key, valor) {
        var a;
        //Se parsea a integer ya que en la BBDD recibimos un String
        a = parseInt(data6[valor].INCIDENCIAS);
        elements6.push(a);
        return elements6;
      });

      //Añadimos al array los datos del día -5
      total.push(elements6);
      console.log(total);
    });

    //Pasamos por get las incidencias del día -6
    $http.get("./IncidenciasDiaMenos6.php").then(function (response) {
      var data7 = [];
      var elements7 = [];
      data7 = response.data;
      angular.forEach(data7, function (key, valor) {
        var a;
        //Se parsea a integer ya que en la BBDD recibimos un String
        a = parseInt(data7[valor].INCIDENCIAS);
        elements7.push(a);
        return elements7;
      });
      //Añadimos al array los datos del día -6
      total.push(elements7);
      console.log(total);
    });

    //Pasamos por get las incidencias del día anterior
    $http.get("./IncidenciasDiaMenos1.php").then(function (response) {
      var data2 = [];
      var elements2 = [];
      data2 = response.data;
      angular.forEach(data2, function (key, valor) {
        var a;
        var b = 0;
        //Se parsea a integer ya que en la BBDD recibimos un String
        a = parseInt(data2[valor].INCIDENCIAS);
        elements2.push(a);
        return elements2;
      });
      total.push(elements2);
      //Añadimos al array los datos del día anterior
      $scope.data.push(elements2);

      console.log(total);
      if (total.length < 6 || total.length === null) {
        for (i = 0; total.length < 6; i++) {
          total.push([0]);
        }
      }
      console.log(total);
      /*Comprobamos si el array de dicho día contiene datos en las doce horas que dura el servicio. De lo contrario, rellenamos el array obtenido con 0's hasta alcanzar las 12h.
      Si dicho día no hay incidencias, se rellenará el array con 12 "0" */

      var Cero = [];
      if (total[0].length < 12 || total[0].length === null) {
        for (i = 0; total[0].length < 12; i++) {
          total[0].push(0);
        }
        Cero = total[0];
      } else {
        Cero = total[0];
      }
      console.log(Cero);
      var Uno = [];
      if (total[1].length < 12 || total[1].length === null) {
        for (i = 0; total[1].length < 12; i++) {
          total[1].push(0);
        }
        Uno = total[1];
      } else {
        Uno = total[1];
      }
      console.log(Uno);
      var Dos = [];
      if (total[2].length < 12 || total[2].length === null) {
        for (i = 0; total[2].length < 12; i++) {
          total[2].push(0);
        }
        Dos = total[2];
      } else {
        Dos = total[2];
      }
      console.log(Dos);
      var Tres = [];
      if (total[3].length < 12 || total[3].length === null) {
        for (i = 0; total[3].length < 12; i++) {
          total[3].push(0);
        }
        Tres = total[3];
      } else {
        Tres = total[3];
      }
      console.log(Tres);
      var Cuatro = [];
      if (total[4].length < 12 || total[4].length === null) {
        for (i = 0; total[4].length < 12; i++) {
          total[4].push(0);
        }
        Cuatro = total[4];
      } else {
        Cuatro = total[4];
      }
      console.log(Cuatro);
      var Cinco = [];
      if (total[5].length < 12 || total[5].length === null) {
        for (i = 0; total[5].length < 12; i++) {
          total[5].push(0);
        }
        Cinco = total[5];
      } else {
        Cinco = total[5];
      }
      console.log(Cinco);
      //Se suman los índices de cada array y se obtine un array con la suma de las incidencias diarias obtenidas cada hora
      var sumaTotales = [];
      for (i = 0; i < 12; i++) {
        sumaTotales[i] =
          Cero[i] + Uno[i] + Dos[i] + Tres[i] + Cuatro[i] + Cinco[i];
      }
      console.log(sumaTotales);
      //Se obtiene la media de cada índice del array (se divide entre 7 que son los días de toda una semana)
      var media = [];
      for (i = 0; i < 12; i++) {
        var r = [];
        r[i] = sumaTotales[i] / 7;
        media.push(r[i]);
      }
      console.log(media);
      $scope.data.push(media);
    });

    $scope.labels = [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00"
    ];
    $scope.series = ["Hoy", "Ayer", "Promedio Semanal"];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.datasetOverride = [{
      yAxisID: "y-axis-1"
    }];
    $scope.options = {
      scales: {
        yAxes: [{
          id: "y-axis-1",
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            beginAtZero: true,
            userCallback: function (label, index, labels) {
              if (Math.floor(label) === label) {
                return label;
              }
            }
          }
        }]
      },
      legend: {
        display: true,
        labels: {
          fontColor: "rgb(255, 99, 132)"
        }
      }
    };
    $scope.$on("$viewContentLoaded", function () {
      $scope.Refresh = $interval(function () {
        location.reload(forceGet);
      }, 180000);
    });
  });