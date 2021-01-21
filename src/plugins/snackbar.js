// we need our modal component
import AppSnackBar from './components/AppSnackBar.vue'

/**
 *  tạo EventBus theo dạng như kiểu 1 plugin
 *
 */

import Vue from 'vue'

class Snackbar {
    constructor() {
        // thuộc tính EventBus được khởi tạo trong constructor với giá trị bằng việc tạo mới 1 object Vue
        // Những gì ta về cơ bản nhận được là một thành phần hoàn toàn tách rời khỏi DOM
        // Những gì ta về cơ bản nhận được là một thành phần hoàn toàn tách rời khỏi DOM hoặc phần còn lại của ứng dụng Vue.
        // Tất cả những gì tồn tại trên đó là các phương thức hay thuộc tính của nó, vì vậy, nó khá nhẹ 
        this.EventBus = new Vue()
    }

    /**
     * Listen for the given event.
     *
     * @param {string} event
     * @param {function} handler
     */
    on(event, handler) {
        this.EventBus.$on(event, handler)
    }

    /**
     * Listen for the given event once.
     *
     * @param {string} event
     * @param {function} handler
     */
    once(event, handler) {
        this.EventBus.$once(event, handler)
    }

    /**
     * Remove one or more event listeners.
     *
     * @param {string} event
     * @param {function} handler
     */
    off(event, handler) {
        this.EventBus.$off(event, handler)
    }

    /**
     * Emit the given event.
     * emit là để phát ra 1 event đi toàn bộ ứng dụng Vue EventBus này
     *
     * @param {string|object} event
     * @param {...*} args
     */
    emit(event, ...args) {
        this.EventBus.$emit(event, ...args)
    }

    show(params) {
        this.emit('showSnackbar', params)
    }
}

export default {
    // called by Vue.use(eventBusPlugin)
    install(Vue, options) {
        const eventBus = new Snackbar();

        Vue.prototype.$snackbar = eventBus;
    },
}

