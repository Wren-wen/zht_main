import { ref, onMounted, onUnmounted, watch } from 'vue'

export default function useScan(scrollbox:any) {
    let lastValue = 0
    let scroll_dirct = ref('up')
    onMounted(()=>{
        scrollbox.value.$el.querySelector('.el-scrollbar__wrap').addEventListener('scroll', () => {
            const top = scrollbox.value.scrollTop
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