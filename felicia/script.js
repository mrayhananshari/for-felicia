AOS.init();

var musik = "";

var audio = document.querySelector(".audio");
if (musik) {
  audio.src = musik;
}

function mulai() {
  audio.play();
  window.scrollTo(0, 0);
  document.querySelector(".open").style = "opacity: 0;";
  document.querySelector(".body").style = "overflow-y: scroll";
  setTimeout(function() {
    document.querySelector(".open").style.display = "none";
  }, 1200);
}

function wa(isi) {
  window.open("https://api.whatsapp.com/send?text=Thank%20You%20to%20answer");
}

async function tanya() {
  var {
    value: kado
  } = await swal.fire({
    imageUrl: 'resources/foto.png',
    title: 'do you want to apologize me?',
    input: 'text',
    showCancelButton: false
  });

  if (kado) {
    await swal.fire({
      imageUrl: 'resources/wa.png',
      title: 'shere to my whatsapp uwu'
    });
    wa(kado);
  } else {
    await swal.fire({
      icon: 'error',
      title: 'answer onegaisimasu'
    });
    tanya();
  }
}
