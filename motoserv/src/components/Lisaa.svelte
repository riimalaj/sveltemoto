<script>
    let serverName = "localhost";
    const today = new Date().toLocaleString();

    const lisaaHuolto = async () => {
    const luotu = document.getElementById("pvm").value;
    //luotu.value = today;
    const moto = document.getElementById("mototyyppi").value;
    const huolto = document.getElementById("huolto").value;
    const paikka = document.getElementById("paikka").value;
    const notet = document.getElementById("notet").value;
    const tehty = document.getElementById("tehty").value;
    console.log(moto + ", " + huolto);

    const data = {
      luotu: luotu,
      moto: moto,
      huolto: huolto,
      paikka: paikka,
      notet: notet,
      tehty: tehty,
    };

    await fetch(`http://${serverName}:5000/lisaahuolto`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    location.reload();
  };
</script>

<h3>Raportoi huolto</h3>

<input type="date" id="pvm" required />
<p />
<input type="text" id="mototyyppi" value="Kawasaki KX 250F (2008)" required />
<p />
<input type="text" id="huolto" value="Pikahuolto" required />
<p />
<input type="text" id="paikka" value="Tuusula" required />
<p />
<input type="text" id="notet" value="Notet" required />
<p />
<input type="checkbox" id="tehty" />
<p />
<button on:click={lisaaHuolto}>Lisaa huolto</button>
