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
    const tehty = false;//document.getElementById("tehty").value;
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
<ul>
  <h3>Raportoi huolto</h3>
  <label>Huollon pvm
  <input type="date" id="pvm" required />
  </label>
  <p />
  <label for = "mototyyppi" >Moto
  <input type="text" id="mototyyppi" value="Kawasaki KX 250F (2008)" required />
  </label>
  <p />
  <label  for = "huolto">Huolto
  <input type="text" id="huolto" value="Pikahuolto" required />
  </label>
  <p />
  <label for = "paikka">Huolto paikka
  <input type="text" id="paikka" value="Tuusula" required />
  </label>
  <p />
  <label for = "notet">Huomiot</label>
  <textarea id = "notet" rows = {4} cols = {60}></textarea>
  <p />
  <!--<input type="checkbox" id="tehty" />
  <p />-->

  
  <button on:click={lisaaHuolto}>Lisaa huolto</button>
</ul>