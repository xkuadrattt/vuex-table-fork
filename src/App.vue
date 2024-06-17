<script setup>
import { RouterView } from "vue-router";
import { ref } from "vue";

const toggleMenu = ref(false);

function handleResponsive() {
  toggleMenu.value = !toggleMenu.value;
}
</script>

<template>
  <header>
    <div>
      <img
        src="@/assets/images/menu.png"
        alt="menu"
        @click="handleResponsive"
        class="pointer"
      />

      <img src="@/assets/images/kitatimc-logo.png" alt="logo" />
      <img src="@/assets/images/search.svg" alt="search" class="sm:hidden" />
    </div>
    <nav :class="{ flex: toggleMenu }">
      <div>
        <span
          ><img
            src="@/assets/images/close.png"
            alt="closeimg"
            @click="handleResponsive"
            class="pointer"
        /></span>
        <span>Tutup</span>
      </div>
      <ul>
        <li>
          <router-link to="/" exact-active-class="active">Home</router-link>
        </li>
        <li>
          <router-link to="/table" class="nav-link">Table Data</router-link>
        </li>
        <li>
          <router-link to="/riwayat" class="nav-link">Riwayat</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>
