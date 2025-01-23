import { ElMessage } from 'element-plus';
import { ref, onMounted, watch } from 'vue'

export default function(dom:any, callback:Function) {
    const isDragOver = ref(false)
    const delayRef = ref()
    let timer:any;
    watch(isDragOver,()=>{
        clearTimeout(timer)
        timer = setTimeout(()=>{
            delayRef.value = isDragOver.value
        },16)
    })
    onMounted(() => {
        dom.value.addEventListener('dragover', (e:any) => {
            e.preventDefault()
            e.stopPropagation();
            isDragOver.value = true
        })
        dom.value.addEventListener('dragenter', (e:any) => {
            e.preventDefault()
            e.stopPropagation();
            isDragOver.value = true
        })
        dom.value.addEventListener('dragleave', (e:any) => {
            e.preventDefault()
            e.stopPropagation();
            isDragOver.value = false
        })
        dom.value.addEventListener('drop', (e:any) => {
            e.preventDefault()
            e.stopPropagation();
            isDragOver.value = false
            // 过滤文件夹
            if(e.dataTransfer.files[0].size){
                callback(e.dataTransfer.files[0].name)
            }else{
                ElMessage.warning('请拖入文件')
            }
        })
    })

    return delayRef;
}