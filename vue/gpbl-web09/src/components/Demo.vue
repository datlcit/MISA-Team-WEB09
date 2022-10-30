<template>
    <div>
        <label for="">{{label}}</label>
        <input type="text" :value = 'fullName'>
    </div>
</template>

<script>
export default {
    name: "DemoComponent",
    components: {},
    props: ["label"],
    emits: [],
    created() {
        var random = Math.round(Math.random(0,1) * 100);
        this.fullName = 'Lý Chính Đạt '+ random;

    },
    methods: {
        // onChange(){
        //     this.label  = 123;
        // }
    },
    data() {
        return {
            fullName: ""
        }
    },
}
</script>

<style scoped>
    input{
        border-color: aqua;
    }
</style>