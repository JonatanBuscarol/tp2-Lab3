const appGlobo = Vue.createApp({
  data (){
    return {
      usuario: 'Jane Doe',
      boton: 'Seguir',
      siguiendo: false
    }
  },
  methods: {
    seguir() {
      if (this.siguiendo) {
        this.boton = "Seguir";
      } else {
        this.boton = "Dejar de seguir";
      }
      this.siguiendo = !this.siguiendo;
    }
  }
})
appGlobo.mount('#app');
  var Usuario = "";
  var Comentarios = []

  function IngresarNombre(event){
    event.preventDefault();
    Usuario = document.getElementById("IngresarUsuario").value;
    document.getElementById("IngresarUsuario").value = "";
  }
  function AgregarComentarios(event){
    event.preventDefault();
  var ComentarioContenido = document.getElementById("Comentarios").value;
  var Comentario = {
    usuario: Usuario,
    contenido: ComentarioContenido
  };
  Comentarios.push(Comentario);
  MostrarComentarios();
  document.getElementById("Comentarios").value = "";
  }
function MostrarComentarios(){  
var CajaComentarios = document.getElementById("SeccionComentarios");
  CajaComentarios.innerHTML = "";
  for (var i = 0; i < Comentarios.length; i++) {
    var Comentario = Comentarios[i];
    var NuevoComentario = document.createElement("div");
    NuevoComentario.innerHTML = "<strong>" + Comentario.usuario + "</strong>: " + Comentario.contenido;
    CajaComentarios.appendChild(NuevoComentario);
  }
}
let Contadormg = 200;
let boton = document.getElementById("btnMegusta");
let MeGustaPresionado = true

function Megusta(){
  if (MeGustaPresionado){
    Contadormg++;
    document.getElementById("Contadormg").innerHTML = Contadormg;
    MeGustaPresionado = false;
  }
}
