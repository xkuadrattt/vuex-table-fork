<template>
  <div class="search">
    <button class="tambah-produk">
      <span>+</span>
      <router-link to="/input" class="link">Tambah Produk</router-link>
    </button>
    <label for="filterProduk"></label>
    <input
      v-model="filterSearch"
      placeholder="Cari Data Produk"
      type="text"
      id="filterProduk"
    />
    <button @click="filterDataTable" class="btn pointer">Cari</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      filterSearch: "",
    };
  },
  methods: {
    filterDataTable() {
      this.$store.commit("FILTER_DATA", this.filterSearch);
    },
    onHapusData(id) {
      this.$store.commit("HAPUS_BARANG", id);
    },
  },

  computed: {
    ...mapGetters(["filterData"]),
  },
};
</script>
