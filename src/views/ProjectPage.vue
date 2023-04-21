<template>
    <Header/>

    <ProjectListPage/>

    <Footer/>
</template>

<script>
    import Header from "../components/Header.vue";
    import Footer from "../components/Footer.vue";
    import ProjectListPage from "../components/ProjectList.vue";

    export default {
        name: "ProjectPage",
        components: {ProjectListPage, Footer, Header}
    }
</script>
