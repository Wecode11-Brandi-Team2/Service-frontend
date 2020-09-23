<template>
  <div>
    <div
      class="Select-color"
      @click="activeDropdownColor"
      :style="{
        borderBottom: activeDropdown ? 'none' : '',
        borderRadius: activeDropdown ? '6px 6px 0 0' : ''
      }"
    >
      <span>[컬러]를 선택하세요.</span>
      <div class="select-menu-icon-container">
        <div
          class="select-menu-icon"
          :style="{ transform: activeDropdown ? 'scaleY(-1)' : 'scaleY(1)' }"
        />
      </div>
    </div>
    <div class="dropdown-root">
      <ul class="color-list" v-if="activeDropdown">
        <li class="color" v-for="color in colors" :key="color.id">
          <div>{{ color.color }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeDropdown: false,
      colors: [
        {
          id: 1,
          color: 'Black'
        },
        {
          id: 2,
          color: 'Navy'
        },
        {
          id: 3,
          color: 'White'
        },
        {
          id: 4,
          color: 'Beige'
        },
        {
          id: 5,
          color: 'Oatmeal'
        }
      ]
    };
  },
  methods: {
    activeDropdownColor() {
      this.activeDropdown = !this.activeDropdown;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.Select-color {
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 52px 0 16px;
  margin-top: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  font-size: 16px;

  .select-menu-icon-container {
    position: absolute;
    right: 0;
    @include setFlex(center, center, row);
    @include setSize(52px, 50px);

    .select-menu-icon {
      @include setSize(16px, 16px);
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid Meet' width='100' height='100'%3e%3cpath d='M100 5.5c0 1.3-.5 2.6-1.5 3.5L50 57.5 1.5 9c-2-2-2-5.1 0-7.1s5.1-2 7.1 0L50 43.4 91.5 1.9c2-2 5.1-2 7.1 0 .9 1 1.4 2.3 1.4 3.6z'/%3e%3c/svg%3e");
      background-size: 70%;
      background-repeat: no-repeat;
      background-position: top 5px center;
    }
  }
}

.dropdown-root {
  position: relative;
}

.color-list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 300px;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  border-radius: 0 0 6px 6px;
  background-color: #fff;
  overflow: scroll;
  z-index: 5;

  .color {
    padding: 16px;
    font-size: 18px;
    border-top: 1px solid #e6e6e6;
  }
}
</style>
