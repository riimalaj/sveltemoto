<script> 
  let serverName = "localhost";
  const lisaaHuolto = async () => {
    const moto = document.getElementById("mototyyppi").value;
    const huolto = document.getElementById("huolto").value;
    const paikka = document.getElementById("paikka").value;
    const notet = document.getElementById("notet").value;
    const tehty = document.getElementById("tehty").value;
    console.log(moto + ", " + huolto);
    
    const data = {
      moto: moto,
      huolto: huolto,
      paikka: paikka,
      notet: notet,
      tehty: tehty
    };

    await fetch(`http://${serverName}:5000/lisaahuolto`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  };
</script>

<input type="text" id="mototyyppi" value="Kawasaki KX 250F (2008)" required />

<input type="text" id="huolto" value="Pikahuolto" required />

<input type="text" id="paikka" value="Tuusula" required />

<input type = "text" id = "notet" value ="Notet" required />

<input type="checkbox" id="tehty" />

<button on:click={lisaaHuolto}>Lisaa huolto</button>