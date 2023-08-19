export function Greeting() {
    const user = {
      firtname: 'Luis Andres',
      lastname: 'Rodriguez'
    }
  
    function add(num1,num2){
      const primerNumero = num1;
      const segundoNumero = num2;
  
      return primerNumero + segundoNumero
    }
  
    return (
      <div>
          <label>Nombre: </label>{user.firtname}
          <br/>
          <label>Apellido: </label>{user.lastname}
          <br/>
          <label>Sumas: </label>{add(1,1)}
      </div>
    )
  }

  export function UserCard(){
    const user = 'Administrador'

    return <label>{user}</label>

  }