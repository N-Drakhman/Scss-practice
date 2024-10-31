<template>
  <h1>padding</h1>
  <div class="block">
    <div class="container-1">Value 1</div>
    <div class="container-2">Value 1</div>
    <div class="container-3">Value 1</div>
  </div>
</template>

<style lang="scss" scoped>
@function padding-values($list, $mutliplier) {
  $result: ();
  @each $item in $list {
    $result: append($result, $item * $mutliplier);
  }
  @return $result;
}

.block {
  display: flex;
  gap: 15px;

  & * {
    background-color: #525252;
    border-radius: 1rem;
  }
}

.container {
  &-1 {
    padding: padding-values(10px 20px, 1);
  }

  &-2 {
    padding: padding-values(10px 20px, 1.5);
  }

  &-3 {
    padding: padding-values(10px 20px, 2);
  }
}
</style>
