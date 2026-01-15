// Smooth scroll + mini feedback para formulario
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (!id || id === "#") return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({behavior:"smooth", block:"start"});
    history.replaceState(null, "", id);
  });
});

const form = document.getElementById("formAdmision");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Listo! Recibimos tus datos. (Demo)\n\nSi quieres, luego conectamos esto para que llegue a tu correo o WhatsApp.");
    form.reset();
  });
}
