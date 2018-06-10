function descripcion(id) {
  id = id - 1;
  document.getElementById("nombre").innerHTML = mydata[id].nombre;
  document.getElementById("direccion").innerHTML = mydata[id].localidad + ", " + mydata[id].municipio;
  document.getElementById("telefono").innerHTML = mydata[id].telefono;
  document.getElementById("correo").innerHTML = mydata[id].correo;
  document.getElementById("sitio").innerHTML = mydata[id].sitio;
  document.getElementById("nombre2").innerHTML = mydata[id].nombre;
  UIkit.modal('#descripcion').toggle();
}

var mymap = L.map('mapid').setView([20.9754, -89.6170], 12);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWF0dGRhcmsiLCJhIjoiY2ppOTRqMGg2MHN3eTNxcXRmdGsybHl3MCJ9.3mtdy_SHCJ-KvNWkJa8MGA', 
{
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
  }).addTo(mymap);
var i;
var markers = {};
for (i = 0; i < mydata.length; i++) {
  var escuela = mydata[i];
  markers[escuela.id] = L.marker([escuela.latitud, escuela.longitud]).addTo(mymap);
  markers[escuela.id]._icon.id = escuela.id;
}
for (var i = 0; i < mydata.length; i++) {
  m = document.getElementById(i+1);
  if (typeof window.addEventListener === 'function') {
    (function (_m) {
      m.addEventListener('click', function() {
        descripcion(_m.id);
      });
    })(m);
  }
}
