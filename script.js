// setInterval(() => {
//     if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
//       alert("Developer tools detected! Closing page...");
//       window.location.href = "about:blank";
//     }
//   }, 1000);

  
  document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && ["u", "s", "i", "j"].includes(event.key.toLowerCase())) {
    event.preventDefault();
  }
});


// Original code
console.log("Hello World!");

// Obfuscated code example
var _0x12a3=["\x48\x65\x6C\x6C\x6F\x20\x57\x6F\x72\x6C\x64\x21"];
console.log(_0x12a3[0]);


document.addEventListener("keydown", (event) => {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
      event.preventDefault();
    }
  });

  
  document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("keydown", (event) => {
  if (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J")) ||
    (event.ctrlKey && event.key === "U")
  ) {
    event.preventDefault();
  }
});
