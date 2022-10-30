<template>
    <div>
        <table>
            <thead>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            </thead>
            <tbody>
                <tr v-for="(item,index) in list" :key="index" @click="onClickItem(item)">
                    <td>{{index}}</td>
                    <td>{{item.EmployeeName}}</td>
                    <td>{{item.GenderName}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'BaseTable',
        props: ["apiUrl"],
        created() {
            // Lay du lieu ve
            fetch(this.apiUrl)
            .then(res=>res.json())
            .then(res=> {this.list = res})
        },
        data() {
            return {
                list: []
            }
        },
    }
</script>