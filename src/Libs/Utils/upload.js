export default async (file, params) => {
    if (!params) {
        let res = await Request('http://localhost:3000/api/upload', {
            method: 'post',
            data: {
                file: file,
            }
        })
        return res
    } else {
        return new Promise(function (resolve, reject) {
            let image = new Image();
            let reader = new FileReader();
            reader.onload = async function () {
                // 通过 reader.result 来访问生成的 DataURL
                let url = reader.result;
                image.src = url;
                let canvas = convertImageToCanvas(image, params)
                let upfile = convertCanvasToFile(canvas, file.type)
                let res = await Request('http://localhost:3000/api/upload', {
                    method: 'post',
                    data: {
                        file: upfile,
                    }
                })
                console.log(res);
                resolve(res)
                // return res
            }
            reader.readAsDataURL(file);
        }).catch(function (error) {
            console.log(error);
        });
    }
}

function convertImageToCanvas(image, params = {}) {
    let cover = params.cover || false
    let w = params.width || 600
    let h = params.height || 600
    let iw = image.width
    let ih = image.height
    let b = w / h
    let ib = iw / ih
    let sx = 0
    let sy = 0
    let niw
    let nih
    let canvas = document.createElement("canvas");
    if (cover) {
        if (b > ib) {
            niw = w
            nih = w * ih / iw
        } else {
            niw = iw * h / ih
            nih = h
        }
        canvas.width = w;
        canvas.height = h;
        sx = (w - niw) / 2
        sy = (h - nih) / 2
    } else {
        if (b > ib) {
            nih = h
            niw = nih * ib
        } else {
            niw = w
            nih = niw * ih / iw
        }
        canvas.width = niw;
        canvas.height = nih;
    }
    canvas.getContext("2d").drawImage(image, 0, 0, image.width, image.height, sx, sy, niw, nih);
    return canvas
}

function convertCanvasToImage(canvas, type = 'image/png') {
    let image = new Image();
    image.src = canvas.toDataURL(type);
    return image
}

function convertCanvasToFile(canvas, type = 'image/png') {
    let data = canvas.toDataURL();
    // dataURL 的格式为 “data:image/png;base64,****”,逗号之前都是一些说明性的文字，我们只需要逗号之后的就行了
    data = data.split(',')[1];
    data = window.atob(data);
    let ia = new Uint8Array(data.length);
    for (let i = 0; i < data.length; i++) {
        ia[i] = data.charCodeAt(i);
    };
    // canvas.toDataURL 返回的默认格式就是 image/png
    let blob = new Blob([ia], {
        type: type
    });
    return blob
}


