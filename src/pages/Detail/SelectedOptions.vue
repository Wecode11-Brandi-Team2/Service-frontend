<template>
  <div class="Selected-options">
    <div class="selected-option-box">
      <div class="color-size">
        <span
          >{{ option.selectedColor.color }} /
          {{ option.selectedSize.size }}</span
        >
        <i @click="deleteOption" class="fas fa-times" />
      </div>
      <div class="quantity-price-container">
        <div class="quantity">
          <button @click="minus" class="minus-btn" type="button">
            <i class="fas fa-minus" />
          </button>
          <input class="quantity-input" type="text" :value="purchaseQuantity" />
          <button @click="plus" class="plus-btn" type="button">
            <i class="fas fa-plus" />
          </button>
        </div>
        <div class="selected-price">
          <div>{{ optionPrice.toLocaleString() }}</div>
          <div>원</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['option', 'apiDataPrice'],
  data() {
    return {
      purchaseQuantity: 1,
      optionPrice: this.apiDataPrice
    };
  },
  created() {
    this.$emit('option-price', this.optionPrice);
  },
  updated() {
    this.$emit('update-price', this.optionPrice);
    this.$emit('update-purchase-quantity', this.purchaseQuantity);
  },
  methods: {
    minus() {
      this.purchaseQuantity--;
      this.optionPrice = this.optionPrice - this.apiDataPrice;
      if (this.purchaseQuantity === 0) {
        this.purchaseQuantity = 1;
        this.optionPrice = this.apiDataPrice;
        alert('최소 구매 수량은 1개 입니다.');
      }
    },
    plus() {
      this.purchaseQuantity++;
      this.optionPrice = this.optionPrice + this.apiDataPrice;
      if (this.purchaseQuantity === 21) {
        this.purchaseQuantity = 20;
        this.optionPrice = this.apiDataPrice * 20;
        alert('최대 구매 수량은 20개 입니다.');
      }
    },
    ...mapMutations({ deleteOption: 'DELETE_OPTION' })
    // deleteOption() {
    //   this.$store.commit('DELETE_OPTION');
    // }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.Selected-options {
  margin-top: 16px;

  .selected-option-box {
    padding: 20px;
    border-radius: 8px;
    background-color: #f5f6f6;

    .color-size {
      @include setFont(18px, null, 400);
      @include setFlex(space-between, null, null);

      .fas {
        opacity: 0.2;
      }
    }

    .quantity-price-container {
      @include setFlex(space-between, null, null);
      margin-top: 16px;

      .quantity {
        display: inline-flex;
        border: 1px solid #ebeef2;
        border-radius: 4px;

        .minus-btn {
          @include setSize(30px, 30px);
          border-radius: 4px 0 0 4px;
          background-color: #fff;
          font-size: 7px;
        }

        .plus-btn {
          @include setSize(30px, 30px);
          border-radius: 0 4px 4px 0;
          background-color: #fff;
          font-size: 7px;
        }

        .quantity-input {
          @include setSize(32px, 30px);
          border: 1px solid #ebeef2;
          border-top: 0;
          border-bottom: 0;
          text-align: center;

          &:focus {
            outline: none;
          }
        }
      }

      .selected-price {
        display: inline-flex;

        div:first-child {
          @include setFont(22px, null, 700);
          padding-top: 8px;
        }

        div {
          @include setFont(14px, null, 400);
          padding-top: 13px;
        }
      }
    }
  }
}
</style>
