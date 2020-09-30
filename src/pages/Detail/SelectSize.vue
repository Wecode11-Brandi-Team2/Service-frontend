<template>
  <div>
    <div
      class="Select-size"
      @click="activeDropdownSize"
      :style="{
        borderBottom: activeDropdown ? 'none' : '',
        borderRadius: activeDropdown ? '6px 6px 0 0' : ''
      }"
    >
      <div
        class="select-size-container"
        :style="{ opacity: isColorSelected ? 1 : '' }"
      >
        <span>[사이즈]를 선택하세요.</span>
        <div class="select-menu-icon-container">
          <div
            class="select-menu-icon"
            :style="{ transform: activeDropdown ? 'scaleY(-1)' : 'scaleY(1)' }"
          />
        </div>
      </div>
    </div>
    <div class="dropdown-root">
      <ul class="size-list" v-if="activeDropdown">
        <li
          @click="selectSize(size)"
          class="size"
          v-for="size in apiDataSize"
          :key="size.id"
        >
          <div>{{ size.size }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['apiDataSize'],
  data() {
    return {
      apiData: [],
      activeDropdown: false
    };
  },
  methods: {
    activeDropdownSize() {
      if (this.isColorSelected) {
        this.activeDropdown = !this.activeDropdown;
      }
    },
    selectSize(size) {
      this.activeDropdown = !this.activeDropdown;
      this.$store.commit('USER_SIZE_SELECT', size);
    }
  },
  computed: {
    // sizes() {
    //   return this.$store.state.detailProductInfo.productInfo.size;
    // },
    isColorSelected() {
      return this.$store.state.detailProductInfo.isColorSelected;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.Select-size {
  height: 50px;
  margin-top: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  font-size: 16px;

  .select-size-container {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 52px 0 16px;
    opacity: 0.2;

    .select-menu-icon-container {
      position: absolute;
      top: 0;
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
}

.dropdown-root {
  position: relative;
}

.size-list {
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

  .size {
    padding: 16px;
    font-size: 18px;
    border-top: 1px solid #e6e6e6;
  }
}
</style>
