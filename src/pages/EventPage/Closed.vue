<template>
  <main>
    <section class="photo-wrapper">
      <img
        alt="explanationPhoto"
        src=" https://image.brandi.me/event/2020/06/22/1592787603_bannerdetail.jpg"
      />
    </section>
    <section class="button-wrapper">
      <a href="https://www.instagram.com/brandi__official/" target="_blank">
        <ContentsPlusButton
          title="브랜디 팔로우하기"
          width="280px"
          font-size="18px"
        />
      </a>
      <div class="line" />
      <ContentsPlusButton title="댓글 더보기" width="280px" font-size="18px" />
    </section>

    <section class="comment-container">
      <ul class="comment-wrapper">
        <li
          :id="comment.id"
          class="comment"
          :key="comment.id + index"
          v-for="(comment, index) of commentData"
        >
          <div class="user-wrapper">
            <img alt="userPhoto" :src="comment.src" />
            <div class="user-info">
              <span class="user-id">{{ comment.user_id }}</span>
              <span class="user-comment">{{ comment.comment }} </span>
            </div>
          </div>
          <div class="date">
            <span>{{ comment.data }}</span>
            <button
              :class="[comment.delete ? 'deleteButton' : 'hidden']"
              @click="deleteComment(comment.id)"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
        </li>
      </ul>
    </section>
    <section class="comment-input-wrapper">
      <div class="comment-input">
        <textarea @keyup.enter="getComment" v-model="inputComment"></textarea>
        <button @click="getComment">
          등록
        </button>
      </div>
    </section>
  </main>
</template>

<script>
import ContentsPlusButton from '../../pages/Main/components/ContentsPlusButton';

export default {
  name: 'Closed',
  props: [],
  components: { ContentsPlusButton },
  data() {
    return {
      commentData: [
        {
          id: 1,
          user_id: '안뇽',
          comment: 'Hello',
          data: '2020.06.02',
          src:
            'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg'
        },
        {
          id: 2,
          user_id: '안뇽1',
          comment: 'Hello2',
          data: '2020.06.21',
          src:
            'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg'
        },
        {
          id: 3,
          user_id: '안뇽2',
          comment: 'Hello3',
          data: '2020.06.12',
          src:
            'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg'
        }
      ],
      user_id: '안뇽',
      data: '2020.06.30',
      user_src: 'https://image.brandi.me/user/empty_profile.jpg',
      inputComment: ''
    };
  },
  methods: {
    getComment() {
      let inputInformation = {
        id: '',
        user_id: this.user_id,
        data: this.data,
        src: this.user_src,
        comment: '',
        delete: 1
      };
      let newId = this.commentData.length + 1;

      inputInformation.id = newId;
      inputInformation['user_id'] = `안뇽${newId}`;
      inputInformation.comment = this.inputComment;
      this.commentData = [...this.commentData, inputInformation];
      this.inputComment = '';
      //need to do axios in here(send changed Object)
    },

    deleteComment(deleteId) {
      console.log(deleteId);
      this.commentData = this.commentData.filter(el => el.id != deleteId);
      //need to do axios in here(send changed Object)
    }
  }
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
.hidden {
  display: none;
}

.comment-input-wrapper {
  max-width: 1300px;
  margin: 30px auto;
  padding: 0 3%;
  .comment-input {
    display: flex;

    textarea {
      height: 56px;
      width: calc(100% - 92px);
      padding: 8px;
      font-size: 15px;
      border: 1px solid #bdbdbd;
      resize: none;
      transition: all 0.5s ease-in-out;
      &:focus {
        outline: none;
        border: 1px solid #000;
      }
    }
    button {
      color: #bdbdbd;
      width: 92px;
      font-size: 18px;
      padding: 12px;
      border: 1px solid #bdbdbd;
      background-color: white;
      transition: all 0.5s ease-in-out;
      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
}

.comment-container {
  max-width: 1300px;
  margin: 30px auto;
  padding: 0 3%;

  .comment-wrapper {
    display: flex;
    flex-direction: column;
    .comment {
      display: flex;
      justify-content: space-between;
      padding: 20px 0;
      border-bottom: 0.5px solid #bdbdbd;

      .user-wrapper {
        display: flex;

        img {
          width: 60px;
          height: 60px;
          border: 1px solid black;
          border-radius: 100%;
          margin-right: 24px;
        }
        .user-info {
          display: flex;
          flex-direction: column;
          .user-id {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .user-comment {
            font-size: 15px;
          }
        }
      }
      .date {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-size: 15px;
        color: #bdbdbd;
        .deleteButton {
          cursor: pointer;
          background-color: transparent;
          margin-top: 5px;
          padding-top: 10px;
          width: 30px;
          height: 30px;
          i {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
}

.photo-wrapper {
  max-width: 1300px;
  margin: 30px auto;
  padding: 0 3%;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
  }
}
.button-wrapper {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  max-width: 1300px;
  margin: 30px auto;
  padding: 0 3%;
  .line {
    height: 1px;
    width: 100%;
    max-width: 1300px;
    /* margin: 50px 1% 50px 1%; */
    padding: 0 4%;
    background-color: #dfdfdf;
  }
  .contents-plus-button {
    button {
      width: 280px;
      font-size: 18px;
    }
  }
}
</style>
