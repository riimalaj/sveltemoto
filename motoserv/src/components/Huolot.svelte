<script>
let serverName = "localhost";

const haeHuolot = async () => {
    console.log("haeHuolot");
    let str = `http://${serverName}:5000/huolot`;
    console.log("server.. ", str);
    let huolot = await fetch(str,{
      method: "GET"
    });
    return huolot.json();    
};
let services = haeHuolot();
let listaus = "Huolot";
</script>

<style>
  table, td {
    border: 2px solid black;
    text-align:left;
    background-color: #F1EBEA;
    padding:3px;
  }
  th{
      background-color: lightgray;
  }
</style>

<ul>
  <!--<button on:click ={haeHuolot}>Hae huolot</button>-->
  <h3>{listaus}</h3>

  {#await services then items}
  <ul>
    {#each items as item}

    <table>
      <tr>
        <th>ID</th><th>PVM</th><th>Kohde</th><th>Huolto</th><th>Paikka</th><th>Huomiot</th><!--<th>Tehty</th>-->
      </tr>
    <tr>
      <td>{item.id}</td>
      <td>
        {item.luotu}      
      </td>
      <td>{item.moto}</td>
      <td>{item.huolto}</td>
      <td>{item.paikka}</td>
      <td>{item.notet}</td>
      <!--<td>
        {#if item.tehty}      
          {item.tehty = "Hoidettu"}
        {:else } 
          {item.tehty} = "Ei"
        {/if}
      </td>-->
    </tr>
  </table>
    {/each}
  </ul>
  {/await}
</ul>

