/**
 *  tạo EventBus theo dạng như kiểu 1 plugin
 *
 */

import Vue from 'vue'

class EventBus {
    constructor() {
        // thuộc tính bus được khởi tạo trong constructor với giá trị bằng việc tạo mới 1 object Vue
        // Những gì ta về cơ bản nhận được là một thành phần hoàn toàn tách rời khỏi DOM
        // Những gì ta về cơ bản nhận được là một thành phần hoàn toàn tách rời khỏi DOM hoặc phần còn lại của ứng dụng Vue.
        // Tất cả những gì tồn tại trên đó là các phương thức hay thuộc tính của nó, vì vậy, nó khá nhẹ 
        this.bus = new Vue()
    }

    /**
     * Listen for the given event.
     *
     * @param {string} event
     * @param {function} handler
     */
    on(event, handler) {
        this.bus.$on(event, handler)
    }

    /**
     * Listen for the given event once.
     *
     * @param {string} event
     * @param {function} handler
     */
    once(event, handler) {
        this.bus.$once(event, handler)
    }

    /**
     * Remove one or more event listeners.
     *
     * @param {string} event
     * @param {function} handler
     */
    off(event, handler) {
        this.bus.$off(event, handler)
    }

    /**
     * Emit the given event.
     * emit là để phát ra 1 event đi toàn bộ ứng dụng Vue bus này
     *
     * @param {string|object} event
     * @param {...*} args
     */
    emit(event, ...args) {
        this.bus.$emit(event, ...args)
    }
}

export default {
    install(Vue) {
        const bus = new EventBus()

        Vue.prototype.$bus = bus
    },
}
