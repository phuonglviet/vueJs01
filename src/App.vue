<template>
  <div id="app">
    <div id="divTestId">aaaaaaaa</div>
    <div>
      <Menu />
      <router-view />
    </div>
    <div>
      <label for="txtContent">{{ content }}</label>
      <input type="text" name="" id="txtContent" v-model.trim="content" />
    </div>
    <CompHeader titleHeader="title" />
    <button v-on:click="changeTitleOnClick">
      Thay doi title tu comment App.vue
    </button>
    <!-- <CompHeader></CompHeader> -->
    <comp-header
      v-bind:titleHeader="title"
      v-on:changeTitleEvent="handleChangeTitle"
      ref="compHeaderId"
    ></comp-header>
    <img src="./assets/logo.png" />
    <h1>{{ msg }}</h1>
    <list-user
      v-bind:listUser="listUser"
      v-on:onAppDeleteUser="appDeleteUserEvent"
    ></list-user>
    <comp-footer></comp-footer>
    <demo-ref />
    <demo-slot>
      <div>
        <p>Noi dung slots</p>
        <button>Test display slot</button>
      </div>
    </demo-slot>
    <demo-slot-tab />
    <div>
      {{ getCount }}
      <p>
        <button @click="increment">count++</button>
        <button @click="decrement">count--</button>
      </p>
    </div>
    <div>
      <span>Inputed flavor: {{ getFlavor }}</span>
      <br />
      <label for="flavor">Favorite ice cream flavor?</label>
      <input @input="changedFlavor" name="flavor" />
    </div>
    <div class="divContent">
      <div>{{ content }}</div>
      <div>
        <button @click="changeContentOnClick">
          Click me to change content
        </button>
      </div>
    </div>
    <div>
      <div>{{ question.text }}</div>
      <div>
        <button @click="changeQuestionOnClick">
          Click me to change question
        </button>
      </div>
    </div>
    <div>
      <ul>
        <li v-for="(item, index) in getTodos" v-bind:key="item.id">
          {{ index + ":" + item.name }}
        </li>
      </ul>
      <label for="inputNewTodo"></label>
      <input type="text" id="inputNewTodo" />
      <button v-on:click="addNewTodoOnClick">Add todo</button>
    </div>
    <div>
      <comp-render01 :level="3">
        <template>
          <div>
            <span>Test CompRender01. This is slot</span>
            <button>CompRender01 Click</button>
          </div>
        </template>
      </comp-render01>
    </div>
    <div>
      <comp-render02 :level="3">
        <template>
          <div>
            <span>Test CompRender02. This is slot</span>
            <button>CompRender02</button>
          </div>
        </template>
      </comp-render02>
    </div>
    <div>
      <comp-render03> </comp-render03>
    </div>
    <div>
      <button
        v-for="tab in tabs"
        v-bind:key="tab.key"
        class="dynamic-component-demo-tab-button"
        v-bind:class="{
          'dynamic-component-demo-tab-button-active': tab.key === currentTabKey,
        }"
        v-on:click="currentTabKey = tab.key"
      >
        {{ tab.label }}
      </button>
      <component
        v-bind:is="currentTabComponent"
        class="dynamic-component-demo-tab"
      ></component>
    </div>
    <div class="parent">
      <card>
        <h2 slot="header">Vue.js is awesome</h2>
        <p>The Progressive JavaScript Framework</p>
        <p>Another paragraph</p>
        <p slot="footer">I hate Covid-19</p>
      </card>
    </div>
    <div class="parent">
      <card>
        <template #header>
          <h1>Here might be a page title</h1>
        </template>

        <p>A paragraph for the main content.</p>
        <p>And another one.</p>

        <template slot="footer">
          <p>Here's some contact info</p>
        </template>
      </card>
    </div>
    <div class="AppComp">
      <current-user v-slot:default="slotPropsFromCurrentUser">
        {{ slotPropsFromCurrentUser.userNm.lastName }}
      </current-user>
    </div>

    <div>
      <WrapperVSlot>
        <template v-slot:WrapperVSlotHeader>
          <h1>WrapperVSlot HEAD</h1>
        </template>
        <template #WrapperVSlotFooter>
          <div>WrapperVSlot footer</div>
        </template>
      </WrapperVSlot>
    </div>
    <div>
      <v-switch-case :value="itemLocalType">
        <template #text>
          <div class="v-switch-text-01">
            <input type="text" id="fname" name="fname" />
            <button type="button">Click Me! v-switch-case text</button>
          </div>
        </template>
        <template #pwd>
          <div class="v-switch-pwd-01">
            <input type="password" id="pwd" name="pwd" />
            <button type="button">Click Me! v-switch-case pwd</button>
          </div>
        </template>
      </v-switch-case>
    </div>
    <div>
      <DemoRef ref="demoRefComp"/>
      DemoRef no input {{ computedDemoRefCompFirstName  }}
      <button @click="getInputFromChildComponent">Get input from child component by ref</button>
    </div>
  </div>
</template>

<script>
// import "es6-promise/auto";
import CompHeader from "./components/CompHeader.vue";
import CompFooter from "./components/CompFooter.vue";
import ListUser from "./components/ListUser.vue";
import DemoRef from "./components/DemoRef.vue";
import DemoSlot from "./components/DemoSlot.vue";
import DemoSlotTab from "./components/DemoSlotTab.vue";
import CompRender01 from "./components/CompRender01.vue";
import CompRender02 from "./components/CompRender02.vue";
import CompRender03 from "./components/CompRender03.vue";
import VSwitchCase from "./components/VSwitchCase.vue";
import TabHome from "./components/tab/TabHome.vue";
import TabArchive from "./components/tab/TabArchive.vue";
import TabPosts from "./components/tab/TabPosts.vue";
import Card from "./components/slot/Card.vue";
import CurrentUser from "./components/slot/CurrentUser.vue";
import DynamicSlotNamesComp from "./components/slot/DynamicSlotNamesComp.vue";
import WrapperVSlot from "./components/slot/WrapperVSlot.vue";
import SlotName01 from "./components/slot/SlotName01.vue";
import Menu from "./layout/Menu.vue";
// import Slot01 from "./components/slot/Slot01.vue";
// import Slot02 from "./components/slot/Slot02.vue";
// import Slot03 from "./components/slot/Slot03.vue";
// import Slot04 from "./components/slot/Slot04.vue";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      title: "Hello VueJS - For Header",
      listUser: [
        { id: 100, email: "user0@example.com", active: true },
        { id: 101, email: "user1@example.com", active: false },
        { id: 102, email: "user2@example.com", active: true },
        { id: 103, email: "user3@example.com", active: true },
        { id: 104, email: "user4@example.com", active: false },
        { id: 105, email: "user5@example.com", active: false },
        { id: 106, email: "user6@example.com", active: false },
        { id: 107, email: "user7@example.com", active: false },
      ],
      content: "Nội dung",
      question: {
        type: "greeting",
        text: "How are you?",
      },
      movie: {
        type: "Dai chien robot",
        required: true,
      },
      size: "medium",
      currentTabKey: "home",
      tabs: [
        { key: "home", label: "Trang chủ" },
        { key: "posts", label: "Bài viết" },
        { key: "archive", label: "Lưu trữ" },
      ],
      listItems: [
        { text: "First item", icon: "fa fa-user" },
        { text: "Second item", icon: "fa fa-copy" },
        { text: "Third item", icon: "fa fa-cut" },
      ],
      dynamicSlotName: "header",
      arrDynamicSlotNames: ["header", "footer"],
      // itemLocalType: "text",
      itemLocalType: "pwd",
    };
  },
  computed: {
    getCount() {
      // console.log("this.$store.state", this.$store.state);
      return this.$store.state.storeCounter.count;
    },

    getFlavor() {
      return this.$store.state.storeFlavor.flavor;
    },

    reverseContentComputed() {
      return this.content.split("").reverse().join("");
    },

    getQuestionType() {
      return this.question.type;
    },
    getQuestionText() {
      return this.question.text;
    },

    getTodos() {
      // console.log("this.$store.storeTodos:", this.$store.state.storeTodos.todos);
      return this.$store.state.storeTodos.todos;
    },

    currentTabComponent: function () {
      return "tab-" + this.currentTabKey.toLowerCase();
    },

    computedDemoRefCompFirstName() {
      // khong get duoc do component con load khong dong bo
      console.log("this.$refs.demoRefComp:", this.$refs.demoRefComp)
      // return this.$refs.demoRefComp.firstName;
      return "aaa"
    },
  },
  components: {
    CompHeader,
    CompFooter,
    ListUser,
    DemoRef,
    DemoSlot,
    DemoSlotTab,
    CompRender01,
    CompRender02,
    CompRender03,
    VSwitchCase,
    TabHome,
    TabArchive,
    TabPosts,
    Card,
    SlotName01,
    // Slot01,
    // Slot02,
    // Slot03,
    // Slot04,
    CurrentUser,
    DynamicSlotNamesComp,
    WrapperVSlot,
    Menu,
  },
  methods: {
    changeTitleOnClick: function (event) {
      this.title = "Tu Hoc VueJS online. new title has been changed!";
    },

    handleChangeTitle(data) {
      console.log("handleChangeTitle on Ap.vue");
      // this.title = 'Tu Hoc VueJS online'
      this.title = data.title;
    },

    appDeleteUserEvent(data) {
      let indexDelete = -1;
      this.listUser.some((item, index) => {
        if (item.id === data.id) {
          indexDelete = index;
          return true;
        }
      });

      this.listUser.splice(indexDelete, 1);
    },

    increment() {
      this.$store.dispatch("storeCounter/handleIncrement", 2);
    },

    decrement() {
      this.$store.dispatch("storeCounter/handleDecrement", 2);
    },

    changedFlavor: function (event) {
      this.$store.dispatch("handleChangeFlavor", event.target.value);
    },

    changeContentOnClick(event) {
      this.content = "Content mới được thay đổi.";
    },

    changeQuestionOnClick(event) {
      this.question.text = "Question mới được thay đổi.";
    },

    addNewTodoOnClick(event) {
      var todoName = document.getElementById("inputNewTodo").value;
      var newTodo = {
        id: 10,
        name: "to do 10 " + todoName,
        status: "wait",
      };

      this.$store.dispatch("storeTodos/actionTodoAdd", newTodo);
    },

    getInputFromChildComponent(event) {
      console.log("his.$refs.demoRefComp.firstName:", this.$refs.demoRefComp.firstName);
      console.log("his.$refs.demoRefComp:", this.$refs.demoRefComp.$refs.inputFirstName.value);
      this.$refs.demoRefComp.$refs.fileInputAvatar.click();
    }
  },
  watch: {
    // watch data
    // content() {
    content: function () {
      console.log("watch data: content changed");
    },
    // watch computed
    reverseContentComputed() {
      console.log("watch computed: Computed content changed changed");
    },
    // watch data object
    question: {
      deep: true,
      handler() {
        console.log("watch data object: question changed");
      },
    },
    // watch data object only some property
    getQuestionType() {
      console.log("watch data object only type property: question changed");
    },
    getQuestionText() {
      console.log("watch data object only text property: question changed");
    },

    // Whenever the movie prop changes, fetch new data
    movie: {
      // Will fire as soon as the component is created
      immediate: true,
      handler(movie) {
        // Fetch data about the movie
        fetch(`/${movie}`).then((data) => {
          this.movieData = data;
        });
        console.log("watch data movie has start!");
      },
    },
  },
  beforeCreate() {
    console.log("App component beforeCreate:", this.title);
  },
  created() {
    // thường gọi API, call Ajax get data
    console.log("App component created:", this.title);
  },
  beforeMount() {
    console.log("App component beforeMount:", this.title);
  },
  mounted() {
    console.log("App component mounted:", this.title);

    // this.$nextTick().then(function () { }); => gọi trong main.js lúc new Vue({ -> mounted()
  
        console.log("document ready!");
        var btn = $("#compHeaderH1Title");
        console.log("compHeaderH1Title:", btn.html());

        var div = $("#slotCardDivParent");
        console.log("slotCardDivParent:", div.html());
  },
  beforeDestroy() {
    console.log("App component beforeDestroy:", this.title);
  },
  destroyed() {
    console.log("App component destroyed:", this.title);
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.divContent {
  color: red;
}

.dynamic-component-demo-tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
  outline: none;
}
.dynamic-component-demo-tab-button:hover {
  background: #e0e0e0;
}
.dynamic-component-demo-tab-button-active {
  background: #e0e0e0;
}
.dynamic-component-demo-tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
