<template>
  <div class="container">
    <h1 class="header-text">Lorem ipsum dolor, sit amet</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id animi voluptas
      magnam, earum natus doloremque neque enim quo? Cum veniam molestias ipsum
      mollitia vitae nesciunt sapiente amet at dignissimos animi.
    </p>
  </div>
</template>

<style lang="scss" scoped>
@mixin responsiveText($font-size) {
  font-size: $font-size;
}
@media screen and (max-width: 520px) {
  .header-text {
    @include responsiveText(24px);
  }
  
}

@media screen and (min-width: 1024px) {
    .header-text {
      @include responsiveText(78px);
    }
  }
</style>
