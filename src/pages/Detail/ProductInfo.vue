<template>
  <div class="ProductInfo">
    <div class="productionInfo_1">
      <img
        alt="product picture"
        src="https://image.brandi.me/cproductdetail/2020/05/07/fedfb70ef04b85b06ece1157af1e1c47.jpg"
      />
    </div>
    <div class="productionInfo_2">
      <div class="comment">
        <span>comment</span>
        <br />3단추와 적당히 루즈한 핏이 <br />네츄럴하고 여리한 느낌의
        <br />꾸안꾸 코디를 완성시켜줘요
        <br />
        <br />브이넥 네크라인이 <br />쇄골라인을 부각시켜주고 <br />넉넉한 소매
        통과 기장으로 <br />여성스러운 연출까지 놓치지 않은 <br />아이템이에요
        <br />
        <br />스커트 팬츠 어떤 하의와도 <br />매치가 쉽답니다:-)
      </div>
      <div class="infoList">
        <br />
        <span>-color-</span>
        <br />블랙 화이트 네이비 오트밀 베이지
        <br />
        <span class="wearingColor">착용컬러 네이비 오트밀 베이지</span>
        <br />
        <br />
        <span>-fabric-</span>
        <br />아크릴
        <br />
        <br />
        <span>-Model Size-</span>
        <br />키 165
        <br />
        <br />
        <span>-size-</span>
        <br />**하단에 상세사이즈표가 있어요**
        <br />
        <br />
        <span>*제일 하단 내려가주시면 코디제품들 볼 수 있어요:)*</span>
      </div>
    </div>
    <div class="productionInfo_3">
      <img
        alt="productsImage"
        v-for="image in productImages"
        :key="image.id"
        :src="image.image"
      />
      <div class="productInfoTitle">PRODUCT INFO</div>
      <div class="sizeInfoImage">
        <img
          alt="sizeInfoImage"
          src="https://image.brandi.me/category/image/img_product_knit.jpg"
        />
      </div>
      <div class="productInfoTxt">(단면/CM)</div>
      <ProductSizeInfoTable />
      <ProductEtcInfoTable />
    </div>
  </div>
</template>

<script>
import ProductSizeInfoTable from './ProductSizeInfoTable';
import ProductEtcInfoTable from './ProductEtcInfoTable';

export default {
  components: {
    ProductSizeInfoTable,
    ProductEtcInfoTable
  },
  data() {
    return {
      productImages: [
        {
          id: 1,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/773d0c4168b32f555370331a6e661221.JPG'
        },
        {
          id: 2,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/693407663771f7b4770538a35a06d599.JPG'
        },
        {
          id: 3,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/95c43698159c597129a5754286e8a456.JPG'
        },
        {
          id: 4,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/2933a5427b692a6e63b805ed31707c25.JPG'
        },
        {
          id: 5,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/a26208be106a8f4ca88a9abb1d914c52.JPG'
        },
        {
          id: 6,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/8e2120e65768e732bddf3d1db2fe6f20.JPG'
        },
        {
          id: 7,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/ac2a8da56b5fe782bd93e9dfdeb92871.JPG'
        },
        {
          id: 8,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/8dd60802e1bd20fb203d24aaf832676e.JPG'
        },
        {
          id: 9,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/cc85507f7d21786d1e4f1436cd18c9c5.JPG'
        },
        {
          id: 10,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/7ec65052ec6ec540e95d4d5977c92b70.JPG'
        },
        {
          id: 11,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/47b88b331c5b8ce90fe2c6985f36612f.JPG'
        },
        {
          id: 12,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/40e798d44522839b28ee7029ae87a406.JPG'
        },
        {
          id: 13,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/05f1b37947c92b1fe2b49d33b3ec982c.JPG'
        },
        {
          id: 14,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/6b4e40a8d75e89c7ddefb974f598769c.JPG'
        },
        {
          id: 15,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/eea9dc9f6f0c732f749da11ca9713eb5.JPG'
        },
        {
          id: 16,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/6ea692ae2a70279e900b1dd092eb064d.JPG'
        },
        {
          id: 17,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/c832e65fc7fc09ebb269fcc3842f2fa7.JPG'
        },
        {
          id: 18,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/a5e76ae43e26ec81a6686a1ccef7a8b5.JPG'
        },
        {
          id: 19,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/bf1f0363385990d6c1b653823a28d040.JPG'
        },
        {
          id: 20,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/1d84486718c6f46ee79a84fae0a65403.JPG'
        },
        {
          id: 21,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/1d84486718c6f46ee79a84fae0a65403.JPG'
        },
        {
          id: 22,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/f99d1fb24457b6b2b919f4124f53bb86.JPG'
        },
        {
          id: 23,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/d1906cf74876a5e240aa65512c25f383.JPG'
        },
        {
          id: 24,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/e08d86009158630b3263ebd68205ae6a.JPG'
        },
        {
          id: 25,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/12c8cfd1c531b5ddb3fc4a9075530edf.JPG'
        },
        {
          id: 26,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/bb192231ac8be3d33e1a9cf0ad0dd1f7.JPG'
        },
        {
          id: 27,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/4e066a33d70ea1cb0c28eae73456f611.JPG'
        },
        {
          id: 28,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/d2d9dd29be2fdc20cf90a903548771d2.JPG'
        },
        {
          id: 29,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/5f0cd2b4c9fae5c9d3c7ad91ac32aeda.JPG'
        },
        {
          id: 30,
          image:
            'https://image.brandi.me/cproductdetail/2020/05/07/ca23e63c767c735f14480fa93b3a15c6.jpg'
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.productionInfo_1 {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 4px;
}

.productionInfo_2 {
  margin-bottom: 40px;
  text-align: center;
  line-height: 19px;
  font-size: 13px;

  .wearingColor {
    font-size: 12px;
  }

  span {
    font-size: 15px;
    font-weight: 700;
  }
}

.productionInfo_3 {
  @include setFlex(normal, center, column);

  img {
    margin-bottom: 4px;
  }

  .productInfoTitle {
    font-size: 18px;
  }

  .sizeInfoImage {
    width: 100%;
    padding: 10px 40px 30px 40px;
    text-align: center;
  }

  .productInfoTxt {
    width: 100%;
    padding-bottom: 5px;
    text-align: right;
    font-weight: 600;
  }
}
</style>
