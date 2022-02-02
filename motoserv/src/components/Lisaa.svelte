<script>
  let serverName = "localhost";
  const lisaaHuolto = async () => {
    const lHuolto = document.getElementById("mototyyppi").value;
    console.log("lHuolto: ", lHuolto);

    const data = {
      huolto: lHuolto,
    };

    await fetch(`http://${serverName}:5000/lisaahuolto`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  };
</script>

<input type="text" id="mototyyppi" value="Kawasaki KX 250F (2008)" required />
<button on:click={lisaaHuolto}>Lisaa huolto</button>
