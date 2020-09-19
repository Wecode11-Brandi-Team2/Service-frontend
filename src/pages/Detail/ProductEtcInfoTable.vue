<template>
  <table class="ProductEtcInfoTable">
    <tbody>
      <tr>
        <td
          :class="[flexdata.isTrue ? 'SelectedTxt' : '']"
          v-for="flexdata in flexibility"
          :key="flexdata.id"
        >
          {{ flexdata.data }}
        </td>
      </tr>
      <tr>
        <td
          :class="[seeThroughData.isTrue ? 'SelectedTxt' : '']"
          v-for="seeThroughData in seeThrough"
          :key="seeThroughData.id"
        >
          {{ seeThroughData.data }}
        </td>
      </tr>
      <tr>
        <td
          :class="[feel.isTrue ? 'SelectedTxt' : '']"
          v-for="feel in feels"
          :key="feel.id"
        >
          {{ feel.data }}
        </td>
      </tr>
      <tr>
        <td
          :class="[fit.isTrue ? 'SelectedTxt' : '']"
          v-for="fit in fits"
          :key="fit.id"
        >
          {{ fit.data }}
        </td>
      </tr>
      <tr>
        <td
          :class="[thick.isTrue ? 'SelectedTxt' : '']"
          v-for="thick in thickness"
          :key="thick.id"
        >
          {{ thick.data }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      flexibility: [
        {
          id: 1,
          isTrue: true,
          data: '신축성'
        },
        {
          id: 2,
          isTrue: true,
          data: '좋음'
        },
        {
          id: 3,
          isTrue: false,
          data: '보통'
        },
        {
          id: 4,
          isTrue: false,
          data: '없음'
        }
      ],
      seeThrough: [
        {
          id: 1,
          isTrue: true,
          data: '비침'
        },
        {
          id: 2,
          isTrue: false,
          data: '없음'
        },
        {
          id: 3,
          isTrue: true,
          data: '약간'
        },
        {
          id: 4,
          isTrue: false,
          data: '있음'
        }
      ],
      feels: [
        {
          id: 1,
          isTrue: true,
          data: '촉감'
        },
        {
          id: 2,
          isTrue: true,
          data: '부드러움'
        },
        {
          id: 3,
          isTrue: false,
          data: '보통'
        },
        {
          id: 4,
          isTrue: false,
          data: '까실함'
        }
      ],
      fits: [
        {
          id: 1,
          isTrue: true,
          data: '핏감'
        },
        {
          id: 2,
          isTrue: false,
          data: '타이트'
        },
        {
          id: 3,
          isTrue: false,
          data: '정사이즈'
        },
        {
          id: 4,
          isTrue: true,
          data: '루즈'
        }
      ],
      thickness: [
        {
          id: 1,
          isTrue: true,
          data: '두께감'
        },
        {
          id: 2,
          isTrue: false,
          data: '도톰'
        },
        {
          id: 3,
          isTrue: false,
          data: '보통'
        },
        {
          id: 4,
          isTrue: true,
          data: '없음'
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.ProductEtcInfoTable {
  width: 100%;
  margin-bottom: 20px;
  border-top: 3px solid #000000;
  border-bottom: 3px solid #000000;
  border-collapse: collapse;
  text-align: center;
  font-size: 12px;

  tbody {
    display: table-row-group;
    vertical-align: middle;

    .SelectedTxt {
      font-weight: 800;
      font-size: 14px;
    }

    td {
      border-bottom: 1px solid #bdbdbd;
      color: #525252;
      padding: 20px;
    }
  }
}
</style>
