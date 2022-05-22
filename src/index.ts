import "./styles.css";

let numeroIngresado: number | null = Number(
  prompt("Ingrese un número para determinar si es par o impar.")
);

while (numeroIngresado === 0) {
  numeroIngresado = Number(
    prompt(
      "El número ingresado es 0. Por favor ingrese un número mayor que cero."
    )
  );
}
if (numeroIngresado % 2 === 0) {
  alert("El número ingresado es par.");
} else {
  alert("El número ingresado es impar.");
}
