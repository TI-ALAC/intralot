var content = document.getElementById('contenido');
var content2 = document.getElementById('contenido2');
async function init() {
  await getUser();
  setTimeout(() => {
    content.style.display = "none";
    content2.style.display = "block";
  }, 0);
  setTimeout(() => {
    content.style.display = "block";
    content2.style.display = "none";
  }, 5000);
}

init();


async function getUser() {
  try {
    const response = await axios.get('https://creativoartes.alacoohperu.pe/kabala');
    console.log("response",response)
    const text_monto = response.data.monto;
    localStorage.setItem('montoFinal', JSON.stringify(text_monto));
    const montoFinal = JSON.parse(localStorage.getItem('montoFinal'));
    document.getElementById("monto").innerHTML = "S/ ";
    document.getElementById("millones").innerHTML = montoFinal;
  } catch (error) {
    const montoFinal = JSON.parse(localStorage.getItem('montoFinal'));
    document.getElementById("monto").innerHTML = "S/ ";
    document.getElementById("millones").innerHTML = montoFinal;
    
  }
}



