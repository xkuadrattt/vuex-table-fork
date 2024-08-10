<template>
  <section class="hero container min-h-screen flex items-center">
    <div class="hero-headline sm:flex justify-between">
      <img src="@/assets/images/heroimg.png" alt="heroimg" />
      <div class="hero-copy flex flex-col justify-center">
        <h1 class="sm:text-3xl font-bold mb-6">Kit Data untuk Tim Anda!</h1>
        <p class="mb-2">
          Kitatim:[C] menghadirkan Super Web Apps untuk kebutuhan data Anda
          dengan beragam fitur serta teknologi terkini. Kitatim:[C] juga
          mengedepankan kemudahan dalam penggunaannya, dari segi pengumpulan
          data, analisa data, dan pemeliharaan data untuk kebutuhan bisnis Anda.
        </p>
        <Button class="btn-tertiary" title="Coba Gratis Sekarang!" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "@/components/button/Button.vue";
</script>
