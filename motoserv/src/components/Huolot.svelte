<script>
let serverName = "localhost";

const haeHuolot = async () => {
    console.log("haeHuolot");
    let str = `http://${serverName}:4000/huolot`;
    console.log("server.. ", str);
    let huolot = await fetch(str);
    return huolot.json();
};
let services = haeHuolot();
let listaus = "Tehdyt huolot";
</script>

<button on:click ={haeHuolot}>Hae huolot</button>
<h3>{listaus}</h3>

{#await services then items}
<ul>
  {#each items as item}
  <li>
    {item.moto}
  </li>
  {/each}
</ul>
{/await}

