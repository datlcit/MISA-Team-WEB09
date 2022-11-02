<template>
     <!-- Thêm mới thành công -->
    <div id="successfulItem" class="successful-item">
        <div class="successful-content">
            <p>{{successText}}</p>
            <i class="icofont-check-circled"></i>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DialogAddSuccessful',
    props: ["successText"],
    methods: {
        
    },
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
@import url(../../style/components/dialog.css);
</style>