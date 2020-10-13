<template>
  <section class="Event">
    <section class="event-nav-container">
      <div
        @click="navStatusChange(navData.id)"
        :key="navData.id"
        v-for="navData of eventNavData"
        :class="[
          Number(navStatus) == Number(navData.id)
            ? ' event-nav-hoverStatus'
            : 'event-nav-none'
        ]"
      >
        {{ navData.name }}
      </div>
    </section>
    <section class="event-contents-wrapper">
      <router-link
        class=""
        :to="`/buttontype/${event.id}`"
        :key="event.id"
        v-for="event of eventData"
      >
        <div
          v-bind:style="{
            'background-image': 'url(' + event.banner_image + ')'
          }"
        >
          <!-- <img alt="eventBanner" :src="event.banner_image" /> -->
        </div>
      </router-link>
    </section>
    <div
      :class="[buttonActive ? 'button-wrapper' : 'hidden']"
      @click="getMoreData"
    >
      <ContentsPlusButton />
    </div>
  </section>
</template>
<script>
import ContentsPlusButton from '../Main/components/ContentsPlusButton';
import axios from 'axios';
// import URL from '../../assets/mock/URL';

export default {
  name: 'Event',
  components: { ContentsPlusButton },

  data() {
    return {
      eventData: [],
      // eventData: [
      //   {
      //     id: 1,
      //     src:
      //       'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg'
      //   },
      //   {
      //     id: 2,
      //     src:
      //       'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg'
      //   },
      //   {
      //     id: 3,
      //     src:
      //       'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg'
      //   },
      //   {
      //     id: 4,
      //     src:
      //       'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg'
      //   },
      //   {
      //     id: 5,
      //     src:
      //       'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg'
      //   },
      //   {
      //     id: 6,
      //     src:
      //       'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg'
      //   },
      //   {
      //     id: 7,
      //     src:
      //       'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg'
      //   },
      //   {
      //     id: 8,
      //     src:
      //       'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg'
      //   },
      //   {
      //     id: 9,
      //     src:
      //       'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg'
      //   },
      //   {
      //     id: 10,
      //     src:
      //       'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg'
      //   }
      // ],
      eventNavData: [
        { id: 0, name: '진행중' },
        { id: 1, name: '종료' }
      ],
      navStatus: 0,
      dataOffSet: 0,
      buttonActive: true
    };
  },
  mounted() {
    this.fetchData();
    window.addEventListener('click', this.chekcFunction);
  },

  methods: {
    navStatusChange(id) {
      this.navStatus = id;
      this.eventData = [];
      this.fetchData();
      this.buttonActive = true;
      this.dataOffSet = 0;
    },
    chekcFunction() {
      console.log(this.eventData.map(el => el.banner_image));
    },
    getMoreData() {
      this.dataOffSet = this.dataOffSet + 10;
      this.eventData.length >= 30
        ? (this.buttonActive = false)
        : (this.buttonActive = true);
      console.log(this.buttonActive);
      this.fetchData();
    },

    fetchData() {
      axios
        .get(
          `http://10.251.1.134:5000/api/events?is_deleted=${this.navStatus}&limit=10&offset=${this.dataOffSet}`,
          {}
        )
        .then(res => {
          if (this.navStatus === 0) {
            this.eventData = this.eventData.concat(res.data.data);
          } else if (this.navStatus === 1) {
            this.eventData = this.eventData.concat(res.data.data);
          }
        });
    }
  }
};
</script>
<style scoped lang="scss">
.hidden {
  display: none;
}

.Event {
  background-color: white;
  .event-nav-container {
    max-width: 1220px;
    padding: 0;
    margin: 20px auto 0;
    display: flex;
    justify-content: center;
    font-size: 15px;
    line-height: 60px;

    .event-nav-none {
      width: 50%;
      text-align: center;
      cursor: pointer;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);

      &:hover {
        border-bottom-color: red;
      }
    }

    .event-nav-hoverStatus {
      width: 50%;
      text-align: center;
      cursor: pointer;
      border-bottom: 2px solid red;

      &:hover {
        border-bottom-color: red;
      }
    }
  }
  .event-contents-wrapper {
    max-width: 1300px;
    padding: 0px 30px;
    margin: 20px auto 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    a {
      min-width: 48%;
      min-height: 260px;
      margin: 10px 1% 20px 1%;

      div {
        min-height: 260px;
        width: 100%;
        display: inline-block;
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
