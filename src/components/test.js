

function usePepe(){
  this.nombre = 'pepe'
  this.apellido = 'pepinillo'


  this.accederNombre = function (){
    return this.nombre
  }

  this.setNombre = function (nuevoNombre){
    this.nombre = this.nuevoNombre
  }

}


let x = new usePepe()

console.log(x);