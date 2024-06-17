<template>
  <table class="table-auto w-full border-collapse font-publicSans">
    <thead class="border-bottom-danger">
      <tr
        class="uppercase [&>th]:py-4 [&>th]:leading-6 [&>th]:text-[13px] [&>th]:text-black"
      >
        <th>no.</th>
        <th>produk</th>
        <th>kapasitas gb</th>
        <th>warna</th>
        <th>tahun</th>
        <th>harga</th>
      </tr>
    </thead>
    <!-- For loop dan conditiion v-if v-else -->
    <tbody>
      <tr class="[&>td]:py-4 border-b border-b-border">
        <td>1.</td>
        <td class="text-black flex flex-col">
          OnePlus 7Pro<span class="text-subs text-[15px]">other</span>
        </td>
        <td class="text-subs text-[15px]">128GB</td>
        <td class="text-subs text-[15px]">Cloud White</td>
        <td class="text-subs text-[15px]">2018</td>
        <td class="text-success text-[15px] ml-2">Rp.2.500.000</td>
      </tr>
    </tbody>
  </table>
</template>
