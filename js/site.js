/* CarePlus Pharmacy site settings - edit these lines with real details */
var SITE = {
  phone: "+255700111222",     // TODO: real phone, international format, no spaces
  whatsapp: "255700111222",   // TODO: real WhatsApp number, no plus sign
  email: "info@careplus-pharmacy.com"
};

/* Contact form: opens WhatsApp with the details filled in (no server needed) */
(function () {
  var f = document.getElementById("quote-form");
  if (!f) return;
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    var g = function (n) { return (f.elements[n] && f.elements[n].value || "").trim(); };
    var lines = ["Message from " + document.title.split("|")[1].trim(),
      "Name: " + g("c_fname") + " " + g("c_lname"),
      g("c_phone") ? "Phone: " + g("c_phone") : "",
      g("c_email") ? "Email: " + g("c_email") : "",
      g("c_subject") ? "Subject: " + g("c_subject") : "",
      g("c_message") ? "Message: " + g("c_message") : ""].filter(Boolean);
    window.open("https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(lines.join("\n")), "_blank");
  });
})();
