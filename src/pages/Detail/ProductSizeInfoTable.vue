<template>
  <div class="Product-size-info-table">
    <table class="product-size-info">
      <thead>
        <tr>
          <td
            class="product-info-header"
            v-for="header in sizeInfoHeaders"
            :key="header.id"
          >
            {{ header.name }}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="selected-txt">FREE</td>
          <td v-for="data in sizeInfoDatas" :key="data.id">{{ data.data }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizeInfoHeaders: [
        {
          id: 1,
          name: '사이즈'
        },
        {
          id: 2,
          name: '총장'
        },
        {
          id: 3,
          name: '목'
        },
        {
          id: 4,
          name: '어깨'
        },
        {
          id: 5,
          name: '가슴'
        },
        {
          id: 6,
          name: '소매길이'
        },
        {
          id: 7,
          name: '소매'
        },
        {
          id: 8,
          name: '암홀'
        },
        {
          id: 9,
          name: '밑단'
        }
      ],
      sizeInfoDatas: [
        {
          id: 1,
          data: 57
        },
        {
          id: 2,
          data: 19
        },
        {
          id: 3,
          data: 43
        },
        {
          id: 4,
          data: 46
        },
        {
          id: 5,
          data: 53
        },
        {
          id: 6,
          data: 10
        },
        {
          id: 7,
          data: 21
        },
        {
          id: 8,
          data: 41
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.Product-size-info-table {
  width: 100%;

  .product-size-info {
    width: 100%;
    margin-bottom: 20px;
    border-top: 3px solid #000000;
    border-collapse: collapse;
    text-align: center;
    font-size: 12px;

    thead {
      display: table-header-group;
      vertical-align: middle;

      .product-info-header {
        font-weight: 800;
        font-size: 14px;
      }
    }

    td {
      border-bottom: 1px solid #bdbdbd;
      color: #525252;
      padding: 20px;
    }

    .selected-txt {
      font-weight: 800;
      font-size: 14px;
    }
  }
}
</style>
