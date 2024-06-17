<template>
  <section class="modal">
    <slot />
    <div
      class="heading flex justify-between border border-b-2 border-secondary"
    >
      <h1 class="font-semibold text-[18px] font-['publicSans']">
        Tambah Produk
      </h1>
      <img src="@/assets/images/close.png" alt="close" />
    </div>
    <form class="flex flex-col gap-4">
      <div
        class="nama-produk flex flex-col gap-2 [&>label]:text-subs [&>input]:border [&>input]:border-border"
      >
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
          />
        </div>
        <div class="case-size form-input">
          <label for="casesize">Case Size</label>
          <input
            type="text"
            id="casesize"
            placeholder="Ketik di sini (optional)"
          />
        </div>
        <div class="cpumodel form-input">
          <label for="cpumodel">CPU Model</label>
          <input
            type="text"
            id="cpumodel"
            placeholder="Ketik di sini (optional)"
          />
        </div>
        <div class="strapcolor form-input">
          <label for="strapcolor">Strap Color</label>
          <input
            type="text"
            id="strapcolor"
            placeholder="Ketik di sini (optional)"
          />
        </div>
        <div class="screensize form-input">
          <label for="screensize">Screen Size</label>
          <input
            type="text"
            id="screensize"
            placeholder="Ketik di sini (optional)"
          />
        </div>
        <div class="detaillainnya form-input">
          <label for="detail">Detail Lainnya</label>
          <input
            type="text"
            id="detail"
            placeholder="Ketik di sini (opsional)"
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
      <div class="grid-form-2 form-input">
        <div class="kapasitas">
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
        <input type="text" id="harga" placeholder="Ketik di sini (optional)" />
      </div>

      <button>Simpan dan Tambahkan Data</button>
    </form>
  </section>
</template>
