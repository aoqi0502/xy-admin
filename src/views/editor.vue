<template>
    <div>
        111
        <tinymce
                ref="editor"
                v-model="msg"
                :disabled="disabled"
                @onClick="onClick"
        />
    </div>
</template>

<script>
    import tinymce from "../components/tinymce";
    export default {
        name: "editor",
        components:{
            tinymce
        },
        data(){
            return{
                msg: 'Welcome to Use Tinymce Editor',
                disabled: false
            }
        },
        methods:{
            onClick (e, editor) {
                console.log('Element clicked')
                console.log(e)
                console.log(editor)
            },
        }
    }
</script>

<style scoped>

</style>
