<template>
  <h1>Colors</h1>
  <ul>
    <li class="text-blue-500">Indigo</li>
    <li class="text-blue-600">Blue</li>
    <li class="text-blue-700">Dark Blue</li>
  </ul>
</template>

<style lang="scss" scoped>
$colors: (
  "blue-500": #3b82f6,
  "blue-600": #2563eb,
  "blue-700": #1d4ed8,
);

.text {
  @each $key, $value in $colors {
    &-#{$key} {
      color: $value;
    }
  }
}
</style>
