<template>
    <div class="xy-container">
     <p>upload</p>
        <div v-for="(item, index) in uploadList" :key="index">
            <img :src="item.url"/>
        </div>
        <img :src="headerImg" style="width: 200px"/>
        <input type="file" ref="fileInput" @change="beforeUpload" style="display: none"/>
        <div class="drop-box" ref="dropBox" :class="dragleave ? 'active': ''">
            <i class="iconfont icon-shangchuan"/>
            <span class="upload-tips">将文件拖动到此处上传</span>
            <el-button type="text" @click="$refs.fileInput.click()">或点击此处上传</el-button>
        </div>
    </div>
</template>

<script>
    import SparkMD5 from 'spark-md5'
    import {upload} from '@/api/upload'
    export default {
        data() {
            return {
                headerImg:'',
                uploadList:[],
                dragleave: false
            }
        },
        mounted() {
            let _this = this
            let dropbox = this.$refs.dropBox
            dropbox.addEventListener("drop", this.enentDrop, false);
            dropbox.addEventListener("dragleave",function (e) {
                e.stopPropagation();
                e.preventDefault();
                _this.dragleave = false
            })
            dropbox.addEventListener("dragenter",function (e) {
                e.stopPropagation();
                e.preventDefault();
                _this.dragleave = true
            })
            dropbox.addEventListener("dragover",function (e) {
                e.stopPropagation();
                e.preventDefault();
                _this.dragleave = true
            })
        },
        methods:{
            enentDrop(e) {
                e.stopPropagation();
                e.preventDefault();
                // this.uploadFiles(e.dataTransfer.files)
                this.chunkUpload(e.dataTransfer.files)
            },
            beforeUpload(e) {
                // this.uploadFiles(e.target.files)
                this.chunkUpload(e.target.files)
            },
            uploadFiles(files) {
                var formData = new FormData()
                files.forEach(value => {
                    formData.append("file", value);
                })
                upload(formData).then(res => {
                    this.dragleave = false;
                    this.uploadList = res.result;
                })
            },
            breakpointContinuation(files) {
                let file = files[0];

                var storgeMD5 = this.$store.state.common.fileMd5;

                if(storgeMD5) {
                    // 本地缓存中含有上次上传的md5,需要比对



                } else {
                    //  不需要比对，直接上传
                }

                let fileReader = new FileReader()
                let currentChunk = 0
                let spark = new SparkMD5()
                fileReader.onload = function (e) {
                    spark.append(e.target.result)
                    currentChunk++
                    if (currentChunk < chunks) {
                        // loadNext()
                    } else {
                        console.log('computed hash', spark.end())
                    }
                }
                fileReader.onerror = function () {
                    console.warn('FileReader error.')
                }
                fileReader.readAsDataURL(file);
            },
            chunkUpload(files) {
                let file = files[0];
                var chunkSize=2*1024*1024;//分片大小 2M
                var chunks = [];
                var name =file.name;
                var chunkCount=0
                var sendChunkCount=0
                var asyncIndex = 0

                if(file.size > chunkSize) {
                    var start=0,end=0;
                    while (true) {
                        end+=chunkSize;
                        var blob = file.slice(start,end);
                        start+=chunkSize;

                        if(!blob.size){//截取的数据为空 则结束
                            //拆分结束
                            break;
                        }
                        chunks.push(blob);//保存分段数据
                    }
                } else {
                    chunks.push(file.slice(0))
                }
                chunkCount=chunks.length;
                for(var i=0;i< chunkCount;i++){
                    var fd = new FormData();   //构造FormData对象
                    fd.append('f1', chunks[i]);
                    fd.append('index', i);
                    let _this = this
                    asyncIndex +=1;
                    if(asyncIndex < 5) {
                        this.xhrSend(fd,function () {
                            sendChunkCount+=1;
                            asyncIndex-= 1
                            if(sendChunkCount===chunkCount){//上传完成，发送合并请求
                                console.log('上传完成，发送合并请求');
                                var formD = new FormData();
                                formD.append('type','merge');
                                formD.append('chunkCount',chunkCount);
                                formD.append('filename',name);
                                _this.xhrSend(formD);
                            }
                        });
                    }
                }
            },
            xhrSend(fd, cb) {
                var _this = this
                var xhr = new XMLHttpRequest();   //创建对象
                xhr.open('POST', '/api/upload/chunk', false);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if(JSON.parse(xhr.responseText).isSuc) {
                            _this.dragleave = false;
                        }
                        cb && cb();
                    }
                }
                xhr.send(fd);//发送
            }
        }
    }
</script>

<style scoped lang="scss">
    .drop-box{
        width: 360px;
        height: 180px;
        border-radius: 5px;
        border: 1px dashed #d9d9d9;
        cursor: pointer;
        line-height: 180px;
        text-align: center;
        color: #4d4d4d;
    }
    .active{
        background-color: #41b883;
    }
    .drop-box:hover{
        border: 1px dashed #409eff;
    }
    .upload-tips{
        font-size: 14px;
    }
</style>
