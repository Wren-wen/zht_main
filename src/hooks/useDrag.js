import { onMounted, onBeforeUnmount, watchEffect } from 'vue'

// 传入拖拽元素ref, 响应量度[x,y,isDraged(>=0)], 限制边界opt
// 返回拖动的相对{deltaX,deltaY}
export default function (refD, arrXY, opt) {
    let downXY = {
        x: 0,
        y: 0,
        arrx: 0,
        arry: 0,
    }

    let mousedown_fn = (e) => {
        e.preventDefault()
        arrXY[2] = true
        downXY.x = e.clientX
        downXY.y = e.clientY
        downXY.arrx = arrXY[0]
        downXY.arry = arrXY[1]

        window.addEventListener('mousemove', mousemove_fn)
        window.addEventListener('mouseup', mouseup_fn)
    }
    let mousemove_fn = (e) => {
        let deltaX = e.clientX - downXY.x
        let deltaY = e.clientY - downXY.y

        let preX = deltaX + downXY.arrx
        let preY = deltaY + downXY.arry
        // console.log(preX)
        if (opt.x) {
            if (opt.x[0] >= 0) {
                if (preX < opt.x[0]) {
                    arrXY[0] = opt.x[0]
                } else {
                    arrXY[0] = preX
                }
            } else {
                arrXY[0] = preX
            }

            if (opt.x[1] >= 0) {
                if (preX > opt.x[1]) {
                    arrXY[0] = opt.x[1]
                } else {
                    // arrXY[0] = preX
                }
            } else {
                // arrXY[0] = preX
            }

        } else {
            arrXY[0] = preX
        }


        if (opt.y) {
            if (opt.y[0] >= 0) {
                if (preY < opt.y[0]) {
                    arrXY[1] = opt.y[0]
                } else {
                    arrXY[1] = preY
                }
            } else {
                arrXY[1] = preY
            }


            if (opt.y[1] >= 0) {
                if (preY > opt.y[1]) {
                    arrXY[1] = opt.y[1]
                } else {
                    // arrXY[1] = preY
                }
            } else {
                // arrXY[1] = preY
            }

        } else {
            arrXY[1] = preY
        }
    }
    let mouseup_fn = (e) => {
        arrXY[2] = false
        // let deltaX = e.clientX - downXY.x
        // let deltaY = e.clientY - downXY.y

        // arrXY[0] = deltaX + downXY.arrx
        // arrXY[1] = deltaY + downXY.arry

        window.removeEventListener('mousemove', mousemove_fn)
        window.removeEventListener('mouseup', mouseup_fn)
    }
    onMounted(() => {
        const dragbar = refD.value
        if (dragbar)
            dragbar.addEventListener('mousedown', mousedown_fn)
    })
    onBeforeUnmount(() => {
        const dragbar = refD.value
        if (dragbar)
            dragbar.removeEventListener('mousedown', mousedown_fn)
    })
    let dragbar;
    watchEffect(() => {
        if (refD.value) {
            dragbar = refD.value
            dragbar.addEventListener('mousedown', mousedown_fn)
        } else {
            if (dragbar) {
                dragbar.removeEventListener('mousedown', mousedown_fn)
            }
        }
    })
}