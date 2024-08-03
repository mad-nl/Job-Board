<template>
    <footer class="bg-white text-center py-4 border-t border-gray-200 mt-5">
      <p class="text-gray-700">
        &copy; {{ currentYear }} All rights reserved | This website is made by <a href="https://madnl.nl" target="_blank" class="font-bold text-blue-300">MAD NL</a>
      </p>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
  </script>