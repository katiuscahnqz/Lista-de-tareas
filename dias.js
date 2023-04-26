//jshint esversion:6

exports.obtenElDia = function() {

const hoy = new Date();
const opciones = {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
}

return dia = hoy.toLocaleDateString("es-CO", opciones);

}

exports.obtenSoloElDia = function() {

const hoy = new Date();
const opciones = {
  weekday: 'long',
}

return dia = hoy.toLocaleDateString("es-CO", opciones);

}
