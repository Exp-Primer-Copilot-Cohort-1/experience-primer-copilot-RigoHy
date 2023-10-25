const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs"); // Usaremos el motor de vistas EJS

// Rutas para diferentes páginas
app.get("/", (req, res) => {
  res.render("index", { title: "Página de Inicio" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "Acerca de Nosotros" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Página de Contacto" });
});

app.get("/help", (req, res) => {
  res.render("help", { title: "Página de Ayuda" });
});

app.get("/help/:topic", (req, res) => {
  const topic = req.params.topic;
  res.render("help-topic", { title: `Ayuda: ${topic}`, topic });
});

app.get("/help/:topic/:subtopic", (req, res) => {
  const topic = req.params.topic;
  const subtopic = req.params.subtopic;
  res.render("help-subtopic", {
    title: `Ayuda: ${topic} - ${subtopic}`,
    topic,
    subtopic,
  });
});

app.listen(port, () => {
  console.log(`El servidor está en funcionamiento en el puerto ${port}`);
});
