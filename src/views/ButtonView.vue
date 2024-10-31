<template>
  <div class="container">
    <button class="primary-button">Primary</button>
    <button class="secondary-button">Secondary</button>
  </div>
</template>

<style lang="scss" scoped>
@mixin buttonStyles($bgColor, $radius, $textColor) {
  background-color: $bgColor;
  border-radius: $radius;
  color: $textColor;
}

.container {
  display: flex;
  gap: 12px;

  & * {
    padding: 20px 12px;
    width: 120px;
    font-size: 18px;
    border: none;
  }

  .primary-button {
    @include buttonStyles(#15803d, 0.5rem, white);
  }

  .secondary-button {
    @include buttonStyles(#b91c1c, 0.5rem, white);
  }
}
</style>
