import { ref, onMounted, onUnmounted, watch } from 'vue'

export default function useScan(scrollbox:any) {
    let lastValue = 0
    let scroll_dirct = ref('up')
    onMounted(()=>{
        const innerScroll = scrollbox.value.$el.querySelector('.el-scrollbar__wrap');
        innerScroll.addEventListener('scroll', () => {
            const top = innerScroll.scrollTop
            if (top > lastValue) {
                scroll_dirct.value = 'down'
            }else{
                scroll_dirct.value = 'up'
            }
            lastValue = top
        })
    })
    return scroll_dirct;
}