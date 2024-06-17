<script>
export default {
  props: ["filterData"],
};
</script>

<template>
  <section class="section-table">
    <table class="table-view">
      <thead class="borderbottomprimary">
        <tr>
          <th class="separator th-styled">no.</th>
          <th class="separator th-styled">produk</th>
          <th class="separator th-styled">kapasitas gb</th>
          <th class="separator th-styled">warna</th>
          <th class="separator th-styled">tahun</th>
          <th class="separator th-styled">harga</th>
          <th class="separator th-styled">action</th>
        </tr>
      </thead>
      <!-- For loop dan conditiion v-if v-else -->
      <tbody>
        <tr v-for="list in filterData" key="{{ list.id }}">
          <td class="nomer">{{ list.id }}</td>
          <td class="nama">
            {{ list.name }}
          </td>
          <td v-if="list.data === null">server belum update entry</td>
          <td v-else>
            {{ list.data.capacity || list.data.Capacity }}
          </td>
          <td v-if="list.data">{{ list.data.Color || list.data.color }}</td>
          <td v-else>-</td>
          <td>
            {{ list.data && list.data.year }}
          </td>
          <td v-if="list.data !== null" class="harga">
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
          </td>
          <td v-else class="harga">0</td>

          <td>
            <div class="btn btn-danger" @click="$emit('hapusData', list.id)">
              <img src="@/assets/images/delete.svg" alt="delete" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>

  <!-- <div class="totalharga"><span>Jumlah Harga</span> : {{ totalHarga }}</div> -->
</template>
