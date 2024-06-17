<template>
  <section class="container">
    <SearchComponents />
    <TableList :filterData="filterData" @hapus-data="onHapusData" />
    <div class="cards-table">
      <CardTableResponsive :filterData="filterData" />
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import TableList from "./TableList.vue";
import CardTableResponsive from "./CardTableResponsive.vue";
import SearchComponents from "./SearchComponents.vue";

export default {
  data() {
    return {
      filterSearch: "",
    };
  },
  components: {
    TableList,
    CardTableResponsive,
    SearchComponents,
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
