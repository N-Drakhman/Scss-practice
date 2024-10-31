<template>
  <div class="container">
    <div class="card">
      <h3 class="card-title">Lorem ipsum dolor sit amet consectetur</h3>
      <p class="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        corporis iusto dolore, architecto repellendus facilis excepturi
        voluptatum consequatur doloribus at, suscipit esse rerum, magnam sunt a?
        Eius ad beatae distinctio.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 350px;
  background-color: #065f46;
  border-radius: 1rem;
  border: none;
  padding: 12px;

  & * {
    font-family: "sans-serif";
    color: whitesmoke;
  }

  &-title {
    font-size: 32px;
    font-weight: bold;
    line-height: 28px;
    margin-bottom: 18px;
  }
  &-text {
    font-size: 18px;
  }

  &:hover {
    transform: scale(1.1);
    background-color: #16a34a;
    transform: all 1.5s ease;
  }

  &:active {
    background-color: #0891b2;
    transform: all 0.5s ease;
  }
}
</style>
