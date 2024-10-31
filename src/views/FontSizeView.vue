<template>
  <h1>fontsize</h1>
  <h3 class="text-sm">
    Lorem ipsum, dolor sit amet consectetur adipisicing eh3t. Recusandae quam
    esse soluta natus perferendis nihil, provident placeat deserunt beatae
    exph3cabo cumque praesentium consectetur nobis omnis. Atque commodi
    doloremque ad ducimus.
  </h3>
  <h3 class="text-md">
    Lorem ipsum dolor sit amet consectetur adipisicing eh3t. Ullam ea cum
    molestiae minus modi quae incidunt doloribus, commodi atque itaque
    excepturi, sapiente obcaecati recusandae sit distinctio, nihil molh3tia!
    Provident, magnam!
  </h3>
  <h3 class="text-lg">
    Lorem ipsum dolor sit amet consectetur adipisicing eh3t. Odit blanditiis,
    asperiores eh3gendi delectus tempora ratione inventore, modi est debitis
    itaque dolores dolorum saepe consequuntur nulla laborum. Ut sapiente enim
    sit.
  </h3>
</template>

<style lang="scss" scoped>

$font-size: (
  "sm": 14px,
  "md": 18px,
  "lg": 22px,
);

@function font-size-for($size) {
  @if map-has-key($font-size, $size) {
    @return map-get($font-size, $size);
  }
}

.text {
  &-sm {
    font-size: font-size-for("sm");
    color: #06b6d4;
  }
  &-md {
    font-size: font-size-for("md");
    color: #0891b2;
  }
  &-lg {
    font-size: font-size-for("lg");
    color: #155e75;
  }
}
</style>
