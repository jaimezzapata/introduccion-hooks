import Swal from "sweetalert2";

export function alertaRedireccion(mensaje, icono, navigate, path) {
  let timerInterval;
  Swal.fire({
    title: mensaje,
    html: "Será redireccionado en <b></b> milisegundos.",
    timer: 2000,
    timerProgressBar: true,
    icon: icono,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
      navigate(path);
    },
  });
}

export function alertaGeneral() {}
