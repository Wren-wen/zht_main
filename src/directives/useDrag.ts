import { ref, reactive, createApp, watchEffect, toRaw } from "vue";

// 记录所有的拖拽组合
const Args: { [key: string]: any } = {};
const Scrolls: { [key: string]: any } = {};



export default {
    mounted(el: any, binding: any, vnode: any) {
        if (binding.modifiers.root) {
            const arg = binding.arg;
            if (!arg) throw new Error(`arg ${arg}.root is required`);
            if (Args[arg]) throw new Error(`arg ${arg}.root is exist`);
            Args[arg] = {
                el,
                list: binding.value,
                drag: {
                    on: false,
                    from_idx: null,
                    to_idx: null,
                    from_doms: null,
                    from_$event: null,
                    from_scroll: null,
                },
            };
        }

        if (binding.modifiers.scroll) {
            const arg = binding.arg;
            if (!arg) throw new Error(`arg ${arg}.scroll is required`);
            if (Scrolls[arg]) throw new Error(`arg ${arg}.scroll is exist`);
            Scrolls[arg] = {
                el,
                drag:{
                    from_scroll: null,
                }
            };
        }

        if (binding.modifiers.target) {
            el.onmousedown = (e: any) => {
                // 鼠标左键
                if (e.button !== 0) return;
                const arg = binding.arg;
                if (!arg) throw new Error(`arg ${arg}.target is required`);
                if (!Args[arg]) throw new Error(`arg ${arg}.root is not exist`);
                if (Args[arg].drag.on) return;
                Args[arg].drag.on = true;
                Args[arg].drag.from_$event = e;
                Args[arg].drag.from_idx = Args[arg].list.indexOf(binding.value);
                Args[arg].drag.to_idx = Args[arg].list.indexOf(binding.value);
                Args[arg].drag.from_doms = Array.from(
                    Args[arg].el.children
                ).map((item: any) => item.getBoundingClientRect());
                Args[arg].drag.from_scroll =
                    Args[arg].el.getBoundingClientRect().top -
                    Args[arg].el.scrollTop;
                // console.log(Args[arg].drag.from_doms[Args[arg].drag.to_idx]);
                // console.log(Args[arg].el.getBoundingClientRect());

                

                const moveFn = (e: any) => {
                    requestAnimationFrame(() => {
                        const idx = Args[arg].drag.from_idx;
                        const doms = Args[arg].drag.from_doms;
                        const toT = e.clientY - Args[arg].el.getBoundingClientRect().top + Args[arg].el.scrollTop;
                        // const toT = e.clientY;
                        const fromT = Args[arg].drag.from_$event.clientY - Args[arg].drag.from_scroll;
                        // const fromT = Args[arg].drag.from_$event.clientY;
                        const deltaY = toT - fromT;
                        const direct =
                            (-deltaY ^ (doms[idx].top - doms[0].top)) >= 0;
                        if (direct) {
                            for (let i = idx - 1; i >= 0; i--) {
                                if (
                                    Math.abs(deltaY) <
                                    Math.abs(
                                        (doms[i].top + doms[i + 1].top) / 2 -
                                            doms[idx].top
                                    )
                                ) {
                                    if (i + 1 == Args[arg].drag.to_idx) break;

                                    
                                    // if(Scrolls[arg]){
                                    //     Scrolls[arg].drag.from_scroll = Scrolls[arg].el.scrollTop;
                                    //     console.log(Scrolls[arg].drag.from_scroll);
                                        
                                    // }

                                    const item = Args[arg].list.splice(
                                        Args[arg].drag.to_idx,
                                        1
                                    )[0];
                                    Args[arg].list.splice(i+1, 0, item);

                                    // requestAnimationFrame(() => {
                                    //     if(Scrolls[arg]){
                                    //         Scrolls[arg].el.scrollTop = Scrolls[arg].drag.from_scroll;
                                    //         console.log(Scrolls[arg].el.scrollTop);
                                    //     }
                                    // })
                                    
                                    Args[arg].drag.to_idx = i + 1;
                                    break;
                                } else if (
                                    i == 0 &&
                                    Args[arg].drag.to_idx != i
                                ) {
                                    const item = Args[arg].list.splice(
                                        Args[arg].drag.to_idx,
                                        1
                                    )[0];
                                    Args[arg].list.splice(i, 0, item);
                                    Args[arg].drag.to_idx = i;
                                    break;
                                }
                            }
                        } else {
                            for (let i = idx + 1; i < doms.length; i++) {
                                if (
                                    Math.abs(deltaY) <
                                    Math.abs(
                                        (doms[i].bottom + doms[i - 1].bottom) /
                                            2 -
                                            doms[idx].bottom
                                    )
                                ) {
                                    if (i - 1 == Args[arg].drag.to_idx) break;
                                    const item = Args[arg].list.splice(
                                        Args[arg].drag.to_idx,
                                        1
                                    )[0];
                                    Args[arg].list.splice(i - 1, 0, item);
                                    Args[arg].drag.to_idx = i - 1;
                                    break;
                                } else if (
                                    i == doms.length - 1 &&
                                    Args[arg].drag.to_idx != i
                                ) {
                                    const item = Args[arg].list.splice(
                                        Args[arg].drag.to_idx,
                                        1
                                    )[0];
                                    Args[arg].list.splice(i, 0, item);
                                    Args[arg].drag.to_idx = i;
                                    break;
                                }
                            }
                        }
                    });
                };
                const upFn = (e: any) => {
                    Args[arg].drag.on = false;
                    window.removeEventListener("mousemove", moveFn);
                    window.removeEventListener("mouseup", upFn);
                };
                window.addEventListener("mousemove", moveFn);
                window.addEventListener("mouseup", upFn);
            };
        }
    },
    updated(el: any, binding: any) {
        // if (binding.modifiers.target) {
        //     console.log('change1111111111111111111');
        // }
    },
    beforeUnmount(el: any, binding: any, vnode: any) {
        if (binding.modifiers.root) {
            const arg = binding.arg;
            if (Args[arg]) {
                delete Args[arg];
            }
            if (Scrolls[arg]) {
                delete Scrolls[arg];
            }
        }
    },
};
