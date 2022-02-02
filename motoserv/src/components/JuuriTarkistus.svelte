<script>

    const data = {
        tervehdys: "Moi"
    }

    const controllerMoi = async () => {
        `http://localhost:5000/`, {
      method: "POST",
      body: JSON.stringify(data),
    };
    }
</script>

<button on:click = {controllerMoi}>Lähetä terveiset juureen</button>