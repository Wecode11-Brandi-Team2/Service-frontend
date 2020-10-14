<template>
  <div class="dropdown-filter-container">
    <section class="dropdown-filter">
      <div class="picked-filter" @click="filterChange">
        <span>{{ filterValue }}</span>
        <svg
          v-bind:class="[
            filterActive
              ? 'reverse-direction transition'
              : 'direction transition'
          ]"
          role="presentation"
        >
          <svg id="chevron-left" viewBox="0 0 8.3 14.1">
            <polygon
              class="st0"
              points="1.3,14.1 0,12.8 5.8,7 0,1.3 1.3,0 8.3,7  "
            ></polygon>
          </svg>
        </svg>
      </div>
      <div :class="[filterActive ? 'filter-sample' : 'hidden']">
        <span
          v-for="value of filteringValue"
          :key="value.name"
          :newkey="value.id"
          @click="filterValueChange"
        >
          {{ value.name }}
        </span>
      </div>
    </section>
  </div>
</template>
<script>
// import axios from 'axios';
export default {
  name: 'DropDonwButton',
  data() {
    return {
      filterActive: false,
      filteringValue: [
        { id: 0, name: '판매량순' },
        { id: 1, name: '최신순' }
      ],
      filterValue: '판매량순'
    };
  },
  methods: {
    filterValueChange(e) {
      this.filterValue = e.target.innerHTML;
      this.filterActive = !this.filterActive;
      this.dropDownFilterValue = e.target.attributes.newkey.value;
      console.log('selectValue', this.dropDownFilterValue);
      // this.fetchData();
    },
    filterChange() {
      this.filterActive = !this.filterActive;
    }
  }
};
</script>
<style scoped lang="scss">
.dropdown-filter-container {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  .dropdown-filter {
    width: 130px;
    height: 45px;
    display: inline-block;
    position: relative;
    text-align: center;
    .picked-filter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #e7e7e7;
      height: 25px;
    }
    .filter-sample {
      position: absolute;
      width: 130px;
      height: 25px;
      span {
        display: block;
        border: 1px solid #e7e7e7;
        width: 130px;
        height: 25px;
        text-align: left;
        cursor: pointer;
        &:hover {
          color: #ff204b;
          border-bottom: 1px solid #ff204b;
          transition: all 0.3s ease-in;
        }
      }
    }
  }
}
* {
  font-family: 'Spoqa Han Sans', Sans-serif;
}

.transition {
  transition: all 0.3s ease-in-out;
}

.direction {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.3;
  height: 14.1;
  margin-right: 5px;
  transform: rotate(90deg);
}

.reverse-direction {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.3;
  height: 14.1;
  margin-right: 5px;
  transform: rotate(270deg);
}

.hidden {
  visibility: hidden;
  overflow: hidden;
  max-height: 0;
  max-width: 0;
}
</style>
