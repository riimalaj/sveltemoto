<script>
    let serverName = "localhost";
    
    const tuhoa = async() => {
    const id = document.getElementById('kuolema').value;
    console.log("tuhottavaRivi: ", id);
    await fetch(`http://${serverName}:5000/tuhoa/${id}`, {
      method: "POST"
    });
    
    location.reload();
}

const tuhoakaikki = async() => {
    const tK = document.getElementById('tosiKuolema').value;    
    await fetch(`http://${serverName}:5000/tuhoa`, {
      method: "POST"
    });
    
    location.reload();
}



</script>

<style>
    input{
        width:60px;
    }
</style>

<ul><ul>
    <p></p>
    <input type = "number" id = "kuolema" value="id" /> 
    <button on:click={tuhoa}>Poista rivi</button>
    <button on:click={tuhoa}>Poista kaikki</button>
</ul></ul>