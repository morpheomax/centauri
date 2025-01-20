<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recibir datos del formulario
    $nombre = htmlspecialchars(trim($_POST['nombre']));
    $apellido = htmlspecialchars(trim($_POST['apellido']));
    $telefono = htmlspecialchars(trim($_POST['telefono']));
    $correo = htmlspecialchars(trim($_POST['correo']));
    $comentario = htmlspecialchars(trim($_POST['comentario']));

    // Configuración del correo
    $to = "tucorreo@dominio.com"; // Cambia por tu correo
    $subject = "Nuevo mensaje de contacto de: $nombre $apellido";
    $headers = "From: $correo\r\n";
    $headers .= "Reply-To: $correo\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $message = "Nombre: $nombre $apellido\n";
    $message .= "Teléfono: $telefono\n";
    $message .= "Correo: $correo\n\n";
    $message .= "Comentario:\n$comentario\n";

    // Enviar correo
    if (mail($to, $subject, $message, $headers)) {
        echo "¡Gracias por contactarnos! Tu mensaje ha sido enviado exitosamente.";
    } else {
        echo "Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.";
    }
} else {
    echo "Acceso no permitido.";
}
?>
