<script>
    import {ref} from 'vue'
    import { PlusOutlined } from '@ant-design/icons-vue';
    // import { UploadProps } from 'ant-design-vue';

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    export default {
        components: {
            PlusOutlined,
        },
        setup() {
            const previewVisible = ref(false);
            const previewImage = ref('');
            const previewTitle = ref('');

            const fileList = ref([]);

            const handleCancel = () => {
                previewVisible.value = false;
                previewTitle.value = '';
            };
            const handlePreview = async (file) => {
                if (!file.url && !file.preview) {
                    file.preview = (await getBase64(file.originFileObj));
                }
                previewImage.value = file.url || file.preview;
                previewVisible.value = true;
                previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
            };

            return {
                previewVisible,
                previewImage,
                fileList,
                handleCancel,
                handlePreview,
                previewTitle,
            };
        },
        data() {
            return {
                open: false
            }
        },
    }
</script>

<template>
    <div class="book-pers">
        <div class="book-pers__top">
            <div class="book-pers__top-left">
                <img src="/sign.png" alt="" draggable="false" />
                <div class="book-pers__top-content">
                    <p class="book-pers__title">Meet me with a sign</p>
                    <p class="book-pers__p book-pers__p_green">Free meet-and-greet service</p>
                </div>
            </div>
            <div class="book-widget__checkbox-input">
                <input type="checkbox" v-model="open" />
                <div class="book-widget__checkbox-overlay">
                <div></div>
                </div>
            </div>
        </div>
        <div class="book-pers__bot" v-if="open">
            <div class="book-pers__field">
                <input type="text" class="book-pers__field-text" placeholder="Name on the sign" />
                <div class="clearfix">
                    <a-upload
                    v-model:file-list="fileList"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    list-type="picture-card"
                    @preview="handlePreview"
                    >
                    <div v-if="fileList.length < 1">
                        <plus-outlined />
                        <div style="margin-top: 8px">Upload</div>
                    </div>
                    </a-upload>
                    <a-modal :visible="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
                    <img alt="example" style="width: 100%" :src="previewImage" />
                    </a-modal>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .ant-upload-select-picture-card i {
        font-size: 32px;
        color: #999;
    }

    .ant-upload-select-picture-card .ant-upload-text {
        /* margin-top: 8px; */
        color: #666;
    }

    .clearfix{
        margin-top: 15px;
        min-height: 112px;
    }
</style>