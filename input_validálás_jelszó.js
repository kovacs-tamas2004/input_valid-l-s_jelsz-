function ellenorizJelszo() {
    let jelszo = document.getElementById('jelszo').value;

    let szam = /\d/;
    if (!szam.test(jelszo)) {
      alert('A jelszónak tartalmaznia kell legalább egy számot!');
      return false;
    }

    let kisbetu = /[a-z]/;
    if (!kisbetu.test(jelszo)) {
      alert('A jelszónak tartalmaznia kell legalább egy kisbetűt!');
      return false;
    }

    let nagybetu = /[A-Z]/;
    if (!nagybetu.test(jelszo)) {
      alert('A jelszónak tartalmaznia kell legalább egy nagybetűt!');
      return false;
    }

    let specKarakter = /[!@#\$%\^&*\(\)_\+\-=\{\}\[\]\|:;\"'<>,.?\/]/;
    if (!specKarakter.test(jelszo)) {
      alert('A jelszónak tartalmaznia kell legalább egy speciális karaktert!');
      return false;
    }

    if (jelszo.length < 6) {
      alert('A jelszónak legalább 6 karakter hosszúnak kell lennie!');
      return false;
    }

    alert("Megfelelő jelszó")
    return true;
  }