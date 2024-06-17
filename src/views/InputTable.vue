<script>
export default {
  data() {
    return {
      id: 13,
      nameData: "",
      year: "",
      color: "",
      capacity: "",
      price: "",
      generation: "",
      caseSize: "",
      cpuModel: "",
      strapColor: "",
      screenSize: "",
      detail: "",
      harga: "",
    };
  },
  methods: {
    inputbarang() {
      this.$store.commit("INPUT_DATA", {
        id: this.id,
        name: this.nameData,
        data: {
          year: this.year,
          color: this.color,
          capacity: this.capacity,
          price: this.price,
          generation: this.generation,
          caseSize: this.caseSize,
          cpuModel: this.cpuModel,
          strapColor: this.strapColor,
          screenSize: this.screenSize,
          detail: this.detail,
          harga: this.harga,
        },
      });
      this.id++;
      this.$router.push("/table");
    },
  },
};
</script>

<template>
  <section class="container">
    <div
      class="heading py-4 mb-4 flex justify-between border-b-2 border-secondary"
    >
      <h1 class="font-semibold text-[18px] font-publicSans">Tambah Produk</h1>
      <img
        class="w-[15px] h-[15px] mt-2 block"
        src="@/assets/images/close_d.png"
        alt="close"
      />
    </div>
    <form class="flex flex-col gap-4" @submit.prevent="inputbarang">
      <div class="nama-produk form-input">
        <label for="namaproduk">Nama Produk</label>
        <input
          type="text"
          id="namaproduk"
          placeholder="Masukan Nama Produk"
          v-model="nameData"
        />
      </div>
      <div class="grid-form-2-4 grid gap-4 md:grid-cols-2">
        <div class="generasi form-input">
          <label for="generasi">Generation</label>
          <input
            type="text"
            id="generasi"
            placeholder="Ketik disini (optional)"
            v-model="generation"
          />
        </div>
        <div class="case-size form-input">
          <label for="casesize">Case Size</label>
          <input
            type="text"
            id="casesize"
            placeholder="Ketik di sini (optional)"
            v-model="caseSize"
          />
        </div>
        <div class="cpumodel form-input">
          <label for="cpumodel">CPU Model</label>
          <input
            type="text"
            id="cpumodel"
            placeholder="Ketik di sini (optional)"
            v-model="cpuModel"
          />
        </div>
        <div class="strapcolor form-input">
          <label for="strapcolor">Strap Color</label>
          <input
            type="text"
            id="strapcolor"
            placeholder="Ketik di sini (optional)"
            v-model="strapColor"
          />
        </div>
        <div class="screensize form-input">
          <label for="screensize">Screen Size</label>
          <input
            type="text"
            id="screensize"
            placeholder="Ketik di sini (optional)"
            v-model="screenSize"
          />
        </div>
        <div class="detaillainnya form-input">
          <label for="detail">Detail Lainnya</label>
          <input
            type="text"
            id="detail"
            placeholder="Ketik di sini (opsional)"
            v-model="detail"
          />
        </div>
      </div>
      <div class="warna form-input">
        <label for="warna">Warna</label>
        <input
          type="text"
          id="warna"
          placeholder="Ketik di sini (optional)"
          v-model="color"
        />
      </div>
      <div class="grid-form-2 grid md:grid-cols-2 gap-4">
        <div class="kapasitas form-input">
          <label for="kapasitas"> Kapasitas Penyimpanan </label>
          <input
            type="text"
            id="kapasitas"
            placeholder="Ketik di sini (optional)"
            v-model="capacity"
          />
        </div>
        <div class="tahun form-input">
          <label for="tahun">Tahun Rilis</label>
          <input
            type="text"
            id="tahun"
            placeholder="Ketik di sini (optional)"
            v-model="year"
          />
        </div>
      </div>
      <div class="harga form-input">
        <label for="harga">Harga Produk</label>
        <input
          type="text"
          id="harga"
          placeholder="Ketik di sini (optional)"
          v-model="harga"
        />
      </div>

      <button class="btn-tertiary my-6 mx-auto">
        Simpan dan Tambahkan Data
      </button>
    </form>
  </section>
</template>
