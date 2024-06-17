<template>
  <div class="card-table">
    <h1>Data Produk</h1>
    <div class="card-flex">
      <div class="card" v-for="list in filterData" key="{{ list.id }}">
        <div class="card-heading">
          <div>No. {{ list.id }}</div>
          <img src="@/assets/images/deletew.png" alt="delete" />
        </div>
        <div class="card-nama-produk">
          <h3>{{ list.name }}</h3>
          <p>others</p>
        </div>
        <ul class="card-detail-produk">
          <li v-if="list.data">
            <p>Capacity:</p>
            {{ list.data.capacity || list.data.Capacity }}
          </li>
          <li v-if="list.data">
            <p>Color:</p>
            {{ list.data.color || list.data.Color }}
          </li>
          <li v-if="list.data">
            <p>Realase Year:</p>
            {{ list.data.year }}
          </li>
        </ul>
        <div class="card-harga-produk">
          <div class="harga">Harga</div>
          <p v-if="list.data">
            {{
              list.data.price &&
              new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(parseFloat(list.data.price) * 16200)
            }}
            {{
              list.data.Price &&
              new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(parseFloat(list.data.Price) * 16200)
            }}
            {{ !list.data.price && !list.data.Price ? "0" : "" }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["filterData"],
};
</script>
